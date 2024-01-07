import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useBlueBird } from '@/hooks/useBlueBird';
import Image from 'next/image';
import { VehicleProps } from '@/types/vehicles';
import { HeartIcon, PlusIcon, ShareIcon } from '@/components/icon';
import Alert from '@/components/alert';

export default function Detail() {
    const router = useRouter()
    const slug = router.query.slug?.toString();
    const { queryLikedVehicles, likeVehicleMutation, bookVehicleMutation, isLiked } = useBlueBird();
    let initialData = useBlueBird(slug).queryVehiclesBySlug.data as VehicleProps;
    const [data, setData] = useState<VehicleProps>({} as VehicleProps);
    const [isLikedState, setIsLikedState] = useState(false);

    const handleLike = async () => {
        likeVehicleMutation.mutate(slug);
        setIsLikedState(!isLikedState);
    }

    const handleBook = async () => {
        bookVehicleMutation.mutate(slug);
    }
    useEffect(() => {
        setData(initialData);
    }, [initialData])



    useEffect(() => {
        const isLiked = queryLikedVehicles.data?.find((item) => item.vehicle === slug);
        if (isLiked) {
            setIsLikedState(true);
        } else {
            setIsLikedState(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLiked.data])

    return (
        <div
            className='p-[1rem] w-full h-full px-[5rem] '
        >
            <div
                className='grid grid-cols-2 gap-[1rem] w-full h-full'
            >
                <div
                    className='max-h-[30rem] w-full h-full'
                >
                    {/* image card */}
                    <div
                        className='w-full h-full flex flex-row rounded-[1rem] aspect-square relative overflow-hidden bg-primary hover:opacity-50 duration-100'
                    >
                        <Image
                            loader={({ src }) => src}
                            src={data?.imageURL}
                            width={200}
                            height={200}
                            alt="image"
                            className='absolute top-0 left-0 object-contain w-full h-full z-[0]'
                        />
                        <div
                            id='content'
                            className='z-[1] absolute bottom-0 bg-primary bg-opacity-50 w-full h-[3rem] flex items-center 
                                    px-[1rem]'>
                            <div
                                className='text-2xl text-white font-bold'
                            >
                                {data?.vehicle}
                            </div>
                        </div>
                    </div>
                    <br />
                    <div
                        className='flex flex-row space-x-2'
                    >
                        <Alert
                            text='Copied to Clipboard!'
                        >
                            <button

                                // onClick = copyToClipboard
                                onClick={() => {
                                    navigator.clipboard.writeText(window.location.href)
                                }}
                                className='
                                w-full flex flex-row gap-2 items-center justify-center
                                cursor-pointer pointer-events-auto
                                bg-primary text-white font-bold py-[0.7rem] px-[1rem] rounded-[1rem] text-center  border-2 border-white hover:bg-secondary duration-100'
                            >
                                Share <ShareIcon />
                            </button>
                        </Alert>
                        <Alert
                            text='Added to Wishlist!'
                        >
                            <button
                                onClick={handleLike}
                                className='w-fit text-center  border-2 border-white'
                            >
                                <HeartIcon isLiked={isLikedState} />
                            </button>
                        </Alert>
                    </div>
                </div>
                {/* desc */}
                <div
                    className='flex flex-col gap-3 w-full h-full'
                >
                    <div
                        className='text-3xl text-black font-bold'
                    >
                        {data?.vehicle}
                    </div>
                    <div
                        className='text-xl font-bold opacity-50 capitalize'
                    >
                        {
                            data?.description?.map((item: any, index: number) => {
                                return (
                                    <p key={index}>{item}</p>
                                )
                            })
                        }
                    </div>
                    <div
                        className='flex flex-col'
                    >
                        <div
                            className='text-2xl font-bold opacity-85'
                        >
                            {data?.price}
                        </div>
                        <Alert
                            text='
                            Successfully Booked!'
                        >
                            <button
                                onClick={handleBook}
                                className='
                            w-full flex flex-row gap-2 items-center justify-center
                            cursor-pointer pointer-events-auto
                            bg-green-500 text-white font-bold py-[0.7rem] px-[1rem] rounded-[1rem] text-center  border-2 border-white hover:bg-green-600 duration-100'
                            >
                                Book Now <PlusIcon />
                            </button>
                        </Alert>
                    </div>
                </div>
            </div>
        </div>
    )
}