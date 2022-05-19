import React from 'react'
import { Icon } from 'Icons'

function Menu() {
    return (
        <nav className='px-2'>
            <ul className='flex flex-col'>
                <li>
                    <a href="#" className='h-10 flex items-center text-sm font-semibold text-white text-white rounded px-4 bg-active'>
                        <span>
                            <Icon name="home" size="24" />
                        </span>
                        Anasayfa
                    </a>
                </li>
                <li>
                    <a href="#" className='h-10 flex items-center text-sm font-semibold text-link hover:text-white rounded px-4'>
                        <span>
                            <Icon name="search" size="24" />
                        </span>
                        Ara
                    </a>
                </li>
                <li>
                    <a href="#" className='h-10 flex items-center text-sm font-semibold text-link hover:text-white rounded px-4'>Kitaplığın</a>
                </li>
            </ul>
        </nav>
    )
}

export default Menu