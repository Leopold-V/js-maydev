import React from 'react';
import { QuestionsItemButtonGroup } from '../Question';

export const DashboardItemButtonGroup = ({
  id,
  commentsCount,
  isSolved,
}: {
  id: string;
  commentsCount: number;
  isSolved: boolean;
}) => {
  return (
    <div className="flex items-center space-x-2">
      <QuestionsItemButtonGroup isSolved={isSolved} id={id} commentsCount={commentsCount} />
      <div className="flex items-center space-x-1 text-muted text-sm hover:text-white transition duration-200">
        <span>152</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      </div>
    </div>
  );
};
