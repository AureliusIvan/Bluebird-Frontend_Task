/* eslint-disable react-hooks/rules-of-hooks */
import Image from 'next/image';
import Link from 'next/link';
import React, { use, useEffect, useState } from 'react'
import NavLink from './navlink';
import ApplicationLogo from './applicationLogo';
import { useBlueBird } from '@/hooks/useBlueBird';
import { VehicleCategoryProps, VehicleProps } from '@/types/vehicles';
import Router from 'next/router';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const path = usePathname();

    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    const [keyword, setKeyword] = useState("");
    const [searchFocus, setSearchFocus] = useState(false);
    const { queryType, queryCategory, queryVehicles } = useBlueBird(keyword)
    const [searchResult, setSearchResult] = useState<VehicleProps[]>([]);

    function VehicleSearch(slug: string) {
        // search by name
        if (slug === "") {
            return [];
        }
        const data = queryVehicles.data as VehicleProps[];
        const querySearchVehicles = data.filter((item) => item.vehicle.toLowerCase().includes(slug.toLowerCase()));
        return querySearchVehicles;
    }


    useEffect(() => {
        setSearchResult(VehicleSearch(keyword));
        console.log("searchResult", searchResult)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyword])

    useEffect(() => {
        console.log("Router", path)
        //refresh when route change
        setSearchFocus(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path])

    return (
        <>
            <nav
                // test id
                data-testid='navbar'
                className='w-full bg-primary sticky top-0 z-50'
            >
                <nav className="py-2">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:w-5/6">
                        <div className="flex justify-between h-16">
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    <Link
                                        className='bg-transparent w-full h-full flex flex-row items-center'
                                        href="/">
                                        <ApplicationLogo />
                                    </Link>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                    {
                                        Route.map((item, index) => (
                                            <NavLink
                                                key={index}
                                                href={item.path}
                                                active={path}
                                                className='pt-1'>
                                                {item.name}
                                            </NavLink>
                                        ))
                                    }
                                    <div className="flex items-center pt-1">
                                        <div className='flex flex-row items-center font-medium leading-5 transition duration-150  focus:outline-none
                                            bg-white bg-opacity-50 px-5 py-2 rounded-full hover:bg-opacity-30  ease-in-out'>
                                            <input
                                                data-testid='search-input'
                                                onChange={(e) => {
                                                    if (e.target.value === "") {
                                                        setSearchFocus(false)
                                                    } else {
                                                        setSearchFocus(true)
                                                    }
                                                    setKeyword(e.target.value)
                                                }}
                                                className='bg-transparent w-full h-full flex flex-row items-center
                                                focus:outline-none placeholder:font-medium placeholder-gray-500 text-sm font-medium leading-5 transition duration-150 ease-in-out
                                                '
                                                placeholder='Search'
                                                type="text" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="-mr-1 flex items-center sm:hidden">
                                <button
                                    onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                >
                                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path
                                            className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                        <div className="h-screen">
                            <div className="pt-14 pb-3 space-y-1">
                                {
                                    Route.map((item, index) => (
                                        // <ResponsiveNavLink href={item.path} active={route().current(item.path)} key={index}>
                                        //     {item.name}
                                        // </ResponsiveNavLink>
                                        <div
                                            key={index}
                                            className='w-full flex flex-col justify-center items-center text-white mb-5 py-4 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300'>
                                            <a href={item.path} className="font-medium">{item.name}</a>
                                        </div>
                                    ))
                                }
                            </div>

                            <div>
                                <div className="px-4">
                                    <div className="font-medium text-base text-white bg-orange flex justify-center py-2 rounded-full">
                                        {/* {user.name} */}
                                        {/* <a href="/" className="font-extrabold">User</a> */}
                                    </div>
                                    <div className="font-medium text-sm text-white">
                                        {/* {user.email} */}
                                    </div>
                                </div>

                                <div className="mt-3 space-y-1">
                                    {/* <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                                    {
                                        Role === "guest" ?

                                            <ResponsiveNavLink href={route('login')} active={route().current('login')}>
                                                Login
                                            </ResponsiveNavLink>
                                            :
                                            <ResponsiveNavLink
                                                active={route().current('logout')}
                                                method="post" href={route('logout')} as="button">
                                                Log Out
                                            </ResponsiveNavLink>
                                    } */}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* <div className="bg-secondary flex justify-center py-2">
                    <div className="w-4/5 flex flex-row space-x-5 justify-center md:justify-end">
                        {
                            queryCategory.data?.map((item: VehicleCategoryProps, index: number) => (
                                <Link
                                    key={index}
                                    href={"/"}
                                    className='text-white text-sm font-bold'>
                                    {item.name}
                                </Link>
                            ))
                        }
                    </div>
                </div> */}
            </nav>
            {/* search result */}
            <div
                id='search-result'
                data-testid='search-result'
                style={{
                    display: searchFocus ? 'block' : 'none'
                }}
                className='w-full h-screen fixed z-[100] bg-white text-white text-xl font-bold rounded-lg'
            >
                {
                    searchResult.map((item, index) => {
                        return (
                            <Link
                                data-testid='search-result-item'
                                onClick={() => setSearchFocus(false)}
                                href={`/detail/${item.vehicle}`}
                                key={index}
                                className='w-full h-[5rem] relative flex flex-row gap-4 bg-secondary border-2 rounded-[1rem] hover:opacity-50 duration-100'
                            >
                                <div
                                    className='w-full h-full flex'
                                >
                                    <Image
                                        loader={({ src }) => src}
                                        src={item.imageURL}
                                        width={200}
                                        height={200}
                                        alt="image"
                                        className='absolute top-0 left-0 object-contain w-full h-full z-[0]'
                                    />
                                    <div
                                        id='content'
                                        className='z-[1] bg-secondary bg-opacity-50 w-full h-[3rem] flex items-center 
                                        px-[1rem]'>
                                        <div>
                                            {item.vehicle}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </>
    )
}


const BottomRoute = [
    {
        name: 'Taxi',
        path: '/',
        route: 'home'
    },
    {
        name: 'Car Rental',
        path: '/contact',
        route: 'contact'
    },
]

const Route = [
    {
        name: 'Home',
        path: '/',
        route: 'home'
    },
    {
        name: 'Wish List',
        path: '/wishlist',
        route: 'contact'
    },
    {
        name: 'My Book',
        path: '/mybook',
        route: 'contact'
    },
]
