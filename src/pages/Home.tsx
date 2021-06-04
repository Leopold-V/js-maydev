import React, { useEffect } from 'react'
import { InfosBar } from '../components/InfosBar'
import { MainContent } from '../components/MainContent'
import { SideBar } from '../components/SideBar'
import { useUser } from '../context/UserProvider'

export const Home = () => {
    const { user } = useUser();

    useEffect(() => {
        console.log(user);
    }, [])

    return (
        <div className="grid grid-cols-10 gap-x-4">
            <div className="col-span-2">
                <SideBar />
            </div>
            <div className="col-span-6">
                <MainContent />
            </div>
            <div className="col-span-2 bg-gray">
                <InfosBar />
            </div>
        </div>
    )
}
