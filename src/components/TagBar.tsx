import React from 'react'
import { Link } from 'react-router-dom'

export const TagBar = () => {
    return (
        <div className="px-2">
            <h2 className="font-bold text-primary pb-4">My Tags</h2>
            <ul>
                <li className="hover:bg-gray hover:text-blue rounded transition duration-200">
                    <Link className="flex px-2 py-2" to='/'>
                        #react
                    </Link>
                </li>
                <li className="hover:bg-gray hover:text-blue rounded transition duration-200">
                    <Link className="flex px-2 py-2" to='/'>
                        #node
                    </Link>
                </li>
                <li className="hover:bg-gray hover:text-blue rounded transition duration-200">
                    <Link className="flex px-2 py-2" to='/'>
                        #electron
                    </Link>
                </li>
                <li className="hover:bg-gray hover:text-blue rounded transition duration-200">
                    <Link className="flex px-2 py-2" to='/'>
                        #vue
                    </Link>
                </li>
            </ul>
        </div>
    )
}
