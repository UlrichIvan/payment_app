import { Link } from "@inertiajs/react";
import { Product as ProductType } from "../types/global";

const CartProduct = ({
    product,
}: {
    product: ProductType;
    inDetails?: boolean;
    average?: number;
}) => {
    return (
        <div className="card">
            <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                width={200}
            />
            <div className="card-body">
                <h5 className="card-title text-capitalize">{product.name} </h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text fs-3">{product.price} €</p>
                <div className="container-fluid px-0">
                    <div className="row">
                        <div className="col-12">
                            <Link
                                href={route("delete.product", {
                                    product: product.id,
                                })}
                                method="delete"
                                className="btn btn-outline-danger text-capitalize w-100 my-1"
                            >
                                supprimer
                            </Link>
                        </div>
                        <div className="col-12">
                            <Link
                                href={route("show.product", {
                                    product: product.id,
                                })}
                                className="btn btn-outline-warning text-capitalize w-100 my-1"
                            >
                                details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CartProduct;
