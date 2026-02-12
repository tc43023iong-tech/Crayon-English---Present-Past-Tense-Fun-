
import React from 'react';

const PastSimpleConceptSection: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom duration-500 relative">
      <div className="flex items-center gap-4 border-b-4 border-purple-200 pb-4">
        <span className="text-5xl">🕰️</span>
        <h2 className="text-4xl font-bold text-purple-600 italic">過去式 Past Simple</h2>
      </div>

      <div className="bg-purple-50 p-8 rounded-[2.5rem] border-4 border-purple-100 relative overflow-hidden shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className="text-3xl font-black text-purple-700 mb-4 italic flex items-center gap-3">
              「時光機」與「魔法 did」 🛸
            </h3>
            <p className="text-2xl leading-relaxed text-slate-700 mb-6 font-comic">
              熊貓老師：「小朋友，當我們要講<span className="text-purple-600 font-black underline decoration-wavy decoration-purple-300">昨天、上週、或以前</span>的事，就要坐上時光機，使用過去式！」
            </p>
            <div className="bg-white/90 p-6 rounded-3xl border-2 border-purple-200 shadow-inner">
              <p className="text-2xl font-black text-center text-purple-800 mb-4">
                ✨ <span className="bg-yellow-300 px-4 py-1 rounded-full shadow-sm">did</span> 是 do 的過去式 ✨
              </p>
              <p className="text-xl text-slate-600 leading-relaxed">
                它就像一個<span className="text-red-500 font-black">「魔法開關」</span>。在<span className="font-bold underline">問句</span>和<span className="font-bold underline">否定句</span>裡一用它，後面的動詞就要<span className="text-purple-600 font-black underline">「變回原形」</span>喔！ 🪄
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img 
              src="https://img.icons8.com/color/512/panda.png" 
              className="w-48 h-48 drop-shadow-2xl animate-bounce" 
              alt="Panda Guide" 
            />
            <div className="bg-purple-200 text-purple-800 text-xs font-bold px-3 py-1 rounded-full mt-2 shadow-sm">
              "Did you know?" 🐼
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Affirmative Card */}
        <div className="bg-yellow-50 p-6 rounded-[2.5rem] border-4 border-yellow-100 shadow-lg transform hover:-rotate-1 transition-transform relative flex flex-col">
          <h4 className="text-2xl font-black text-yellow-700 mb-6 flex items-center gap-2">
            ✅ 肯定結構
          </h4>
          <div className="bg-white p-5 rounded-2xl text-lg space-y-4 font-mono shadow-inner border-2 border-yellow-100 flex-1">
            <p className="font-black text-center border-b-2 border-yellow-50 pb-3 text-yellow-500 text-xl">主詞 + <span className="text-orange-500">過去式動詞</span></p>
            <div className="space-y-3">
              <div className="bg-blue-50 p-2 rounded-xl border border-blue-100 text-center">
                <p className="text-xs font-black text-blue-700">💡 提示：動詞要變身喔！</p>
              </div>
              <p className="text-green-600 flex items-center gap-2 font-bold">
                <span className="text-xl">✅</span> I <span className="underline decoration-4 decoration-green-300 font-black italic">played</span> games.
              </p>
              <p className="text-slate-400 italic text-xs pl-8">I played online games.</p>
            </div>
          </div>
          <img src="https://img.icons8.com/color/96/ok.png" className="absolute -top-3 -right-3 w-10" alt="affirmative" />
        </div>

        {/* Negative Card */}
        <div className="bg-green-50 p-6 rounded-[2.5rem] border-4 border-green-100 shadow-lg transform hover:rotate-1 transition-transform relative flex flex-col">
          <h4 className="text-2xl font-black text-green-700 mb-6 flex items-center gap-2">
            🚫 否定結構
          </h4>
          <div className="bg-white p-5 rounded-2xl text-lg space-y-4 font-mono shadow-inner border-2 border-green-100 flex-1 relative overflow-hidden">
            <p className="font-black text-center border-b-2 border-green-50 pb-3 text-green-500 text-xl italic">主詞 + <span className="text-red-500">didn't</span> + <span className="text-purple-600">原形</span></p>
            
            <div className="space-y-3">
              <div className="bg-yellow-50 p-2 rounded-xl border border-yellow-200 text-center">
                <p className="text-[10px] font-black text-yellow-700 leading-tight">💡 特別提醒：<span className="text-red-500">didn't</span> = <span className="text-blue-500">did not</span></p>
              </div>

              <p className="text-green-600 flex items-center gap-2 font-bold">
                <span className="text-xl">✅</span> I <span className="font-black text-red-500">didn't</span> <span className="underline decoration-4 decoration-green-300 font-black italic">study</span>.
              </p>
              <p className="text-red-400 line-through text-[10px] italic flex items-center gap-1 pl-7">
                <span className="text-sm">❌</span> I didn't studied.
              </p>
            </div>
          </div>
          <img src="https://img.icons8.com/color/96/cancel.png" className="absolute -top-3 -right-3 w-10" alt="no" />
        </div>

        {/* Question Card */}
        <div className="bg-indigo-50 p-6 rounded-[2.5rem] border-4 border-indigo-100 shadow-lg transform hover:-rotate-1 transition-transform relative flex flex-col">
          <h4 className="text-2xl font-black text-indigo-700 mb-6 flex items-center gap-2">
            ❓ 問句結構
          </h4>
          <div className="bg-white p-5 rounded-2xl text-lg space-y-4 font-mono shadow-inner border-2 border-indigo-100 flex-1">
            <p className="font-black text-center border-b-2 border-indigo-50 pb-3 text-indigo-500 text-xl"><span className="text-orange-500">Did</span> + 主詞 + <span className="text-purple-600">原形</span>?</p>
            <div className="space-y-2">
              <p className="text-green-600 flex items-center gap-2 font-bold">
                <span className="text-xl">✅</span> <span className="text-orange-500">Did</span> you <span className="underline decoration-4 decoration-green-300 font-black italic">enjoy</span>...?
              </p>
              <p className="text-red-400 line-through text-[10px] italic flex items-center gap-1 pl-7">
                <span className="text-sm">❌</span> Did you enjoyed...?
              </p>
              <div className="bg-indigo-50 p-2 rounded-xl text-xs font-bold text-indigo-600 text-center border border-indigo-100">
                答：Yes, I did. / No, I didn't.
              </div>
            </div>
          </div>
          <img src="https://img.icons8.com/color/96/question-mark.png" className="absolute -top-3 -right-3 w-10" alt="question" />
        </div>
      </div>

      <div className="flex justify-center pt-6">
        <button onClick={onNext} className="px-14 py-6 bg-purple-500 hover:bg-purple-600 text-white text-3xl font-black rounded-full shadow-[0_8px_0_0_#581c87] active:shadow-none active:translate-y-2 transition-all flex items-center gap-4">
          <span>看胖虎日記練習！</span>
          <img src="https://img.icons8.com/color/96/bear.png" className="w-12 h-12" alt="gian bear" />
        </button>
      </div>
    </div>
  );
};

export default PastSimpleConceptSection;
