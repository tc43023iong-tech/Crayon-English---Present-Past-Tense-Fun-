
import React from 'react';

const SoPracticeSection: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <div className="space-y-8 animate-in slide-in-from-top duration-500 relative">
      <div className="flex items-center gap-4 border-b-4 border-emerald-200 pb-4">
        <span className="text-5xl">🎯</span>
        <h2 className="text-4xl font-bold text-emerald-600">使用 "so" 表示結果</h2>
      </div>

      <div className="bg-emerald-50 p-6 rounded-3xl border-4 border-emerald-100 text-center relative overflow-hidden">
        <p className="text-2xl mb-6 relative z-10">哆啦A夢：「so 就像一個<span className="text-emerald-600 font-bold underline">箭頭</span>，前面是原因，後面是結果。」</p>
        <div className="flex flex-col md:flex-row items-center justify-around gap-6 bg-white p-6 rounded-2xl shadow-inner relative z-10">
          <div className="p-4 bg-red-100 rounded-xl w-full md:w-1/3">
            <p className="font-bold text-red-700">原因 (Reason)</p>
            <p className="text-xl">I was sick.</p>
          </div>
          <div className="text-4xl animate-pulse text-emerald-500">➡️ so ➡️</div>
          <div className="p-4 bg-blue-100 rounded-xl w-full md:w-1/3">
            <p className="font-bold text-blue-700">結果 (Result)</p>
            <p className="text-xl">I didn't study.</p>
          </div>
        </div>
        <img src="https://raw.githubusercontent.com/shunjizhan/doraemon/master/doraemon.png" className="absolute -left-10 -bottom-10 w-40 opacity-10" alt="decor" />
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
            <img src="https://raw.githubusercontent.com/shunjizhan/doraemon/master/suneo.png" className="w-12 h-12" alt="suneo" />
            <h3 className="text-2xl font-bold text-slate-700">互動填空：</h3>
        </div>
        <div className="space-y-4 bg-white p-6 rounded-2xl border-2 border-emerald-200 shadow-md">
          <div className="flex items-center gap-4 text-xl">
            <img src="https://raw.githubusercontent.com/shunjizhan/doraemon/master/nobita.png" className="w-10 h-10 opacity-60" alt="nobita" />
            <span>I was free</span>
            <input className="w-16 border-b-2 text-center border-emerald-400 outline-none bg-yellow-50 rounded font-bold text-emerald-600" defaultValue="" placeholder="so" />
            <span>I played mobile games.</span>
          </div>
          <div className="flex items-center gap-4 text-xl">
             <img src="https://raw.githubusercontent.com/shunjizhan/doraemon/master/shizuka.png" className="w-10 h-10 opacity-60" alt="shizuka" />
            <span>I was sick</span>
            <input className="w-16 border-b-2 text-center border-emerald-400 outline-none bg-yellow-50 rounded font-bold text-emerald-600" defaultValue="" placeholder="so" />
            <span>I didn't practise the piano.</span>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button onClick={onNext} className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white text-xl font-bold rounded-full shadow-lg">
          去看看胖虎不好的日子... ❌
        </button>
      </div>
    </div>
  );
};

export default SoPracticeSection;
