import React, { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { addNotification } from '../../actions/notifications.actions';
import { addLikeQuestion, removeLikeQuestion } from '../../actions/question.actions';
import { auth } from '../../app/firebase';
import { questionType, userType } from '../../app/types';

export const ButtonLike = ({ id }: { id: string }) => {
  const question: questionType = useSelector((state: any) =>
    state.questions.questions.find((ele: questionType) => ele.id === id)
  );
  const user: userType = useSelector((state: any) => state.user.user);

  let history = useHistory();
  const dispatch = useDispatch();

  const addToLike = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (auth.currentUser) {
      dispatch(addLikeQuestion({ userId: auth.currentUser.uid, id: id, likes: question.likes }));
      const notification = {
        userId: question.authorId,
        content: `${user.username || 'Anonymous'} liked your post: ${question.title}`,
        link: `question/${question.id}`,
        date: new Date(Date.now()),
        isRead: false,
      };
      dispatch(addNotification(notification));
    } else {
      history.push('/login');
    }
  };

  const removeFromLike = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (auth.currentUser) {
      dispatch(removeLikeQuestion({ userId: auth.currentUser.uid, id: id, likes: question.likes }));
    } else {
      history.push('/login');
    }
  };
  // @ts-ignore
  if (!question.likes.includes(auth.currentUser?.uid)) {
    return (
      <button
        className="flex items-center space-x-2 py-1 px-2 bg-gray text-muted focus:outline-none hover:bg-gray-100 hover:text-primary transition duration-200 rounded-full"
        onClick={addToLike}
      >
        <span className="text-sm">{question.likes.length}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="#ff7878"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    );
  } else {
    return (
      <button
        className="flex items-center space-x-2 py-1 px-2 bg-gray-100 text-primary focus:outline-none hover:text-primary transition duration-200 rounded-full"
        onClick={removeFromLike}
      >
        <span className="text-sm">{question.likes.length}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="#ff7878"
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
};
