export const metadata = { title: 'Onbi' };

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-center h-screen">{children}</div>
  );
}
