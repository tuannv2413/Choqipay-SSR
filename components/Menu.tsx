import React from 'react';
import Link from 'next/link';
import axios from '../utils/axiosService';
import API_ENDPOINT from "../constants/apiEndpoint.constants";

const fetchData = () => {
    let result: any = null;
    axios.get(API_ENDPOINT.MENU)
        .then((response) => {
            result = response.data.data
        }).catch((error) => {
        });
    return result;
}

const Menu = () => {
  return (
    <div className='sidebar max-h-screen top-0 h-screen bg-gray-800 text-blue-100 w-64 fixed inset-y-0 left-0 transform transition duration-200 ease-in-out z-50 md:translate-x-0 md:sticky' x-data='{ open: true }'>
            <header className=' h-[64px] py-2 shadow-lg px-4 md:sticky top-0 bg-gray-800 z-40'>
                <Link href='/admin/agx-merchant' className='text-white flex items-center space-x-2 group hover:text-white'>
                    <div>
                        <i className='fa-brands fa-alipay fa-2xl'></i>
                    </div>

                    <div className='menu-name'>
                        <span className='text-2xl font-extrabold'>ChoqiPay</span>
                        <span className='text-xs block'>Web Management</span>
                    </div>
                </Link>
            </header>

            <nav className='px-4 pt-4 pb-4 scroller overflow-y-scroll max-h-[calc(100vh-64px)]' x-data="{selected:'Tasks'}">
                <ul className='flex flex-col space-y-2'>
                    <div className='section border-b pt-4 mb-1 text-xs text-gray-600 border-gray-700 pb-1 pl-3'>
                        加盟店情報
                    </div>
                    {
                        menuData?.map((menu, index) => {
                            return (
                                menu.menuGroup === 1 ? <li className={active === `${menu.menuTitle}` ? 'text-sm text-gray-500 active' : 'text-sm text-gray-500'} key={index} id={menu.menuTitle} onClick={handleClickMenu}>
                                    <Link href={`/admin/${menu.menuTitle}`} className='flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700 '>
                                        <div className='pr-2'>
                                            <img title='加盟店一覧' src={menu.menuIcon} alt='加盟店一覧' className='pa-cl pa-cp pa-cq ' style={{ height: '16px' }}></img>
                                        </div>
                                        <div className='menu-name'>{menu.menuName}</div>
                                    </Link>
                                </li> : null
                            )
                        })
                    }

                    <div className='section border-b pt-4 mb-1 text-xs text-gray-600 border-gray-700 pb-1 pl-3'>
                        支払い情報
                    </div>
                    {
                        menuData?.map((menu, index) => {
                            return (
                                menu.menuGroup === 2 ? <li className={active === `${menu.menuTitle}` ? 'text-sm text-gray-500 active' : 'text-sm text-gray-500'} key={index} id={menu.menuTitle} onClick={handleClickMenu}>
                                    <Link href={`/admin/${menu.menuTitle}`} className='flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700 '>
                                        <div className='pr-2'>
                                            <img title='加盟店別一覧' src={menu.menuIcon} alt='加盟店別一覧' className='pa-cl pa-cp pa-cq ' style={{ height: '16px' }}></img>
                                        </div>
                                        <div className='menu-name'>{menu.menuName}</div>
                                    </Link>
                                </li> : null
                            )
                        })
                    }

                    <div className='section border-b pt-4 mb-1 text-xs text-gray-600 border-gray-700 pb-1 pl-3'>
                        管理
                    </div>
                    {
                        menuData?.map((menu, index) => {
                            return (
                                menu.menuGroup === 3 ? <li className={active === `${menu.menuTitle}` ? 'text-sm text-gray-500 active' : 'text-sm text-gray-500'} key={index} id={menu.menuTitle} onClick={handleClickMenu}>
                                    <Link href={`/admin/${menu.menuTitle}`} className='flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700 '>
                                        <div className='pr-2'>
                                            <img title='加盟店別一覧' src={menu.menuIcon} alt='加盟店別一覧' className='pa-cl pa-cp pa-cq ' style={{ height: '16px' }}></img>
                                        </div>
                                        <div className='menu-name'>{menu.menuName}</div>
                                    </Link>
                                </li> : null
                            )
                        })
                    }

                    <div className='section border-b pt-4 mb-1 text-xs text-gray-600 border-gray-700 pb-1 pl-3'>
                        エクスポート・インポート
                    </div>
                    {
                        menuData?.map((menu, index) => {
                            return (
                                menu.menuGroup === 4 ? <li className={active === `${menu.menuTitle}` ? 'text-sm text-gray-500 active' : 'text-sm text-gray-500'} key={index} id={menu?.menuTitle} onClick={handleClickMenu}>
                                    <Link href={`/admin/${menu.menuTitle}`} className='flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700 '>
                                        <div className='pr-2'>
                                            <img title='加盟店別一覧' src={menu.menuIcon} alt='加盟店別一覧' className='pa-cl pa-cp pa-cq ' style={{ height: '16px' }}></img>
                                        </div>
                                        <div className='menu-name'>{menu.menuName}</div>
                                    </Link>
                                </li> : null
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
  )
}

export default Menu