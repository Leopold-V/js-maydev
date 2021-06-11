import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../markdown.css';

import userServices from '../services/user.services';

import { MainLayout } from '../components/MainLayout';
import { CommentsBlock } from '../components/CommentsBlock';
import { ButtonLike, ButtonRead } from '../components/Button';
import { QuestionListTags } from '../components/Question';
import { useSelector } from 'react-redux';
import { questionType } from '../app/types';
import { auth } from '../app/firebase';
import { MarkdownWrapper } from '../components/MarkdownWrapper';

export const QuestionPage = (props: any) => {
  const questionId = props.match.params.id;

  const question: questionType = useSelector((state: any) =>
    state.questions.questions.find((ele: questionType) => ele.id === questionId)
  );
  const [user, setUser] = useState<any>(null);

  const loadAuthor = async (id: string) => {
    const user = await userServices.getOneUser(id);
    setUser(user);
  };

  useEffect(() => {
    question && loadAuthor(question.authorId);
  }, [question]);

  if (!question)
    return (
      <MainLayout>
        <h1>Post not found</h1>
      </MainLayout>
    );
  if (!user)
    return (
      <MainLayout>
        <div className="card h-96"></div>
      </MainLayout>
    );
  return (
    <MainLayout>
      <div className="card relative w-screen sm:w-full">
        <div className="space-y-3">
          <div className="absolute top-3 right-3 flex items-center space-x-4">
            {auth.currentUser?.uid === user.userId && (
              <Link
                to={`/edit/${questionId}`}
                className="text-muted focus:outline-none hover:bg-gray hover:text-primary transition duration-200 rounded px-2 py-1"
              >
                Edit
              </Link>
            )}
            <ButtonRead id={questionId} />
            <ButtonLike id={questionId} />
          </div>
          <h1 className="text-white text-4xl font-extrabold py-3">{question.title}</h1>
          <QuestionListTags tags={question.tags} />
          <div className="flex items-center space-x-4">
            <Link
              to={`/profile/${user.userId}`}
              className="flex items-center space-x-2 hover:text-blue transition duration-200"
            >
              <div className="w-8">
                <img
                  className="rounded-full"
                  alt="profile_picture"
                  src={user.avatar || 'https://randomuser.me/portraits/men/52.jpg'}
                />
              </div>
              <div>{user.username || 'Anonymous'}</div>
            </Link>
            <div className="text-muted text-sm">{question.date}</div>
          </div>
          <MarkdownWrapper content={question.content} />
        </div>
        <CommentsBlock questionId={questionId} />
      </div>
    </MainLayout>
  );
};
