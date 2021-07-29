import React from 'react';
import { Link } from 'react-router-dom';
import { notificationType } from '../app/types';

export const NotifsDropdown = ({
  show,
  setShow,
  notifsList,
}: {
  show: boolean;
  setShow: (show: any) => void;
  notifsList: notificationType[];
}) => {
  const closeProfileItem = () => {
    setShow(false);
  };

  const handleClick = () => {
    // TODO : mark the notif as read
    console.log('mark the notif as read');
  };

  if (!show) return null;
  return (
    <>
      <div className="absolute z-10 top-14 right-6 bg-gray w-40 rounded border-2 border-gray-100">
        <ul className="py-1 px-1">
          {notifsList.map((notif: notificationType) => (
            <li
              className="hover:bg-gray-100 hover:text-blue rounded transition duration-200"
              onClick={handleClick}
            >
              <Link className="flex items-center space-x-2 px-2 py-2" to={`/${notif.link}`}>
                <span>{notif.content}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <section
        className="absolute h-screen w-full top-0 -left-4 mx-0"
        onClick={closeProfileItem}
      ></section>
    </>
  );
};
