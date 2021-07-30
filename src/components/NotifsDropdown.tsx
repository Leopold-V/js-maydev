import React, { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { readNotification } from '../actions/notifications.actions';
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
  const history = useHistory();
  const dispatch = useDispatch();

  const closeProfileItem = () => {
    setShow(false);
  };

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    dispatch(readNotification(target.dataset.id));
    history.push('/' + target.dataset.link);
  };

  if (!show) return null;
  return (
    <>
      <div className="absolute z-10 top-14 bg-gray w-56 rounded border-2 border-gray-100 max-h-40 overflow-x-auto">
        <ul className="py-1 px-1">
          {notifsList.length > 0 ? [...notifsList]
            //@ts-ignore
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((notif: notificationType) => (
              <li
                key={notif.id}
                className={`${
                  notif.isRead ? '' : 'bg-gray-100'
                } "hover:bg-gray-100 hover:text-blue rounded transition duration-200"`}
              >
                <button
                  data-id={notif.id}
                  data-link={notif.link}
                  onClick={handleClick}
                  className="flex items-center space-x-2 px-2 py-1"
                >
                  {notif.content}
                </button>
              </li>
            )) : <div className="text-center py-1">Nothing new !</div>}
        </ul>
      </div>
      <section
        className="absolute h-screen w-full top-0 -left-4 mx-0"
        onClick={closeProfileItem}
      ></section>
    </>
  );
};
