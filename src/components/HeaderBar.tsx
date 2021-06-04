import React from 'react'
import { Link } from 'react-router-dom'

export const HeaderBar = () => {
    return (
        <div className="bg-primary sticky top-0">
            <nav className='h-14 w-10/12 mx-auto'>
                <ul>
                    <Link to='/'>Home</Link>
                    <Link to='/dashboard'>Dashboard</Link>
                </ul>
            </nav>
        </div>
    )
}
