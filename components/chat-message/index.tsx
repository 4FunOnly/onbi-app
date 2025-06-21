import { Message } from '@/ui/chat';
import React from 'react';
import MarkdownRenderer from '../markdown-renderer';

export default function ChatMessage({ fromUser, text }: Message) {
  return (
    <div className={`flex ${fromUser ? 'justify-end' : 'justify-start'} px-4`}>
      <div
        className={`relative py-3 px-5 text-sm leading-snug rounded-2xl
          ${fromUser ? 'max-w-[70%] bg-[#e9e9e9] text-gray-800' : 'max-w-[85%] bg-gray-100 text-gray-800'}
        `}
      >
        <MarkdownRenderer content={text} />
      </div>
    </div>
  );
}
