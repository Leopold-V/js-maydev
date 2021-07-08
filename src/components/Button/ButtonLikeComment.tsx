import React from 'react'

export const ButtonLikeComment = () => {
    return (
        <button
        className="flex items-center justify-center space-x-1 py-1 px-2 bg-gray-100 
        text-muted focus:outline-none hover:bg-gray-200 hover:text-primary transition duration-200 rounded-full"
        onClick={() => console.log('todo: add like')}
        >
            <span className="text-sm">{5}</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="#bdbdbd"
            >
                <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
                />
            </svg>
        </button>
    )
}
