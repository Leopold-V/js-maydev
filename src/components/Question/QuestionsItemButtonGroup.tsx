import React from 'react';
import { questionType } from '../../app/types';
import { ButtonLike, ButtonRead } from '../Button';

export const QuestionsItemButtonGroup = ({ question }: { question: questionType }) => {
  return (
    <div className="flex space-x-2">
      <ButtonRead question={question} />
      <ButtonLike question={question} />
    </div>
  );
};
