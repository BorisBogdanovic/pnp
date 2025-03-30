import React from "react";
import Login from "../components/Login";

function LoginPage() {
    return (
        <section
            className="w-full h-screen flex items-center justify-center relative"
            style={{ backgroundImage: "url('/login-bg.jpg')" }}
        >
            <img
                className="absolute top-0 left-[36%] h-32"
                src="top-red-track.png"
                alt="red track"
            />

            <img
                className="absolute bottom-0 left-[36%] h-32"
                src="bottom-red-track.png"
                alt="red track"
            />
            <Login />
        </section>
    );
}

export default LoginPage;
