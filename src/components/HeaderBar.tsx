import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserProvider';
import { ButtonCreateQuestion } from './ButtonCreateQuestion';
import { ButtonLogin } from './ButtonLogin';
import { ButtonSignup } from './ButtonSignup';
import { ButtonNotif } from './ButtonNotif';
import { ButtonProfile } from './ButtonProfile';
import { SearchBar } from './SearchBar';

export const HeaderBar = () => {
    const { user } = useUser();
    return (
        <div className="bg-gray sticky top-0 z-50">
            <nav className='h-14 w-11/12 lg:w-10/12 py-2 mx-auto flex justify-between'>
                <div className="flex items-center space-x-4">
                    <div className='bg-white hover:opacity-60 text-secondary rounded flex items-center px-1 justify-center h-10 transition duration-300'>
                        <Link to='/' className="font-bold text-lg text-gray">Mdev</Link>
                    </div>
                    <SearchBar />
                </div>
                {user ?
                    (<div className="flex items-center space-x-4">
                        <ButtonCreateQuestion />
                        <ButtonNotif />
                        <ButtonProfile />
                    </div>) :
                    (<div className="flex items-center space-x-4">
                        <ButtonLogin />
                        <ButtonSignup />
                    </div>)
                }
            </nav>
        </div>
    )
}
