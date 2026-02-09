
import React from 'react';

interface ProfileCreationProps {
  onNext: () => void;
}

const ProfileCreation: React.FC<ProfileCreationProps> = ({ onNext }) => {
  return (
    <div className="min-h-screen bg-background-light flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md px-6 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <span className="material-symbols-outlined text-white text-xl filled-icon">favorite</span>
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">Amity</span>
          </div>
          <button className="text-sm font-semibold text-slate-500">Help</button>
        </div>
      </header>

      <main className="py-12 px-6 flex-grow">
        <div className="max-w-2xl mx-auto">
          <div className="mb-10">
            <div className="flex justify-between items-end mb-4">
              <div>
                <h1 className="text-3xl font-black text-slate-900 tracking-tight">Your Profile</h1>
                <p className="text-slate-500 mt-1">Let others get to know the real you.</p>
              </div>
              <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase">Step 3 of 3</span>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-full rounded-full"></div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
            <div className="p-8 space-y-8">
              <div className="flex gap-3 p-4 bg-primary/5 border border-primary/20 rounded-2xl">
                <span className="material-symbols-outlined text-primary">info</span>
                <p className="text-sm text-slate-700">
                  <strong>Cultural Tip:</strong> Being clear about your hobbies helps start great cross-cultural conversations.
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700">Display Name</label>
                    <input className="h-14 rounded-xl border border-slate-200 px-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" placeholder="e.g. Elena" type="text" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700">Age</label>
                    <input className="h-14 rounded-xl border border-slate-200 px-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" placeholder="26" type="number" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">Current City</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-4 text-slate-400">location_on</span>
                    <input className="w-full h-14 rounded-xl border border-slate-200 pl-12 pr-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="Moscow, Russia" type="text" />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-sm font-bold text-slate-700">Interests</label>
                  <div className="flex flex-wrap gap-2">
                    {['Architecture', 'Hiking', 'Cooking', 'Art', 'Travel'].map(interest => (
                      <button key={interest} className="px-4 py-2 rounded-full border border-slate-200 bg-white text-sm font-medium hover:border-primary hover:text-primary transition-all">
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-bold text-slate-700">Your story in one line</label>
                    <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Optional</span>
                  </div>
                  <textarea className="w-full rounded-xl border border-slate-200 p-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none min-h-[100px]" placeholder="Tell us what you're looking for..." />
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 border-t border-slate-100 flex items-center justify-between">
              <p className="text-xs text-slate-400 max-w-[240px]">By continuing, you agree to our respectful community standards.</p>
              <button 
                onClick={onNext}
                className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-10 rounded-2xl shadow-lg shadow-primary/20 transition-all flex items-center gap-2"
              >
                Save & Start
                <span className="material-symbols-outlined">rocket_launch</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileCreation;
