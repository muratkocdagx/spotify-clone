import React from "react";
import { Menu } from "@headlessui/react";
import { Icon } from "Icons";

function Auth() {

  const user = {
    name: 'Murat Koçdağ',
    avatar: null
  }
  return (

    <>
      <Menu as='nav' className='relative'>
        {({ open }) => (
          <>
            <Menu.Button className={`flex items-center h-8 rounded-3xl bg-black pr-2 pl-[2px] ${open ? 'bg-active' : 'bg-black'} hover:bg-active`}>
              {
                user.avatar === null ?
                  <span className="w-7 h-7 rounded-full bg-[#535353] flex justify-center items-center mr-2 ">
                    <Icon name='user' size='16' />
                  </span> :
                  <img className="w-7 h-7 rounded-full mr-2" src="https://i.picsum.photos/id/202/200/300.jpg?hmac=KWOdj8XRnO9x8h_I9rIbscSAhD1x-TwkSPPYjWLN2sI" alt="" />
              }
              <span className="text-sm font-semibold mr-2">{user.name}</span>

              <span className={open && 'rotate-180'}>
                <Icon name='downDir' size={16} />
              </span>

            </Menu.Button>
            <Menu.Items className={'absolute top-full right-0 w-48 bg-active rounded translate-y-2 p-1'}>
              <Menu.Item>
                {({ active }) => (
                  <a className={`h-10 flex justify-between items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`} href="#" >
                    Account settings
                    <Icon name='external' size={16} />
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`} href="#" >
                    Profile
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`} href="#" >
                    Log Out
                  </a>
                )}
              </Menu.Item>



            </Menu.Items>
          </>
        )}


      </Menu>
    </>
  );
}

export default Auth;
