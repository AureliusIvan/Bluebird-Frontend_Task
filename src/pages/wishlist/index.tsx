/* eslint-disable react-hooks/rules-of-hooks */
import EmptyData from '@/components/emptyData'
import { Header } from '@/components/header'
import VehicleCard from '@/components/vehicleCard'
import { useBlueBird } from '@/hooks/useBlueBird'
import { useAmp } from 'next/amp'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'


declare global {
    namespace JSX {
        interface IntrinsicElements {
            'amp-img': any
        }
    }
}

export default function Wishlist() {
    const { queryLikedVehicles } = useBlueBird()
    // const isAmp = useAmp()
    return (
        <div
            role='wishlist page'
            className='w-full h-full flex flex-col gap-4 p-[4rem]'
        >
            <Header
                title={'My Wishlist'}
                description={`You have ${queryLikedVehicles.data?.length} vehicles in your wishlist`}
            />
            <div
                className='flex flex-col gap-4 w-full h-full'
            >
                {
                    queryLikedVehicles.data?.map((vehicle: any, index: number) => {
                        return (

                            <VehicleCard
                                key={index}
                                data={vehicle}
                                handleBook={() => { }}
                                handleLike={() => { }}
                            />
                        )
                    })
                }

                {
                    queryLikedVehicles.data.length === 0 &&
                    <EmptyData />
                }
            </div>
        </div>
    )
}
