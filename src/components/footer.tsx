import Link from 'next/link'
import React from 'react'
import ApplicationLogo from './applicationLogo'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer
            role='footer'
            className="">
            <div className="md:h-24"></div>
            <div className="bg-gray-800 text-white md:fixed w-full bottom-0 md:-z-20">
                <div className="mx-auto w-4/5 max-w-screen-xl py-14">
                    <div className="md:flex md:justify-between">
                        <div className="md:w-1/2 mb-10 md:mb-0 space-y-4">
                            <Link href="https://flowbite.com/" className="flex items-center">
                                <ApplicationLogo />
                            </Link>
                            {/* <p className="text-white text-xs opacity-50">FAKULTAS SENI & DESAIN<br />UNIVERSITAS MULTIMEDIA NUSANTARA</p> */}
                            <p className="text-white text-xs opacity-50">Jl. Mampang Prapatan Raya No. 60, Jakarta 12790</p>
                            {/* <p className="text-white text-xs opacity-50">T +62-21 5422 0808<br />F +62-21 5422 0800</p> */}
                        </div>
                        <div className="md:w-1/2 md:space-x-5 flex flex-col md:flex-row">
                            <div className='md:w-1/2 space-y-8 md:space-y-8 mb-10 md:mb-0 flex flex-col justify-between md:justify-normal'>
                                <div className='space-y-2'>
                                    <p className="text-white text-sm">About us</p>
                                    <div className='space-y-1'>
                                        <p className="text-white text-xs opacity-50">Company Profile</p>
                                        <p className="text-white text-xs opacity-50">History</p>
                                        <p className="text-white text-xs opacity-50">Purpose & Values</p>
                                    </div>
                                </div>
                                <div className='space-y-2'>
                                    <p className="text-white text-sm">Connect with Us</p>
                                    <div className='space-y-1'>
                                        {/* <p className="text-white text-xs opacity-50">Email : labfsd@umn.ac.id</p> */}
                                        <div className='flex flex-row items-center space-x-2'>
                                            <div>
                                                <Link href="#">
                                                    <Image
                                                        loader={({ src }) => src}
                                                        width={200}
                                                        height={200}
                                                        className="w-7"
                                                        src="https://i.ibb.co/HLyFN9H/instagram.png"
                                                        alt='instagram'
                                                    />
                                                </Link>
                                            </div>
                                            <div>
                                                <Link href="#">
                                                    <Image
                                                        loader={({ src }) => src}
                                                        width={200}
                                                        height={200}
                                                        className="w-7"
                                                        src="https://i.ibb.co/ZVrppMK/youtube.png"
                                                        alt='youtube'
                                                    />
                                                </Link>
                                            </div>
                                            <div>
                                                <Link href="#">
                                                    <Image
                                                        loader={({ src }) => src}
                                                        width={200}
                                                        height={200}
                                                        className="w-7"
                                                        src="https://i.ibb.co/QFHXCm4/facebook.png"
                                                        alt='facebook' />
                                                </Link>
                                            </div>
                                        </div>
                                        <Link href="/" className="text-white text-xs opacity-50 underline">FAQ</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='md:w-1/2 md:space-y-24 md:mb-0 flex flex-row md:flex-col justify-between md:justify-normal'>
                                <div className='space-y-2'>
                                    <p className="text-white text-sm">Products</p>
                                    <div className='space-y-1'>
                                        <Link href="/" className="text-white text-xs opacity-50">Taxi Service</Link><br />
                                        <Link href="/" className="text-white text-xs opacity-50">Car Rental</Link><br />
                                        <Link href="/" className="text-white text-xs opacity-50">Shuttle Service</Link><br />
                                        <Link href="/" className="text-white text-xs opacity-50">Charter Bus</Link><br />
                                        <Link href="/" className="text-white text-xs opacity-50">Corporate Solution</Link><br />
                                        <Link href="/" className="text-white text-xs opacity-50">Car Advertising</Link><br />
                                        <Link href="/" className="text-white text-xs opacity-50">Bluebird Kirim</Link><br />
                                        <Link href="/" className="text-white text-xs opacity-50">Logistc</Link><br />
                                        <Link href="/" className="text-white text-xs opacity-50">Industry</Link>
                                        <Link href="/" className="text-white text-xs opacity-50">Hotel & Resort</Link>
                                        <Link href="/" className="text-white text-xs opacity-50">Caready</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-grey_copyrights flex justify-center w-full py-5">
                    <div>
                        <span className="opacity-60 text-white text-xxs md:text-sm">© 2024
                            <Link href="https://flowbite.com/" className="hover:underline border-r pr-2 mr-3">
                            </Link>
                            Bluebird - All rights reserved.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
