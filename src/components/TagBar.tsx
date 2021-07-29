import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const TagBar = () => {
  const user = useSelector((state: any) => state.user.user);

  return (
    <div className="px-2">
      <h2 className="font-bold text-primary pb-4">My Tags</h2>
      <ul>
        {user &&
          user.tags.map((tag: string, i: number) => {
            return (
              <li key={i} className="hover:bg-gray hover:text-blue rounded transition duration-200">
                <Link className="flex px-2 py-2" to={`/tags/${tag}`}>
                  #{tag}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
