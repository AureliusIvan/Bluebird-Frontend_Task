import EmptyData from '@/components/emptyData';
import { Header } from '@/components/header';
import VehicleCard from '@/components/vehicleCard';
import { useBlueBird } from '@/hooks/useBlueBird';
import { formatCurrency } from '@/utils/convertCurrency';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react'

const placeholder = "https://via.placeholder.com/150"

export default function MyBookPage() {
    const { queryGetTotalPrice, queryMyBookedVehicles } = useBlueBird();

    return (
        <div
            data-testid='mybook-page'
            className=' w-full h-full flex flex-col gap-4 p-[4rem]'
        >
            <Header
                title={'My Book'}
                description={`You have ${queryMyBookedVehicles.data?.length} vehicles in your book`}
            />
            <div
                className='flex flex-col gap-4 w-full h-full'
            >
                {queryMyBookedVehicles.data?.map((vehicle: any, index: number) => {
                    return <VehicleCard
                        key={index}
                        data={vehicle}
                        handleBook={() => { }}
                        handleLike={() => { }}
                    />
                })}
                {
                    queryMyBookedVehicles.data.length === 0 &&
                    <EmptyData />
                }
                <button
                    className='w-full h-[3rem] bg-primary text-white text-xl font-bold rounded-lg'
                >
                    total price: {formatCurrency(queryGetTotalPrice.data || 0)}
                </button>
            </div>
        </div>
    )
}