export const metadata = { title: 'Onbi' };

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">{children}</div>
  );
}
