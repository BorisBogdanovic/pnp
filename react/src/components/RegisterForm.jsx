import React, { useState, useEffect } from "react";
import Input from "./Input";
import ButtonMain from "./ButtonMain";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import { useParams } from "react-router-dom";
import { useAuth } from "../providers/AuthProviders";

function RegisterForm() {
    const { name, last_name, token, email } = useParams();
    const {
        registerUser,
        cities,
        setError,
        error,
        isLoading,
        validateToken,
        isTokenValid,
    } = useAuth();
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [city, setCity] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        if (token && isTokenValid === null) {
            validateToken(token);
        }
    }, [token, isTokenValid]);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (password !== passwordConfirmation) {
            setError("Lozinke se ne poklapaju.");
            return;
        }

        if (!isChecked) {
            setError("Morate se složiti sa svim izjavama.");
            return;
        }

        if (!city) {
            setError("Morate izabrati grad.");
            return;
        }

        setError("");

        const registerData = {
            password: password,
            password_confirmation: passwordConfirmation,
            city,
            token,
        };

        try {
            await registerUser(registerData);
            console.log(registerData);
        } catch (err) {
            console.error("Greška prilikom registracije:", err);
            setError(
                "Došlo je do greške prilikom registracije. Pokušajte ponovo."
            );
        }
    };
    return (
        <div>
            <h1 className="text-center font-bold text-[32px] leading-[40px] text-[#344054] mb-2">
                Dobrodošli u PNP
            </h1>
            <p className="text-center text-[16px] leading-[24px] text-[#344054] mb-4">
                <span className="font-bold">{name}</span>{" "}
                <span className="mr-[5px] font-bold">{last_name}</span>
                dobrodošli na PNP platformu! Molimo Vas kreirajte svoju lozinku
                kako biste se registrovali i pristupili svom nalogu.
            </p>
            <div className="flex justify-center items-center ">
                {!isLoading ? (
                    <form
                        className="w-[360px] flex flex-col mx-auto mt-6"
                        method="POST"
                        onSubmit={handleFormSubmit}
                    >
                        <div className="w-full bg-white h-[52px] rounded-[8px] border border-[#D0D5DD] py-4 px-6 mb-6 flex items-center justify-start text-[#000]">
                            <div className="flex items-center gap-[16px]">
                                <img src="/envelope.svg" alt="envelope" />
                                <div>{email}</div>
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="/password.svg"
                                alt="password"
                                className="absolute top-[15px] left-[24px]"
                            />
                            <Input
                                name="password"
                                type="password"
                                placeholder="Kreirajte lozinku"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="pl-16"
                            />
                        </div>

                        <div className="relative">
                            <img
                                src="/password.svg"
                                alt="password"
                                className="absolute top-[15px] left-[24px]"
                            />
                            <Input
                                className="pl-16"
                                name="password_confirmation"
                                type="password"
                                placeholder="Potvrdite lozinku"
                                value={passwordConfirmation}
                                onChange={(e) =>
                                    setPasswordConfirmation(e.target.value)
                                }
                            />
                        </div>

                        <div className="mb-6">
                            <DropDown
                                value={city}
                                onChange={setCity}
                                defaultValue="izaberi grad"
                                array={cities}
                                type="city"
                            />
                        </div>

                        <div className="flex items-start gap-[8px]">
                            <input
                                type="checkbox"
                                className="mt-[4px]"
                                checked={isChecked}
                                onChange={() => setIsChecked(!isChecked)}
                            />
                            <p className="text-[14px] font-regular leading-[20px] text-[#344054] mb-[20px]">
                                <span>
                                    Slazem se sa svim izjavama navedenim u
                                </span>
                                <Link>
                                    <span className="text-[#21409A] hover:underline ml-[5px]">
                                        Legal & Privacy
                                    </span>
                                </Link>
                            </p>
                        </div>

                        <ButtonMain className="btn-main" type="submit">
                            Registruj se
                        </ButtonMain>

                        {error && (
                            <div className="text-red-500 mt-[15px]">
                                {error}
                            </div>
                        )}
                    </form>
                ) : (
                    <div className="flex items-center justify-center h-[500px]">
                        <Loader />
                    </div>
                )}
            </div>
        </div>
    );
}

export default RegisterForm;
