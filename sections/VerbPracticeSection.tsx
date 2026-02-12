
import React, { useState } from 'react';

const VerbPracticeSection: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const [inputs, setInputs] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  const sentences = [
    { text: "Alex __________ (paint) a picture this morning.", ans: "painted" },
    { text: "Last month my brother __________ (fail) his piano exam.", ans: "failed" },
    { text: "Mandy __________ (mop) the floor yesterday.", ans: "mopped" },
    { text: "Two years ago I __________ (start) primary school.", ans: "started" },
    { text: "Our new neighbour __________ (smile) at me this afternoon.", ans: "smiled" },
    { text: "My brother and I __________ (tidy) our messy room last night.", ans: "tidied" },
    { text: "Grandma __________ (live) in a village sixty years ago.", ans: "lived" },
    { text: "Paul __________ (chat) with his friends online yesterday.", ans: "chatted" },
    { text: "A lot of people __________ (line) up at the mall last weekend.", ans: "lined" },
  ];

  const handleInput = (idx: number, val: string) => {
    setInputs(prev => ({ ...prev, [idx]: val.toLowerCase().trim() }));
  };

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom duration-500">
      <div className="flex items-center gap-4 border-b-4 border-orange-200 pb-4">
        <span className="text-5xl">🖍️</span>
        <h2 className="text-4xl font-bold text-orange-600 italic">動詞變身大挑戰 (Verb Fun)</h2>
      </div>

      <p className="text-xl text-slate-600 bg-orange-50 p-4 rounded-2xl border-2 border-orange-100">
        哆啦A夢：「看看這些句子，把括號裡的動詞變身成<span className="text-orange-600 font-bold">過去式</span>吧！」
      </p>

      <div className="grid gap-4">
        {sentences.map((s, i) => (
          <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-2xl border-2 border-slate-100 shadow-sm hover:border-orange-200 transition-all">
            <span className="bg-orange-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">{i+1}</span>
            <div className="flex-1 text-lg">
               {s.text.split('__________').map((part, pIdx) => (
                 <React.Fragment key={pIdx}>
                   {part}
                   {pIdx === 0 && (
                     <input 
                       className={`w-32 border-b-2 bg-transparent text-center font-bold outline-none mx-1 ${
                         checked 
                          ? (inputs[i] === s.ans ? 'text-green-600 border-green-500' : 'text-red-500 border-red-500')
                          : 'border-orange-300 text-blue-600'
                       }`}
                       onChange={(e) => handleInput(i, e.target.value)}
                       disabled={checked}
                     />
                   )}
                 </React.Fragment>
               ))}
            </div>
            {checked && inputs[i] !== s.ans && (
              <span className="text-green-600 font-bold text-sm">➔ {s.ans}</span>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4">
        {!checked ? (
          <button onClick={() => setChecked(true)} className="px-12 py-4 bg-orange-500 text-white text-2xl font-bold rounded-full shadow-lg hover:scale-105 transition-transform">
            檢查我的魔法！ ✨
          </button>
        ) : (
          <button onClick={onNext} className="px-12 py-4 bg-sky-500 text-white text-2xl font-bold rounded-full shadow-lg hover:scale-105 transition-transform">
            下一關：女生悄悄話 👧
          </button>
        )}
      </div>
    </div>
  );
};

export default VerbPracticeSection;
