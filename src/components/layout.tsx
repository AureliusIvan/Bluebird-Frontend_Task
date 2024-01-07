import React from 'react'
import Footer from './footer'
import Navbar from './navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <div
                className='w-full pb-[100vh] bg-transparent'
            >
                <main
                    className='h-full pb-[10rem] bg-white'
                >
                    {children}
                </main>
            </div>
            <Footer />
        </>
    )
}
