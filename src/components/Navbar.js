import Auth from 'Navbar/Auth'
import Navigation from 'Navbar/Navigation'
import React from 'react'
import { useMatch } from 'react-router-dom'

function Navbar() {

    const searchRoute = useMatch('/search');

    return (
        <nav className='h-[3.75rem] flex items-center justify-between px-8'>
            <Navigation />

            { searchRoute && (
                <div>
                    Search Kismindasin
                </div>
            )}


            <Auth />
        </nav>
    )
}

export default Navbar