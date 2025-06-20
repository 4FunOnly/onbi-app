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

  return (
    <div>
        <Sidebar
        visible={visible}
        onHide={onHide}
        position="left"
        className="surface-900 w-[300px]"
        >
            <div className="p-4">
                <h2 className="text-lg font-semibold">Chats</h2>
                {messages.length === 0 ? (
                    <p className="text-center font-medium text-2xl">No Chats Yet</p>
                ) : (
                    <ul className="space-y-2">
                        {messages.map((message: any, index: number) => (
                            <li key={index} className="text-sm text-white line-clamp-1 truncate">
                            </li>
                        ))}
                    </ul>
            )}
        </div>
    </Sidebar>
    </div>
  );
}
export default CustomSidebar;