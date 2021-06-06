import React from 'react'
import { Link } from 'react-router-dom';
import authServices from '../services/auth.services';

export const ProfileDropwdown = ({ show, setShow }: { show: boolean, setShow: (show: any) => void }) => {

    const logout = () => {
        setShow(false);
        authServices.logout();
    }

    const closeProfileItem = () => {
        setShow(false);
    }

    if (!show) return null;
    return (
        <>
            <div className="absolute z-10 top-14 right-6 bg-gray-light w-40 rounded border-2 border-gray-100">
                <ul className="py-1">
                    <li className="hover:bg-gray hover:text-blue rounded transition duration-200">
                        <Link className="flex flex-col justify-center px-2 py-2" to='/profile'>
                            <span>Leopold</span>
                            <span className="text-sm text-muted">@Leopold</span>
                        </Link>
                    </li>
                    <hr />
                    <li className="hover:bg-gray hover:text-blue rounded transition duration-200">
                        <Link className="flex items-center space-x-2 px-2 py-2" to='/dashboard'>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className="hover:bg-gray hover:text-blue rounded transition duration-200">
                        <Link className="flex items-center space-x-2 px-2 py-2" to='/settings'>
                            <span>Settings</span>
                        </Link>
                    </li>
                    <hr />
                    <li className="hover:bg-gray hover:text-blue rounded transition duration-200">
                        <button className="flex items-center space-x-2 px-2 py-2" onClick={logout}>Sign out</button>
                    </li>
                </ul>
            </div>
            <section
                className="absolute h-screen w-full top-14 -left-4 mx-0"
                onClick={closeProfileItem}
            ></section>
        </>
    )
}
