import React from 'react'

export const MarkQuestionSolved = () => {
    return (
        <div
        className="flex items-center justify-center py-1 px-2 bg-gray-200 
                focus:outline-none transition duration-200 rounded-full "
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-check h-4 w-4"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#78ffb9"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M5 12l5 5l10 -10" />
            </svg>
        </div>
    )
}
