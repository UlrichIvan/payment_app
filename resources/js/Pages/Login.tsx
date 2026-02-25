import robot from "@src/assets/images/png/robot.png";
import { Link, useForm } from "@inertiajs/react";
import { useCallback } from "react";
import LoginLayout from "../layouts/LoginLayout";
import useFlash from "../hooks/useFlash";

const Login = () => {
    useFlash();
    const { data, errors, post, setData, processing } = useForm<{
        email: string;
        password: string;
    }>({
        email: "",
        password: "",
    });
    const submit = useCallback(
        (e: any) => {
            e.preventDefault();
            post(route("login"));
        },
        [post]
    );
    return (
        <form
            onSubmit={submit}
            className="d-flex h-100 mx-100 gap-2 justify-content-center flex-column bg-primary-subtle bg-gradient px-3"
        >
            <div className="brand d-md-none d-sm-flex justify-content-center">
                <img
                    src={robot}
                    alt="robot"
                    width={100}
                    height={100}
                    className="img-fluid h-100"
                />
            </div>
            <h5 className="text-center">
                L'intelligence logicielle au service de votre croissance
            </h5>

            <div className="form-group">
                <label htmlFor="email" className="text-capitalize form-label">
                    email
                </label>
                <input
                    type="text"
                    className={`form-control ${
                        errors.email ? "is-invalid" : ""
                    }`}
                    name="email"
                    id="email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    placeholder="Votre email address"
                />
                {errors.email && (
                    <small className="text-danger">{errors.email}</small>
                )}
            </div>
            <div className="form-group">
                <label
                    htmlFor="password"
                    className="text-capitalize form-label"
                >
                    password
                </label>
                <input
                    type="password"
                    className={`form-control ${
                        errors.password ? "is-invalid" : ""
                    }`}
                    name="password"
                    id="password"
                    placeholder="votre mot de passe doit contenir 12 caracteres minimum"
                    value={data.password}
                    onChange={(e) => setData("password", e.target.value)}
                />
                {errors.password && (
                    <small className="text-danger">{errors.password}</small>
                )}
            </div>
            <div className="my-2 w-100">
                <button
                    type="submit"
                    disabled={processing}
                    className="btn btn-outline-primary text-capitalize w-100"
                >
                    se connecter
                </button>
            </div>
            <Link href={route("signup")} className="text-center">
                vous n'avez pas de compte ? créer votre compte
            </Link>
        </form>
    );
};
Login.layout = (page: any) => <LoginLayout children={page} />;
export default Login;
