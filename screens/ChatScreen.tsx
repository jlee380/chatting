
import React, { useState, useEffect, useRef } from 'react';
import { Profile, Message } from '../types';

interface ChatScreenProps {
  profile: Profile | null;
  onNavigateSafety: () => void;
  onBack: () => void;
}

const ChatScreen: React.FC<ChatScreenProps> = ({ profile, onNavigateSafety, onBack }) => {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'them', text: `Hello! I am glad to meet you here. How are you doing today?`, timestamp: '12:30 PM' },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  if (!profile) return null;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    const newMessage: Message = {
      id: Date.now().toString(),
      sender: 'me',
      text: inputText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([...messages, newMessage]);
    setInputText('');
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <header className="flex h-20 items-center justify-between border-b border-slate-100 bg-white px-6 shrink-0 z-10 shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="text-slate-400 hover:text-primary">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div onClick={onNavigateSafety} className="flex items-center gap-3 cursor-pointer group">
            <div className="h-10 w-10 rounded-full overflow-hidden border border-slate-100">
              <img src={profile.imageUrl} alt={profile.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <h3 className="text-sm font-black text-slate-800 group-hover:text-primary">{profile.name}</h3>
                <span className="material-symbols-outlined text-primary text-[16px] filled-icon">verified</span>
              </div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Active Now</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={onNavigateSafety}
            className="flex items-center gap-2 rounded-xl border border-red-50 px-3 py-2 text-[10px] font-black uppercase tracking-widest text-red-400 hover:bg-red-50 transition-colors"
          >
            <span className="material-symbols-outlined text-sm">report</span>
            Report
          </button>
        </div>
      </header>

      {/* Message Feed */}
      <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 bg-slate-50/30 no-scrollbar">
        <div className="flex justify-center my-4">
          <span className="rounded-full bg-slate-100 px-4 py-1 text-[10px] font-black text-slate-400 uppercase tracking-widest">Connection established today</span>
        </div>

        {messages.map((msg) => (
          <div key={msg.id} className={`flex flex-col gap-1 max-w-[80%] ${msg.sender === 'me' ? 'self-end' : 'self-start'}`}>
            <div className={`flex items-center gap-2 px-1 ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{msg.sender === 'me' ? 'You' : profile.name}</span>
              <span className="text-[9px] text-slate-300 font-bold">{msg.timestamp}</span>
            </div>
            <div className={`rounded-3xl px-5 py-3 text-sm leading-relaxed shadow-sm ${
              msg.sender === 'me' 
                ? 'rounded-tr-none bg-primary text-white' 
                : 'rounded-tl-none bg-white text-slate-800 border border-slate-100'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-slate-100 p-6 space-y-4 bg-white shrink-0">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {['Hello!', 'How is your day?', 'Beautiful profile!'].map((tip) => (
            <button 
              key={tip}
              onClick={() => setInputText(tip)}
              className="whitespace-nowrap rounded-full border border-slate-100 bg-white px-4 py-1.5 text-xs font-bold text-slate-400 hover:border-primary hover:text-primary transition-all"
            >
              {tip}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <input 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm focus:border-primary focus:ring-0 transition-all placeholder:text-slate-300" 
              placeholder="Type a respectful message..." 
            />
          </div>
          <button 
            onClick={handleSend}
            disabled={!inputText.trim()}
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            <span className="material-symbols-outlined filled-icon">send</span>
          </button>
        </div>

        <div className="flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-sm text-primary">verified_user</span>
          <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">
            Treat each other with kindness. Translation support is active.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
