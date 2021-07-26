import React from 'react';

export const Leaderboard = () => {
  return (
    <div className="card mt-8">
      <ul className="space-y-3 text-sm">
        <li className="flex justify-between font-semibold">
          <div>Rank</div>
          <div className="w-2/3">Username</div>
          <div>Score</div>
        </li>
        <li className="flex justify-between">
          <div>1.</div>
          <div className="flex items-center space-x-2 w-2/3 hover:text-blue">
            <div className="w-6 focus:outline-none">
              <img
                className="rounded-full"
                alt="profile_picture"
                src="https://randomuser.me/portraits/men/52.jpg"
              />
            </div>
            <span className="truncate w-2/3">Leopold</span>
          </div>
          <div>5</div>
        </li>
        <li className="flex justify-between">
          <div>2.</div>
          <div className="flex items-center space-x-2 w-2/3 hover:text-blue">
            <div className="w-6 focus:outline-none">
              <img
                className="rounded-full"
                alt="profile_picture"
                src="https://randomuser.me/portraits/men/52.jpg"
              />
            </div>
            <span className="truncate w-2/3">Joe</span>
          </div>
          <div>3</div>
        </li>
        <li className="flex justify-between">
          <div>3.</div>
          <div className="flex items-center space-x-2 w-2/3 hover:text-blue">
            <div className="w-6 focus:outline-none">
              <img
                className="rounded-full"
                alt="profile_picture"
                src="https://randomuser.me/portraits/men/52.jpg"
              />
            </div>
            <span className="truncate w-2/3">Joe</span>
          </div>
          <div>3</div>
        </li>
        <li className="flex justify-between">
          <div>4.</div>
          <div className="flex items-center space-x-2 w-2/3 hover:text-blue">
            <div className="w-6 focus:outline-none">
              <img
                className="rounded-full"
                alt="profile_picture"
                src="https://randomuser.me/portraits/men/52.jpg"
              />
            </div>
            <span className="truncate w-2/3">azertyuiopqsdfgghjklmwxcvbn,</span>
          </div>
          <div>2</div>
        </li>
        <li className="flex justify-between">
          <div>5.</div>
          <div className="flex items-center space-x-2 w-2/3 hover:text-blue">
            <div className="w-6 focus:outline-none">
              <img
                className="rounded-full"
                alt="profile_picture"
                src="https://randomuser.me/portraits/men/52.jpg"
              />
            </div>
            <span className="truncate w-2/3">Joe</span>
          </div>
          <div>1</div>
        </li>
      </ul>
    </div>
  );
};
