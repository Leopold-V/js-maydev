import React, { ChangeEvent, FormEvent, useState } from 'react'

export const CreateQuestionPage = () => {
    const [input, setInput] = useState({title: '', content: ''})

    const handleSubmit = (e: FormEvent): void => {
        e.preventDefault();
        console.log(input);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput((input) => ({...input, [e.target.name] :e.target.value}));
    }

    return (
        <div className="w-4/5 mx-auto">
            <h1 className="py-4">Create question</h1>
            <div className="card w-full md:w-3/4 mx-auto">
            <form className="py-6 space-y-4 w-full flex flex-col items-center" onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    className="border shadow-lg border-gray-500 rounded py-2 px-4 bg-gray-100
                    focus:outline-none focus:ring-1 focus:ring-primary focus:bg-background focus:border-transparent
                    h-10 w-96 placeholder-gray-500 transition duration-200"
                    placeholder="Search..."
                    name="title"
                    value={input.title}
                />
                <textarea
                    onChange={handleChange}
                    className="border shadow-lg border-gray-500 rounded py-2 px-4 bg-gray-100
                    focus:outline-none focus:ring-1 focus:ring-primary focus:bg-background focus:border-transparent
                    min-h-72 w-96 placeholder-gray-500 transition duration-200"
                    placeholder="Content..."
                    name="content"
                    value={input.content}
                />
            </form>
            </div>
        </div>
    )
}
