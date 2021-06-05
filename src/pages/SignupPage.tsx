import { ChangeEvent, FormEvent, useState } from 'react';
import authServices from '../services/auth.services';

export const SignupPage = () => {
    const [input, setInput] = useState<{email: string, password: string, password2: ''}>({email: '', password: '', password2: ''});
    const [error, setError] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput((input) => ({...input, [e.target.name]: e.target.value}));
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (input.password !== input.password2) {
            setError('Your password and confirm password are different !')
        } else {
            try {
                await authServices.register(input.email, input.password);
            } catch (error) {
                setError(error.message);
            }
        }
    }

    return (
        <div className="h-full flex items-center justify-center">
            <div className="relative flex flex-col min-w-0 break-words w-96 mb-6 shadow-lg rounded-lg bg-gray border-0">
                <div className="flex-auto px-4 lg:px-10 py-10">
                    <h1 className="pb-4 font-bold text-xl text-center">Sign up</h1>
                    {error && <div className="text-error bg-error rounded p-2 text-center text-sm mb-4">
                        {error}
                    </div>}
                    <form onSubmit={handleSubmit}>
                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                placeholder="Email"
                                style={{ transition: "all .15s ease" }}
                                value={input.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                name="password"
                                type="password"
                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                placeholder="Password"
                                style={{ transition: "all .15s ease" }}
                                value={input.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                htmlFor="password2"
                            >
                                Confirm password
                            </label>
                            <input
                                name="password2"
                                type="password"
                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                placeholder="Confirm password"
                                style={{ transition: "all .15s ease" }}
                                value={input.password2}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                        </div>
                        <div className="text-center mt-6">
                            <button
                                className="btn-primary text-gray w-full"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
