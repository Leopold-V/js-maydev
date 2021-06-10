import React, { ReactNode } from 'react';

export const QuestionsHeader = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-between py-2">
      <h1 className="font-bold text-xl hidden sm:inline">Questions</h1>
      {children}
    </div>
  );
};
