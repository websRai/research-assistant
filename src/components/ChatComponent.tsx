import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      // TODO: Implement AI response logic
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'AI response placeholder', isUser: false },
      ]);
      setInput('');
    }
  };

  return (
    <div className="flex flex-col h-[600px]">
      <div className="flex-grow overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${
              message.isUser ? 'text-right' : 'text-left'
            }`}
          >
            <span
              className={`inline-block p-2 rounded-lg ${
                message.isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
              }`}
            >
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow border rounded-l-lg p-2"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white p-2 rounded-r-lg"
        >
          <Send />
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;