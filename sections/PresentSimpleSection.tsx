
import React from 'react';

const PresentSimpleSection: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <div className="space-y-8 animate-in slide-in-from-right duration-500 relative">
      <div className="flex items-center gap-4 border-b-4 border-pink-200 pb-4">
        <span className="text-5xl">🕒</span>
        <h2 className="text-4xl font-bold text-pink-500 italic">現在式 (Present Simple)</h2>
      </div>

      <div className="bg-pink-50 p-6 rounded-3xl border-4 border-pink-100 relative shadow-inner">
        <h3 className="text-2xl font-bold text-pink-700 mb-4 flex items-center gap-2">
          🌈 什麼時候用？ (Usage)
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-2xl border-2 border-pink-200 shadow-sm transform hover:-rotate-1 transition-transform">
             <p className="font-bold text-slate-700 flex items-center gap-2">1. 日常習慣 (Habits) 🚿</p>
             <p className="text-pink-500 italic text-xl">"Rabbit <span className="underline font-bold">takes</span> a bath every day."</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border-2 border-pink-200 shadow-sm transform hover:rotate-1 transition-transform">
             <p className="font-bold text-slate-700 flex items-center gap-2">2. 不變事實 (Facts) ☀️</p>
             <p className="text-pink-500 italic text-xl">"The sun <span className="underline font-bold">rises</span> in the east."</p>
          </div>
        </div>
        <img 
          src="https://img.icons8.com/color/512/rabbit.png" 
          className="absolute -right-4 -bottom-6 w-28 drop-shadow-md hover:scale-110 transition-transform" 
          alt="rabbit" 
        />
      </div>

      <div className="bg-blue-50 p-6 rounded-3xl border-4 border-blue-100 relative">
        <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
          🪄 魔法 $s / es / ies$ 規則
        </h3>
        <p className="mb-4 text-slate-600 font-bold">當主角是 <span className="bg-blue-200 px-3 py-1 rounded-full font-black text-blue-800 shadow-sm">He / She / It</span> 時：</p>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white p-4 rounded-xl border-2 border-blue-200 shadow-sm hover:border-blue-400 transition-colors">
            <p className="font-bold text-blue-600 underline mb-2 text-lg">一般情況：直接 + s</p>
            <p className="text-base">play ➔ <span className="font-black text-blue-500 text-lg">plays</span> ⚽</p>
            <p className="text-base">eat ➔ <span className="font-black text-blue-500 text-lg">eats</span> 🍎</p>
          </div>
          <div className="bg-white p-4 rounded-xl border-2 border-blue-200 shadow-sm hover:border-blue-400 transition-colors">
            <p className="font-bold text-blue-600 underline mb-2 text-lg">以 ch/sh/s/x/o 結尾：+ es</p>
            <p className="text-base">watch ➔ <span className="font-black text-blue-500 text-lg">watches</span> 📺</p>
            <p className="text-base">go ➔ <span className="font-black text-blue-500 text-lg">goes</span> 🚶</p>
          </div>
          <div className="bg-white p-4 rounded-xl border-2 border-blue-200 shadow-sm hover:border-blue-400 transition-colors">
            <p className="font-bold text-blue-600 underline mb-2 text-lg">輔音 + y：去 y 變 ies</p>
            <p className="text-base">study ➔ <span className="font-black text-blue-500 text-lg">studies</span> 📖</p>
            <p className="text-base">fly ➔ <span className="font-black text-blue-500 text-lg">flies</span> 🚁</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-3xl border-4 border-yellow-100 relative shadow-inner overflow-hidden">
        <h3 className="text-2xl font-bold text-yellow-700 mb-4 flex items-center gap-2">
          🚫 否定 & ❓ 問句 (Negatives & Questions)
        </h3>
        <div className="bg-white/80 p-6 rounded-2xl border-2 border-dashed border-yellow-300 relative z-10">
           <p className="mb-4 text-xl"><span className="font-black text-yellow-600 mr-2">否定：</span>I <span className="text-red-500 font-black">don't</span> play / He <span className="text-red-500 font-black">doesn't</span> play 🙅</p>
           <p className="text-xl"><span className="font-black text-yellow-600 mr-2">問句：</span><span className="text-blue-500 font-black">Do</span> you like apples? / <span className="text-blue-500 font-black">Does</span> she play? 🤔</p>
        </div>
        <img src="https://img.icons8.com/color/512/cat.png" className="absolute -top-4 -right-4 w-24 opacity-20 rotate-12" alt="cat" />
      </div>

      <div className="flex justify-end">
        <button onClick={onNext} className="group px-12 py-5 bg-pink-400 hover:bg-pink-500 text-white text-2xl font-black rounded-full shadow-[0_6px_0_0_#be185d] active:shadow-none active:translate-y-2 transition-all flex items-center gap-4">
          <span>下一步：坐上時光機！</span>
          <img src="https://img.icons8.com/color/96/time-machine.png" className="w-10 h-10 group-hover:rotate-180 transition-transform duration-700" alt="timer" />
        </button>
      </div>
    </div>
  );
};

export default PresentSimpleSection;
