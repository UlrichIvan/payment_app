import { useForm, usePage } from "@inertiajs/react";
import { useCallback } from "react";
import robot from "@src/assets/images/png/robot.png";

import { PageProps } from "../types/global";

const Welcome = () => {
    const { products = [] } = usePage<PageProps>().props;
    const { post } = useForm();
    const submit = useCallback(
        (e: any) => {
            e.preventDefault();
            post(route("logout"));
        },
        [post]
    );
    return (
        <div className="container-fluid px-0 vh-100 overflow-y-auto overflow-x-hidden">
            <div className="nav-bar shadow-sm d-flex py-2 justify-content-between align-items-center bg-light px-2 sticky-top">
                <div>
                    <img src={robot} width={30} alt="brand" />
                    <span className="ms-2 text-capitalize">E-commerce</span>
                </div>
                <form onSubmit={submit}>
                    <button
                        className="btn btn-outline-success text-capitalize"
                        type="submit"
                    >
                        deconnexion
                    </button>
                </form>
            </div>
            <div className="row my-4">
                {products.map((product) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card">
                            <img
                                src={product.image}
                                className="card-img-top"
                                alt={product.name}
                                width={200}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">
                                    {product.description}
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Welcome;
