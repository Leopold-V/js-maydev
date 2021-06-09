import React from 'react';
import { questionType } from '../app/types';
import { QuestionsItem } from './QuestionsItem';

export const QuestionsList = ({ questions }: { questions: questionType[] }) => {
  return (
    <div className="">
      {questions.map((question) => (
        <QuestionsItem key={question.id} question={question} />
      ))}
    </div>
  );
};
