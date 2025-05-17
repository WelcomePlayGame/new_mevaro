'use client'
import { useEffect, useState } from 'react';
import Chat_List from './page-messages-item';
import classes from './page-messages.module.css';
import ChatWindow from './page-chat-window';

type Chat = {
  chatId: string;
  userId: number;
  userName: string;
  text: string;
  avatarUrl: string;
  date: Date;
};
const Chat_Grid = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  useEffect(() => {
    const fetchChats = async () => {
      const res = await fetch('/api/chats'); 
      const data = await res.json();
      setChats(data);
    };
    fetchChats();
  }, []);
  const selectedChat = chats.find(chat => chat.chatId === selectedChatId);
  return (
    <div className={`${classes.chat_grid_container}`}>
      {/* Left - список чатів */}
      <div className={`${classes.chat_grid_container_left}`} >
        {chats.map(chat => (
          <div key={chat.chatId} onClick={() => setSelectedChatId(chat.chatId)}>
            <Chat_List {...chat} />
          </div>
        ))}
      </div>

      {/* Right - переписка */}
      <div className={`${classes.chat_grid_container_right}`}>
        {selectedChat ? (
          <ChatWindow chatId={selectedChat.chatId} userName={selectedChat.userName} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Виберіть чат
          </div>
        )}
      </div>
    </div>
  );
};
export default Chat_Grid;
