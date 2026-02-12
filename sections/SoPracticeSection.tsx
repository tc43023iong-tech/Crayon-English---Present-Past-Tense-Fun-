
import React, { useState } from 'react';

const SoPracticeSection: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const [inputs, setInputs] = useState({ q1: '', q2: '' });

  const handleInputChange = (id: string, value: string) => {
    setInputs(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="space-y-8 animate-in slide-in-from-top duration-500 relative">
      <div className="flex items-center gap-4 border-b-4 border-emerald-200 pb-4">
        <span className="text-5xl">🎯</span>
        <h2 className="text-4xl font-bold text-emerald-600">使用 "so" 表示結果</h2>
      </div>

      <div className="bg-emerald-50 p-6 rounded-3xl border-4 border-emerald-100 text-center relative overflow-hidden shadow-inner">
        <div className="relative z-10">
          <p className="text-3xl mb-6 font-black text-emerald-800">
            <span className="text-5xl mr-2">🤖🐱</span>
            熊貓老師：「so 就像一個<span className="text-emerald-600 font-bold underline decoration-wavy">箭頭</span>，前面是原因，後面是結果。」
          </p>
          <div className="flex flex-col md:flex-row items-center justify-around gap-6 bg-white/80 p-6 rounded-[2.5rem] shadow-sm border-2 border-emerald-100">
            <div className="p-6 bg-red-50 rounded-2xl w-full md:w-5/12 border-2 border-red-100">
              <p className="font-black text-red-600 text-xl mb-2">原因 (Reason) 🤒</p>
              <p className="text-2xl font-handlee italic">I was sick.</p>
            </div>
            <div className="text-5xl animate-pulse text-emerald-500 font-black">so ➜</div>
            <div className="p-6 bg-blue-50 rounded-2xl w-full md:w-5/12 border-2 border-blue-100">
              <p className="font-black text-blue-600 text-xl mb-2">結果 (Result) 📖</p>
              <p className="text-2xl font-handlee italic">I didn't study.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-3">
            <span className="text-4xl">🦊</span>
            <h3 className="text-3xl font-black text-slate-700 italic">互動填空：</h3>
        </div>
        
        <div className="space-y-6 bg-white p-8 rounded-[3rem] border-4 border-emerald-100 shadow-xl">
          <div className="flex flex-wrap items-center gap-4 text-2xl font-bold text-slate-700 leading-loose">
            <span className="text-4xl">🐼</span>
            <span>I was free</span>
            <input 
              className={`w-24 border-b-4 text-center outline-none bg-yellow-50 rounded-xl font-black text-emerald-600 transition-all ${inputs.q1.toLowerCase() === 'so' ? 'border-emerald-500 bg-emerald-50' : 'border-emerald-200 focus:border-emerald-400'}`}
              placeholder="???" 
              value={inputs.q1}
              onChange={(e) => handleInputChange('q1', e.target.value)}
            />
            <span>I played mobile games. 🎮</span>
            {inputs.q1.toLowerCase() === 'so' && <span className="text-emerald-500 animate-bounce">✨ Perfect!</span>}
          </div>

          <div className="flex flex-wrap items-center gap-4 text-2xl font-bold text-slate-700 leading-loose border-t-2 border-dashed border-emerald-50 pt-6">
            <span className="text-4xl">🐰</span>
            <span>I was sick</span>
            <input 
              className={`w-24 border-b-4 text-center outline-none bg-yellow-50 rounded-xl font-black text-emerald-600 transition-all ${inputs.q2.toLowerCase() === 'so' ? 'border-emerald-500 bg-emerald-50' : 'border-emerald-200 focus:border-emerald-400'}`}
              placeholder="???" 
              value={inputs.q2}
              onChange={(e) => handleInputChange('q2', e.target.value)}
            />
            <span>I didn't practise the piano. 🎹</span>
            {inputs.q2.toLowerCase() === 'so' && <span className="text-emerald-500 animate-bounce">✨ Great!</span>}
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-6">
        <button 
          onClick={onNext} 
          className="px-16 py-6 bg-emerald-500 hover:bg-emerald-600 text-white text-3xl font-black rounded-full shadow-[0_8px_0_0_#065f46] hover:scale-105 active:translate-y-2 active:shadow-none transition-all flex items-center gap-4"
        >
          <span>下一關：胖虎倒霉日記</span>
          <img src="https://img.icons8.com/color/96/cancel.png" className="w-10 h-10" alt="next" />
        </button>
      </div>
    </div>
  );
};

export default SoPracticeSection;
