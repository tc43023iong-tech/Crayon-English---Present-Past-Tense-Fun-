
import React from 'react';

const ReviewSection: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom duration-500">
      <div className="flex items-center gap-4 border-b-4 border-yellow-300 pb-4">
        <span className="text-5xl">💎</span>
        <h2 className="text-4xl font-black text-yellow-600 italic">Language focus 1 & 2</h2>
      </div>

      <div className="flex items-center gap-4 bg-yellow-50 p-6 rounded-3xl border-2 border-yellow-100 shadow-inner">
        <img src="https://img.icons8.com/color/96/panda.png" className="w-16 h-16" alt="panda" />
        <p className="text-xl text-slate-700 font-bold">
          熊貓老師：「在冒險開始前，我們先來看看我們會學到哪些厲害的句子吧！✨」
        </p>
      </div>

      <div className="space-y-6">
        {/* Pattern 1: so & negative */}
        <div className="bg-orange-50 p-8 rounded-[3rem] border-4 border-orange-200 shadow-xl relative overflow-hidden transform -rotate-1">
          <div className="flex items-start gap-6 relative z-10">
            <img src="https://img.icons8.com/color/512/bear.png" className="w-24 h-24 drop-shadow-lg" alt="bear" />
            <div>
              <p className="text-pink-500 font-black text-sm uppercase tracking-widest mb-2">Pattern 01: Reason & Result</p>
              <p className="text-3xl font-black text-slate-800 leading-relaxed font-handlee">
                I was sick <span className="text-orange-500 underline decoration-4 underline-offset-4">so</span> I <span className="text-red-500 italic">didn't study</span> for exams.
              </p>
              <p className="text-slate-400 text-lg font-bold mt-2 italic">（我生病了，所以我沒有溫習考試。）</p>
            </div>
          </div>
        </div>

        {/* Pattern 2: Yes/No Questions */}
        <div className="bg-sky-50 p-8 rounded-[3rem] border-4 border-sky-200 shadow-xl relative overflow-hidden transform rotate-1">
          <div className="flex items-start gap-6 relative z-10">
            <img src="https://img.icons8.com/color/512/rabbit.png" className="w-24 h-24 drop-shadow-lg" alt="rabbit" />
            <div className="flex-1">
              <p className="text-sky-500 font-black text-sm uppercase tracking-widest mb-2">Pattern 02: Questions & Answers</p>
              <div className="space-y-2">
                <p className="text-3xl font-black text-slate-800 leading-relaxed font-handlee">
                  <span className="text-sky-600">Did</span> you enjoy your weekend?
                </p>
                <div className="flex gap-4">
                  <p className="text-2xl font-black text-green-600 bg-white px-4 py-1 rounded-full shadow-sm">Yes, I <span className="underline">did</span>. ✅</p>
                  <p className="text-2xl font-black text-red-500 bg-white px-4 py-1 rounded-full shadow-sm">No, I <span className="underline">didn't</span>. ❌</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pattern 3: Wh- Questions */}
        <div className="bg-green-50 p-8 rounded-[3rem] border-4 border-green-200 shadow-xl relative overflow-hidden">
          <div className="flex items-start gap-6 relative z-10">
            <img src="https://img.icons8.com/color/512/dog.png" className="w-24 h-24 drop-shadow-lg" alt="dog" />
            <div>
              <p className="text-green-600 font-black text-sm uppercase tracking-widest mb-2">Pattern 03: Wh- Question</p>
              <div className="space-y-4">
                <p className="text-3xl font-black text-slate-800 leading-relaxed font-handlee">
                  <span className="text-purple-600 italic">What</span> did you <span className="underline">do</span>?
                </p>
                <div className="flex items-center gap-4">
                   <img src="https://img.icons8.com/color/96/arrow.png" className="w-8 h-8 rotate-90" alt="arrow" />
                   <p className="text-3xl font-black text-emerald-600 drop-shadow-sm font-handlee">
                      I <span className="underline decoration-yellow-400 decoration-4 italic">played</span> online games. 🎮
                   </p>
                </div>
              </div>
            </div>
          </div>
          <img src="https://img.icons8.com/color/512/wolf.png" className="absolute -bottom-10 -right-10 w-40 opacity-10 rotate-12" alt="decor" />
        </div>
      </div>

      <div className="bg-yellow-100 p-6 rounded-[2rem] border-2 border-dashed border-yellow-400 text-center animate-pulse">
        <p className="text-2xl font-black text-yellow-700 italic">
          ✨ 記住這些樣子，我們現在去學習它們的規律吧！ ✨
        </p>
      </div>

      <div className="flex justify-center pt-6">
        <button onClick={onNext} className="px-16 py-7 bg-pink-500 hover:bg-pink-600 text-white text-3xl font-black rounded-full shadow-[0_8px_0_0_#9d174d] active:shadow-none active:translate-y-2 transition-all flex items-center gap-6 group">
          <img src="https://img.icons8.com/color/96/time.png" className="w-12 h-12 group-hover:rotate-12 transition-transform" alt="time" />
          <span>從「現在」開始冒險！</span>
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;
