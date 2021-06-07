import React from 'react'
import { useSelector } from 'react-redux'

export const ProfilePage = () => {
    const user = useSelector((state: any) => state.user.user)
    return (
        <div>
            Profile Page
            <ul>
                <li>id: {user.userId}</li>
                <li>email: {user.email}</li>
            </ul>
        </div>
    )
}
