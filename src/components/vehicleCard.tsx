import Image from 'next/image'
import React from 'react'
import Alert from './alert'
import Link from 'next/link'

export default function VehicleCard({
  data,
  handleBook,
  handleLike,
}: {
  data: any,
  handleBook: any,
  handleLike: any,
}) {
  return (
    <Link
      href={`/detail/${data?.vehicle}`}
      className='p-[1rem] w-full h-full
       rounded-[1rem] bg-primary
      shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]
      hover:bg-opacity-55'
    >
      <div
        className='grid grid-cols-2 gap-[1rem] w-full h-full'
      >
        <div
          className='max-h-[13rem] w-full h-full'
        >
          {/* image card */}
          <div
            className='w-full h-full flex flex-row rounded-[1rem] aspect-square relative overflow-hidden hover:opacity-50 duration-100'
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
              className='z-[1] absolute bottom-0 bg-transparent bg-opacity-50 w-full h-[6rem] flex items-center 
                            px-[1rem]
                            flex-col justify-start align-top
                            '>
              <div
                className='text-[4rem] text-white font-bold'
              >
                {data?.vehicle}
              </div>
            </div>
          </div>
        </div>
        {/* desc */}
        <div
          className='flex flex-col gap-3 w-full h-full justify-between'
        >
          <div
            className='text-[2rem] text-white font-bold'
          >
            {data?.vehicle}
          </div>
          <div
            className='text-white text-xl font-bold opacity-55 capitalize line-clamp-4'
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
              className='text-white text-2xl font-bold opacity-85'
            >
              {data?.price}
            </div>

          </div>
        </div>
      </div>
    </Link>

  )
}
