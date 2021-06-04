import React from 'react'

export const ButtonCreateQuestion = () => {
    const handleClick = () => {
        console.log('Create new question');
    }
    
    return (
        <button onClick={handleClick} className="btn-primary text-gray font-light">
           New question 
        </button>
    )
}
