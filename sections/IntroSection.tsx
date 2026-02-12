
import React from 'react';

interface IntroSectionProps {
  onNext: () => void;
}

const IntroSection: React.FC<IntroSectionProps> = ({ onNext }) => {
  return (
    <div className="text-center space-y-8 animate-in fade-in duration-700 relative">
      <div className="flex justify-center items-end gap-2 mb-4">
        <img 
          src="https://img.icons8.com/color/512/rabbit.png" 
          className="w-24 h-24 drop-shadow-lg -rotate-12 transform hover:scale-110 transition-transform" 
          alt="Rabbit" 
        />
        <div className="relative">
          <img 
            src="https://img.icons8.com/color/512/panda.png" 
            className="w-48 h-48 drop-shadow-2xl hover:scale-105 transition-transform duration-300" 
            alt="Panda Guide" 
          />
          <div className="absolute -top-4 -right-8 bg-yellow-400 text-white px-4 py-2 rounded-full shadow-lg rotate-12 font-bold animate-bounce text-sm border-2 border-white">
            我們一起學英文！ 🐾
          </div>
        </div>
        <img 
          src="https://img.icons8.com/color/512/dog.png" 
          className="w-24 h-24 drop-shadow-lg rotate-12 transform hover:scale-110 transition-transform" 
          alt="Dog Friend" 
        />
      </div>
      
      <div className="space-y-4">
        <h2 className="text-5xl font-black text-orange-500 underline decoration-wavy decoration-orange-200 drop-shadow-sm">
          可愛動物的時態冒險！ 🗺️
        </h2>
        <p className="text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-comic">
          小朋友，熊貓老師和他的好朋友們都來陪你學英文囉！<br/>
          今天我們要學習如何講「現在的事」和「以前的事」。<br/>
          動詞變形就像魔法道具一樣有趣喔！ 🖍️✨
        </p>
      </div>
      
      <button 
        onClick={onNext}
        className="group relative px-14 py-6 bg-sky-500 hover:bg-sky-600 text-white text-3xl font-black rounded-full shadow-[0_8px_0_0_#0369a1] active:shadow-none active:translate-y-2 transition-all flex items-center justify-center gap-4 mx-auto"
      >
        <span>先看必考重點句型！</span>
        <img src="https://img.icons8.com/color/96/books.png" className="w-10 h-10 group-hover:animate-pulse" alt="books" />
      </button>
      
      <div className="flex justify-center gap-8 opacity-60">
        <img src="https://img.icons8.com/color/96/fox.png" className="w-14 h-14 hover:scale-125 transition-transform" alt="Fox" />
        <img src="https://img.icons8.com/color/96/cat.png" className="w-14 h-14 hover:scale-125 transition-transform" alt="Cat" />
        <img src="https://img.icons8.com/color/96/bear.png" className="w-14 h-14 hover:scale-125 transition-transform" alt="Bear" />
      </div>
    </div>
  );
};

export default IntroSection;
