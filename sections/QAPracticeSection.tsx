
import React from 'react';

const QAPracticeSection: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const qaData = [
    { q: "Did you go shopping at the weekend?", a: "Yes, I did.", icon: "rabbit" },
    { q: "Did you visit your relatives last Sunday?", a: "No, I didn't.", icon: "dog" },
    { q: "Did you get any red packets last Chinese New Year?", a: "Yes, I did.", icon: "cat" },
    { q: "Did your brother build a sandcastle?", a: "No, he didn't.", icon: "bear" },
  ];

  const getCharImg = (name: string) => `https://img.icons8.com/color/512/${name}.png`;

  return (
    <div className="space-y-8 animate-in slide-in-from-right duration-500">
      <div className="flex items-center gap-4 border-b-4 border-blue-200 pb-4">
        <span className="text-5xl">❓</span>
        <h2 className="text-4xl font-black text-blue-600 underline decoration-dotted italic">問答高手 Q&A Challenge</h2>
      </div>

      <div className="grid gap-6">
        {qaData.map((item, idx) => (
          <div key={idx} className="bg-white p-8 rounded-[2.5rem] border-4 border-blue-50 shadow-xl hover:shadow-2xl transition-all flex items-center gap-8 group">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-blue-100 rounded-full scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <img src={getCharImg(item.icon)} className="w-24 h-24 object-contain relative z-10 drop-shadow-lg" alt={item.icon} />
            </div>
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3">
                <span className="bg-blue-500 text-white text-sm font-black px-4 py-1.5 rounded-full shadow-sm italic uppercase tracking-wider">Question</span>
                <p className="text-2xl font-black text-slate-700 italic leading-relaxed">
                  {item.q}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-orange-400 text-white text-sm font-black px-4 py-1.5 rounded-full shadow-sm italic uppercase tracking-wider">Answer</span>
                <p className="text-3xl font-black text-orange-500 drop-shadow-sm">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-yellow-50 p-8 rounded-[3rem] border-dashed border-4 border-yellow-200 flex flex-col md:flex-row items-center gap-8 shadow-inner relative overflow-hidden">
        <img src="https://img.icons8.com/color/512/panda.png" className="w-32 h-32 drop-shadow-lg relative z-10" alt="Doraemon Panda" />
        <div className="relative z-10">
          <p className="text-2xl font-black text-yellow-700 mb-2 flex items-center gap-2 italic">
            <img src="https://img.icons8.com/color/48/light-at-the-end-of-tunnel.png" alt="bulb" className="w-8 h-8" />
            熊貓老師的小撇步：
          </p>
          <p className="text-slate-600 text-xl leading-relaxed font-bold">
            回答時，如果主角是女生要用 <span className="bg-white px-3 py-1 rounded-xl font-black text-pink-500 shadow-sm border-2 border-pink-100 mx-1 italic">she</span>，
            男生就要用 <span className="bg-white px-3 py-1 rounded-xl font-black text-blue-500 shadow-sm border-2 border-blue-100 mx-1 italic">he</span> 喔！
            別搞錯主角的性別囉！ 🐾✨
          </p>
        </div>
        <img src="https://img.icons8.com/color/96/sparkles.png" className="absolute top-2 right-2 w-12 opacity-40 animate-pulse" alt="" />
      </div>

      <div className="flex justify-center pt-4">
        <button onClick={onNext} className="px-16 py-7 bg-blue-500 hover:bg-blue-600 text-white text-3xl font-black rounded-full shadow-[0_8px_0_0_#0369a1] active:shadow-none active:translate-y-2 transition-all flex items-center gap-4">
          <span>學拼寫魔法守則！</span>
          <img src="https://img.icons8.com/color/96/pencil.png" className="w-12 h-12" alt="pencil" />
        </button>
      </div>
    </div>
  );
};

export default QAPracticeSection;
