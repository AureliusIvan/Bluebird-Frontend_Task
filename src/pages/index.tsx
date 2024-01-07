import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { VehicleCategoryProps, VehicleProps } from '@/types/vehicles';
import { useBlueBird } from '@/hooks/useBlueBird';
import { LinkFormater } from '@/utils/linkFormat';
import { Header } from '@/components/header';

const placeholder = "https://via.placeholder.com/150"

export default function Home() {
  const swiperRef = useRef();
  const { queryVehicles, queryCategory } = useBlueBird();
  const [currentCategory, setCurrentCategory] = React.useState(0); // 0 = all, 1 = taxi, 2 = car rental, 3 = shuttle, 4 = bus
  const [currentData, setCurrentData] = React.useState<any>(queryVehicles.data);

  useEffect(() => {
    if (currentCategory === 0) {
      setCurrentData(queryVehicles.data)
    } else {
      setCurrentData(queryVehicles.data?.filter((item: VehicleProps) => item.category_id === currentCategory))
    }
    console.log("currentData", currentData)
    console.log("currentCategory", currentCategory)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategory])

  return (
    <div
      className='p-[4rem] w-full h-full flex flex-col gap-4 '
    >
      <Header
        title={'Blue Bird'}
        description={'Find your dream car here'}
      />
      <div
        className='flex flex-row gap-4 w-full justify-center items-center'
      >
        <CategoryCard
          currCategoryId={currentCategory}
          callback={() => setCurrentCategory(0)}
          category={{
            id: 0,
            name: 'All',
            // imageURL: 'https://i.ibb.co/8BQhQq6/All.png'
          }}
          key={0}
        />
        {
          queryCategory.data?.map((category: VehicleCategoryProps, index: number) => {

            return (
              <CategoryCard
                currCategoryId={currentCategory}
                callback={() => setCurrentCategory(category.id)}
                key={index}
                category={category}
              />
            )
          }
          )
        }
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        onSwiper={(swiper: any) => {
          if (swiper) {
            swiperRef.current = swiper;
          }
        }}
        modules={[Pagination, Navigation, A11y]}
        className="w-full h-full"
        navigation={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            // spaceBetween: 40,
          },
        }}
      >
        {
          (currentData as any)?.map((vehicle: any, index: number) => {
            return (
              <SwiperSlide key={index}
                title='slide to view more'
              >
                <Link
                  href={`/detail/${vehicle.vehicle}`}
                  key={vehicle.id}
                  className='w-full h-full flex flex-row rounded-[1rem] aspect-square relative overflow-hidden bg-primary hover:opacity-50 duration-100'
                >
                  <Image
                    loader={({ src }) => src || placeholder}
                    src={vehicle.imageURL}
                    width={200}
                    height={200}
                    unoptimized
                    alt="image"
                    className='absolute top-0 left-0 object-contain w-full h-full z-[0]'
                  />
                  <div
                    className='bg-primary text-white font-bold py-[0.1rem] px-[1rem] rounded-[1rem] w-fit right-[0.7rem] top-[0.7rem] absolute text-center  border-2 border-white'
                  >
                    {vehicle.price}
                  </div>
                  <div
                    id='content'
                    className='z-[1] absolute bottom-0 bg-primary bg-opacity-50 w-full h-[3rem] flex items-center 
                                    px-[1rem]'>
                    <div
                      className='text-xl text-white font-bold'
                    >
                      {vehicle.vehicle}
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}




const CategoryCard = ({ category, callback, currCategoryId }: { category: VehicleCategoryProps, callback: () => void, currCategoryId: number }) => {
  return (
    <button
      onClick={() => callback()}
      className={`w-full h-[5rem] relative flex flex-row gap-4 bg-secondary border-2 rounded-[1rem] hover:opacity-50 duration-100 
      ${category.id === currCategoryId && 'bg-black'}`}
    >
      <div
        className='w-full h-full flex flex-row rounded-[1rem] aspect-square relative overflow-hidden'
      >
        {
          category.imageURL &&
          <Image
            loader={({ src }) => src || placeholder}
            src={LinkFormater(category.imageURL)}
            width={200}
            height={200}
            unoptimized
            alt="image"
            className='absolute top-0 left-0 object-contain w-full h-full z-[0]'
          />
        }
        <div
          id='content'
          className='z-[1] absolute top-0  bg-primary bg-opacity-50 w-full h-full flex items-center justify-center 
                                    text-center
                                    py-[0.5rem]

                                    '>
          <div
            className='text-xl text-white font-bold'
          >
            {category.name}
          </div>
        </div>
      </div>
    </button>
  )
}

export {
  Home
}