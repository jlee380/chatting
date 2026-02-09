
import React from 'react';
import { Profile } from '../types';

interface MatchSuccessProps {
  profile: Profile | null;
  onStartChat: () => void;
  onContinue: () => void;
}

const MatchSuccess: React.FC<MatchSuccessProps> = ({ profile, onStartChat, onContinue }) => {
  if (!profile) return null;

  return (
    <div className="min-h-screen bg-warm-beige flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent opacity-50"></div>
      
      <div className="max-w-md w-full relative z-10 text-center">
        <div className="mb-10 flex flex-col items-center">
          <div className="relative flex items-center justify-center mb-8">
            <div className="flex -space-x-6">
              <div className="relative z-10 group">
                 <div className="w-32 h-32 rounded-full border-4 border-white shadow-2xl overflow-hidden transform group-hover:scale-105 transition-transform">
                   <img src={profile.imageUrl} alt={profile.name} className="w-full h-full object-cover" />
                 </div>
                 <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1.5 shadow-md">
                    <span className="material-symbols-outlined text-primary text-sm filled-icon">verified</span>
                 </div>
              </div>
              <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden">
                <img src="https://picsum.photos/seed/me/200" alt="me" className="w-full h-full object-cover opacity-80" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl font-black text-slate-800 tracking-tight leading-tight">
            It's a connection!
          </h1>
          <p className="text-slate-500 mt-4 text-lg leading-relaxed px-4">
            You and <span className="font-bold text-slate-800">{profile.name}</span> have expressed interest in each other.
          </p>
        </div>

        <div className="space-y-4 px-4">
          <button 
            onClick={onStartChat}
            className="w-full h-16 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl shadow-xl shadow-primary/20 transition-all transform active:scale-95 flex items-center justify-center gap-2"
          >
            Start Conversation
            <span className="material-symbols-outlined">chat_bubble</span>
          </button>
          <button 
            onClick={onContinue}
            className="w-full h-16 bg-white hover:bg-slate-50 text-slate-600 font-bold rounded-2xl border-2 border-slate-100 transition-all"
          >
            Keep Discovering
          </button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-3 py-4 px-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/50 max-w-sm mx-auto">
          <span className="material-symbols-outlined text-primary text-xl">verified_user</span>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-left">
            Communication on Amity is monitored for safety and respect.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MatchSuccess;
