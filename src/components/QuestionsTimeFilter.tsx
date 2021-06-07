import React from 'react'

export const QuestionsTimeFilter = () => {
    return (
        <ul className="flex space-x-2 sm:space-x-2">
            <li>
                <button className="hover:bg-gray hover:text-blue border-b-4 border-transparent hover:border-primary
                 rounded transition duration-200 px-2 py-1">Feed</button>
            </li>
            <li>
                <button className="hover:bg-gray hover:text-blue border-b-4 border-transparent hover:border-primary
                 rounded transition duration-200 px-2 py-1">Week</button>
            </li>
            <li>
                <button className="hover:bg-gray hover:text-blue border-b-4 border-transparent hover:border-primary
                 rounded transition duration-200 px-2 py-1">Month</button>
            </li>
            <li>
                <button className="hover:bg-gray hover:text-blue border-b-4 border-transparent hover:border-primary
                 rounded transition duration-200 px-2 py-1">Year</button>
            </li>
            <li>
                <button className="hover:bg-gray hover:text-blue border-b-4 border-transparent hover:border-primary
                 rounded transition duration-200 px-2 py-1">All</button>
            </li>
        </ul>
    )
}
