import happy from "@src/assets/images/png/happy.jpg";
import React from "react";
import { Toaster } from "sonner";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="container-fluid vh-100 overflow-x-hidden overflow-y-auto">
                <div className="row h-100">
                    <div className="col-6 d-none col-md-6 d-md-block px-0">
                        <div className="h-100">
                            <img
                                src={happy}
                                alt="happy"
                                className="img-fluid h-100"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 px-0">{children}</div>
                </div>
                <Toaster position="top-right" />
            </div>
        </>
    );
};
export default LoginLayout;
