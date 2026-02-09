
import React from 'react';

interface OnboardingProps {
  onNext: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onNext }) => {
  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col bg-warm-beige">
      {/* Decorative background shapes */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full blur-[60px] opacity-40"></div>
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-rose-100 rounded-full blur-[60px] opacity-40"></div>

      <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-xl filled-icon">favorite</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-slate-800">Amity</h2>
        </div>
        <button className="text-slate-600 font-semibold text-sm hover:text-primary">Login</button>
      </header>

      <main className="relative z-10 flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">verified_user</span>
              Safety & Respect Focused
            </div>
            <h1 className="text-slate-800 text-5xl md:text-6xl font-black leading-tight tracking-tight">
              Meet with <br/><span className="text-primary">intention</span>
            </h1>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0">
              Bridging cultures through respectful and safe connections for Russian women and Korean men.
            </p>
            <div className="hidden lg:flex pt-8 items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-warm-beige bg-slate-200 overflow-hidden">
                    <img src={`https://picsum.photos/seed/${i + 10}/200`} alt="user" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-warm-beige bg-primary text-white text-xs font-bold">5k+</div>
              </div>
              <p className="text-sm text-slate-500 font-medium">Joined by thousands looking for serious connections</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-xl border border-white/20">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Get Started</h3>
              <p className="text-slate-500 text-sm">Please select your identity to continue</p>
            </div>
            <div className="space-y-4">
              <button 
                onClick={onNext}
                className="w-full group flex items-center justify-between h-20 px-6 bg-primary hover:bg-primary/90 text-white rounded-2xl transition-all shadow-lg shadow-primary/20"
              >
                <span className="text-lg font-bold">I’m a Russian woman</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
              <button 
                onClick={onNext}
                className="w-full group flex items-center justify-between h-20 px-6 bg-white border-2 border-primary/20 hover:border-primary text-slate-800 rounded-2xl transition-all"
              >
                <span className="text-lg font-bold">I’m a Korean man</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-primary">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-10 px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs">
        <p>© 2024 Amity Dating. All rights reserved.</p>
        <div className="flex gap-6 font-semibold">
          <a href="#" className="hover:text-primary">Privacy Policy</a>
          <a href="#" className="hover:text-primary">Terms</a>
          <a href="#" className="hover:text-primary">Safety</a>
        </div>
      </footer>
    </div>
  );
};

export default Onboarding;
