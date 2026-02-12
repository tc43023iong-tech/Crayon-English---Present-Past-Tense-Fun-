
import React from 'react';

const SummarySection: React.FC<{ onRestart: () => void }> = ({ onRestart }) => {
  return (
    <div className="text-center space-y-10 animate-in zoom-in duration-700 relative">
      <div className="relative inline-block group">
        <div className="absolute inset-0 bg-yellow-400 opacity-20 rounded-full scale-150 animate-pulse -z-10 blur-3xl"></div>
        <div className="relative">
          <img 
            src="https://img.icons8.com/color/512/panda.png" 
            className="mx-auto w-64 h-64 drop-shadow-2xl group-hover:scale-110 transition-transform duration-500" 
            alt="Happy Panda Guide" 
          />
          <img 
            src="https://img.icons8.com/bubbles/500/trophy.png" 
            className="absolute -bottom-10 -right-10 w-48 animate-bounce" 
            alt="Big Trophy" 
          />
        </div>
      </div>
      
      <div className="space-y-6">
        <h2 className="text-6xl font-black text-orange-500 drop-shadow-md italic uppercase tracking-tighter">
          太棒了！冒險成功！ 🏆🌟
        </h2>
        <p className="text-3xl text-slate-500 font-bold">你已經掌握了英文的時態魔法！ 🎉</p>
        
        <div className="bg-white/90 p-10 rounded-[4rem] border-8 border-dashed border-orange-200 shadow-2xl max-w-2xl mx-auto text-left relative overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform">
          <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
            <img src="https://img.icons8.com/color/512/rabbit.png" className="w-32" alt="decor" />
          </div>
          
          <h3 className="text-3xl font-black text-slate-700 mb-8 flex items-center gap-4">
            <span className="bg-orange-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-md">📔</span>
            今日冒險筆記：
          </h3>
          <ul className="space-y-6 text-2xl font-handlee">
            <li className="flex items-start gap-5 group">
              <span className="text-green-500 text-4xl font-black group-hover:scale-125 transition-transform">✓</span>
              <span className="leading-tight"><span className="text-orange-600 font-black italic">過去式</span> 是時光機，講以前的事。 🕰️</span>
            </li>
            <li className="flex items-start gap-5 group">
              <span className="text-green-500 text-4xl font-black group-hover:scale-125 transition-transform">✓</span>
              <span className="leading-tight"><span className="text-blue-600 font-black italic">Did</span> 是魔法開關，一用變原形。 🪄</span>
            </li>
            <li className="flex items-start gap-5 group">
              <span className="text-green-500 text-4xl font-black group-hover:scale-125 transition-transform">✓</span>
              <span className="leading-tight"><span className="text-emerald-600 font-black italic">so</span> 是箭頭，指引我們找到結果。 🏹</span>
            </li>
            <li className="flex items-start gap-5 group">
              <span className="text-green-500 text-4xl font-black group-hover:scale-125 transition-transform">✓</span>
              <span className="leading-tight">大部分動詞加 <span className="underline decoration-pink-300 decoration-8 italic font-black">ed</span> 就能變身！ ✍️</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-center pt-8">
        <button 
          onClick={onRestart}
          className="px-12 py-6 bg-orange-400 hover:bg-orange-500 text-white text-2xl font-black rounded-full shadow-[0_8px_0_0_#c2410c] active:shadow-none active:translate-y-2 transition-all flex items-center justify-center gap-4 group"
        >
          <img src="https://img.icons8.com/ios-filled/50/ffffff/refresh.png" className="w-8 h-8 group-hover:rotate-180 transition-transform duration-500" alt="refresh" />
          <span>再次冒險之旅</span>
        </button>
        <button 
          onClick={() => alert('你是最棒的文法小達人！獎勵你一個超大銅鑼燒！🥞✨')}
          className="px-12 py-6 bg-sky-500 hover:bg-sky-600 text-white text-2xl font-black rounded-full shadow-[0_8px_0_0_#0369a1] active:shadow-none active:translate-y-2 transition-all flex items-center justify-center gap-4 group"
        >
          <img src="https://img.icons8.com/color/96/gift.png" className="w-10 h-10 group-hover:scale-125 transition-transform" alt="gift" />
          <span>領取驚喜獎勵</span>
        </button>
      </div>
      
      <p className="text-slate-400 text-lg mt-10 italic font-bold">
        跟著可愛小動物學英文，快樂每一天！ ✨🐾
      </p>
    </div>
  );
};

export default SummarySection;
