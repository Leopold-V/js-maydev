import React from 'react';
import { auth } from '../app/firebase';

export const ButtonProfile = () => {
    const handleClick = () => {
        auth.signOut()
    }

    return (
        <button onClick={handleClick}>
            <svg width="30" height="30">
                <circle 
                    fill='#ffffff'
                    r="15"
                    cx="15"
                    cy="15"
                />
            </svg>
        </button>
    )
}
