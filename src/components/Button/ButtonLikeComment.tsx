import React, { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addLikeComment, removeLikeComment } from '../../actions/comment.actions';
import { auth } from '../../app/firebase';
import { commentType } from '../../app/types';

export const ButtonLikeComment = ({
  id,
  questionId,
  authorId,
}: {
  id: string;
  questionId: string;
  authorId: string;
}) => {
  let history = useHistory();
  const dispatch = useDispatch();

  const likes = useSelector((state: any) =>
    state.comments.comments.find((ele: commentType) => ele.id === id)
  ).likes;
  const user = useSelector((state: any) => state.user.user);

  const disabled = auth.currentUser?.uid === authorId;

  const addToLike = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (auth.currentUser) {
      const notification = {
        userId: authorId,
        content: `${user.username || 'Anonymous'} liked one of your comments`,
        link: `question/${questionId}`,
        date: new Date(Date.now()),
        isRead: false,
      };
      dispatch(
        addLikeComment({
          userId: auth.currentUser.uid,
          id: id,
          likes: likes,
          notification: notification,
        })
      );
    } else {
      history.push('/login');
    }
  };

  const removeFromLike = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (auth.currentUser) {
      dispatch(removeLikeComment({ userId: auth.currentUser.uid, id: id, likes: likes }));
    } else {
      history.push('/login');
    }
  };

  if (!likes.includes(auth.currentUser?.uid)) {
    return (
      <button
        className={`${
          disabled ? 'cursor-not-allowed' : 'hover:bg-gray-200'
        } flex items-center justify-center space-x-1 py-1 px-2 bg-gray-100 
            text-muted focus:outline-none hover:text-primary transition duration-200 rounded-full`}
        onClick={addToLike}
        disabled={disabled}
      >
        <span className="text-sm">{likes.length}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="#a3a3a3"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    );
  }
  return (
    <button
      className={`${
        disabled ? 'cursor-not-allowed' : 'hover:bg-gray-200'
      } flex items-center space-x-1 py-1 px-2 bg-gray-200 text-muted focus:outline-none hover:text-primary transition duration-200 rounded-full`}
      onClick={removeFromLike}
    >
      <span className="text-sm">{likes.length}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        viewBox="0 0 20 20"
        fill="#d16b6b"
      >
        <path
          fillRule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};
