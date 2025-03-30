import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Input from "./Input";
import ButtonMain from "./ButtonMain";
import Loader from "./Loader";
import SecondaryButton from "./SecondaryButton";
import { useAuth } from "../providers/AuthProviders";
import InviteNotification from "./TotastNotification/InviteNotification";

function Invite() {
    const navigate = useNavigate();
    const { inviteUser, isLoading, setIsLoading, error, setError } = useAuth();
    const [isSuccess, setIsSuccess] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        last_name: "",
        email: "",
        phone: "",
    });

    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(formData.email)) {
            setError("Unesite važeću email adresu!");
            return;
        }
        if (
            !formData.name ||
            !formData.last_name ||
            !formData.email ||
            !formData.phone
        ) {
            setError("Sva polja moraju biti popunjena!");
            return;
        }
        try {
            setIsSuccess(true);
            setShowNotification(false);
            setIsLoading(true);
            setError(null);
            await inviteUser(formData);
            setFormData({
                name: "",
                last_name: "",
                email: "",
                phone: "",
            });
            setTimeout(() => {
                setShowNotification(true);
                setIsSuccess(false);

                setTimeout(() => {
                    setShowNotification(false);
                }, 3000);
            }, 100);
        } catch (err) {
            setError("Došlo je do greške: " + err);
            setIsSuccess(false);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-[12px] py-[14px]">
                    <button
                        className="flex items-center justify-center bg-[#F2F4F7] w-[44px] h-[44px] rounded-[8px] cursor-pointer hover:bg-[#EAECF0] transition-all duration-400 ease"
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        <img src="arrow-left.svg" alt="arrow left" />
                    </button>
                    <p className="text-[24px] leading-[30px] text-[#344054] font-bold">
                        Novi korisnik
                    </p>
                </div>
                <div className="flex items-center gap-[12px]">
                    <Link to="/">
                        <SecondaryButton>Odustani</SecondaryButton>
                    </Link>
                </div>
            </div>
            <div className="border border-[#D0D5DD] rounded-[4px] overflow-hidden mt-[48px]">
                <div className="bg-[#F9FAFB] px-[16px] py-[12px] border-b border-[#D0D5DD]">
                    <span className="text-[#344054] text-[18px] leading-[24px] font-semibold">
                        Osnovne Informacije
                    </span>
                </div>
                <form
                    id="inviteForm"
                    className="p-[16px]"
                    method="POST"
                    onSubmit={handleSubmit}
                >
                    <div className="flex w-[668px] justify-between pr-[36px] pl-[8px]">
                        <div>
                            <span className="font-medium text-[14px] leading-[20px] text-[#344054]">
                                Ime
                            </span>
                        </div>
                        <div className="w-[360px]">
                            <Input
                                name="name"
                                type="text"
                                value={formData.name}
                                placeholder="Unesite ime novog člana"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex w-[668px] justify-between  pr-[36px] pl-[8px]">
                        <div>
                            <span className="font-medium text-[14px] leading-[20px] text-[#344054] ">
                                Prezime
                            </span>
                        </div>
                        <div className="w-[360px]">
                            <Input
                                name="last_name"
                                value={formData.last_name}
                                type="text"
                                placeholder="Unesite prezime novog člana"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex w-[668px] justify-between  pr-[36px] pl-[8px]">
                        <div>
                            <span className="font-medium text-[14px] leading-[20px] text-[#344054]">
                                Email Adresa
                            </span>
                        </div>
                        <div className="w-[360px]">
                            <Input
                                name="email"
                                value={formData.email}
                                type="email"
                                placeholder="Unesite email adresu novog člana"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex w-[668px] justify-between  pr-[36px] pl-[8px]">
                        <div>
                            <span className="font-medium text-[14px] leading-[20px] text-[#344054]">
                                Telefon
                            </span>
                        </div>
                        <div className="relative w-[360px]">
                            <span className="absolute top-[15px] left-[24px] text-gray-500">
                                +381
                            </span>
                            <Input
                                className="pl-16"
                                name="phone"
                                value={formData.phone}
                                type="text"
                                placeholder="Unesite broj telefona"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-[668px] pr-[36px]">
                        <ButtonMain type="submit" form="inviteForm">
                            + Pošalji poziv
                        </ButtonMain>
                        {isLoading && !error && (
                            <div>
                                <Loader />
                            </div>
                        )}
                        {error && !isLoading && (
                            <div className="text-red-500 mt-2">{error}</div>
                        )}
                    </div>
                </form>
            </div>
            {showNotification && !error && (
                <div
                    className={`absolute bottom-[20px] right-[20px] ${
                        showNotification ? "fade-in" : "fade-out"
                    }`}
                >
                    <InviteNotification />
                </div>
            )}
        </>
    );
}

export default Invite;
