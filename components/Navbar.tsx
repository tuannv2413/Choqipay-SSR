import Image from 'next/image';
import React, {useState} from 'react'

const Navbar = () => {
    // const { handleSignOut } = useAuth();
    const [stateProfile, setStateProfile] = useState(false);

    const handleClickProfile = () => {
        setStateProfile(!stateProfile);
    }

  return (
    <nav className='bg-gray-800 shadow-xl sticky w-full top-0 text-black z-50' x-data='{ mobilemenue: false }'>
            <div className='mx-auto '>
                <div className='flex items-stretch justify-between h-16'>
                    <div className='flex items-center pl-6'>
                        <div className='flex-shrink-0 md:hidden'>

                            <a href='#' className='text-white flex items-center space-x-2 group'>
                                <div className='icon-navbar-header'>
                                    <svg className='h-8 w-8 transition-transform duration-300 group-hover:-rotate-45 ' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'></path>
                                    </svg>
                                </div>

                                <div>
                                    <span className='text-2xl font-extrabold'>ChoqiPay</span>
                                    <span className='text-xs block'>Project Managment</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='hidden md:flex items-stretch'>
                        <div className='ml-4 flex md:ml-6 '>
                            <div className='relative bg-gray-700 px-4 text-gray-400 hover:text-white text-sm cursor-pointer' id='profile' x-data='{open: false}'>
                                <div className='flex items-center min-h-full' onClick={handleClickProfile}>

                                    <div className='max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white' id='user-menu-button' aria-expanded='false' aria-haspopup='true'>
                                        <span className='sr-only'>Open user menu</span>
                                        <Image className='h-8 w-8 rounded-full' src="/contact_photo.png" alt='' />
                                    </div>

                                    <div className='flex flex-col ml-3'>
                                        <span>Administrator</span>
                                    </div>
                                </div>

                                <div id='profile-menu' className='origin-top-right absolute right-0 mt-0 min-w-full rounded-b-md shadow py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none' style={{ display: stateProfile ? 'block' : 'none' }}>
                                    <span className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100' role='menuitem' tabIndex={-1} id='user-menu-item-2' onClick={() => {}}>Sign out</span>
                                </div>-
                            </div>

                        </div>
                    </div >
                </div >
            </div >
        </nav >
  )
}

export default Navbar