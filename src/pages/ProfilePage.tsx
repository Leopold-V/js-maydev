import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { questionType, userType } from '../app/types';
import { QuestionsList } from '../components/Question';
import userServices from '../services/user.services';

export const ProfilePage = (props: any) => {
  const userId = props.match.params.id;

  const questions: questionType[] = useSelector((state: any) =>
    state.questions.questions.filter((question: questionType) => question.authorId === userId)
  );
  const currentUser: userType = useSelector((state: any) => state.user.user);

  const [user, setUser] = useState<any>(null);

  const loadAuthor = async (id: string) => {
    const user = await userServices.getOneUser(id);
    setUser(user);
  };

  useEffect(() => {
    loadAuthor(userId);
  }, [userId]);

  if (!user) return <div className="w-full h-64 card lg:w-9/12 mx-auto mt-10 md:mt-20"></div>;
  return (
    <div className="space-y-6 lg:w-9/12 mx-auto">
      <div className="card relative rounded flex flex-col items-center mt-10 md:mt-20">
        <div className="rounded-full absolute -top-8 md:-top-16 bg-background">
          <div className="w-16 md:w-32 p-2">
            <img
              className="rounded-full"
              alt="profile_picture"
              src={user.avatar || 'https://randomuser.me/portraits/men/52.jpg'}
            />
          </div>
        </div>
        <div className="mt-4 md:mt-14 mb-4 md:mb-10 w-full text-center">
          <h1 className="font-extrabold text-xl md:text-3xl text-white py-4">
            {user.username || 'Anonymous'}
          </h1>
          <p className="text-center md:text-lg lg:w-3/4 mx-auto">{user.bio}</p>
          {user.location && (
            <p className="flex text-muted space-x-1 mt-2 justify-center items-center text-center md:text-lg lg:w-3/4 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{user.location}</span>
            </p>
          )}
        </div>
        {currentUser && userId === currentUser.userId && (
          <Link to="/settings" className="btn-primary text-gray mb-4 md:mb-6">
            Edit Profile
          </Link>
        )}
      </div>
      <h1 className="text-center text-xl md:text-2xl font-bold">Posts List :</h1>
      {questions.length > 0 ? (
        <QuestionsList questions={questions} />
      ) : (
        <p className="text-center">{user.username || 'Anonymous'} didn't ask anything yet !</p>
      )}
    </div>
  );
};
