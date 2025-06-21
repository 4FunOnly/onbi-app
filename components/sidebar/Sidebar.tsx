import React from "react";
import { useEffect } from "react";
import { Sidebar } from "primereact/sidebar";
import ChatMessage from "../chat-message";

const CustomSidebar: React.FC<{ visible: boolean; onHide: () => void; messages: any[] }> = ({ visible, onHide, messages }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  useEffect(() => {
      const mainContent = document.querySelector('.layout-main');
      if (mainContent) {
          if (isSidebarOpen) {
              mainContent.classList.add('layout-main-squeezed');
          } else {
              mainContent.classList.remove('layout-main-squeezed');
          }
      }
  }, [visible]);
  const [selectedChatIndex, setSelectedChatIndex] = React.useState<number | null>(null);

  const handleSelectChat = (index: number) => {
    setSelectedChatIndex(index);
    // You can trigger chat change logic here
    console.log('Selected chat index:', index);
  };

  return (
    <div>
        <Sidebar
        visible={visible}
        onHide={onHide}
        position="left"
        className="surface-900 w-[300px]"
        showCloseIcon={false}
        style={{ borderRight: '1px solid #ccc' }}
        >
        <div className="p-4">
            <h2 className="text-lg font-semibold">Chats</h2>
            <ul className="space-y-2">
                <li onClick={() => handleSelectChat(0)} className={`p-2 cursor-pointer rounded-md transition  ${selectedChatIndex === 0 
      ? 'bg-gray-100 shadow-inner' 
      : 'hover:bg-blue-50 hover:shadow-md'}`}>
                    <span className="inline-flex align-items-center gap-2">asdasf</span>
                </li>
            </ul>
        </div>
    </Sidebar>
    </div>
  );
}
export default CustomSidebar;