import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateUser } from '../actions/user.actions';
import { notificationType, userType } from '../app/types';

export const SettingsPage = () => {
  const user: userType = useSelector((state: any) => state.user.user);
  const notifications: notificationType = useSelector((state: any) => state.notifications.notifications);
  console.log(notifications);
  
  const dispatch = useDispatch();

  const [input, setInput] = useState({ ...user });
  const [hasChanged, setHasChanged] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setHasChanged(true);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    dispatch(updateUser(input));
  };

  return (
    <div className="mb-10">
      <h1 className="font-bold md:text-4xl text-center md:text-left md:px-0 text-2xl">
        Settings for{' '}
        <Link className="text-blue" to={`/profile/${user.userId}`}>
          @{user.username || 'Anonymous'}
        </Link>
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6 lg:w-9/12 mx-auto mt-8">
        <div className="card flex flex-col">
          <h2 className="text-lg md:text-2xl font-bold text-white pt-4 mb-3">User</h2>
          <div className="space-y-4 mb-4 w-3/5 mx-auto">
            <div>
              <label className="block mb-2" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                onChange={handleChange}
                className="border shadow-lg border-gray-600 rounded py-2 px-2 bg-gray-100
                                focus:outline-none focus:ring-1 focus:ring-primary focus:bg-background focus:border-transparent
                                h-10 w-full placeholder-gray-500 transition duration-200"
                name="username"
                value={input.username || ''}
              />
            </div>
            <div>
              <label className="block mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                onChange={handleChange}
                className="border shadow-lg border-gray-600 rounded py-2 px-2 bg-gray-100
                                focus:outline-none focus:ring-1 focus:ring-primary focus:bg-background focus:border-transparent
                                h-10 w-full placeholder-gray-500 transition duration-200"
                name="email"
                value={input.email || ''}
              />
            </div>
          </div>
        </div>

        <div className="card flex flex-col">
          <h2 className="text-lg md:text-2xl font-bold text-white pt-4 mb-3">Basic</h2>
          <div className="space-y-4 mb-4 w-3/5 mx-auto">
            <div className="">
              <label className="block mb-2" htmlFor="website_url">
                Website URL
              </label>
              <input
                id="website_url"
                onChange={handleChange}
                className="border shadow-lg border-gray-600 rounded py-2 px-2 bg-gray-100
                                focus:outline-none focus:ring-1 focus:ring-primary focus:bg-background focus:border-transparent
                                h-10 w-full placeholder-gray-500 transition duration-200"
                name="website_url"
                value={input.website_url || ''}
              />
            </div>
            <div>
              <label className="block mb-2" htmlFor="dev_profile">
                dev.to URL
              </label>
              <input
                id="dev_profile"
                onChange={handleChange}
                className="border shadow-lg border-gray-600 rounded py-2 px-2 bg-gray-100
                                focus:outline-none focus:ring-1 focus:ring-primary focus:bg-background focus:border-transparent
                                h-10 w-full placeholder-gray-500 transition duration-200"
                name="dev_profile"
                value={input.dev_profile || ''}
              />
            </div>
            <div>
              <label className="block mb-2" htmlFor="location">
                Location
              </label>
              <input
                id="location"
                onChange={handleChange}
                className="border shadow-lg border-gray-600 rounded py-2 px-2 bg-gray-100
                                focus:outline-none focus:ring-1 focus:ring-primary focus:bg-background focus:border-transparent
                                h-10 w-full placeholder-gray-500 transition duration-200"
                name="location"
                value={input.location || ''}
              />
            </div>
            <div>
              <label className="block mb-2" htmlFor="bio">
                bio
              </label>
              <input
                id="bio"
                onChange={handleChange}
                className="border shadow-lg border-gray-600 rounded py-2 px-2 bg-gray-100
                                focus:outline-none focus:ring-1 focus:ring-primary focus:bg-background focus:border-transparent
                                h-10 w-full placeholder-gray-500 transition duration-200"
                name="bio"
                value={input.bio || ''}
              />
            </div>
          </div>
        </div>
        {hasChanged ? (
          <button className="btn-primary hover:opacity-80 w-full text-gray">Save</button>
        ) : (
          <button className="btn-primary w-full text-gray opacity-60 cursor-not-allowed" disabled>
            Save
          </button>
        )}
      </form>
    </div>
  );
};
