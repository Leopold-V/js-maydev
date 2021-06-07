import React from 'react'
import { useSelector } from 'react-redux'
import { auth } from '../app/firebase';

export const ProfilePage = () => {
    const user = useSelector((state: any) => state.user.user);

    const handleUpdate = () => { 
        const user = auth.currentUser;
        //@ts-ignore
        user.updateProfile({
            //@ts-ignore
            bio: "Test bio blablabla"
          }).then(function() {
            // Update successful.
            console.log(user);
            console.log('Update successfull'); 
          })
    }

    return (
        <div>
            Profile Page
            <ul>
                <li>id: {user.userId}</li>
                <li>email: {user.email}</li>
                <li>username: {user.username}</li>
                <li>avatar: {user.avatar}</li>
            </ul>
            <button className="btn-primary" onClick={handleUpdate}>Update Test</button>
        </div>
    )
}
