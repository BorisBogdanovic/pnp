import React from "react";
import { useAuth } from "../providers/AuthProviders";
import ButtonMain from "./ButtonMain";
import Input from "./Input";
import { Link } from "react-router-dom";
import Loader from "./Loader";

function LoginForm({ handleSubmit, setEmail, setPassword }) {
    const { isLoading } = useAuth();
    return (
        <div className="flex justify-center items-center h-[356px]">
            {!isLoading ? (
                <form
                    className="w-[360px] h-[356px] flex flex-col  mx-auto mt-6"
                    onSubmit={handleSubmit}
                    method="POST"
                >
                    <h1 className="text-center font-bold text-[32px] leading-[40px] text-[#344054]">
                        Prijavite se
                    </h1>
                    <p className="text-center text-[16px] leading-[24px] text-[#344054] mb-8">
                        Unesite Vaš email i lozinku.
                    </p>
                    <Input
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)} // Prosleđujemo setEmail
                    />
                    <Input
                        name="password"
                        type="password"
                        placeholder="Lozinka"
                        onChange={(e) => setPassword(e.target.value)} // Prosleđujemo setPassword
                    />
                    <Link to="/forgot-password">
                        <p className="text-right text-[14px] text-[#344054] leading-[20px] hover:underline transition-all duration-400 ease cursor-pointer mb-8">
                            Zaboravljena lozinka?
                        </p>
                    </Link>

                    <ButtonMain className="btn-main" type="submit">
                        Uloguj se
                    </ButtonMain>
                </form>
            ) : (
                <Loader />
            )}
        </div>
    );
}

export default LoginForm;
