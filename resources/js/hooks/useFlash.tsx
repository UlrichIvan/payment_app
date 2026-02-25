import { usePage } from "@inertiajs/react";
import { PageProps } from "../types/global";
import { toast } from "sonner";
import { useEffect } from "react";

export default () => {
    const { flash = null } = usePage<PageProps>().props;
    useEffect(() => {
        if (flash?.message) {
            toast.error(flash?.message, { className: "bg-danger text-white" });
        }
        if (flash?.success) {
            toast.error(flash?.success, { className: "bg-success text-white" });
        }
    }, [flash]);
};
