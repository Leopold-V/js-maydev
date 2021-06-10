import React, { MouseEvent, useEffect, useState } from 'react';
import { questionType } from '../../app/types';

export const QuestionsTimeFilter = ({
  questions,
  setFilteredQuestions,
}: {
  questions: questionType[];
  setFilteredQuestions: (question: questionType[]) => void;
}) => {
  const [filter, setFilter] = useState({
    name: 'Latest',
    value: 0,
  });

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    //@ts-ignore
    setFilter({ name: target.innerText, value: +target.dataset.time });
  };

  useEffect(() => {
    if (filter.name === 'Latest') {
      const questionFilter: questionType[] = [...questions]
        .map((ele) => ({ ...ele, date: '' + Date.parse(ele.date)}))
        .sort((a: any, b: any) => b.date - a.date)
        .map((ele) => ({ ...ele, date: new Date(+ele.date).toDateString()}))
      setFilteredQuestions(questionFilter);
    }
    else if (filter.name === 'All') {
      const questionFilter: questionType[] = [...questions]
        .sort((a, b) => b.likes.length - a.likes.length)
      setFilteredQuestions(questionFilter);
    } else {
      const questionFilter: questionType[] = [...questions]
        .filter((ele) => Date.parse(ele.date) > (Date.now() - filter.value * 1000))
        .sort((a, b) => b.likes.length - a.likes.length)
      setFilteredQuestions(questionFilter);
    }
  }, [filter, questions, setFilteredQuestions]);

  return (
    <ul className="flex space-x-2 sm:space-x-2">
      <li>
        <button
          className={`hover:bg-gray hover:text-blue border-b-4 ${filter.name === 'Latest' ? 'border-primary' : 'border-transparent'} focus:outline-none focus:border-primary hover:border-primary
                 rounded transition duration-200 px-2 py-1`}
          data-time="0"
          onClick={handleClick}
        >
          Latest
        </button>
      </li>
      <li>
        <button
          className={`hover:bg-gray hover:text-blue border-b-4 ${filter.name === 'Week' ? 'border-primary' : 'border-transparent'} focus:outline-none focus:border-primary hover:border-primary
          rounded transition duration-200 px-2 py-1`}
          data-time="604800"
          onClick={handleClick}
        >
          Week
        </button>
      </li>
      <li>
        <button
          className={`hover:bg-gray hover:text-blue border-b-4 ${filter.name === 'Month' ? 'border-primary' : 'border-transparent'} focus:outline-none focus:border-primary hover:border-primary
          rounded transition duration-200 px-2 py-1`}
          onClick={handleClick}
          data-time="2592000"
        >
          Month
        </button>
      </li>
      <li>
        <button
          className={`hover:bg-gray hover:text-blue border-b-4 ${filter.name === 'Year' ? 'border-primary' : 'border-transparent'} focus:outline-none focus:border-primary hover:border-primary
          rounded transition duration-200 px-2 py-1`}
          onClick={handleClick}
          data-time="31536000"
        >
          Year
        </button>
      </li>
      <li>
        <button
          className={`hover:bg-gray hover:text-blue border-b-4 ${filter.name === 'All' ? 'border-primary' : 'border-transparent'} focus:outline-none focus:border-primary hover:border-primary
          rounded transition duration-200 px-2 py-1`}
          onClick={handleClick}
          data-time="0"
        >
          All
        </button>
      </li>
    </ul>
  );
};
