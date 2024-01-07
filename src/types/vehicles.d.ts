export interface VehicleCategoryProps {
    id: number;
    imageURL?: string;
    name: string;
}



export interface VehicleTypeProps {
    id: number;
    car_type: any[];
    category_id: number;
}

export interface VehicleProps {
    vehicle: string;
    category_id?: number;
    price: number;
    imageURL: string;
    description: string[];
    isLiked?: boolean;
    isBooked?: boolean;
}