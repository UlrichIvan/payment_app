import { Link } from "@inertiajs/react";
import { Product as ProductType } from "../types/global";

const Product = ({
    product,
    inDetails = false,
    average = 0,
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
                <h5 className="card-title text-capitalize">
                    {product.name}{" "}
                    {
                        <span className="text-warning">
                            {"★".repeat(average)}
                        </span>
                    }
                </h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text fs-3">{product.price} €</p>
                <div className="container-fluid px-0">
                    <div className="row">
                        {inDetails && (
                            <div className="col-12">
                                <Link
                                    href={route("add.product", {
                                        product: product.id,
                                    })}
                                    method="post"
                                    className="btn btn-outline-success text-capitalize w-100 my-1"
                                >
                                    ajouter
                                </Link>
                            </div>
                        )}
                        {!inDetails && (
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
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Product;
