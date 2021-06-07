import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export const ProfilePage = () => {
    const user = useSelector((state: any) => state.user.user);

    return (
        <div className="w-full">
            <div className="card relative rounded lg:w-9/12 flex flex-col items-center mx-auto mt-10 md:mt-20">
                <div className="rounded-full absolute -top-8 md:-top-16 bg-background">
                    <div className="w-16 md:w-32 p-2">
                        <img
                        className="rounded-full"
                        alt="profile_picture"
                        src={user.avatar || "https://randomuser.me/portraits/men/52.jpg"}
                        />
                    </div>
                </div>
                <div className="mt-4 md:mt-14 w-full text-center">
                    <h1 className="font-extrabold text-xl md:text-3xl text-white py-4">{user.username || 'No name'}</h1>
                    <p className="text-center md:text-lg lg:w-3/4 mx-auto">{user.bio}</p>
                </div>
                <Link to='/settings' className="btn-primary text-gray mt-4 md:mt-10 mb-4 md:mb-6">Edit Profile</Link>
            </div>
        </div>
    )
}
