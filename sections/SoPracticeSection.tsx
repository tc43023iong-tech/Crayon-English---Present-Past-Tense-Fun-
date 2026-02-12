
import React, { useState } from 'react';

const SoPracticeSection: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const [selections, setSelections] = useState<Record<number, string>>({});

  const quizData = [
    {
      reason: "I was {free}",
      result: "I played mobile games. 🎮",
      ans: "so",
      options: ["so", "but", "because"],
      explanation: "✨ 因為『有空』(free)，所以去『玩遊戲』。so 連接了原因和結果！"
    },
    {
      reason: "I was {sick}",
      result: "I didn't practise the piano. 🎹",
      ans: "so",
      options: ["so", "and", "but"],
      explanation: "✨ 因為『生病了』(sick)，所以『沒練琴』。so 就像一個小箭頭指著結果。"
    },
    {
      reason: "I was {hungry}",
      result: "I ate a cake. 🍰",
      ans: "so",
      options: ["so", "because", "or"],
      explanation: "✨ 肚子餓是原因，吃蛋糕是結果，中間用 so 連結最合適！"
    },
    {
      reason: "The room was {messy}",
      result: "I tidied it. 🧼",
      ans: "so",
      options: ["so", "but", "and"],
      explanation: "✨ 房間亂(messy)是原因，收拾(tidied)是結果。記住：原因 + so + 結果。"
    }
  ];

  const handleSelect = (idx: number, val: string) => {
    if (selections[idx]) return;
    setSelections(prev => ({ ...prev, [idx]: val }));
  };

  const renderHighlighted = (text: string) => {
    const parts = text.split(/\{(.*?)\}/);
    return parts.map((part, i) => 
      i % 2 === 1 ? (
        <span key={i} className="bg-yellow-200 px-2 py-0.5 rounded-sm shadow-[2px_2px_0px_rgba(254,240,138,0.5)] border-b-2 border-yellow-400 font-black text-yellow-800 italic mx-1">
          {part}
        </span>
      ) : part
    );
  };

  const allAnswered = Object.keys(selections).length === quizData.length;

  return (
    <div className="space-y-8 animate-in slide-in-from-top duration-500 relative">
      <div className="flex items-center gap-4 border-b-4 border-emerald-200 pb-4">
        <span className="text-5xl">🎯</span>
        <h2 className="text-4xl font-black text-emerald-600 italic">魔法 "so" 連結器 🏹</h2>
      </div>

      <div className="bg-emerald-50 p-8 rounded-[3rem] border-4 border-emerald-100 text-center relative shadow-xl overflow-hidden group">
        <div className="relative z-10">
          <div className="flex justify-center items-center gap-4 mb-6">
             <img src="https://img.icons8.com/color/512/robot-2.png" className="w-20 h-20 drop-shadow-md animate-bounce" alt="robot" />
             <img src="https://img.icons8.com/color/512/cat.png" className="w-20 h-20 drop-shadow-md" alt="cat" />
             <p className="text-3xl font-black text-emerald-800 italic">
               熊貓老師：「so 就像一個箭頭，<br/>
               前面是<span className="text-red-500 underline decoration-wavy">原因</span>，後面是<span className="text-blue-500 underline decoration-wavy">結果</span>。」
             </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-white/60 p-8 rounded-[2.5rem] border-2 border-emerald-50 backdrop-blur-sm">
            <div className="p-6 bg-red-100/50 rounded-3xl border-2 border-red-200 w-full md:w-5/12 transform -rotate-1">
              <p className="font-black text-red-600 text-2xl mb-2">原因 (Reason) 🤒</p>
              <p className="text-3xl font-handlee italic font-bold">I was sick.</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-black text-emerald-500 animate-pulse">SO</span>
              <img src="https://img.icons8.com/color/96/long-arrow-right.png" className="w-16 h-16" alt="arrow" />
            </div>
            <div className="p-6 bg-blue-100/50 rounded-3xl border-2 border-blue-200 w-full md:w-5/12 transform rotate-1">
              <p className="font-black text-blue-600 text-2xl mb-2">結果 (Result) 📖</p>
              <p className="text-3xl font-handlee italic font-bold">I didn't study.</p>
            </div>
          </div>
        </div>
        <img src="https://img.icons8.com/color/512/panda.png" className="absolute -bottom-10 -left-10 w-48 opacity-10" alt="decor" />
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-3">
            <span className="text-4xl">🦊</span>
            <h3 className="text-3xl font-black text-slate-700 italic underline decoration-emerald-200 decoration-4">互動填空 (Multiple Choice)：</h3>
        </div>
        
        <div className="grid gap-6">
          {quizData.map((item, i) => {
            const userAnswer = selections[i];
            const isAnswered = !!userAnswer;
            const isCorrect = userAnswer === item.ans;

            return (
              <div key={i} className={`bg-white p-8 rounded-[3rem] border-4 transition-all shadow-md ${isAnswered ? (isCorrect ? 'border-green-200 bg-green-50/20' : 'border-red-200 bg-red-50/20') : 'border-slate-100 hover:border-emerald-200'}`}>
                <div className="flex flex-wrap items-center gap-4 text-2xl font-bold text-slate-700 leading-loose">
                  <span className="bg-emerald-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-sm">{i+1}</span>
                  <span>{renderHighlighted(item.reason)}</span>
                  <div className={`w-24 h-12 border-b-4 flex items-center justify-center rounded-xl font-black transition-all ${isAnswered ? (isCorrect ? 'bg-green-500 text-white border-green-700' : 'bg-red-500 text-white border-red-700') : 'bg-yellow-50 border-emerald-200'}`}>
                    {userAnswer || '???'}
                  </div>
                  <span>{item.result}</span>
                </div>

                <div className="flex gap-4 mt-6 ml-14">
                  {item.options.map(opt => (
                    <button
                      key={opt}
                      onClick={() => handleSelect(i, opt)}
                      disabled={isAnswered}
                      className={`px-6 py-2 rounded-2xl font-black text-xl border-b-4 transition-all ${
                        userAnswer === opt
                          ? (isCorrect ? 'bg-green-500 border-green-700 text-white' : 'bg-red-500 border-red-700 text-white')
                          : (isAnswered && opt === item.ans ? 'bg-green-100 border-green-300 text-green-700' : 'bg-white border-slate-100 text-slate-300 opacity-50')
                          + (!isAnswered ? ' bg-white border-slate-200 text-emerald-600 hover:bg-emerald-50 hover:border-emerald-300' : '')
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                {isAnswered && (
                  <div className={`mt-6 ml-14 p-4 rounded-2xl border-2 flex items-start gap-3 animate-in fade-in slide-in-from-left duration-300 ${isCorrect ? 'bg-green-100 border-green-200 text-green-800' : 'bg-red-100 border-red-200 text-red-800'}`}>
                    <span className="text-2xl">{isCorrect ? '🌟' : '💡'}</span>
                    <div>
                      <p className="font-black text-lg">{isCorrect ? '太棒了！邏輯滿分！' : '哎呀，這題要用 so 喔：'}</p>
                      <p className="font-bold opacity-90">{item.explanation}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center pt-8">
        <button 
          onClick={onNext} 
          disabled={!allAnswered}
          className={`px-16 py-7 text-white text-3xl font-black rounded-full shadow-[0_8px_0_0_#065f46] transition-all flex items-center gap-4 ${
            allAnswered ? 'bg-emerald-500 hover:bg-emerald-600 hover:scale-105 active:translate-y-2 active:shadow-none' : 'bg-slate-300 cursor-not-allowed opacity-50'
          }`}
        >
          <span>{allAnswered ? '領取大獎牌！🥇' : '完成所有連結後解鎖！'}</span>
          <img src="https://img.icons8.com/color/96/medal.png" className={`w-12 h-12 ${allAnswered ? 'animate-bounce' : ''}`} alt="next" />
        </button>
      </div>
    </div>
  );
};

export default SoPracticeSection;
