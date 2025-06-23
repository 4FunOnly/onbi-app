'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import './ChatInput.css';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import TextareaAutosize from 'react-textarea-autosize';
import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { suggestions } from '@/libs/suggestion';

export default function ChatInput({
  onSubmit,
  isLoading,
}: {
  onSubmit: (data: string) => void;
  isLoading: boolean;
}) {
  const [text, setText] = useState('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    if (!text.trim()) return;
    onSubmit(text);
    setText('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    handleSubmit();
  };

  const handleSuggestionClick = (suggestion: string) => {
    onSubmit(suggestion);
  };

  return (
    <div className="sticky bottom-0 w-[390px] md:w-[768px] mx-auto z-10">
      {/* 1. Bar Rekomendasi yang Bisa Digeser */}
      <div className="suggestion-bar">
        {suggestions.map((item, index) => (
          <button
            key={index}
            className="suggestion-item"
            onClick={() => handleSuggestionClick(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <form>
        <div
          className="flex items-center gap-2 rounded-[32px] bg-white
          shadow-sm overflow-clip
          w-full cursor-text justify-center bg-clip-padding contain-inline-size
          sm:shadow-lg"
        >
          <div className="[scrollbar-width:thin] w-full default-browser ml-3">
            <TextareaAutosize
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              value={text}
              placeholder="Tanya ONBI"
              className="resize-none text-sm placeholder-gray-400 focus:outline-none w-full overflow-y-auto ml-4 pt-4 flex items-center justify-center"
              minRows={2}
              maxRows={10}
            />
          </div>
          <div className="flex ">
            <button
              type="button"
              className="py-4 px-4 mr-1 rounded-full cursor-pointer hover:bg-orange-800 border-gray-100 border bg-orange-400"
              onClick={handleClick}
            >
              <ArrowRightIcon className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </form>
      <p className="text-[12px] text-center text-gray-500 py-2">
        ONBI can make mistakes. Check important info.{' '}
        <a href="https://www.bni.co.id/id-id/" className="underline">
          Set Cookie Preferences.
        </a>
      </p>
    </div>
  );
}
