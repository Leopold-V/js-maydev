import { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router';
import authServices from '../services/auth.services';

export const LoginPage = () => {
    let history = useHistory();
    const [input, setInput] = useState<{email: string, password: string}>({email: '', password: ''});
    const [error, setError] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput((input) => ({...input, [e.target.name]: e.target.value}));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await authServices.login(input.email, input.password);
        } catch (error) {
            setError(error.message);
        }
    };

    const loginGithub = async () => {
        await authServices.loginWithGithub();
    };

    const GoToRegister = () => {
        history.push('/signup');
    }

    return (
        <div className="mt-16 flex items-center justify-center">
            <div className="flex flex-col min-w-0 break-words w-112 mb-6 shadow-lg rounded-lg bg-gray-extra-light border-0">
            <div className="rounded-t mb-0 px-6 py-6">    
            <div className="text-center mb-3">
                      <h6 className="text-gray text-sm font-bold">
                        Sign in with
                      </h6>
                    </div>
                    <div className="btn-wrapper text-center">
                      <button
                        onClick={loginGithub}
                        className="bg-white active:bg-gray-100 text-gray px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        <img
                          alt="..."
                          className="w-5 mr-1"
                          src="UI_icons_dark_github.svg"
                        />
                        Github
                      </button>
                      <button
                        className="bg-white active:bg-gray-100 text-gray px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        <img
                          alt="..."
                          src="UI_icons_color_google.svg"
                          className="w-5 mr-1"
                        />
                        Google
                      </button>
                    </div>
                    <hr className="mt-6 border-b-1 border-gray-400" />
                  </div>

                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-gray text-center mb-3 font-bold">
                      <small>Or sign in with credentials</small>
                    </div>
                    {/* <h1 className="pb-4 text-gray font-bold text-xl text-center">Login</h1> */}
                    {error && <div className="text-error bg-error rounded p-2 text-center text-sm mb-4">
                        {error}
                    </div>}
                    <form onSubmit={handleSubmit}>
                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-gray-100 text-xs font-bold mb-2"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-200 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                placeholder="Email"
                                style={{ transition: "all .15s ease" }}
                                value={input.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-gray-100 text-xs font-bold mb-2"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                name="password"
                                type="password"
                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-200 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
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
                                className="form-checkbox border-0 rounded text-gray ml-1 w-5 h-5"
                                style={{ transition: "all .15s ease" }}
                                />
                                <span className="ml-2 text-sm font-semibold text-gray-100">
                                    Remember me
                                </span>
                            </label>
                        </div>
                        <div className="text-center mt-6">
                            <button
                                className="btn-primary text-gray w-full"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                    <div className="text-center mt-6">
                        <button
                            className="btn-white text-gray"
                            type="button"
                            onClick={GoToRegister}
                        >
                            New account ?
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}