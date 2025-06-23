'use client';

import ChatHeader from '@/components/chat-header';
import ChatInput from '@/components/chat-input';
import ChatMessage from '@/components/chat-message';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Sidebar from '@/components/sidebar/Sidebar';
import { env } from '@/libs/env';
import Image from 'next/image';
import ChatFaq from '@/components/chat-faq';
export interface Message {
  id: number | string;
  text: string;
  fromUser: boolean;
  isLoading?: boolean;
}

function toApiMessages(history: Message[]) {
  return history.map((m) => ({
    role: m.fromUser ? 'user' : 'assistant',
    content: m.text,
  }));
}

export default function Chat() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const onSubmit = useCallback(
    async (text: string) => {
      if (!text.trim()) return;
      setMessages((prev) => [
        ...prev,
        { id: prev.length + 1, fromUser: true, text, isLoading: false },
      ]);

      setMessages((prev) => [
        ...prev,
        { id: prev.length + 1, fromUser: false, text: '', isLoading: true },
      ]);

      setIsLoading(true);

      const fullHistory = toApiMessages(
        messages.concat({ id: messages.length + 1, fromUser: true, text })
      );

      const controller = new AbortController();

      const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/chat/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ message: text }),
        signal: controller.signal,
      });

      if (!res.ok || !res.body) {
        console.error('Failed to fetch stream', res.status);
        setIsLoading(false);
        return;
      }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value);

        setMessages((prev) => {
          const copy = [...prev];
          copy[copy.length - 1].text = buffer;
          copy[copy.length - 1].isLoading = false;
          return copy;
        });
      }
      setIsLoading(false);
    },
    [messages]
  );

  return (
    <>
      <Sidebar
        visible={sidebarVisible}
        onHide={() => setSidebarVisible(false)}
        messages={messages}
      ></Sidebar>
      <div
        className={`transition-all duration-300 ${
          sidebarVisible ? 'ml-[300px]' : 'ml-0'
        }`}
      >
        <div className="flex flex-col h-screen">
          <div className="flex-1 overflow-y-auto">
            {messages.length > 0}
            <ChatHeader
              onToggleSidebar={() => setSidebarVisible(!sidebarVisible)}
            />
            <main className="h-full">
              <div
                className={`md:w-[768px] w-full mx-auto overflow-y-auto ${
                  messages.length === 0 ? 'pt-[10%]' : ''
                }`}
              >
                {messages.length === 0 ? (
                  <div className="flex flex-col items-center">
                    <Image
                      src="/logo-onbi.png"
                      alt="logo"
                      width={104}
                      height={42}
                    />
                    <p className="text-centeralign-middle font-bold text-3xl mt-[34px]">
                      Yuk, cari tahu bareng ONBI!
                    </p>
                    <p className="text-center mt-[14px]">
                      ONBI siap bantu kamu buat kenalan lebih dekat sama dunia
                      kerja di BNI. Semua bisa kamu tanyakan langsung. Gaperlu
                      bingung, tanya aja ke ONBI!
                    </p>
                  </div>
                ) : (
                  messages.map((m) => <ChatMessage {...m} key={m.id} />)
                )}
              </div>
            </main>
          </div>
        </div>

        <ChatInput onSubmit={onSubmit} isLoading={isLoading} />
      </div>
    </>
  );
}
