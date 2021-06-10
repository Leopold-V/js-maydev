import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../app/firebase';
import { questionType } from '../../app/types';
import userServices from '../../services/user.services';
import { QuestionsItemButtonGroup } from './';

export const QuestionsItem = ({ question }: { question: questionType }) => {
  const [user, setUser] = useState<any>(null);

  const { id, title, authorId, date, tags } = question;

  const loadAuthor = async (id: string) => {
    const user = await userServices.getOneUser(id);
    setUser(user);
  };

  useEffect(() => {
    loadAuthor(authorId);
  }, [authorId]);

  if (!user) return <div className="card h-40 my-2"></div>;
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
          <ul className="flex items-center ml-10 space-x-2 text-muted text-sm">
            {tags.map((tag, i) => (
              <li key={i} className="hover:text-white transition duration-200">
                #{tag}
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4">
            {auth.currentUser && <QuestionsItemButtonGroup question={question} />}
          </div>
        </div>
      </div>
    </Link>
  );
};
