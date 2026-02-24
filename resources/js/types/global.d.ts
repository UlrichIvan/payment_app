import { route as ziggyRoute } from "ziggy-js";
import React from "react";
declare global {
    var route: typeof ziggyRoute;
}
export type Review = {
    id: string;
    comment: string;
    rating: number;
    updated_at: string;
    user_id: string | null;
};
export type Product = {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    reviews: Review[];
};
export type PageProps = {
    flash: {
        message: string;
        success: string;
    };
    products?: Product[];
    product?: Product;
    average: number;
    cart?: Product[];
    [key: string]: any;
};
