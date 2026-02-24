import { usePage } from "@inertiajs/react";
import { PageProps } from "../types/global";
import Navbar from "../components/Navbar";
import Product from "../components/Product";

const Welcome = () => {
    const { products = [] } = usePage<PageProps>().props;
    return (
        <div className="container-fluid px-0 vh-100 overflow-y-auto overflow-x-hidden">
            <Navbar />
            <div className="row my-4">
                {products.map((product) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-2">
                        <Product product={product} key={product.id} />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Welcome;
