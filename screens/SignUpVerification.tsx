
import React from 'react';

interface SignUpVerificationProps {
  onNext: () => void;
  onBack: () => void;
}

const SignUpVerification: React.FC<SignUpVerificationProps> = ({ onNext, onBack }) => {
  return (
    <div className="min-h-screen bg-background-light flex flex-col">
      <header className="border-b border-slate-200 bg-white px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-primary">
              <span className="material-symbols-outlined text-3xl filled-icon">verified_user</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-800">DuoSafe</span>
          </div>
          <button onClick={onBack} className="text-sm font-medium text-slate-500 hover:text-primary">Back</button>
        </div>
      </header>

      <main className="max-w-2xl mx-auto py-12 px-6 w-full">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 mb-4 text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase">
            Step 2: Trust & Identity
          </div>
          <h1 className="text-3xl font-black text-slate-800 mb-3">Build Your Trusted Profile</h1>
          <p className="text-slate-500">Manual verification ensures a safe community for genuine connections.</p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">add_a_photo</span>
              Profile Photo
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-40 h-40 rounded-2xl bg-slate-50 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-colors">
                <span className="material-symbols-outlined text-4xl text-slate-400 mb-1">camera_alt</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Upload</span>
              </div>
              <div className="flex-1 space-y-3">
                <p className="text-sm font-bold text-slate-700 uppercase tracking-wide">Guidelines:</p>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                    Clearly show your face
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                    No hats or sunglasses
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                    Neutral, professional background
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-xl">
                <span className="material-symbols-outlined text-primary">shield</span>
              </div>
              <div>
                <h2 className="text-lg font-bold">Identity Check</h2>
                <p className="text-sm text-slate-500 mt-1">Verify your age and name with a quick ID scan.</p>
              </div>
            </div>
            
            <div className="aspect-video w-full rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center text-center p-6">
               <span className="material-symbols-outlined text-4xl text-primary mb-3">document_scanner</span>
               <p className="font-bold text-slate-800">Scan ID Card</p>
               <p className="text-xs text-slate-400 mt-2 max-w-xs">Data is encrypted and used only for internal safety verification.</p>
            </div>
          </div>

          <div className="pt-4 flex flex-col gap-4">
            <button 
              onClick={onNext}
              className="w-full h-16 bg-primary text-white rounded-2xl font-bold text-lg shadow-lg shadow-primary/20 hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
            >
              Submit & Continue
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <p className="text-center text-[10px] text-slate-400 px-8 leading-relaxed uppercase tracking-wider font-semibold">
              By proceeding, you agree to mandatory manual profile review for community safety.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUpVerification;
