
import React from 'react';
import { LessonStep } from '../types';

interface SidebarProps {
  currentStep: LessonStep;
  onNavigate: (step: LessonStep) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentStep, onNavigate }) => {
  const steps = [
    { id: LessonStep.INTRO, label: '🌟 你好!', icon: '👋' },
    { id: LessonStep.REVIEW_PATTERNS, label: '📚 重點句型', icon: '💎' },
    { id: LessonStep.PRESENT_SIMPLE, label: '📅 現在式詳解', icon: '🕒' },
    { id: LessonStep.PAST_SIMPLE_CONCEPT, label: '🕰️ 過去式概念', icon: '🎩' },
    { id: LessonStep.PRACTICE_NEGATIVES, label: '❌ 胖虎日記', icon: '🚫' },
    { id: LessonStep.PRACTICE_QA, label: '❓ 問答高手', icon: '💡' },
    { id: LessonStep.PAST_SIMPLE_RULES, label: '📝 拼寫魔法', icon: '✍️' },
    { id: LessonStep.PRACTICE_VERBS, label: '✏️ 動詞填空', icon: '🖍️' },
    { id: LessonStep.PRACTICE_GIRLS_TALK, label: '🗣️ 女生悄悄話', icon: '👧' },
    { id: LessonStep.PRACTICE_SO, label: '🎯 所以呢?', icon: '🏹' },
    { id: LessonStep.SUMMARY, label: '🏆 畢業典禮', icon: '🏅' },
  ];

  return (
    <aside className="w-full md:w-72 bg-sky-50 border-b md:border-r-4 border-dashed border-sky-200 p-6 z-20">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-sky-600 mb-2">時態冒險島</h1>
        <p className="text-sm text-sky-400 italic">Animal English Fun</p>
      </div>
      <nav className="space-y-2">
        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() => onNavigate(step.id)}
            className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center gap-3 ${
              currentStep === step.id
                ? 'bg-sky-500 text-white shadow-md scale-105'
                : 'bg-white hover:bg-sky-100 text-sky-700 border border-sky-100'
            }`}
          >
            <span className="text-xl">{step.icon}</span>
            <span className="font-semibold text-sm">{step.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
