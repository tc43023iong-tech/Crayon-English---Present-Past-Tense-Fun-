
import React, { useState } from 'react';

const GirlsTalkSection: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const correctAnswers: Record<string, string> = {
    q1: 'Did', q2: 'enjoy', q3: 'did',
    q4: 'What did you', q5: 'do', q6: 'played',
    q7: 'chatted', q8: 'What did you', q9: 'do',
    q10: 'studied', q11: 'painted', q12: 'Did',
    q13: 'enjoy', q14: "didn't", q15: 'tidied'
  };

  const handleChange = (id: string, val: string) => {
    setAnswers(prev => ({ ...prev, [id]: val }));
  };

  const checkAnswers = () => setShowResults(true);

  return (
    <div className="space-y-6 animate-in zoom-in duration-500">
      <div className="flex items-center justify-between border-b-4 border-sky-200 pb-4">
        <h2 className="text-4xl font-black text-sky-600 flex items-center gap-4 italic">
          <span className="text-5xl">👭</span> Girls’ Talk 💬
        </h2>
        <div className="flex -space-x-4">
          <img src="https://img.icons8.com/color/512/rabbit.png" className="w-16 h-16 rounded-full border-4 border-white shadow-xl z-30 transform hover:scale-125 transition-transform" alt="Julie (Rabbit)" />
          <img src="https://img.icons8.com/color/512/cat.png" className="w-16 h-16 rounded-full border-4 border-white shadow-xl z-20 transform hover:scale-125 transition-transform" alt="Amy (Cat)" />
          <img src="https://img.icons8.com/color/512/fox.png" className="w-16 h-16 rounded-full border-4 border-white shadow-xl z-10 opacity-50 transform hover:scale-125 transition-transform" alt="Coco (Fox)" />
        </div>
      </div>
      
      <p className="text-2xl text-slate-600 font-black bg-sky-50 px-6 py-4 rounded-3xl border-4 border-dashed border-sky-200 shadow-inner italic">
        📝 填填看：請根據對話提示填入正確的動詞！
      </p>
      
      <div className="bg-white p-8 rounded-[3rem] border-4 border-sky-100 leading-relaxed text-xl shadow-2xl space-y-8 font-handlee">
        {/* Julie & Amy */}
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="flex flex-col items-center flex-shrink-0">
              <img src="https://img.icons8.com/color/512/rabbit.png" className="w-20 h-20" alt="Julie" />
              <span className="text-xs font-black text-pink-500 bg-pink-50 px-2 py-0.5 rounded-full mt-1 border border-pink-100">Julie</span>
            </div>
            <div className="bg-pink-50 p-6 rounded-3xl rounded-tl-none border-2 border-pink-100 flex-1 text-2xl shadow-sm relative">
              Hi there. ❶ <input className="w-20 border-b-4 border-pink-300 bg-transparent text-center focus:border-sky-400 outline-none font-black text-sky-600" placeholder="D..." onChange={e => handleChange('q1', e.target.value)} /> 
              you ❷ <input className="w-28 border-b-4 border-pink-300 bg-transparent text-center focus:border-sky-400 outline-none font-black text-sky-600" placeholder="(enjoy)" onChange={e => handleChange('q2', e.target.value)} /> 
              your weekend?
            </div>
          </div>

          <div className="flex gap-4 items-start flex-row-reverse text-right">
            <div className="flex flex-col items-center flex-shrink-0">
              <img src="https://img.icons8.com/color/512/cat.png" className="w-20 h-20" alt="Amy" />
              <span className="text-xs font-black text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded-full mt-1 border border-yellow-100">Amy</span>
            </div>
            <div className="bg-yellow-50 p-6 rounded-3xl rounded-tr-none border-2 border-yellow-100 flex-1 text-2xl shadow-sm relative">
              Yes, I ❸ <input className="w-16 border-b-4 border-yellow-300 bg-transparent text-center focus:border-sky-400 outline-none font-black text-sky-600" placeholder="..." onChange={e => handleChange('q3', e.target.value)} />.
              ❹ <input className="w-40 border-b-4 border-yellow-300 bg-transparent text-center focus:border-sky-400 outline-none font-black text-sky-600" placeholder="W... d... y..." onChange={e => handleChange('q4', e.target.value)} /> 
              ❺ <input className="w-16 border-b-4 border-yellow-300 bg-transparent text-center focus:border-sky-400 outline-none font-black text-sky-600" placeholder="(do)" onChange={e => handleChange('q5', e.target.value)} />, Amy?
            </div>
          </div>

          <div className="flex gap-4 items-start flex-row-reverse text-right">
             <div className="flex flex-col items-center flex-shrink-0">
              <img src="https://img.icons8.com/color/512/cat.png" className="w-20 h-20" alt="Amy" />
              <span className="text-xs font-black text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded-full mt-1 border border-yellow-100">Amy</span>
            </div>
            <div className="bg-yellow-50 p-6 rounded-3xl rounded-tr-none border-2 border-yellow-100 flex-1 text-2xl shadow-sm relative">
              I ❻ <input className="w-32 border-b-4 border-yellow-300 bg-transparent text-center focus:border-sky-400 outline-none font-black text-sky-600" placeholder="(play)" onChange={e => handleChange('q6', e.target.value)} /> card games with my sisters. 
              I ❼ <input className="w-32 border-b-4 border-yellow-300 bg-transparent text-center focus:border-sky-400 outline-none font-black text-sky-600" placeholder="(chat)" onChange={e => handleChange('q7', e.target.value)} /> with my friends too.
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="flex flex-col items-center flex-shrink-0">
              <img src="https://img.icons8.com/color/512/rabbit.png" className="w-20 h-20" alt="Julie" />
              <span className="text-xs font-black text-pink-500 bg-pink-50 px-2 py-0.5 rounded-full mt-1 border border-pink-100">Julie</span>
            </div>
            <div className="bg-pink-50 p-6 rounded-3xl rounded-tl-none border-2 border-pink-100 flex-1 text-2xl shadow-sm relative">
              That's great! How about you, Coco? ❽ <input className="w-40 border-b-4 border-pink-300 bg-transparent text-center focus:border-sky-400 outline-none font-black text-sky-600" placeholder="W... d... y..." onChange={e => handleChange('q8', e.target.value)} /> 
              ❾ <input className="w-16 border-b-4 border-pink-300 bg-transparent text-center focus:border-sky-400 outline-none font-black text-sky-600" placeholder="(do)" onChange={e => handleChange('q9', e.target.value)} />?
            </div>
          </div>

          <div className="flex gap-4 items-start flex-row-reverse text-right opacity-80">
            <div className="flex flex-col items-center flex-shrink-0">
              <img src="https://img.icons8.com/color/512/fox.png" className="w-20 h-20" alt="Coco" />
              <span className="text-xs font-black text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full mt-1 border border-blue-100">Coco</span>
            </div>
            <div className="bg-blue-50 p-6 rounded-3xl rounded-tr-none border-2 border-blue-100 flex-1 text-2xl shadow-sm relative">
              I ❶⓪ <input className="w-32 border-b-4 border-blue-300 bg-transparent text-center focus:border-sky-400 outline-none font-black text-sky-600" placeholder="(study)" onChange={e => handleChange('q10', e.target.value)} /> for tests. 
              I ❶① <input className="w-32 border-b-4 border-blue-300 bg-transparent text-center focus:border-sky-400 outline-none font-black text-sky-600" placeholder="(paint)" onChange={e => handleChange('q11', e.target.value)} /> a picture too.
              How about you, Julie? ❶② <input className="w-20 border-b-4 border-blue-300 bg-transparent text-center focus:border-sky-400 outline-none font-black text-sky-600" placeholder="D..." onChange={e => handleChange('q12', e.target.value)} /> 
              you ❶③ <input className="w-28 border-b-4 border-blue-300 bg-transparent text-center focus:border-sky-400 outline-none font-black text-sky-600" placeholder="(enjoy)" onChange={e => handleChange('q13', e.target.value)} /> your weekend?
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="flex flex-col items-center flex-shrink-0">
              <img src="https://img.icons8.com/color/512/rabbit.png" className="w-20 h-20" alt="Julie" />
              <span className="text-xs font-black text-pink-500 bg-pink-50 px-2 py-0.5 rounded-full mt-1 border border-pink-100">Julie</span>
            </div>
            <div className="bg-pink-50 p-6 rounded-3xl rounded-tl-none border-2 border-pink-100 flex-1 text-2xl shadow-sm relative">
              No, I ❶④ <input className="w-32 border-b-4 border-pink-300 bg-transparent text-center focus:border-sky-400 outline-none font-black text-sky-600" placeholder="d..." onChange={e => handleChange('q14', e.target.value)} />. 
              I ❶⑤ <input className="w-32 border-b-4 border-pink-300 bg-transparent text-center focus:border-sky-400 outline-none font-black text-sky-600" placeholder="(tidy)" onChange={e => handleChange('q15', e.target.value)} /> my room. It was tiring! 🧼
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-6 justify-center pt-8">
        {!showResults ? (
          <button onClick={checkAnswers} className="px-16 py-6 bg-sky-500 text-white text-3xl font-black rounded-full shadow-[0_8px_0_0_#0369a1] hover:bg-sky-600 transform hover:scale-105 transition-all flex items-center gap-4">
            <img src="https://img.icons8.com/color/96/ok.png" className="w-10 h-10" alt="check" />
            檢查大家的話 ✅
          </button>
        ) : (
          <div className="flex flex-col items-center gap-8 animate-bounce">
             <div className="flex items-center gap-6 bg-green-50 px-10 py-5 rounded-[2.5rem] border-4 border-green-200 shadow-xl">
                <img src="https://img.icons8.com/color/96/medal.png" className="w-16 h-16" alt="medal" />
                <p className="text-3xl font-black text-green-600 italic">Excellent! 你做得太好了！</p>
             </div>
             <button onClick={onNext} className="px-16 py-6 bg-orange-500 text-white text-3xl font-black rounded-full shadow-[0_8px_0_0_#c2410c] hover:bg-orange-600 transition-all flex items-center gap-4">
                前往下一關：魔法 "so" 🏹
             </button>
          </div>
        )}
      </div>

      {showResults && (
        <div className="mt-10 p-8 bg-yellow-50 rounded-[3rem] border-4 border-dashed border-yellow-200 shadow-inner">
          <p className="font-black text-yellow-700 mb-6 text-2xl flex items-center gap-3">
            <img src="https://img.icons8.com/color/96/idea.png" className="w-10 h-10" alt="idea" />
            參考答案筆記：
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xl font-bold">
            {Object.entries(correctAnswers).map(([k, v]) => (
              <div key={k} className="flex gap-3 items-center bg-white/90 p-3 rounded-2xl shadow-sm border-2 border-yellow-100">
                <span className="text-white font-black bg-yellow-400 w-10 h-10 rounded-full flex items-center justify-center text-sm shadow-sm">{k.replace('q','')}</span>
                <span className={answers[k]?.toLowerCase() === v.toLowerCase() ? 'text-green-600' : 'text-red-500 underline'}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GirlsTalkSection;
