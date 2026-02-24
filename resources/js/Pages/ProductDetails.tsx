import { usePage } from "@inertiajs/react";
import { PageProps } from "../types/global";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Review from "../components/Review";

const ProductDetails = () => {
    const { product = null, average } = usePage<PageProps>().props;
    return (
        <div className="container-fluid px-0 vh-100 overflow-y-auto overflow-x-hidden">
            <Navbar />
            <div className="row my-4 mx-4">
                {product && (
                    <div className="col-12 col-md-6">
                        <Product
                            product={product}
                            inDetails
                            average={average}
                        />
                    </div>
                )}
                <div className="col-12 col-md-6">
                    {average > 0 && (
                        <h3 className="text-black fs-1 text-capitalize mb-3">
                            notes :
                        </h3>
                    )}
                    {average ? (
                        product?.reviews.map((review) => (
                            <Review review={review} key={review.id} />
                        ))
                    ) : (
                        <div>
                            <div className="text-secondary text-capitalize fs-6">
                                Pas de notes sur ce produit pour l'instant
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default ProductDetails;
