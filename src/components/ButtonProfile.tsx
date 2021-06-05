import React from 'react';
import authServices from '../services/auth.services';

export const ButtonProfile = () => {
    const handleClick = () => {
        authServices.logout();
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
