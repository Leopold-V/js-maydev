import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userType } from '../app/types';
import userServices from '../services/user.services';

export const Leaderboard = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const usersData = await userServices.getAllUsers();
      setUsers(usersData);
    })();
  }, [])


  if (users.length === 0) {
    return (
      <div className="mt-8">Loading leaderboard...</div>
    )
  }
  return (
    <div className="card mt-8">
      <ul className="space-y-3 text-sm">
        <li className="flex justify-between font-semibold">
          <div>Rank</div>
          <div className="w-2/3">Username</div>
          <div>Score</div>
        </li>
        {users.map((user: userType, i) => (
          <li className="flex justify-between">
          <div>{i+1}.</div>
          <div className="flex items-center space-x-2 w-2/3 hover:text-blue">
            <div className="w-6 focus:outline-none">
              <img
                className="rounded-full"
                alt="profile_picture"
                src={user.avatar || "https://randomuser.me/portraits/men/52.jpg"}
              />
            </div>
            <Link
              to={`/profile/${user.userId}`}
              className="truncate w-2/3"
            >
              {user.username || 'Anonymous'}
            </Link>
          </div>
          <div>{user.score}</div>
        </li>
        ))}
      </ul>
    </div>
  );
};
