{
  /*export const metadata = { title: 'Onbi' };

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">{children}</div>
  );
}*/
}

export const metadata = { title: 'Onbi' };

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full bg-gray-50">
      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  );
}
