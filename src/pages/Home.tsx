import React from 'react'
import { InfosBar } from '../components/InfosBar'
import { MainContent } from '../components/MainContent'
import { SideBar } from '../components/SideBar'

export const Home = () => {
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
