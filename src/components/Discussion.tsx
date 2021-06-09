import React from 'react';
import { useSelector } from 'react-redux';
import { userType } from '../app/types';
import { DiscussionForm } from './DiscussionForm';

export const Discussion = () => {
  const user: userType = useSelector((state: any) => state.user.user);

  return (
    <div className="mt-16">
      <h2 className="text-primary text-2xl font-bold py-4">Discussions</h2>
      {user ? <DiscussionForm /> : <div>You must log in to reply</div>}
    </div>
  );
};
