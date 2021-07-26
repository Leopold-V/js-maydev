import React from 'react';
import { commentType } from '../../app/types';
import { CommentItem } from './CommentItem';

export const CommentList = ({ comments }: { comments: commentType[] }) => {
  //@ts-ignore
  const commentsSortByDate: commentType[] = [...comments].sort(
    //@ts-ignore
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Todo : Sort comment by date
  return (
    <div className="space-y-6 w-full">
      {commentsSortByDate.map((comment: commentType) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
