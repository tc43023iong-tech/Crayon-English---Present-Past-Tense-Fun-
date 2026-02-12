
import React, { useState } from 'react';

const VerbPracticeSection: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const [selections, setSelections] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  const sentences = [
    { text: "Alex __________ a picture this morning.", verb: "paint", ans: "painted", options: ["paint", "paints", "painted"] },
    { text: "Last month my brother __________ his piano exam.", verb: "fail", ans: "failed", options: ["fail", "failed", "fails"] },
    { text: "Mandy __________ the floor yesterday.", verb: "mop", ans: "mopped", options: ["mop", "mopped", "mops"] },
    { text: "Two years ago I __________ primary school.", verb: "start", ans: "started", options: ["start", "started", "starts"] },
    { text: "Our new neighbour __________ at me this afternoon.", verb: "smile", ans: "smiled", options: ["smile", "smiled", "smiles"] },
    { text: "My brother and I __________ our messy room last night.", verb: "tidy", ans: "tidied", options: ["tidy", "tidied", "tidies"] },
    { text: "Grandma __________ in a village sixty years ago.", verb: "live", ans: "lived", options: ["live", "lived", "lives"] },
    { text: "Paul __________ with his friends online yesterday.", verb: "chat", ans: "chatted", options: ["chat", "chatted", "chats"] },
    { text: "A lot of people __________ up at the mall last weekend.", verb: "line", ans: "lined", options: ["line", "lined", "lines"] },
  ];

  const handleSelect = (idx: number, val: string) => {
    if (checked) return;
    setSelections(prev => ({ ...prev, [idx]: val }));
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
          熊貓老師：「選出正確的<span className="text-orange-600 underline">過去式</span>動詞，幫句子完成變身吧！」
        </p>
      </div>

      <div className="grid gap-6">
        {sentences.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border-4 border-slate-50 shadow-sm hover:border-orange-200 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-orange-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-black text-sm shadow-md">{i+1}</span>
              <p className="text-xl font-bold text-slate-800 leading-relaxed">
                {s.text.replace('__________', '______')}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 pl-11">
              {s.options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSelect(i, opt)}
                  disabled={checked}
                  className={`px-6 py-2 rounded-2xl font-black text-lg border-b-4 transition-all ${
                    selections[i] === opt
                      ? (checked 
                          ? (opt === s.ans ? 'bg-green-500 border-green-700 text-white' : 'bg-red-500 border-red-700 text-white')
                          : 'bg-orange-500 border-orange-700 text-white scale-105')
                      : (checked && opt === s.ans 
                          ? 'bg-green-100 border-green-300 text-green-700 animate-pulse'
                          : 'bg-white border-slate-200 text-slate-500 hover:bg-orange-50 hover:border-orange-200')
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            {checked && selections[i] !== s.ans && (
              <p className="mt-2 pl-11 text-red-500 font-bold text-sm"> Oops! 正確答案是: <span className="underline">{s.ans}</span></p>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 pt-6">
        {!checked ? (
          <button 
            onClick={() => setChecked(true)} 
            disabled={!allAnswered}
            className={`px-16 py-6 text-white text-3xl font-black rounded-full shadow-lg transition-all flex items-center gap-4 ${
              allAnswered ? 'bg-orange-500 hover:bg-orange-600 hover:scale-105' : 'bg-slate-300 cursor-not-allowed opacity-50'
            }`}
          >
            <img src="https://img.icons8.com/color/96/ok.png" className="w-10 h-10" alt="check" />
            檢查我的答案！ ✨
          </button>
        ) : (
          <button onClick={onNext} className="px-16 py-6 bg-sky-500 hover:bg-sky-600 text-white text-3xl font-black rounded-full shadow-lg hover:scale-105 transition-all flex items-center gap-4">
            <span>下一關：女生悄悄話</span>
            <img src="https://img.icons8.com/color/96/forward.png" className="w-10 h-10" alt="next" />
          </button>
        )}
      </div>
    </div>
  );
};

export default VerbPracticeSection;
