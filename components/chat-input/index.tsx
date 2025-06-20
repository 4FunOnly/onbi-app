'use client';
import {
  ArrowUpIcon,
  EllipsisHorizontalIcon,
  GlobeAltIcon,
  MicrophoneIcon,
  PhotoIcon,
  PlusIcon,
  SparklesIcon,
  StopIcon,
} from '@heroicons/react/24/outline';
import React, { useState } from 'react';

export default function ChatInput({
  onSubmit,
  isLoading,
}: {
  onSubmit: (data: string) => void;
  isLoading: boolean;
}) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSubmit(input);
    setInput('');
  };

  return (
    <div className="sticky bottom-0 bg-white px-4 pt-4 border-t border-gray-200 md:w-[768px] w-full mx-auto z-10">
      <form onSubmit={handleSubmit}>
        <div
          className="flex flex-col items-start gap-2 rounded-[24px] border border-gray-300 bg-white
          px-4 py-4 shadow-sm h-auto max-h-[200px] overflow-clip
          w-full cursor-text justify-center bg-clip-padding contain-inline-size
          sm:shadow-lg"
        >
          <div className="[scrollbar-width:thin] w-full default-browser">
            <textarea
              placeholder="Ask anything"
              className="resize-none text-sm placeholder-gray-400 focus:outline-none w-full overflow-y-auto max-h-[150px]"
              rows={2}
              value={input}
              onChange={e => setInput(e.target.value)}
            />
          </div>
          <div className="flex justify-between-w-full">
            <div className="flex gap-2">
              <button
                type="button"
                className="p-2 rounded-full hover:bg-gray-100 border-gray-100 border"
              >
                <PlusIcon className="h-5 w-5 text-gray-500" />
              </button>
              <button
                type="button"
                className="p-2 rounded-full hover:bg-gray-100 border-gray-100 border"
              >
                <GlobeAltIcon className="h-5 w-5 text-gray-500" />
              </button>
              <button
                type="button"
                className="p-2 rounded-full hover:bg-gray-100 border-gray-100 border"
              >
                <SparklesIcon className="h-5 w-5 text-gray-500" />
              </button>
              <button
                type="button"
                className="p-2 rounded-full hover:bg-gray-100 border-gray-100 border"
              >
                <PhotoIcon className="h-5 w-5 text-gray-500" />
              </button>
              <button
                type="button"
                className="p-2 rounded-full hover:bg-gray-100 border-gray-100 border"
              >
                <EllipsisHorizontalIcon className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            <div className="flex flex-row-reverse gap-4">
              <button
                type="submit"
                className="p-2 rounded-full bg-black hover:bg-black/70 text-white border border-gray-100"
                disabled={isLoading}
              >
                {isLoading ? (
                  <StopIcon className="h-5 w-5" />
                ) : (
                  <ArrowUpIcon className="h-5 w-5 font-semibold" />
                )}
              </button>
              <button
                type="button"
                className="p-2 rounded-full hover:bg-gray-100 border border-gray-100"
              >
                <MicrophoneIcon className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </form>
      <p className="text-[12px] text-center text-gray-500 py-2">
        ONBI can make mistakes. Check important info.{' '}
        <a href="https://chatgpt.com" className="underline">
          Set Cookie Preferences.
        </a>
      </p>
    </div>
  );
}
