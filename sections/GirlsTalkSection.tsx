
import React, { useState } from 'react';

const GirlsTalkSection: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const [selections, setSelections] = useState<Record<string, string>>({});

  const correctAnswers: Record<string, string> = {
    q1: 'Did', q2: 'enjoy', q3: 'did',
    q4: 'What did you', q5: 'do', q6: 'played',
    q7: 'chatted', q8: 'What did you', q9: 'do',
    q10: 'studied', q11: 'painted', q12: 'Did',
    q13: 'enjoy', q14: "didn't", q15: 'tidied'
  };

  const explanations: Record<string, string> = {
    q1: "🕰️ 過去式問句要用 'Did' 開頭喔！",
    q2: "🪄 'Did' 是魔法開關，後面的動詞要變回原形 'enjoy'！",
    q3: "✅ 肯定回答用 'Yes, I did'。",
    q4: "❓ 詢問『做了什麼』用 'What did you'。",
    q5: "🪄 問句裡有 'did'，後面的動詞要用原形 'do'。",
    q6: "🏠 回答過去發生的事，要用過去式 'played'。",
    q7: "💬 'chat' 是短元音，要『雙寫 t』再加 -ed 變 'chatted'。",
    q8: "❓ 問 Coco 做過的事，同樣用 'What did you'。",
    q9: "🪄 規則一樣：問句用原形 'do'。",
    q10: "📚 'study' 去 y 變 i 再加 -ed 變成 'studied'。",
    q11: "🎨 'paint' 直接加 -ed 變 'painted'。",
    q12: "🕰️ 再次開啟過去式時光機，用 'Did'！",
    q13: "🪄 又是魔法開關，動詞變回原形 'enjoy'！",
    q14: "❌ 否定回答用 'No, I didn't'。",
    q15: "🧼 'tidy' 是輔音+y，去 y 變 i 加 -ed 變成 'tidied'。"
  };

  const options: Record<string, string[]> = {
    q1: ['Do', 'Did', 'Does'],
    q2: ['enjoy', 'enjoyed', 'enjoys'],
    q3: ['do', 'does', 'did'],
    q4: ['What did you', 'Where did you', 'How did you'],
    q5: ['do', 'did', 'does'],
    q6: ['play', 'played', 'playing'],
    q7: ['chat', 'chats', 'chatted'],
    q8: ['What did you', 'When did you', 'Who did you'],
    q9: ['do', 'did', 'does'],
    q10: ['study', 'studies', 'studied'],
    q11: ['paint', 'paints', 'painted'],
    q12: ['Do', 'Did', 'Does'],
    q13: ['enjoy', 'enjoyed', 'enjoys'],
    q14: ["didn't", "don't", "doesn't"],
    q15: ['tidy', 'tidies', 'tidied']
  };

  const handleSelect = (id: string, val: string) => {
    if (selections[id]) return; // Already answered
    setSelections(prev => ({ ...prev, [id]: val }));
  };

  const allAnswered = Object.keys(selections).length === Object.keys(correctAnswers).length;

  const renderHighlightedText = (text: string) => {
    const parts = text.split(/\{(.*?)\}/);
    return parts.map((part, i) => 
      i % 2 === 1 ? (
        <span key={i} className="bg-yellow-200 px-2 rounded shadow-sm border-b-2 border-yellow-400 font-black text-yellow-800 rotate-1 inline-block mx-1">
          {part}
        </span>
      ) : part
    );
  };

  const SelectionGroup: React.FC<{ id: string }> = ({ id }) => {
    const userAnswer = selections[id];
    const isAnswered = !!userAnswer;
    const isCorrect = userAnswer === correctAnswers[id];

    return (
      <div className="inline-block align-middle mx-1 group/group relative">
        <div className="flex gap-1 p-1 bg-white/50 rounded-xl border border-sky-100">
          {options[id].map(opt => {
            const isThisSelected = userAnswer === opt;
            const isThisCorrect = opt === correctAnswers[id];
            
            let btnStyle = "px-3 py-1 rounded-lg font-bold border-2 transition-all text-sm ";
            if (isAnswered) {
              if (isThisCorrect) btnStyle += "bg-green-500 border-green-700 text-white scale-105 shadow-md ";
              else if (isThisSelected) btnStyle += "bg-red-500 border-red-700 text-white ";
              else btnStyle += "bg-white border-slate-50 text-slate-300 opacity-50 ";
            } else {
              btnStyle += "bg-white border-sky-50 text-sky-600 hover:bg-sky-50 hover:border-sky-200 ";
            }

            return (
              <button 
                key={opt}
                onClick={() => handleSelect(id, opt)} 
                disabled={isAnswered}
                className={btnStyle}
              >
                {opt}
              </button>
            );
          })}
        </div>
        {isAnswered && (
          <div className={`absolute top-full left-0 z-50 mt-2 w-64 p-3 rounded-xl border-2 shadow-xl animate-in fade-in zoom-in duration-300 font-bold text-sm ${isCorrect ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'}`}>
            <p className="flex items-center gap-2">
              <span className="text-xl">{isCorrect ? '🌟' : '💡'}</span>
              {explanations[id]}
            </p>
          </div>
        )}
      </div>
    );
  };

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
      
      <div className="flex items-center gap-4 bg-sky-50 p-6 rounded-3xl border-4 border-dashed border-sky-200 shadow-inner">
        <img src="https://img.icons8.com/color/96/panda.png" className="w-16 h-16" alt="panda" />
        <p className="text-xl text-slate-700 font-black">
          熊貓老師：「點擊選項自動批改！每個對話塊都有魔法解釋喔！✨」
        </p>
      </div>
      
      <div className="bg-white p-8 rounded-[3rem] border-4 border-sky-100 leading-relaxed text-xl shadow-2xl space-y-12 font-handlee relative">
        {/* Row 1: Julie asking Amy */}
        <div className="flex gap-4 items-start group">
          <div className="flex flex-col items-center flex-shrink-0">
            <img src="https://img.icons8.com/color/512/rabbit.png" className="w-16 h-16" alt="Julie" />
            <span className="text-xs font-black text-pink-500">Julie</span>
          </div>
          <div className="bg-pink-50 p-6 rounded-3xl rounded-tl-none border-2 border-pink-100 flex-1 text-2xl shadow-sm leading-loose">
            Hi there. ❶ <SelectionGroup id="q1" /> you ❷ <SelectionGroup id="q2" /> your {renderHighlightedText("{weekend}")}?
          </div>
        </div>

        {/* Row 2: Amy replying */}
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

        {/* Row 3: Amy detailing */}
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

        {/* Row 4: Julie asking Coco */}
        <div className="flex gap-4 items-start">
          <div className="flex flex-col items-center flex-shrink-0">
            <img src="https://img.icons8.com/color/512/rabbit.png" className="w-16 h-16" alt="Julie" />
            <span className="text-xs font-black text-pink-500">Julie</span>
          </div>
          <div className="bg-pink-50 p-6 rounded-3xl rounded-tl-none border-2 border-pink-100 flex-1 text-2xl shadow-sm leading-loose">
            That's great! How about you, Coco? ❽ <SelectionGroup id="q8" /> ❾ <SelectionGroup id="q9" />?
          </div>
        </div>

        {/* Row 5: Coco replying */}
        <div className="flex gap-4 items-start flex-row-reverse text-right">
          <div className="flex flex-col items-center flex-shrink-0">
            <img src="https://img.icons8.com/color/512/fox.png" className="w-16 h-16" alt="Coco" />
            <span className="text-xs font-black text-blue-500">Coco</span>
          </div>
          <div className="bg-blue-50 p-6 rounded-3xl rounded-tr-none border-2 border-blue-100 flex-1 text-2xl shadow-sm leading-loose">
            I ❶⓪ <SelectionGroup id="q10" /> for tests. 
            I ❶① <SelectionGroup id="q11" /> a picture too.
            How about you, Julie? ❶② <SelectionGroup id="q12" /> you ❶③ <SelectionGroup id="q13" /> your {renderHighlightedText("{weekend}")}?
          </div>
        </div>

        {/* Row 6: Julie ending */}
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

      <div className="flex justify-center pt-10">
        <button 
          onClick={onNext} 
          disabled={!allAnswered}
          className={`px-16 py-7 text-white text-3xl font-black rounded-full shadow-[0_8px_0_0_#065f46] transition-all flex items-center gap-4 ${
            allAnswered ? 'bg-emerald-500 hover:bg-emerald-600 hover:scale-105 active:translate-y-2 active:shadow-none' : 'bg-slate-300 cursor-not-allowed opacity-50'
          }`}
        >
          <span>{allAnswered ? '前往下一關：魔法 "so" 🏹' : '完成對話後出發！'}</span>
          <img src="https://img.icons8.com/color/96/forward.png" className={`w-12 h-12 ${allAnswered ? 'animate-bounce' : ''}`} alt="next" />
        </button>
      </div>
    </div>
  );
};

export default GirlsTalkSection;
