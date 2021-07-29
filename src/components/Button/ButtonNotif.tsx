import React from 'react';
import { notificationType } from '../../app/types';

export const ButtonNotif = ({
  setShow,
  notifsList,
}: {
  setShow: (show: any) => void;
  notifsList: notificationType[];
}) => {
  const handleClick = () => {
    setShow((show: boolean) => !show);
  };

  return (
    <button
      className="relative hover:bg-gray-light focus:bg-gray-light h-8 w-8 rounded-full transition duration-200 focus:outline-none hover:text-white"
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
        {notifsList.reduce((a, b) => (b.isRead === false ? a + 1 : a), 0) > 0 && (
          <circle stroke="#ff4b4b" fill="#ff4b4b" cx="18" cy="17" r="4" />
        )}
      </svg>
    </button>
  );
};
