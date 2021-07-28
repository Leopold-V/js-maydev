import React, { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../actions/user.actions';
import { questionType, userType } from '../app/types';
import { MainLayout } from '../components/MainLayout';

export const TagsPage = () => {
  return (
    <MainLayout>
      <div className="py-2 px-4 space-y-10">
        <h1 className="font-bold text-xl">Top tags</h1>
        <div className="grid grid-cols-2 gap-4">
          <TagCard tagname={'javascript'}>
            JavaScript is the Programming Language for the Web. JavaScript can update and change
            both HTML and CSS. JavaScript can calculate, manipulate and validate data.
          </TagCard>
          <TagCard tagname={'react'}>
            Official tag for Facebook's React JavaScript library for building user interfaces
          </TagCard>
          <TagCard tagname={'frontend'}>blablabal</TagCard>
          <TagCard tagname={'vue'}>blablabal</TagCard>
          <TagCard tagname={'angular'}>blablabal</TagCard>
          <TagCard tagname={'node'}>blablabal</TagCard>
          <TagCard tagname={'backend'}>blablabal</TagCard>
          <TagCard tagname={'express'}>blablabal</TagCard>
        </div>
      </div>
    </MainLayout>
  );
};

const TagCard = ({ tagname, children }: { tagname: string; children: ReactNode }) => {
  const questions = useSelector((state: any) =>
    state.questions.questions.filter((question: questionType) => question.tags.includes(tagname))
  );
  const user: userType = useSelector((state: any) => state.user.user);

  const dispatch = useDispatch();

  const followingTag = async () => {
    const updatedUser: userType = {
      ...user,
      tags: [...user.tags, tagname],
    };
    dispatch(updateUser(updatedUser));
  };

  const unfollowingTag = async () => {
    const updatedUser: userType = {
      ...user,
      tags: [...user.tags.filter((tag) => tag !== tagname)],
    };
    dispatch(updateUser(updatedUser));
  };

  return (
    <div className="card flex flex-col text-center items-center justify-between space-y-3 text-muted hover:text-primary transition duration-200">
      <h2 className="text-blue text-lg py-3">#{tagname}</h2>
      <div>
        <p className="text-sm">{children}</p>
        <div className="text-sm py-2 font-extralight">{questions.length} posts published</div>
      </div>
      {!user.tags.includes(tagname) ? (
        <button className="btn-secondary" onClick={followingTag}>
          Following
        </button>
      ) : (
        <button className="btn-secondary" onClick={unfollowingTag}>
          Unfollow
        </button>
      )}
    </div>
  );
};
