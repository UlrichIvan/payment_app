import { Link, useForm } from "@inertiajs/react";
import robot from "@src/assets/images/png/robot.png";
import { useCallback } from "react";

const Navbar = () => {
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
            <form onSubmit={submit}>
                <button
                    className="btn btn-outline-success text-capitalize"
                    type="submit"
                >
                    deconnexion
                </button>
            </form>
        </div>
    );
};
export default Navbar;
