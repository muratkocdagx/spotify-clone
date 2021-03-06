import React from 'react'
import logo from 'img/logo.svg'
import Menu from 'components/Sidebar/Menu'
import { Icon } from 'Icons'
import Playlists from './Sidebar/Playlists'
import DownloadApp from './Sidebar/DownloadApp'


export default function Sidebar() {
    return (
        <aside className='w-60 pt-6 flex flex-shrink-0 flex-col bg-black'>
            <a href="#" className='px-6 mb-7'>
                <img src={logo} alt="" className='h-10' />
            </a>
            <Menu />

            <nav className='mt-6'>
                <ul>
                    <li>
                        <a href="#" className='py-2 px-6 flex text-sm items-center text-link group font-semibold hover:text-white'>
                            <span className='w-6 h-6 flex items-center justify-center mr-4 bg-white bg-opacity-60 group-hover:bg-opacity-100 rounded-sm text-black'>
                                <Icon name='plus' size='12' />
                            </span>
                            Çalma Listesi Oluştur
                        </a>
                    </li>
                    <li>
                        <a href="#" className='py-2 px-6 flex text-sm items-center text-link group font-semibold hover:text-white'>
                            <span className='w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-purple-700 to-blue-300 opacity-70 group-hover:opacity-100  text-white rounded-sm'>
                                <Icon name='heartFilled' size='12'/>
                            </span>
                            Beğenilen Şarkılar
                        </a>
                    </li>
                </ul>

            </nav>

            <Playlists />

            <DownloadApp />

        </aside>
    )
}
