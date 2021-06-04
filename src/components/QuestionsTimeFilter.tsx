import React from 'react'

export const QuestionsTimeFilter = () => {
    return (
        <ul className="flex space-x-4">
            <li>
                <button className="hover:bg-gray hover:text-blue border-b-4 border-transparent hover:border-primary
                 rounded transition duration-200 px-2 py-2">Feed</button>
            </li>
            <li>
                <button className="hover:bg-gray hover:text-blue border-b-4 border-transparent hover:border-primary
                 rounded transition duration-200 px-2 py-2">Week</button>
            </li>
            <li>
                <button className="hover:bg-gray hover:text-blue border-b-4 border-transparent hover:border-primary
                 rounded transition duration-200 px-2 py-2">Month</button>
            </li>
            <li>
                <button className="hover:bg-gray hover:text-blue border-b-4 border-transparent hover:border-primary
                 rounded transition duration-200 px-2 py-2">Year</button>
            </li>
            <li>
                <button className="hover:bg-gray hover:text-blue border-b-4 border-transparent hover:border-primary
                 rounded transition duration-200 px-2 py-2">All</button>
            </li>
        </ul>
    )
}
