import React from 'react'
import { useHistory } from 'react-router'


export const ButtonLogin = () => {
    let history = useHistory();

    const handleClick = () => {
        history.push('/login');
    }

    return (
        <button onClick={handleClick} className="btn-primary text-gray font-light">
           Login 
        </button>
    )
}
