import React from 'react'
import logo from 'img/logo.svg'
import Menu from 'components/Sidebar/Menu'

export default function Sidebar() {
    return (
        <aside className='w-60 py-6 flex flex-col'>
            <a href="#" className='px-6 mb-5'>
                <img src={logo} alt="" className='h-10' />
            </a>
            <Menu />

        </aside>
    )
}
