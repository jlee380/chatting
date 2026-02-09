
import React from 'react';
import { Profile } from '../types';

interface SafetyReportProps {
  profile: Profile | null;
  onActionComplete: () => void;
  onBack: () => void;
}

const SafetyReport: React.FC<SafetyReportProps> = ({ profile, onActionComplete, onBack }) => {
  if (!profile) return null;

  return (
    <div className="min-h-screen bg-warm-beige flex flex-col">
      <header className="flex items-center justify-between border-b border-slate-200 bg-white/80 backdrop-blur-md px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="text-primary">
            <span className="material-symbols-outlined text-2xl filled-icon">shield_person</span>
          </div>
          <h2 className="text-lg font-black tracking-tight text-slate-900 uppercase">Amity Safety</h2>
        </div>
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-500">
          <span className="material-symbols-outlined">close</span>
        </button>
      </header>

      <main className="flex-1 flex justify-center py-12 px-6">
        <div className="max-w-xl w-full flex flex-col">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">How can we help?</h1>
            <p className="text-slate-500 leading-relaxed max-w-sm mx-auto">
              Your safety is our priority. Choose an option to manage your interaction with {profile.name}.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm mb-8 flex items-center gap-4">
            <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-primary/10">
              <img src={profile.imageUrl} alt={profile.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Managing profile</p>
              <p className="text-xl font-black text-slate-900">{profile.name}</p>
            </div>
          </div>

          <div className="space-y-4">
            <button 
              onClick={onActionComplete}
              className="group w-full flex items-center gap-5 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:border-red-200 transition-all text-left"
            >
              <div className="flex items-center justify-center rounded-2xl bg-slate-50 shrink-0 w-14 h-14 group-hover:bg-red-50 transition-colors">
                <span className="material-symbols-outlined text-slate-400 group-hover:text-red-500 text-2xl">block</span>
              </div>
              <div className="grow">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-black text-slate-800">Block {profile.name}</p>
                  <span className="material-symbols-outlined text-slate-200 group-hover:text-red-300">chevron_right</span>
                </div>
                <p className="text-slate-400 text-sm mt-1">You won't see each other anymore. This is private.</p>
              </div>
            </button>

            <button 
              onClick={onActionComplete}
              className="group w-full flex items-center gap-5 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:border-primary/40 transition-all text-left"
            >
              <div className="flex items-center justify-center rounded-2xl bg-slate-50 shrink-0 w-14 h-14 group-hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary text-2xl">flag</span>
              </div>
              <div className="grow">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-black text-slate-800">Report Inappropriate Behavior</p>
                  <span className="material-symbols-outlined text-slate-200 group-hover:text-primary/50">chevron_right</span>
                </div>
                <p className="text-slate-400 text-sm mt-1">Our team will manually review this interaction within 24h.</p>
              </div>
            </button>
          </div>

          <div className="mt-12 bg-primary/5 rounded-3xl p-8 border border-primary/10">
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-primary">info</span>
              <div className="space-y-2">
                <p className="font-black text-primary uppercase text-xs tracking-widest">Confidential Reporting</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We verify all reports manually to protect our members. {profile.name} will <span className="underline decoration-primary/30 font-bold">not</span> know you reported them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-10 text-center border-t border-slate-100 bg-white">
        <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">Amity Trust & Safety System</p>
      </footer>
    </div>
  );
};

export default SafetyReport;
