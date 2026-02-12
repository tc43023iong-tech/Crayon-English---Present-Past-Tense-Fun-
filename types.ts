
export enum LessonStep {
  INTRO = 'INTRO',
  PRESENT_SIMPLE = 'PRESENT_SIMPLE',
  PAST_SIMPLE_CONCEPT = 'PAST_SIMPLE_CONCEPT',
  PAST_SIMPLE_RULES = 'PAST_SIMPLE_RULES',
  PRACTICE_VERBS = 'PRACTICE_VERBS',
  PRACTICE_GIRLS_TALK = 'PRACTICE_GIRLS_TALK',
  PRACTICE_SO = 'PRACTICE_SO',
  PRACTICE_NEGATIVES = 'PRACTICE_NEGATIVES',
  PRACTICE_QA = 'PRACTICE_QA',
  SUMMARY = 'SUMMARY'
}

export interface QuizQuestion {
  id: string;
  sentence: string;
  options: string[];
  correctAnswer: string;
  feedback: string;
}
