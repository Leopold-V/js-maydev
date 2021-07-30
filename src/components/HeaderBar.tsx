import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { notificationType, userType } from '../app/types';

import {
  ButtonProfile,
  ButtonCreateQuestion,
  ButtonLogin,
  ButtonSignup,
  ButtonNotif,
} from './Button';
import { SearchBar } from './SearchBar';
import { ProfileDropwdown } from './ProfileDropwdown';
import { NotifsDropdown } from './NotifsDropdown';

export const HeaderBar = () => {
  const user: userType = useSelector((state: any) => state.user.user);
  const loading = useSelector((state: any) => state.user.loading);
  const notifications: notificationType[] = useSelector(
    (state: any) => state.notifications.notifications
  );

  const [showProfileItems, setShowProfileItems] = useState(false);
  const [showNotifsList, setShowNotifsList] = useState(false);

  return (
    <div className="bg-gray sticky top-0 z-50">
      <nav className="h-14 w-11/12 lg:w-10/12 py-2 mx-auto flex justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-white hover:opacity-60 text-secondary rounded flex items-center px-1 justify-center h-10 transition duration-300">
            <Link to="/" className="font-bold text-lg text-gray">
              Mdev
            </Link>
          </div>
          <SearchBar />
        </div>
        {!loading &&
          (user ? (
            <div className="flex items-center space-x-4">
              <ButtonCreateQuestion />
              <ButtonNotif setShow={setShowNotifsList} notifsList={notifications} />
              <NotifsDropdown
                show={showNotifsList}
                setShow={setShowNotifsList}
                notifsList={notifications}
              />
              <ButtonProfile setShow={setShowProfileItems} />
              <ProfileDropwdown show={showProfileItems} setShow={setShowProfileItems} />
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <ButtonLogin />
              <ButtonSignup />
            </div>
          ))}
      </nav>
    </div>
  );
};
