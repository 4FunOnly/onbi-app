import { Message } from '@/ui/chat';
import React from 'react';
import MarkdownRenderer from '../markdown-renderer';

export default function ChatMessage({ fromUser, text, isLoading }: Message) {
  return (
    <div
      className={`flex my-3 mx-3 ${fromUser ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`relative px-5 ${
          fromUser ? 'max-w-[70%]' : 'max-w-[95%]'
        } py-3 text-sm leading-snug bg-[#e9e9e9] text-gray-800 rounded-2xl`}
      >
        {isLoading ? (
          <i className="pi pi-spin pi-spinner" style={{ fontSize: '1rem' }}></i>
        ) : (
          <MarkdownRenderer content={text} />
        )}
      </div>
    </div>
  );
}
