import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { userType } from '../app/types';
import commentServices from '../services/comment.services';
import { CommentForm } from './CommentForm';
import { CommentList } from './CommentList';

export const CommentsBlock = ({questionId} : {questionId: string}) => {
  const user: userType = useSelector((state: any) => state.user.user);

  const [comments, setcomments] = useState([]);

  useEffect(() => {
    (async () => {
      const comments: any = await commentServices.getCommentsByQuestion(questionId);
      console.log(comments);
      setcomments(comments);
    })();
  }, [questionId])

  return (
    <div className="mt-16">
      <h2 className="text-primary text-2xl font-bold py-4">Discussions</h2>
      {user ? <CommentForm questionId={questionId} /> : <div className="mb-8">You must log in to reply</div>}
      <CommentList comments={comments} />
    </div>
  );
};
