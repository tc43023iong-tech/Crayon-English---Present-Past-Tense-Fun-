
import React from 'react';

const NegativesSection: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 relative">
      <div className="flex items-center gap-4 border-b-4 border-orange-200 pb-4">
        <span className="text-5xl">🚫</span>
        <h2 className="text-4xl font-bold text-orange-600 underline decoration-dotted">否定句練習: I didn't...</h2>
      </div>

      <div className="bg-orange-50 p-8 rounded-[3.5rem] border-4 border-orange-100 relative shadow-2xl overflow-hidden group">
        <div className="flex items-center gap-8 mb-8 relative z-10">
          <div className="relative">
            <img src="https://img.icons8.com/color/512/bear.png" className="w-28 h-28 drop-shadow-xl group-hover:scale-110 transition-transform" alt="Bear (Gian)" />
            <div className="absolute -top-3 -right-3 bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-2xl border-4 border-white shadow-md">!</div>
          </div>
          <div>
            <h3 className="text-4xl font-black text-orange-700 italic drop-shadow-sm">胖虎熊的倒霉日記 📓</h3>
            <p className="text-2xl text-slate-500 font-bold mt-2">"Today was so busy... What a terrible day! 💢"</p>
          </div>
        </div>
        
        <div className="bg-white/95 p-10 rounded-[2.5rem] border-2 border-orange-200 font-handlee leading-relaxed text-3xl shadow-inner relative z-10">
          <ul className="space-y-8">
            <li className="flex items-center gap-6 group/item">
              <span className="bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl group-hover/item:rotate-[20deg] transition-transform shadow-lg border-2 border-white">❌</span>
              <span className="text-slate-700">I <span className="font-black underline decoration-red-400 text-red-600 italic">didn't play</span> basketball. 🏀</span>
            </li>
            <li className="flex items-center gap-6 group/item">
              <span className="bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl group-hover/item:rotate-[20deg] transition-transform shadow-lg border-2 border-white">❌</span>
              <span className="text-slate-700">I <span className="font-black underline decoration-red-400 text-red-600 italic">didn't play</span> mobile games. 📱</span>
            </li>
            <li className="flex items-center gap-6 group/item">
              <span className="bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl group-hover/item:rotate-[20deg] transition-transform shadow-lg border-2 border-white">❌</span>
              <span className="text-slate-700">I <span className="font-black underline decoration-red-400 text-red-600 italic">didn't chat</span> with friends. 💬</span>
            </li>
          </ul>
          <div className="mt-10 p-6 bg-red-50 border-t-4 border-red-200 rounded-b-2xl text-center shadow-inner">
             <p className="font-black text-red-500 text-4xl italic animate-pulse">It was a terrible day! 😤</p>
          </div>
        </div>
        
        <img src="https://img.icons8.com/color/512/dog.png" className="absolute -bottom-10 -right-10 w-56 opacity-10 rotate-12 group-hover:rotate-0 transition-all pointer-events-none" alt="" />
      </div>

      <div className="grid md:grid-cols-3 gap-6 pt-6">
        {[
          { icon: 'wolf', subject: "Joe", action: "didn't paint", obj: "pictures yesterday." },
          { icon: 'rabbit', subject: "Mrs Black", action: "didn't talk", obj: "to her friends." },
          { icon: 'panda', subject: "We", action: "didn't watch", obj: "a film last night." },
        ].map((item, i) => (
          <div key={i} className="p-8 bg-white border-4 border-orange-50 rounded-[3rem] shadow-lg flex flex-col items-center text-center gap-4 hover:border-orange-200 transition-all hover:-translate-y-2 group">
            <img src={`https://img.icons8.com/color/512/${item.icon}.png`} className="w-24 h-24 drop-shadow-md group-hover:scale-110 transition-transform" alt={item.icon} />
            <div>
              <span className="font-black text-slate-800 text-2xl block mb-2">{item.subject}</span>
              <span className="text-red-500 font-black italic text-2xl bg-red-50 px-3 py-1 rounded-xl block mb-2">{item.action}</span>
              <span className="text-slate-500 font-bold text-lg">{item.obj}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button onClick={onNext} className="px-16 py-7 bg-orange-400 hover:bg-orange-500 text-white text-3xl font-black rounded-full shadow-[0_8px_0_0_#c2410c] active:shadow-none active:translate-y-2 transition-all flex items-center gap-6 group">
          <img src="https://img.icons8.com/color/96/question-mark.png" className="w-12 h-12 group-hover:rotate-12 transition-transform" alt="qa" />
          <span>前往問答大考驗！</span>
        </button>
      </div>
    </div>
  );
};

export default NegativesSection;
