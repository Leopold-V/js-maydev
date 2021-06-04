import React from 'react'
import { auth } from '../app/firebase';

export const ButtonCreateQuestion = () => {
    const handleClick = () => {
        auth.signInWithEmailAndPassword('leopold12d12@gmail.com', 'nusgpmfg79')
    }
    
    return (
        <button onClick={handleClick} className="btn-primary text-gray font-light">
           New question 
        </button>
    )
}
