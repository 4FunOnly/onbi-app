'use client';

import ChatHeader from '@/components/chat-header';
import ChatInput from '@/components/chat-input';
import ChatMessage from '@/components/chat-message';
import React, { useState } from 'react';

export interface Message {
  id: number | string;
  text: string;
  fromUser: boolean;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hello',
      fromUser: true,
    },
    {
      id: 2,
      text: 'Hello',
      fromUser: false,
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      {messages.length > 0 && <ChatHeader />}
      <main className={`${messages.length ? 'flex-1 overflow-y-auto' : ''}`}>
        <div className="md:w-[768px] w-full mx-auto overflow-y-auto p-4">
          {messages.length === 0 ? (
            <p className="text-center font-medium text-2xl">
              What can I help with?
            </p>
          ) : (
            messages.map((m) => <ChatMessage {...m} key={m.id} />)
          )}
        </div>
      </main>
      <ChatInput onSubmit={() => {}} isLoading={isLoading} />
    </>
  );
}
