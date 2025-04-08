import { useAuth } from "../providers/AuthProviders";
import Logo from "./Logo";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";

function Login() {
    const { login, error, user } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/");
            console.log(user);
        }
    }, [user, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
    };

    return (
        <div className="w-[560px] h-[572px] bg-white py-6 pb-[16px] rounded-[4px] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)]  ">
            <div className="py-4 w-[276px] mx-auto flex items-center justify-center">
                <Logo />
            </div>

            {error && <p className="text-red-500 text-center mt-4">{error}</p>}

            <LoginForm
                handleSubmit={handleSubmit}
                setEmail={setEmail}
                setPassword={setPassword}
            />
        </div>
    );
}

export default Login;
