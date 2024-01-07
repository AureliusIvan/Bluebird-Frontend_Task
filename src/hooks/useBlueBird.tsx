import { getAllVehicles, getVehiclesBySlug, getVehiclesCategory, getVehiclesType, vehiclesService } from "@/services/vehiclesServices";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { useRef } from "react";
import { atom, useAtom } from "jotai";
import { VehicleProps } from "@/types/vehicles";
import { convertCurrency } from "@/utils/convertCurrency";
// jotai


export const likedVehiclesAtom = atom([] as any[]);

const useBlueBird = (slug = "") => {
    const queryClient = new QueryClient();

    const query = useQuery({
        queryKey: ["vehiclesData"],
        queryFn: vehiclesService,
    });

    const queryCategory = useQuery({
        queryKey: ["vehiclesCategory"],
        queryFn: getVehiclesCategory,
        staleTime: Infinity,
    });

    const queryType = useQuery({
        queryKey: ["vehiclesType"],
        queryFn: getVehiclesType,
        staleTime: Infinity,
    });

    const queryVehicles = useQuery({
        queryKey: ["vehicles"],
        queryFn: getAllVehicles,
        // staleTime: Infinity,
    });

    const queryVehiclesBySlug = useQuery({
        queryKey: ["vehicles", slug],
        queryFn: () => queryVehicles.data?.find((item: any) => item.vehicle === slug) ?? getVehiclesBySlug(slug),
    });

    // const queryLikedVehicles = useQuery({
    //     queryKey: ["vehicles"],
    //     queryFn: () => queryVehicles.data?.filter((item: any) => item.isLiked === true)
    // });




    const queryLikedVehicles = useQuery({
        queryKey: ["vehicles", "liked"],
        queryFn: () => {
            const data = queryVehicles.data as VehicleProps[];
            // remove duplicate
            const newData = data.filter((item, index, self) => data.indexOf(item) === index);
            return newData.filter((item) => item.isLiked === true);
        },
        staleTime: Infinity,
        initialData: [],
    });

    const isLiked = useQuery({
        queryKey: ["vehicles", "liked", slug],
        queryFn: () => {
            const data = queryLikedVehicles.data as VehicleProps[];
            // remove duplicate
            const newData = data.filter((item, index, self) => data.indexOf(item) === index);
            return newData.find((item) => item.vehicle === slug)?.isLiked ?? false;
        },
        initialData: false,
    });

    const likeVehicleMutation = useMutation({
        mutationFn: async (slug: any) => {
            let data = queryVehicles.data as VehicleProps[];
            const prevData = queryLikedVehicles.data as VehicleProps[];
            let Liked = 0;


            data.map((item) => {
                if (item.vehicle === slug) {
                    if (item.isLiked === true) {
                        item.isLiked = false;
                        Liked = 2;
                    }
                    else {
                        item.isLiked = true;
                        Liked = 1;
                    }
                }
                return item;
            })

            if (Liked === 1) {
                data.push(...prevData);
            } else if (Liked === 2) {
                const newData = prevData.filter((item) => item.vehicle !== slug);
                data = newData;
            }

            queryClient.setQueryData(["vehicles", "liked"], data);
        },

        onSuccess: () => {
            queryLikedVehicles.refetch();
            isLiked.refetch();
        },
    });


    const queryMyBookedVehicles = useQuery({
        queryKey: ["vehicles", "mybooked"],
        queryFn: () => {
            const data = queryVehicles.data as VehicleProps[];
            return data.filter((item) => item.isBooked === true);
        },
        staleTime: Infinity,
        initialData: [],
    });

    const queryGetTotalPrice = useQuery({
        queryKey: ["vehicles", "totalprice"],
        queryFn: () => {
            const data = queryMyBookedVehicles.data as VehicleProps[];
            // console.log("hey!")
            return data.reduce((acc, item) => {
                const price = convertCurrency(item.price);
                console.log("price", price)
                return acc + price;
            }, 0);
        },
        // staleTime: Infinity,
        initialData: 0,
    });

    const bookVehicleMutation = useMutation({
        mutationFn: async (slug: any) => {
            const data = queryVehicles.data as VehicleProps[];
            const prevData = queryMyBookedVehicles.data as VehicleProps[];
            data.map((item) => {
                if (item.vehicle === slug) {
                    item.isBooked = true;
                }
                return item;
            })
            data.push(...prevData);
            queryClient.setQueryData(["vehicles", "mybooked"], data);
        },
        onSuccess: () => {
            queryMyBookedVehicles.refetch();
        },
    });



    const querySearchVehicles = useQuery({
        queryKey: ["vehicles", "search"],
        queryFn: () => {
            // search by name
            const data = queryVehicles.data as VehicleProps[];
            return data.filter((item) => item.vehicle.toLowerCase().includes(slug.toLowerCase()));
        },
        staleTime: Infinity,
        initialData: [],
    });


    return {
        query,
        queryCategory,
        queryType,
        queryVehicles,
        queryVehiclesBySlug,
        queryLikedVehicles,
        isLiked,
        likeVehicleMutation,
        queryMyBookedVehicles,
        queryGetTotalPrice,
        bookVehicleMutation,
        querySearchVehicles,
    };
}




export {
    useBlueBird,
};