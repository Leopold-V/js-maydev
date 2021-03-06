import React, { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { addQuestionToRead, removeQuestionToRead } from '../../actions/question.actions';
import { auth } from '../../app/firebase';
import { questionType, userType } from '../../app/types';

export const ButtonRead = ({ id }: { id: string }) => {
  const question: questionType = useSelector((state: any) =>
    state.questions.questions.find((ele: questionType) => ele.id === id)
  );
  const user: userType = useSelector((state: any) => state.user.user);

  let history = useHistory();
  const dispatch = useDispatch();

  const addToRead = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (auth.currentUser) {
      const notification = {
        userId: question.authorId,
        content: `${user.username || 'Anonymous'} liked your post: ${question.title}`,
        link: `question/${question.id}`,
        date: new Date(Date.now()),
        isRead: false,
      };
      dispatch(
        addQuestionToRead({
          userId: auth.currentUser.uid,
          id: id,
          reading: question.reading,
          notification: notification,
        })
      );
    } else {
      history.push('/login');
    }
  };

  const removeFromRead = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (auth.currentUser) {
      dispatch(
        removeQuestionToRead({ userId: auth.currentUser.uid, id: id, reading: question.reading })
      );
    } else {
      history.push('/login');
    }
  };

  //@ts-ignore
  if (!question.reading.includes(auth.currentUser?.uid)) {
    return (
      <button
        className="flex items-center space-x-2 py-1 px-2 bg-gray text-muted focus:outline-none hover:bg-gray-100 hover:text-primary transition duration-200 rounded-full"
        onClick={addToRead}
      >
        <span className="text-sm">{question.reading.length}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="#44c281"
        >
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
        </svg>
      </button>
    );
  } else {
    return (
      <button
        className="flex items-center space-x-2 py-1 px-2 bg-gray-100 text-primary focus:outline-none hover:text-primary transition duration-200 rounded-full"
        onClick={removeFromRead}
      >
        <span className="text-sm">{question.reading.length}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="#44c281"
        >
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
        </svg>
      </button>
    );
  }
};
