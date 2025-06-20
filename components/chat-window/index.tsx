
'use client';

import React, { useState } from 'react';
import ChatMessage from '../chat-message';

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    { id: 1, fromUser: false, text: 'Welcome to the ONBI chat!' },
    { id: 2, fromUser: true, text: 'Hi, thanks! I have a question.' },
  ]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-white md:w-[768px] w-full mx-auto">
      {messages.map((msg, id) => (
        <ChatMessage key={id} id={msg.id} fromUser={msg.fromUser} text={msg.text} />
      ))}
    </div>
  );
}
