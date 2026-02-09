
import React, { useState } from 'react';
import { MOCK_PROFILES } from '../constants';
import { Profile } from '../types';

interface MatchDiscoveryProps {
  onLike: (profile: Profile) => void;
  onReport: () => void;
}

const MatchDiscovery: React.FC<MatchDiscoveryProps> = ({ onLike, onReport }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProfile = MOCK_PROFILES[currentIndex];

  const handleSkip = () => {
    setCurrentIndex((prev) => (prev + 1) % MOCK_PROFILES.length);
  };

  return (
    <div className="min-h-screen bg-background-light flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="text-primary">
              <span className="material-symbols-outlined text-3xl filled-icon">favorite</span>
            </div>
            <h1 className="text-xl font-black tracking-tighter text-slate-900">Amity</h1>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            <a className="text-primary text-sm font-bold border-b-2 border-primary pb-1" href="#">Discovery</a>
            <a className="text-slate-400 text-sm font-medium hover:text-primary transition-colors" href="#">Messages</a>
            <a className="text-slate-400 text-sm font-medium hover:text-primary transition-colors" href="#">Safety</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-500">
               <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="h-10 w-10 overflow-hidden rounded-full border border-slate-200">
              <img src="https://picsum.photos/seed/me/200" alt="me" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-6 pb-12">
        <div className="w-full max-w-lg">
          <div className="mb-4 flex justify-center">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-primary">
              <span className="material-symbols-outlined text-[18px] filled-icon">verified</span>
              <span className="text-[10px] font-black uppercase tracking-widest">Verified Human</span>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 transition-all">
            <div className="relative aspect-[4/5] w-full bg-slate-100">
              <img 
                src={currentProfile.imageUrl} 
                alt={currentProfile.name} 
                className="h-full w-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center justify-between mb-1">
                  <h2 className="text-3xl font-black tracking-tight">{currentProfile.name}, {currentProfile.age}</h2>
                </div>
                <p className="text-sm font-medium opacity-90">{currentProfile.location}</p>
              </div>
            </div>

            <div className="p-8">
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {currentProfile.bio}
              </p>

              <div className="flex items-center gap-4">
                <button 
                  onClick={handleSkip}
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl border-2 border-slate-100 h-16 bg-white text-slate-400 font-bold hover:bg-slate-50 transition-all"
                >
                  <span className="material-symbols-outlined">close</span>
                  <span>Skip</span>
                </button>
                <button 
                  onClick={() => onLike(currentProfile)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-primary h-16 text-white font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span className="material-symbols-outlined filled-icon">favorite</span>
                  <span>Like</span>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-6">
            <button 
              onClick={onReport}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-slate-500 transition-colors"
            >
              <span className="material-symbols-outlined text-lg">flag</span>
              Report or Block Profile
            </button>
            
            <div className="flex max-w-[400px] items-start gap-3 rounded-2xl bg-white/50 border border-slate-100 p-4 text-center">
              <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">shield</span>
              <p className="text-[10px] text-slate-400 font-medium leading-normal text-left">
                Safety and mutual respect are our priority. Encountering issues? Use the flag icon above to alert our 24/7 moderation team.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MatchDiscovery;
