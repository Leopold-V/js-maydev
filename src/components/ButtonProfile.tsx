import React from 'react'

export const ButtonProfile = () => {
    const handleClick = () => {
        console.log('Display profile menu');
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
