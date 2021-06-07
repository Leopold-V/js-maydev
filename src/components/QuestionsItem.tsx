import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userType } from "../app/types";

export const QuestionsItem = ({
  title,
  authorId,
  date,
  tags,
}: {
  title: string;
  authorId: string;
  date: string;
  tags: string[];
}) => {
  const handleSave = () => {
    console.log("Save !");
  };

  return (
    <Link to={`/question/${authorId}`}>
      <div className="card my-2">
        <div className="flex items-center space-x-2">
          <div className="w-8">
            <img
              className="rounded-full"
              alt="profile_picture"
              src="https://randomuser.me/portraits/men/52.jpg"
            />
          </div>
          <div>
            <div className="text-sm hover:text-white pb-1 transition duration-200">Username to fetch</div>
            <div className="text-xs text-muted hover:text-white pb-1 transition duration-200">
              {date}
            </div>
          </div>
        </div>
        <div className="text-white ml-10 hover:text-blue text-2xl font-bold py-3 transition duration-200">
          {title}
        </div>
        <div className="flex justify-between">
          <ul className="flex items-center ml-10 space-x-2 text-muted text-sm">
            {tags.map((tag) => <li className="hover:text-white transition duration-200">#{tag}</li>)}
          </ul>
          <button onClick={handleSave} className="btn-secondary">
            Save
          </button>
        </div>
      </div>
    </Link>
  );
};
