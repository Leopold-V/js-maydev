import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { questionType } from '../app/types';
import { MainLayout } from '../components/MainLayout';
import { QuestionsHeader, QuestionsList, QuestionsTimeFilter } from '../components/Question';

export const Tags = (props: any) => {
  const tagName = props.match.params.tagname;

  const questions: questionType[] = useSelector((state: any) =>
    state.questions.questions.filter((question: questionType) => question.tags.includes(tagName))
  );
  const [filteredQuestions, setFilteredQuestions] = useState<questionType[]>(questions);

  return (
    <MainLayout>
      <div className="px-4 space-y-6">
        <h1 className="text-xl text-blue">#{tagName}</h1>
        <QuestionsHeader>
          <QuestionsTimeFilter questions={questions} setFilteredQuestions={setFilteredQuestions} />
        </QuestionsHeader>
        <QuestionsList questions={filteredQuestions} />
      </div>
    </MainLayout>
  );
};
