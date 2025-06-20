import Image from 'next/image';
import React from 'react';
import { PrimeIcons } from 'primereact/api';

export default function ChatHeader({onToggleSidebar}: {onToggleSidebar?: () => void}) {
  return (
    <header className="flex items-center gap-4 p-4 bg-white border-b border-gray-200 md:w-[768px] w-full mx-auto">
      <button
        onClick={onToggleSidebar}
        className="p-2 m-2 bg-gray-800 text-white rounded"
      >
        <i className={`pi ${PrimeIcons.BARS} text-lg`} />
      </button>
      <Image src="/logo-onbi.png" alt="logo" width={104} height={42}/>
    </header>
  );
}
