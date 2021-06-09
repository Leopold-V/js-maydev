import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { userType } from '../app/types';

export const DiscussionForm = () => {
  const user: userType = useSelector((state: any) => state.user.user);

  const [input, setInput] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(input);
    setInput('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex space-x-2">
        <div className="w-8">
          <img
            className="rounded-full"
            alt="profile_picture"
            src={user.avatar || 'https://randomuser.me/portraits/men/52.jpg'}
          />
        </div>
        <div className="flex-grow space-y-2">
          <textarea
            onChange={handleChange}
            className="border shadow-lg border-gray-600 rounded py-2 px-2 bg-gray-100
                                    focus:outline-none focus:ring-1 focus:ring-primary focus:bg-background focus:border-transparent
                                    w-full h-36 placeholder-gray-500 resize-none transition duration-200"
            placeholder="Add to the discussion"
            name="content"
            value={input}
          />
          <button className="btn-primary text-gray">Submit</button>
        </div>
      </div>
    </form>
  );
};
