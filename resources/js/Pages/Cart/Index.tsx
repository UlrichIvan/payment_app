import { usePage } from "@inertiajs/react";
import CartProduct from "@src/js/components/CartProduct";
import Navbar from "@src/js/components/Navbar";
import { PageProps } from "@src/js/types/global";
import { Toaster } from "sonner";
import empty from "@src/assets/images/png/empty-cart.png";
import useFlash from "@src/js/hooks/useFlash";

const Index = () => {
    const { cartItems } = usePage<PageProps>().props;
    useFlash();
    return (
        <div className="container-fluid px-0 vh-100 overflow-y-auto overflow-x-hidden">
            <Navbar />
            {cartItems?.items && cartItems?.items.length > 0 ? (
                <div className="row my-4">
                    <h3 className="text-center">Resumer de votre panier</h3>
                    <>
                        {cartItems?.items.map((product) => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-2">
                                <CartProduct
                                    product={product}
                                    key={product.id}
                                />
                            </div>
                        ))}
                    </>
                </div>
            ) : (
                <div className="d-flex my-4 justify-content-center align-items-center">
                    <div>
                        <h3 className="text-center text-secondary">
                            Votre panier est vide
                        </h3>
                        <img src={empty} alt="empty cart" />
                    </div>
                </div>
            )}
            <Toaster position="top-right" />
        </div>
    );
};
export default Index;
