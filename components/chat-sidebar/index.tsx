
'use client';

import React from 'react';

const rooms = ['Team Support', 'Customer Service', 'Project ONBI', 'Random Chat'];

export default function ChatSidebar() {
  return (
    <aside className="w-60 bg-white border-r p-4">
      <h2 className="font-semibold text-gray-700 mb-4">Chat Rooms</h2>
      <ul className="space-y-2">
        {rooms.map((room, i) => (
          <li key={i} className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer text-sm text-gray-800">
            {room}
          </li>
        ))}
      </ul>
    </aside>
  );
}
