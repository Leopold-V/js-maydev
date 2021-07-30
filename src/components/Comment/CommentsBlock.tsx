import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commentType, userType } from '../../app/types';
import commentServices from '../../services/comment.services';
import { loadComments } from '../../slices/commentSlice';
import { CommentForm } from './CommentForm';
import { CommentList } from './CommentList';

export const CommentsBlock = ({
  questionId,
  authorId,
}: {
  questionId: string;
  authorId: string;
}) => {
  const dispatch = useDispatch();

  const user: userType = useSelector((state: any) => state.user.user);
  const comments: commentType[] = useSelector((state: any) =>
    state.comments.comments.filter((comment: commentType) => comment.isReply === false)
  );

  useEffect(() => {
    (async () => {
      const comments: any = await commentServices.getCommentsByQuestion(questionId);
      dispatch(loadComments(comments));
    })();
  }, [questionId, dispatch]);

  return (
    <div className="mt-16">
      <h2 className="text-primary text-2xl font-bold py-4">Discussions</h2>
      {user ? (
        <CommentForm questionId={questionId} authorId={authorId} userId={user.userId} avatar={user.avatar} username={user.username} />
      ) : (
        <div className="mb-8">You must log in to reply</div>
      )}
      <CommentList comments={comments} />
    </div>
  );
};
