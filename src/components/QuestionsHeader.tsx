import React from 'react';
import { QuestionsTimeFilter } from './QuestionsTimeFilter';

export const QuestionsHeader = () => {
  return (
    <div className="flex justify-between py-2">
      <h2 className="font-bold text-xl hidden sm:inline">Questions</h2>
      <QuestionsTimeFilter />
    </div>
  );
};
