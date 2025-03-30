import React from "react";
import Logo from "../components/Logo";
import RegisterForm from "../components/RegisterForm";
function Register() {
    return (
        <div className="min-h-[776px] w-[560px] bg-white py-6 pb-[16px] rounded-[4px] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)]  realtive z-10 ">
            <div className="py-4 w-[276px] mx-auto flex flex-col items-center justify-center">
                <Logo />
                <RegisterForm />
            </div>
        </div>
    );
}

export default Register;
