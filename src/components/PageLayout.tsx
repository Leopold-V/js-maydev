import React, { ReactNode } from 'react'
import { HeaderBar } from './HeaderBar'

export const PageLayout = ({children}: {children: ReactNode}) => {
    return (
        <div className='bg-background text-primary'>
            <HeaderBar />
            <div className="w-10/12 mx-auto min-h-screen mt-4">
                {children}
            </div>
        </div>
    )
}
