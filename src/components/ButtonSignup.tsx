import React from 'react'
import { useHistory } from 'react-router'

export const ButtonSignup = () => {
    let history = useHistory();

    const handleClick = () => {
        history.push('/signup');
    }

    return (
        <button onClick={handleClick} className="btn-white text-gray font-light">
           Signup 
        </button>
    )
}
