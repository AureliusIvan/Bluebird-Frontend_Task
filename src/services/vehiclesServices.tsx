import { VehicleCategoryProps, VehicleProps, VehicleTypeProps } from '@/types/vehicles'
import axios from 'axios'
import React from 'react'

const ENDPOINT = 'https://private-f2fbfb-ridecar2.apiary-mock.com/vehicles'

const vehiclesService = async () => {
    // console.info("API triggered")
    const result = await axios.get(ENDPOINT)
    return result as {
        data: {
            category: VehicleCategoryProps[],
            type: VehicleTypeProps[]
        }
    }
}


const getVehiclesCategory = async () => {
    // console.info("API triggered")
    let result = [] as VehicleCategoryProps[]
    result = await axios.get(ENDPOINT).then((res) => {
        const data = res.data.category as VehicleCategoryProps[];
        // console.log("data", data)
        return data;
    })
    return result ?? []
}


const getVehiclesType = async () => {
    // console.info("API triggered")
    let result = [] as VehicleTypeProps[];
    result = await axios.get(ENDPOINT).then((res) => {
        const data = res.data.type as VehicleTypeProps[];
        return data;
    })
    return result ?? []
}

const getAllVehicles = async () => {
    // console.info("API triggered!!!!")
    const result = await axios.get(ENDPOINT).then((res) => {
        const data = res.data.type as VehicleTypeProps[];
        return data.flatMap((item: VehicleTypeProps) => {
            let car_type = item.car_type;
            const category_id = item.category_id;
            return car_type.map((type: any) => {
                return {
                    ...type,
                    isLiked: false,
                    category_id: category_id,
                }
            })
        });
    });

    return result ?? []
}

const getVehiclesBySlug = async (slug: string) => {
    const result = await getAllVehicles().then((res) => {
        // const data = res.filter((item) => item.vehicle === slug); get data by slug
        const data = res.filter((item) => item.vehicle === slug);
        return data.length > 0 ? data[0] : {};
    })
    return result
}



export {
    vehiclesService,
    getVehiclesCategory,
    getVehiclesType,
    getAllVehicles,
    getVehiclesBySlug
}