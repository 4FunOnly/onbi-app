'use client';
import React from 'react';

export default function ChatFaq({
  onClick,
  question,
}: {
  onClick: () => void;
  question: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative w-auto px-5 py-3 text-sm leading-snug bg-[#e9e9e9] text-gray-800 rounded-2xl`}
    >
      {question}
    </button>
  );
}
