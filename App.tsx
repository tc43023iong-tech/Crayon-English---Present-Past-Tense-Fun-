
import React, { useState } from 'react';
import { LessonStep } from './types';
import Sidebar from './components/Sidebar';
import IntroSection from './sections/IntroSection';
import PresentSimpleSection from './sections/PresentSimpleSection';
import PastSimpleConceptSection from './sections/PastSimpleConceptSection';
import PastSimpleRulesSection from './sections/PastSimpleRulesSection';
import VerbPracticeSection from './sections/VerbPracticeSection';
import GirlsTalkSection from './sections/GirlsTalkSection';
import SoPracticeSection from './sections/SoPracticeSection';
import NegativesSection from './sections/NegativesSection';
import QAPracticeSection from './sections/QAPracticeSection';
import ReviewSection from './sections/ReviewSection';
import SummarySection from './sections/SummarySection';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<LessonStep>(LessonStep.INTRO);

  const renderSection = () => {
    switch (currentStep) {
      case LessonStep.INTRO:
        return <IntroSection onNext={() => setCurrentStep(LessonStep.PRESENT_SIMPLE)} />;
      case LessonStep.PRESENT_SIMPLE:
        return <PresentSimpleSection onNext={() => setCurrentStep(LessonStep.PAST_SIMPLE_CONCEPT)} />;
      case LessonStep.PAST_SIMPLE_CONCEPT:
        return <PastSimpleConceptSection onNext={() => setCurrentStep(LessonStep.PAST_SIMPLE_RULES)} />;
      case LessonStep.PAST_SIMPLE_RULES:
        return <PastSimpleRulesSection onNext={() => setCurrentStep(LessonStep.PRACTICE_VERBS)} />;
      case LessonStep.PRACTICE_VERBS:
        return <VerbPracticeSection onNext={() => setCurrentStep(LessonStep.PRACTICE_GIRLS_TALK)} />;
      case LessonStep.PRACTICE_GIRLS_TALK:
        return <GirlsTalkSection onNext={() => setCurrentStep(LessonStep.PRACTICE_SO)} />;
      case LessonStep.PRACTICE_SO:
        return <SoPracticeSection onNext={() => setCurrentStep(LessonStep.PRACTICE_NEGATIVES)} />;
      case LessonStep.PRACTICE_NEGATIVES:
        return <NegativesSection onNext={() => setCurrentStep(LessonStep.PRACTICE_QA)} />;
      case LessonStep.PRACTICE_QA:
        return <QAPracticeSection onNext={() => setCurrentStep(LessonStep.REVIEW_PATTERNS)} />;
      case LessonStep.REVIEW_PATTERNS:
        return <ReviewSection onNext={() => setCurrentStep(LessonStep.SUMMARY)} />;
      case LessonStep.SUMMARY:
        return <SummarySection onRestart={() => setCurrentStep(LessonStep.INTRO)} />;
      default:
        return <IntroSection onNext={() => setCurrentStep(LessonStep.PRESENT_SIMPLE)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row overflow-hidden relative bg-[#fffdf5]">
      {/* Character Background Decor - Using stable Icons8 assets */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-[0.05] select-none z-0">
        <img src="https://img.icons8.com/color/512/panda.png" className="absolute top-10 left-10 w-48 rotate-12" alt="" />
        <img src="https://img.icons8.com/color/512/dog.png" className="absolute top-1/4 right-10 w-40 -rotate-12" alt="" />
        <img src="https://img.icons8.com/color/512/rabbit.png" className="absolute bottom-20 left-20 w-48" alt="" />
        <img src="https://img.icons8.com/color/512/bear.png" className="absolute bottom-10 right-1/4 w-48" alt="" />
        <img src="https://img.icons8.com/color/512/wolf.png" className="absolute top-1/2 left-10 w-32 -rotate-45" alt="" />
        <img src="https://img.icons8.com/color/512/cloud.png" className="absolute top-20 left-1/2 w-32 opacity-50" alt="" />
        <img src="https://img.icons8.com/color/512/sun.png" className="absolute top-10 right-20 w-32 opacity-50 animate-pulse" alt="" />
      </div>

      <Sidebar currentStep={currentStep} onNavigate={setCurrentStep} />
      
      <main className="flex-1 overflow-y-auto p-4 md:p-10 relative z-10">
        <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-sm rounded-[3rem] p-6 md:p-10 shadow-2xl border-8 border-dashed border-sky-100 relative">
          {/* Bottom Right Decoration - Keeping the working pencil icon */}
          <img src="https://img.icons8.com/color/96/pencil.png" className="absolute -bottom-6 -right-6 w-16 z-20 drop-shadow-md" alt="pencil" />
          
          {renderSection()}
        </div>
      </main>

      <div className="fixed bottom-6 right-6 bg-sky-500 text-white font-bold px-6 py-3 rounded-full shadow-2xl border-4 border-white transform hover:scale-110 transition-transform cursor-default z-50 flex items-center gap-3">
        <img src="https://img.icons8.com/color/96/cat.png" className="w-8 h-8" alt="mini-cat" />
        進度: {Math.round((Object.values(LessonStep).indexOf(currentStep) / (Object.values(LessonStep).length - 1)) * 100)}%
      </div>
    </div>
  );
};

export default App;
