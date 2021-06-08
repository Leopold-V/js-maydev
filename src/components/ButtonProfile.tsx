import React from 'react';
import { useSelector } from 'react-redux';

export const ButtonProfile = ({ setShow }: { setShow: (show: any) => void}) => {
    const avatar = useSelector((state: any) => state.user.user.avatar);

    const handleClick = () => {
        setShow((show: boolean) => !show)
    }

    return (
        <button className="w-8 focus:outline-none" onClick={handleClick}>
            <img
                className="rounded-full"
                alt="profile_picture"
                src={avatar || "https://randomuser.me/portraits/men/52.jpg"}
            />
        </button>
    )
}
