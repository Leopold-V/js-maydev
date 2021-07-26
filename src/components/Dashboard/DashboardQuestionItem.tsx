import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteQuestion } from '../../actions/question.actions';
import { questionType } from '../../app/types';
import commentServices from '../../services/comment.services';
import { DashboardItemButtonGroup } from './DashboardItemButtonGroup';

export const DashboardQuestionItem = ({ question }: { question: questionType }) => {
  const dispatch = useDispatch();
  const [commentsCount, setCommentsCount] = useState(0);
  const { id, title, date, edit_date } = question;

  const handleDelete = () => {
    const rep = window.confirm('Are you sure to delete this post ?');
    if (rep) {
      dispatch(deleteQuestion(id));
    }
  };

  const loadComment = async (questionId: string) => {
    const comments: any = await commentServices.getCommentsByQuestion(questionId);
    setCommentsCount(comments.length);
  }

  useEffect(() => {
    loadComment(question.id)
  }, [question.id]);

  return (
    <div className="flex items-center justify-between py-3 px-4 my-2 rounded hover:bg-gray-100 transition duration-200">
      <div className="flex flex-col w-1/2">
        <Link
          to={`/question/${id}`}
          className="text-blue text-lg md:text-xl font-bold py-3 transition duration-200"
        >
          {title}
        </Link>

        <div className="flex flex-wrap sm:space-x-2">
          <div className="text-xs text-muted hover:text-white transition duration-200">
            Published: {date}
          </div>
          <div className="text-xs text-muted hover:text-white transition duration-200">
            Edited: {edit_date}
          </div>
        </div>
      </div>

      <DashboardItemButtonGroup id={question.id} commentsCount={commentsCount} />

      <div className="md:space-x-4 text-muted">
        <Link
          to={`/edit/${id}`}
          className="text-muted focus:outline-none hover:bg-gray hover:text-primary transition duration-200 rounded px-2 py-1"
        >
          Edit
        </Link>
        <button
          className="text-muted focus:outline-none hover:bg-gray hover:text-primary transition duration-200 rounded px-2 py-1"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
