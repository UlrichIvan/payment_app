import { route as ziggyRoute } from "ziggy-js";
import React from "react";
declare global {
    var route: typeof ziggyRoute;
}
export type Product = {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
};
export type PageProps = {
    flash: {
        message: string;
        success: string;
    };
    products?: Product[];
    [key: string]: any;
};
