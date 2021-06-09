import React from 'react';
import { useSelector } from 'react-redux';
import { questionType } from '../app/types';
import { QuestionsHeader } from './QuestionsHeader';
import { QuestionsList } from './QuestionsList';

export const MainContent = () => {
  const questions: questionType[] = useSelector((state: any) => state.questions.questions);

  return (
    <div className="px-4 space-y-6">
      <QuestionsHeader />
      <QuestionsList questions={questions} />
    </div>
  );
};
