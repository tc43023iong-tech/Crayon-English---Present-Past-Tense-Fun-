
import React from 'react';

const PastSimpleRulesSection: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const rules = [
    { 
      rule: '直接加 -ed', 
      present: 'listen (聽), paint (畫), play (玩)', 
      past: 'listened, painted, played', 
      color: 'bg-blue-100', 
      icon: '🎨' 
    },
    { 
      rule: '短元音+雙寫尾字母+ed', 
      present: 'chat (聊天), clap (拍手), skip (跳繩)', 
      past: 'chatted, clapped, skipped', 
      color: 'bg-yellow-100', 
      icon: '👏' 
    },
    { 
      rule: '輔音+y ➜ 變 i + ed', 
      present: 'study (學習/溫習), tidy (整理)', 
      past: 'studied, tidied', 
      color: 'bg-green-100', 
      icon: '📚' 
    },
    { 
      rule: '直接加 -d (e結尾)', 
      present: 'smile (微笑), live (居住), line (排隊)', 
      past: 'smiled, lived, lined', 
      color: 'bg-pink-100', 
      icon: '😊' 
    },
  ];

  return (
    <div className="space-y-8 animate-in slide-in-from-left duration-500 relative">
      <div className="flex items-center gap-4 border-b-4 border-orange-200 pb-4">
        <span className="text-5xl">📝</span>
        <h2 className="text-4xl font-bold text-orange-600 underline decoration-wavy decoration-orange-100">動詞大變身守則</h2>
      </div>

      <div className="flex items-center gap-4 bg-orange-50 p-5 rounded-2xl border-2 border-orange-100 shadow-inner group">
        <img src="https://img.icons8.com/color/512/wolf.png" className="w-20 h-20 drop-shadow-md group-hover:scale-110 transition-transform" alt="Wolf Scholar" />
        <div>
           <p className="text-2xl text-slate-700 font-black italic">小狼學者：「想跟我一樣聰明嗎？記住這些變化規則吧！」</p>
           <p className="text-orange-400 text-sm font-bold uppercase tracking-widest">Master the Rules of Past Tense 📖</p>
        </div>
      </div>

      <div className="relative group">
        <div className="overflow-hidden rounded-[2.5rem] border-8 border-orange-200 shadow-2xl bg-white relative">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-orange-400 text-white text-2xl">
                <th className="p-6">現在式 (Present)</th>
                <th className="p-6">過去式 (Past)</th>
                <th className="p-6">變化規則</th>
              </tr>
            </thead>
            <tbody className="text-xl font-bold">
              {rules.map((item, idx) => (
                <tr key={idx} className={`${item.color} border-b-2 border-white/50 hover:brightness-95 transition-all`}>
                  <td className="p-6 text-slate-700 italic">{item.present}</td>
                  <td className="p-6 font-black text-orange-700 drop-shadow-sm">{item.past}</td>
                  <td className="p-6 text-slate-600 font-semibold flex items-center gap-3">
                    <span className="text-3xl">{item.icon}</span> {item.rule}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <img src="https://img.icons8.com/color/96/sparkles.png" className="absolute -bottom-4 -right-4 w-12 animate-pulse" alt="sparkle" />
        </div>
      </div>

      <div className="bg-red-50 p-8 rounded-[3rem] border-4 border-red-200 relative shadow-xl transform -rotate-1 hover:rotate-0 transition-transform">
        <div className="flex items-center gap-4 mb-6 relative z-10">
          <span className="text-5xl">👑</span>
          <h3 className="text-3xl font-black text-red-600 italic">特別嘉賓：be 動詞的變身！</h3>
          <img src="https://img.icons8.com/color/512/dog.png" className="w-16 h-16 animate-pulse" alt="dog friend" />
        </div>
        <div className="grid grid-cols-2 gap-8 text-center relative z-10">
          <div className="bg-white p-8 rounded-3xl border-4 border-red-100 shadow-lg group hover:scale-105 transition-transform">
            <p className="text-slate-400 text-sm mb-2 uppercase font-black tracking-widest">現在式 (Present)</p>
            <p className="text-4xl font-black text-slate-700">am / is (是)</p>
            <div className="text-5xl my-4 flex justify-center animate-bounce">
               ⬇️
            </div>
            <p className="text-slate-400 text-sm mb-2 uppercase font-black tracking-widest">過去式 (Past)</p>
            <p className="text-6xl font-black text-red-600 drop-shadow-md">was</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border-4 border-red-100 shadow-lg group hover:scale-105 transition-transform">
            <p className="text-slate-400 text-sm mb-2 uppercase font-black tracking-widest">現在式 (Present)</p>
            <p className="text-4xl font-black text-slate-700">are (是)</p>
            <div className="text-5xl my-4 flex justify-center animate-bounce">
               ⬇️
            </div>
            <p className="text-slate-400 text-sm mb-2 uppercase font-black tracking-widest">過去式 (Past)</p>
            <p className="text-6xl font-black text-red-600 drop-shadow-md">were</p>
          </div>
        </div>
        {/* Background Panda Watermark */}
        <img src="https://img.icons8.com/color/512/panda.png" className="absolute top-4 right-4 w-32 opacity-10 pointer-events-none" alt="" />
      </div>

      <div className="flex justify-center pt-4">
        <button onClick={onNext} className="px-14 py-6 bg-orange-500 hover:bg-orange-600 text-white text-3xl font-black rounded-full shadow-[0_8px_0_0_#9a3412] active:shadow-none active:translate-y-2 transition-all flex items-center gap-4">
          <span className="text-4xl">🎮</span> 進入口語挑戰！
        </button>
      </div>
    </div>
  );
};

export default PastSimpleRulesSection;
