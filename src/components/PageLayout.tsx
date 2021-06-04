import React, { ReactNode } from 'react'

export const PageLayout = ({children}: {children: ReactNode}) => {
    return (
        <div className="w-10/12 mx-auto min-h-screen mt-4">
            {children}
        </div>
    )
}
