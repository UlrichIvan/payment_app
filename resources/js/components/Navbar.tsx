import { Link, useForm, usePage } from "@inertiajs/react";
import robot from "@src/assets/images/png/robot.png";
import cartImage from "@src/assets/images/png/cart.png";
import { useCallback } from "react";
import { PageProps } from "../types/global";

const Navbar = () => {
    const { totalCart = 0 } = usePage<PageProps>().props;
    const { post } = useForm();
    const submit = useCallback(
        (e: any) => {
            e.preventDefault();
            post(route("logout"));
        },
        [post]
    );
    return (
        <div className="nav-bar shadow-sm d-flex py-2 justify-content-between align-items-center bg-light px-2 sticky-top">
            <Link
                className="text-decoration-none text-black"
                href={route("welcome")}
            >
                <img src={robot} width={30} alt="brand" />
                <span className="ms-2 text-capitalize">E-commerce</span>
            </Link>
            <div className="d-flex gap-2 align-items-center">
                <Link
                    href={route("show.cart")}
                    className="cart mx-3 position-relative"
                >
                    <img src={cartImage} width={30} alt="cart" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {totalCart}
                    </span>
                </Link>
                <form onSubmit={submit}>
                    <button
                        className="btn btn-outline-success text-capitalize"
                        type="submit"
                    >
                        deconnexion
                    </button>
                </form>
            </div>
        </div>
    );
};
export default Navbar;
