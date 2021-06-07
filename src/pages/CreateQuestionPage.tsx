import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { addQuestion } from '../actions/question.actions';

export const CreateQuestionPage = () => {
    const [input, setInput] = useState({title: '', content: ''})
    const [error, setError] = useState('');

    const userId = useSelector((state: any) => state.user.user.userId);
    const dispatch = useDispatch();

    const handleSubmit = (e: FormEvent): void => {
        e.preventDefault();
        if (!input.title || !input.content) {
            setError('Title or content is empty !')
        } else {
            const newQuestion = {...input, authorId: userId, date: new Date(Date.now())};
            dispatch(addQuestion(newQuestion));
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput((input) => ({...input, [e.target.name] :e.target.value}));
    }

    return (
        <div className="w-full md:w-3/4 mx-auto">
            <div className="flex justify-between items-center">
                <h1 className="py-4 pl-2 md:pl-0">Create question</h1>
                <div className="space-x-1">
                <button className="hover:bg-gray focus:outline-none hover:text-blue border-b-4 border-transparent focus:border-primary
                 rounded transition duration-200 px-2 py-1">Edit</button>
                <button className="hover:bg-gray focus:outline-none hover:text-blue border-b-4 border-transparent focus:border-primary
                 rounded transition duration-200 px-2 py-1">Preview</button>
                </div>
            </div>
            <div className="card">
                {error && <div className="text-error w-56 mx-auto bg-error rounded p-2 text-center text-sm my-4">
                    {error}
                </div>}
                <form className="py-6 space-y-4 w-full flex flex-col items-center" onSubmit={handleSubmit}>
                    <input
                        onChange={handleChange}
                        className="border shadow-lg border-gray-500 rounded py-2 px-4 bg-gray-100
                        focus:outline-none focus:ring-1 focus:ring-primary focus:bg-background focus:border-transparent
                        h-10 w-4/5 placeholder-gray-500 transition duration-200"
                        placeholder="Search..."
                        name="title"
                        value={input.title}
                    />
                    <textarea
                        onChange={handleChange}
                        className="border shadow-lg border-gray-500 rounded py-2 px-4 bg-gray-100
                        focus:outline-none focus:ring-1 focus:ring-primary focus:bg-background focus:border-transparent
                        min-h-72 w-4/5 placeholder-gray-500 transition duration-200"
                        placeholder="Content..."
                        name="content"
                        value={input.content}
                    />
                    <button className="btn-primary text-gray">Create</button>
                </form>
            </div>
        </div>
    )
}
