
import React, { useState } from 'react';

const VerbPracticeSection: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const [selections, setSelections] = useState<Record<number, string>>({});

  const sentences = [
    { 
      text: "Alex __________ a picture {this morning}.", 
      verb: "paint", 
      ans: "painted", 
      options: ["paint", "paints", "painted"],
      explanation: "🎨 'paint' 直接加 -ed。'this morning' (今天早上) 是過去的時間詞喔！"
    },
    { 
      text: "{Last month} my brother __________ his piano exam.", 
      verb: "fail", 
      ans: "failed", 
      options: ["fail", "failed", "fails"],
      explanation: "🎹 'fail' 直接加 -ed。看到 'Last month' (上個月) 就要用過去式。"
    },
    { 
      text: "Mandy __________ the floor {yesterday}.", 
      verb: "mop", 
      ans: "mopped", 
      options: ["mop", "mopped", "mops"],
      explanation: "🧼 'mop' 是短元音，要『雙寫 p』再加 -ed！'yesterday' (昨天) 是魔幻時間詞。"
    },
    { 
      text: "{Two years ago} I __________ primary school.", 
      verb: "start", 
      ans: "started", 
      options: ["start", "started", "starts"],
      explanation: "🏫 'start' 直接加 -ed。'Two years ago' (兩年前) 是很久以前的事。"
    },
    { 
      text: "Our new neighbour __________ at me {this afternoon}.", 
      verb: "smile", 
      ans: "smiled", 
      options: ["smile", "smiled", "smiles"],
      explanation: "😊 'smile' 是 e 結尾，直接加 -d 即可。'this afternoon' (今天下午) 已經過去囉。"
    },
    { 
      text: "My brother and I __________ our messy room {last night}.", 
      verb: "tidy", 
      ans: "tidied", 
      options: ["tidy", "tidied", "tidies"],
      explanation: "📚 'tidy' 是輔音+y，要『去 y 變 i』再加 -ed！'last night' (昨晚) 就要變身。"
    },
    { 
      text: "Grandma __________ in a village {sixty years ago}.", 
      verb: "live", 
      ans: "lived", 
      options: ["live", "lived", "lives"],
      explanation: "🏠 'live' 是 e 結尾，直接加 -d。'sixty years ago' (六十年前) 絕對是過去式！"
    },
    { 
      text: "Paul __________ with his friends online {yesterday}.", 
      verb: "chat", 
      ans: "chatted", 
      options: ["chat", "chatted", "chats"],
      explanation: "💬 'chat' 是短元音，要『雙寫 t』再加 -ed！'yesterday' (昨天) 是關鍵詞。"
    },
    { 
      text: "A lot of people __________ up at the mall {last weekend}.", 
      verb: "line", 
      ans: "lined", 
      options: ["line", "lined", "lines"],
      explanation: "🚶 'line' 以 e 結尾，直接加 -d。'last weekend' (上週末) 表示事情已經做完了。"
    },
  ];

  const handleSelect = (idx: number, val: string) => {
    if (selections[idx]) return; // Already answered
    setSelections(prev => ({ ...prev, [idx]: val }));
  };

  const renderTextWithHighlighter = (text: string) => {
    const parts = text.split(/\{(.*?)\}/);
    return parts.map((part, i) => 
      i % 2 === 1 ? (
        <span key={i} className="bg-yellow-200 px-2 py-0.5 rounded-sm mx-1 shadow-[2px_2px_0px_rgba(254,240,138,0.5)] border-b-2 border-yellow-400 font-black text-yellow-800 rotate-1 inline-block">
          {part}
        </span>
      ) : part
    );
  };

  const allAnswered = Object.keys(selections).length === sentences.length;

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom duration-500">
      <div className="flex items-center gap-4 border-b-4 border-orange-200 pb-4">
        <span className="text-5xl">🖍️</span>
        <h2 className="text-4xl font-bold text-orange-600 italic underline decoration-wavy decoration-orange-200">動詞變身大挑戰 (Multiple Choice)</h2>
      </div>

      <div className="flex items-center gap-4 bg-orange-50 p-6 rounded-3xl border-2 border-orange-100 shadow-inner">
        <img src="https://img.icons8.com/color/96/panda.png" className="w-16 h-16" alt="panda" />
        <p className="text-xl text-slate-700 font-bold">
          熊貓老師：「點擊選項即刻檢查！別忘了看<span className="bg-yellow-100 px-1 border-b-2 border-yellow-400">黃色螢光筆</span>畫出的時間詞喔！」
        </p>
      </div>

      <div className="grid gap-8">
        {sentences.map((s, i) => {
          const userAnswer = selections[i];
          const isAnswered = !!userAnswer;
          const isCorrect = userAnswer === s.ans;

          return (
            <div key={i} className={`bg-white p-8 rounded-[2.5rem] border-4 transition-all shadow-md ${isAnswered ? (isCorrect ? 'border-green-200 bg-green-50/30' : 'border-red-200 bg-red-50/30') : 'border-slate-50 hover:border-orange-200'}`}>
              <div className="flex items-start gap-4 mb-6">
                <span className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-lg shadow-md flex-shrink-0 mt-1 ${isAnswered ? (isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white') : 'bg-orange-400 text-white'}`}>
                  {i + 1}
                </span>
                <p className="text-2xl font-bold text-slate-800 leading-relaxed pt-1">
                  {renderTextWithHighlighter(s.text.replace('__________', userAnswer ? userAnswer : '______'))}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 pl-14">
                {s.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleSelect(i, opt)}
                    disabled={isAnswered}
                    className={`px-8 py-3 rounded-2xl font-black text-xl border-b-4 transition-all ${
                      userAnswer === opt
                        ? (isCorrect ? 'bg-green-500 border-green-700 text-white scale-105' : 'bg-red-500 border-red-700 text-white')
                        : (isAnswered && opt === s.ans 
                            ? 'bg-green-100 border-green-300 text-green-700 font-black'
                            : isAnswered 
                                ? 'bg-white border-slate-100 text-slate-300 opacity-50'
                                : 'bg-white border-slate-200 text-slate-500 hover:bg-orange-50 hover:border-orange-200 hover:scale-105 active:scale-95')
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
                    <p className="font-black text-lg">{isCorrect ? '答對了！太厲害啦！' : '哎呀，再想一想：'}</p>
                    <p className="font-bold opacity-90">{s.explanation}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center pt-10">
        <button 
          onClick={onNext} 
          className={`px-16 py-8 text-white text-3xl font-black rounded-full shadow-[0_8px_0_0_#0369a1] transition-all flex items-center gap-4 ${
            allAnswered ? 'bg-sky-500 hover:bg-sky-600 hover:scale-105 active:translate-y-2 active:shadow-none' : 'bg-slate-300 cursor-not-allowed opacity-50'
          }`}
          disabled={!allAnswered}
        >
          <span>{allAnswered ? '前往下一關：女生悄悄話' : '完成所有挑戰後解鎖下一步'}</span>
          <img src="https://img.icons8.com/color/96/forward.png" className={`w-12 h-12 ${allAnswered ? 'animate-bounce' : ''}`} alt="next" />
        </button>
      </div>
    </div>
  );
};

export default VerbPracticeSection;
