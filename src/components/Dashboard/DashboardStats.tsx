import React from 'react';
import { useSelector } from 'react-redux';
import { questionType, userType } from '../../app/types';

export const DashboardStats = () => {
  const user: userType = useSelector((state: any) => state.user.user);
  const questions: questionType[] = useSelector((state: any) =>
    state.questions.questions.filter((question: questionType) => question.authorId === user.userId)
  );

  return (
    <div className="flex flex-wrap justify-center">
      <div className="card m-2 md:m-4 lg:flex-grow">
        <div className="px-2 py-2 md:py-4">
          <div className="text-xl md:text-3xl font-bold">
            {questions.reduce((a, b) => a + b.likes.length + b.reading.length, 0)}
          </div>
          <div className="text-muted">Total posts reaction</div>
        </div>
      </div>
      <div className="card m-2 md:m-4 lg:flex-grow">
        <div className="px-2 py-2 md:py-4">
          <div className="text-xl md:text-3xl font-bold">1523</div>
          <div className="text-muted">Total posts views</div>
        </div>
      </div>
      <div className="card m-2 md:m-4 lg:flex-grow">
        <div className="px-2 py-2 md:py-4">
          <div className="text-xl md:text-3xl font-bold">{user.score}</div>
          <div className="text-muted">Total problems solved</div>
        </div>
      </div>
      <div className="card m-2 md:m-4 lg:flex-grow">
        <div className="px-2 py-2 md:py-4">
          <div className="text-xl md:text-3xl font-bold">
            {questions.reduce((a, b) => (b.isSolved ? a + b.reading.length : a), 0)}
          </div>
          <div className="text-muted">Total help received</div>
        </div>
      </div>
    </div>
  );
};
