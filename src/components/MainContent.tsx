import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { questionType } from '../app/types';
import { QuestionsHeader, QuestionsList, QuestionsTimeFilter } from './Question';

export const MainContent = () => {
  const questions: questionType[] = useSelector((state: any) => state.questions.questions);
  const [filteredQuestions, setFilteredQuestions] = useState<questionType[]>(questions);

  useEffect(() => {
    setFilteredQuestions(questions);
  }, [questions]);

  return (
    <div className="px-4 space-y-6">
      <QuestionsHeader>
        <QuestionsTimeFilter questions={questions} setFilteredQuestions={setFilteredQuestions} />
      </QuestionsHeader>
      <QuestionsList questions={filteredQuestions} />
    </div>
  );
};
