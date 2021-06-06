import React from 'react';

export const ButtonProfile = ({ setShow }: { setShow: (show: any) => void}) => {
    const handleClick = () => {
        setShow((show: boolean) => !show)
    }

    return (
        <button className="w-8" onClick={handleClick}>
            <img
                className="rounded-full"
                alt="profile_picture"
                src="https://randomuser.me/portraits/men/52.jpg"
            />
        </button>
    )
}
