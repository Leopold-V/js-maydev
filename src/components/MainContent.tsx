import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { questionType } from '../app/types';
import { QuestionsHeader, QuestionsList, QuestionsTimeFilter } from './Question';
import { QuestionSkeleton } from './Question/QuestionSkeleton';

export const MainContent = () => {
  const loading: questionType[] = useSelector((state: any) => state.questions.loading);
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
      {loading ? (
        <ul>
          <div className="card h-40 my-2">
            <QuestionSkeleton />
          </div>
          <div className="card h-40 my-2">
            <QuestionSkeleton />
          </div>
          <div className="card h-40 my-2">
            <QuestionSkeleton />
          </div>
          <div className="card h-40 my-2">
            <QuestionSkeleton />
          </div>
          <div className="card h-40 my-2">
            <QuestionSkeleton />
          </div>
        </ul>
      ) : (
        <QuestionsList questions={filteredQuestions} />
      )}
    </div>
  );
};
