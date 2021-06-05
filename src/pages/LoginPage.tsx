import { ChangeEvent, FormEvent, useState } from 'react';
import authServices from '../services/auth.services';

export const LoginPage = () => {
    const [input, setInput] = useState<{email: string, password: string}>({email: '', password: ''});

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput((input) => ({...input, [e.target.name]: e.target.value}));
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        authServices.login(input.email, input.password);
    }

    return (
        <div className="h-full flex items-center justify-center">
            <div className="relative flex flex-col min-w-0 break-words w-96 mb-6 shadow-lg rounded-lg bg-gray border-0">
                <div className="flex-auto px-4 lg:px-10 py-10">
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
                        <div>
                            <label className="inline-flex items-center cursor-pointer">
                                <input
                                id="customCheckLogin"
                                type="checkbox"
                                className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                                style={{ transition: "all .15s ease" }}
                                />
                                <span className="ml-2 text-sm font-semibold text-gray-700">
                                    Remember me
                                </span>
                            </label>
                        </div>
                        <div className="text-center mt-6">
                            <button
                                className="bg-blue text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                                style={{ transition: "all .15s ease" }}
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                    <div className="text-center mt-6">
                        <button
                            className="btn-white text-gray"
                            type="button"
                            style={{ transition: "all .15s ease" }}
                        >
                            New account ?
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}