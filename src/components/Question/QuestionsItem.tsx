import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { questionType } from '../../app/types';
import commentServices from '../../services/comment.services';
import userServices from '../../services/user.services';
import { QuestionsItemButtonGroup } from './';
import { QuestionListTags } from './QuestionListTags';
import { QuestionSkeleton } from './QuestionSkeleton';

export const QuestionsItem = ({ question }: { question: questionType }) => {
  const [user, setUser] = useState<any>(null);
  const [commentsCount, setCommentsCount] = useState(0);

  const { id, title, authorId, date, tags } = question;

  const loadAuthor = async (id: string) => {
    const user = await userServices.getOneUser(id);
    setUser(user);
  };

  const loadComment = async (questionId: string) => {
    const comments: any = await commentServices.getCommentsByQuestion(questionId);
    setCommentsCount(comments.length);
  };

  useEffect(() => {
    loadAuthor(authorId);
    loadComment(question.id);
  }, [authorId, question.id]);

  if (!user)
    return (
      <div className="card h-40 my-2">
        <QuestionSkeleton />
      </div>
    );
  return (
    <Link to={`/question/${id}`}>
      <div className="card my-2 min-h-40">
        <div className="flex items-center space-x-2">
          <Link to={`/profile/${authorId}`} className="w-8">
            <img
              className="rounded-full"
              alt="profile_picture"
              src={user.avatar || 'https://randomuser.me/portraits/men/52.jpg'}
            />
          </Link>
          <div>
            <Link
              to={`/profile/${authorId}`}
              className="text-sm hover:text-white pb-1 transition duration-200"
            >
              {user.username || 'Anonymous'}
            </Link>
            <div className="text-xs text-muted hover:text-white pb-1 transition duration-200">
              {date}
            </div>
          </div>
        </div>
        <div className="text-white ml-10 hover:text-blue text-2xl font-bold py-3 transition duration-200">
          {title}
        </div>
        <div className="flex justify-between">
          <div className="ml-10">
            <QuestionListTags tags={tags} />
          </div>
          <div className="flex items-center space-x-4">
            <QuestionsItemButtonGroup
              id={question.id}
              commentsCount={commentsCount}
              isSolved={question.isSolved}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};
