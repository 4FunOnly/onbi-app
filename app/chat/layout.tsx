{/*export const metadata = { title: 'Onbi' };

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-center h-screen">{children}</div>
  );
}*/}

import Chat from '@/ui/chat';
import { Sidebar } from 'lucide-react';


export const metadata = { title: 'Onbi' };

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  );
}
