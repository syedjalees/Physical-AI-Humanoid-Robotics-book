import React, { useState, KeyboardEvent, JSX } from 'react';
import './ChatBot.css'; // Styling file wahi rahegi

// 1. Types Define karein (TS ka faida)
interface Message {
  role: 'system' | 'user' | 'ai';
  content: string;
}

export default function ChatBot(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'system', content: 'Hi! I am your AI Tutor. Ask me anything about this book!' }
  ]);
  const [input, setInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      // Backend ko Call
      const response = await fetch('http://127.0.0.1:8000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.content }),
      });

      const data = await response.json();
      const aiMessage: Message = { role: 'ai', content: data.response };
      
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: 'system', content: '❌ Error: Backend not connected.' }]);
    }
    setLoading(false);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="chatbot-container">
      {/* Button */}
      {!isOpen && (
        <button className="chat-button" onClick={() => setIsOpen(true)}>
          🤖 Ask AI
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <span>AI Tutor</span>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>
          
          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.role}`}>
                {msg.content}
              </div>
            ))}
            {loading && <div className="message system">Thinking...</div>}
          </div>

          <div className="chat-input">
            <input 
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask a question..."
            />
            <button onClick={sendMessage}>➤</button>
          </div>
        </div>
      )}
    </div>
  );
}