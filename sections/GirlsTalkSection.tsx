
import React, { useState } from 'react';

const GirlsTalkSection: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const correctAnswers: Record<string, string> = {
    q1: 'Did', q2: 'enjoy', q3: 'did',
    q4: 'What did you', q5: 'do', q6: 'played',
    q7: 'chatted', q8: 'What did you', q9: 'do',
    q10: 'studied', q11: 'painted', q12: 'Did',
    q13: 'enjoy', q14: "didn't", q15: 'tidied'
  };

  const options: Record<string, string[]> = {
    q1: ['Do', 'Did', 'Does'],
    q2: ['enjoy', 'enjoyed', 'enjoys'],
    q3: ['do', 'does', 'did'],
    q4: ['What did you', 'Where did you', 'How did you'],
    q5: ['do', 'did', 'does'],
    q6: ['play', 'played', 'playing'],
    q7: ['chat', 'chats', 'chatted'],
    get q8() { return ['What did you', 'When did you', 'Who did you'] },
    get q9() { return ['do', 'did', 'does'] },
    q10: ['study', 'studies', 'studied'],
    q11: ['paint', 'paints', 'painted'],
    q12: ['Do', 'Did', 'Does'],
    q13: ['enjoy', 'enjoyed', 'enjoys'],
    q14: ["didn't", "don't", "doesn't"],
    q15: ['tidy', 'tidies', 'tidied']
  };

  const handleSelect = (id: string, val: string) => {
    if (showResults) return;
    setSelections(prev => ({ ...prev, [id]: val }));
  };

  const checkAnswers = () => setShowResults(true);
  const allAnswered = Object.keys(selections).length === Object.keys(correctAnswers).length;

  // Fixed: Use React.FC to allow standard JSX attributes like 'key' in nested component definitions
  const SelectionButton: React.FC<{ id: string; label: string }> = ({ id, label }) => {
    const isSelected = selections[id] === label;
    const isCorrect = correctAnswers[id] === label;
    
    let btnStyle = "px-3 py-1 rounded-lg font-bold border-2 transition-all text-sm ";
    if (showResults) {
      if (isCorrect) btnStyle += "bg-green-500 border-green-700 text-white scale-105 shadow-md ";
      else if (isSelected) btnStyle += "bg-red-500 border-red-700 text-white opacity-50 ";
      else btnStyle += "bg-white border-slate-100 text-slate-300 ";
    } else {
      btnStyle += isSelected 
        ? "bg-sky-500 border-sky-700 text-white scale-105 shadow-md " 
        : "bg-white border-sky-100 text-sky-600 hover:bg-sky-50 ";
    }

    return (
      <button 
        onClick={() => handleSelect(id, label)} 
        disabled={showResults}
        className={btnStyle}
      >
        {label}
      </button>
    );
  };

  // Fixed: Use React.FC for consistent component definition and to satisfy JSX property checks
  const SelectionGroup: React.FC<{ id: string }> = ({ id }) => (
    <div className="inline-flex gap-1 p-1 bg-white/50 rounded-xl border border-sky-100 mx-1 align-middle">
      {options[id].map(opt => (
        <SelectionButton key={opt} id={id} label={opt} />
      ))}
    </div>
  );

  return (
    <div className="space-y-6 animate-in zoom-in duration-500">
      <div className="flex items-center justify-between border-b-4 border-sky-200 pb-4">
        <h2 className="text-4xl font-black text-sky-600 flex items-center gap-4 italic">
          <span className="text-5xl">👭</span> Girls’ Talk 💬
        </h2>
        <div className="flex -space-x-4">
          <img src="https://img.icons8.com/color/512/rabbit.png" className="w-16 h-16 rounded-full border-4 border-white shadow-xl z-30" alt="Julie" />
          <img src="https://img.icons8.com/color/512/cat.png" className="w-16 h-16 rounded-full border-4 border-white shadow-xl z-20" alt="Amy" />
          <img src="https://img.icons8.com/color/512/fox.png" className="w-16 h-16 rounded-full border-4 border-white shadow-xl z-10 opacity-50" alt="Coco" />
        </div>
      </div>
      
      <p className="text-2xl text-slate-600 font-black bg-sky-50 px-6 py-4 rounded-3xl border-4 border-dashed border-sky-200 shadow-inner italic">
        📝 選擇題：請為對話選出正確的動詞！
      </p>
      
      <div className="bg-white p-8 rounded-[3rem] border-4 border-sky-100 leading-relaxed text-xl shadow-2xl space-y-8 font-handlee">
        <div className="space-y-10">
          {/* Julie & Amy Row 1 */}
          <div className="flex gap-4 items-start">
            <div className="flex flex-col items-center flex-shrink-0">
              <img src="https://img.icons8.com/color/512/rabbit.png" className="w-16 h-16" alt="Julie" />
              <span className="text-xs font-black text-pink-500">Julie</span>
            </div>
            <div className="bg-pink-50 p-6 rounded-3xl rounded-tl-none border-2 border-pink-100 flex-1 text-2xl shadow-sm leading-loose">
              Hi there. ❶ <SelectionGroup id="q1" /> you ❷ <SelectionGroup id="q2" /> your weekend?
            </div>
          </div>

          <div className="flex gap-4 items-start flex-row-reverse text-right">
            <div className="flex flex-col items-center flex-shrink-0">
              <img src="https://img.icons8.com/color/512/cat.png" className="w-16 h-16" alt="Amy" />
              <span className="text-xs font-black text-yellow-600">Amy</span>
            </div>
            <div className="bg-yellow-50 p-6 rounded-3xl rounded-tr-none border-2 border-yellow-100 flex-1 text-2xl shadow-sm leading-loose">
              Yes, I ❸ <SelectionGroup id="q3" />.
              ❹ <SelectionGroup id="q4" /> ❺ <SelectionGroup id="q5" /> Amy?
            </div>
          </div>

          <div className="flex gap-4 items-start flex-row-reverse text-right">
             <div className="flex flex-col items-center flex-shrink-0">
              <img src="https://img.icons8.com/color/512/cat.png" className="w-16 h-16" alt="Amy" />
              <span className="text-xs font-black text-yellow-600">Amy</span>
            </div>
            <div className="bg-yellow-50 p-6 rounded-3xl rounded-tr-none border-2 border-yellow-100 flex-1 text-2xl shadow-sm leading-loose">
              I ❻ <SelectionGroup id="q6" /> card games with my sisters. 
              I ❼ <SelectionGroup id="q7" /> with my friends too.
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="flex flex-col items-center flex-shrink-0">
              <img src="https://img.icons8.com/color/512/rabbit.png" className="w-16 h-16" alt="Julie" />
              <span className="text-xs font-black text-pink-500">Julie</span>
            </div>
            <div className="bg-pink-50 p-6 rounded-3xl rounded-tl-none border-2 border-pink-100 flex-1 text-2xl shadow-sm leading-loose">
              That's great! How about you, Coco? ❽ <SelectionGroup id="q8" /> ❾ <SelectionGroup id="q9" />?
            </div>
          </div>

          <div className="flex gap-4 items-start flex-row-reverse text-right">
            <div className="flex flex-col items-center flex-shrink-0">
              <img src="https://img.icons8.com/color/512/fox.png" className="w-16 h-16" alt="Coco" />
              <span className="text-xs font-black text-blue-500">Coco</span>
            </div>
            <div className="bg-blue-50 p-6 rounded-3xl rounded-tr-none border-2 border-blue-100 flex-1 text-2xl shadow-sm leading-loose">
              I ❶⓪ <SelectionGroup id="q10" /> for tests. 
              I ❶① <SelectionGroup id="q11" /> a picture too.
              How about you, Julie? ❶② <SelectionGroup id="q12" /> you ❶③ <SelectionGroup id="q13" /> your weekend?
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="flex flex-col items-center flex-shrink-0">
              <img src="https://img.icons8.com/color/512/rabbit.png" className="w-16 h-16" alt="Julie" />
              <span className="text-xs font-black text-pink-500">Julie</span>
            </div>
            <div className="bg-pink-50 p-6 rounded-3xl rounded-tl-none border-2 border-pink-100 flex-1 text-2xl shadow-sm leading-loose">
              No, I ❶④ <SelectionGroup id="q14" />. 
              I ❶⑤ <SelectionGroup id="q15" /> my room. It was tiring! 🧼
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-6 justify-center pt-8">
        {!showResults ? (
          <button 
            onClick={checkAnswers} 
            disabled={!allAnswered}
            className={`px-16 py-6 text-white text-3xl font-black rounded-full shadow-lg transition-all flex items-center gap-4 ${
              allAnswered ? 'bg-sky-500 hover:bg-sky-600 hover:scale-105' : 'bg-slate-300 cursor-not-allowed opacity-50'
            }`}
          >
            <img src="https://img.icons8.com/color/96/ok.png" className="w-10 h-10" alt="check" />
            看對話正確嗎？ ✅
          </button>
        ) : (
          <div className="flex flex-col items-center gap-8 animate-in fade-in zoom-in">
             <div className="flex items-center gap-6 bg-green-50 px-10 py-5 rounded-[2.5rem] border-4 border-green-200 shadow-xl">
                <img src="https://img.icons8.com/color/96/medal.png" className="w-16 h-16" alt="medal" />
                <p className="text-3xl font-black text-green-600 italic">非常好！你全選對了嗎？</p>
             </div>
             <button onClick={onNext} className="px-16 py-6 bg-orange-500 text-white text-3xl font-black rounded-full shadow-[0_8px_0_0_#c2410c] hover:bg-orange-600 transition-all flex items-center gap-4">
                前往下一關：魔法 "so" 🏹
             </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GirlsTalkSection;
