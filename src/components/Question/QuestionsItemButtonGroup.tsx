import React from 'react';
import { ButtonLike, ButtonRead } from '../Button';
import { MarkQuestionSolved } from '../MarkQuestionSolved';

export const QuestionsItemButtonGroup = ({
  id,
  commentsCount,
  isSolved,
}: {
  id: string;
  commentsCount: number;
  isSolved: boolean;
}) => {
  return (
    <div className="flex space-x-1">
      <div
        className="flex items-center space-x-2 py-1 px-2 bg-gray
         text-muted focus:outline-none hover:bg-gray-100 hover:text-primary transition duration-200 rounded-full"
      >
        <span className="text-sm">{commentsCount}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-message-circle h-5 w-5"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#c1c6cc"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
          <line x1="12" y1="12" x2="12" y2="12.01" />
          <line x1="8" y1="12" x2="8" y2="12.01" />
          <line x1="16" y1="12" x2="16" y2="12.01" />
        </svg>
      </div>
      <ButtonRead id={id} />
      <ButtonLike id={id} />
      {isSolved && <MarkQuestionSolved />}
    </div>
  );
};
