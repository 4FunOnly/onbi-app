'use client';

import ChatHeader from '@/components/chat-header';
import ChatInput from '@/components/chat-input';
import ChatMessage from '@/components/chat-message';
import React, { useState } from 'react';
import Sidebar from '@/components/sidebar/Sidebar';
import { sendChatMessage } from '@/utils/input';

export interface Message {
  id: number | string;
  text: string;
  fromUser: boolean;
}

export default function Chat() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (input: string) => {
    const userMsg: Message = {
      id: Date.now(),
      text: input,
      fromUser: true,
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);
    try {
      const response = await sendChatMessage(input);
      if (response) {
        setMessages((prev) => [
          ...prev,
          { id: Date.now() + 1, text: response, fromUser: false },
        ]);
      }
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 2, text: 'Error: Could not get response.', fromUser: false },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <Sidebar
          visible={sidebarVisible}
          onHide={() => setSidebarVisible(false)}
          messages={messages}
        >
          </Sidebar>
    <div className={`transition-all duration-300 ${sidebarVisible ? 'ml-[300px]' : 'ml-0'}`}>
      <div className='flex flex-col h-screen'>
        <div className={`${sidebarVisible ? '' : 'mx-auto'} sticky top-0 z-20 bg-white border-b border-gray-200 max-w-[768px] w-full`}>
          <ChatHeader onToggleSidebar={() => setSidebarVisible(!sidebarVisible)}/>
        </div>
        <main className={`flex-1 overflow-y-auto w-full max-w-[768px] px-4${!sidebarVisible ? ' mx-auto' : ''}${messages.length === 0 ? ' flex flex-col justify-center items-center' : ''}`}>
          {messages.length === 0 ? (
            <p className="text-center font-medium text-2xl">
              What can I help with?
            </p>
          ) : (
            messages.map((m) => (
              <div key={m.id} className="py-4">
                <ChatMessage {...m} />
              </div>
            ))
          )}
        </main>
        <div className={`w-full max-w-[768px] px-4${!sidebarVisible ? ' mx-auto' : ''}`}>
          <ChatInput onSubmit={handleSubmit} isLoading={isLoading} />
        </div>
      </div>
    </div>
    </>
  );
}
