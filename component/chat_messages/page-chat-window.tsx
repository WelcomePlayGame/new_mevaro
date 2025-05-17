'use client';
import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import classes from './page-messages.module.css'
const socket = io('http://localhost:3002'); 

const ChatWindow = ({ chatId, userName }: { chatId: string; userName: string }) => {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Завантаження історії
  useEffect(() => {
    const fetchMessages = async () => {
      const res = await fetch(`/api/bot_chat?chatId=${chatId}`);
      const data = await res.json();
      setMessages(data);
    };
    fetchMessages();
  }, [chatId]);

  // Скрол донизу
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Слухати WebSocket повідомлення
  useEffect(() => {
    const handleNewMessage = (msg: any) => {
      if (msg.chatId === chatId) {
        setMessages(prev => [...prev, msg]);
      }
    };

    socket.on('new_message', handleNewMessage);

    return () => {
      socket.off('new_message', handleNewMessage);
    };
  }, [chatId]);

  const handleSend = async () => {
    if (!input.trim()) return;
    await fetch('/api/send_message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chatId, text: input }),
    });
    setInput('');
  };

  return (
    <div className={`${classes.right_container}`}>
      <h2 className="text-lg font-semibold mb-4">Чат з {chatId}</h2>

      <div className={classes.messages_colum}>
  {messages.map((msg, i) => (
    <div key={i} className={classes.messages}>
      {/* Повідомлення користувача */}
      {msg.text && (
        <div className={classes.chat_grid_container_right_message}>
          <span className="font-semibold">{msg.userName}:</span> {msg.text}
        </div>
      )}

      {/* Відповідь адміністратора */}
      {msg.reply && (
        <div className={classes.chat_grid_container_left_message}>
          <span className="font-semibold">{msg.adminName || 'Адмін'}:</span> {msg.reply}
        </div>
      )}
    </div>
  ))}
  <div ref={scrollRef} />
</div>

      <div className={`${classes.input_container}`}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Введіть відповідь..."
          className="flex-1 border rounded px-3 py-2"
        />
        <button
          onClick={handleSend}
          className={`${classes.btn_container}`}
        >
          Надіслати
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
