import React, { ChangeEvent, FormEvent, useState } from 'react'

export const SearchBar = () => {
    const [input, setInput] = useState('')

    const handleSubmit = (e: FormEvent): void => {
        e.preventDefault();
        console.log(input);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput(e.target.value);
    }

    return (
        <form className="hidden md:block" onSubmit={handleSubmit}>
            <input
                onChange={handleChange}
                className="border shadow-lg border-gray-500 rounded py-2 px-4 bg-gray-100
                focus:outline-none focus:ring-1 focus:ring-primary focus:bg-background focus:border-transparent
                h-10 w-96 placeholder-gray-500 transition duration-200"
                placeholder="Search..."
                value={input}
            />
        </form>
    )
}
