'use client';

import ChatHeader from '@/components/chat-header';
import ChatInput from '@/components/chat-input';
import ChatMessage from '@/components/chat-message';
import React, { useState } from 'react';
import Sidebar from '@/components/sidebar/Sidebar';

export interface Message {
  id: number | string;
  text: string;
  fromUser: boolean;
}

export default function Chat() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
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
    <Sidebar
          visible={sidebarVisible}
          onHide={() => setSidebarVisible(false)}
          messages={messages}
        >
          </Sidebar>
    <div className={`transition-all duration-300 ${sidebarVisible ? 'ml-[300px]' : 'ml-0'}`}>
      <div className='flex flex-col h-screen'>
        <div className='flex-1 overflow-y-auto'>
          {messages.length > 0}
          <ChatHeader onToggleSidebar={() => setSidebarVisible(!sidebarVisible)}/>
            <main>
              <div className="md:w-[768px] w-full mx-auto overflow-y-auto p-4">
                {messages.length === 0 ? (
                  <p className="text-center font-medium text-2xl">
                    What can I help with?
                  </p>
                    ) : (messages.map((m) => <ChatMessage {...m} key={m.id} />) )}
              </div>
            </main>
          </div>
      </div>
      
      
      <ChatInput onSubmit={() => {}} isLoading={isLoading} />
    </div>
    </>
  );
}
