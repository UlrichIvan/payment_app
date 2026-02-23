import { route as ziggyRoute } from "ziggy-js";
import React from "react";
declare global {
    var route: typeof ziggyRoute;
}
export type PageProps = {
    flash: {
        message: string;
        success: string;
    };
    [key: string]: any;
};
