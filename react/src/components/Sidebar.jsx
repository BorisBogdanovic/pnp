import React, { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useAuth } from "../providers/AuthProviders";

function Sidebar() {
    const { logout, user } = useAuth();
    const [isOpenClient, setIsOpenClient] = useState(false);
    const [isOpenSeller, setIsOpenSeller] = useState(false);

    const toggleClient = () => {
        setIsOpenClient(!isOpenClient);
    };
    const toggleSeller = () => {
        setIsOpenSeller(!isOpenSeller);
    };

    return (
        <nav className="w-[312px] h-screen bg-white fixed py-8 px-4 flex flex-col justify-between">
            <div>
                <Link to="/">
                    <div className="px-12 flex justify-center">
                        <Logo />
                    </div>
                </Link>
                <p className="text-[#98A2B3] uppercase tracking-[2px] mb-[16px] mt-[32px]">
                    GLAVNI MENI
                </p>
                <Link to="/">
                    <div className="flex justify-start items-center gap-[8px] py-[8px] pl-[12px] mb-[8px] rounded-[8px] hover:bg-[#F9FAFB] cursor-pointer">
                        <img src="Analytics-icon.svg" alt="Analytics icon" />
                        <span className="text-[16px] leading-[24px] text-[#344054]">
                            Analitika
                        </span>
                    </div>
                </Link>

                <div>
                    <div
                        className="flex justify-between items-center py-[8px] px-[12px] mb-[8px] rounded-[8px] hover:bg-[#F9FAFB] cursor-pointer"
                        onClick={toggleClient}
                    >
                        <div className="flex justify-start items-center gap-[8px]">
                            <img src="client-icon.svg" alt="users icon" />
                            <span className="text-[16px] leading-[24px] text-[#344054]">
                                Klijenti
                            </span>
                        </div>
                        <img src="arrow-dd.svg" alt="drop down arrow" />
                    </div>
                    <div
                        className={`overflow-hidden transition-all duration-700 ease ${
                            isOpenClient ? "max-h-96" : "max-h-0"
                        }`}
                    >
                        {isOpenClient && (
                            <div>
                                <Link to="/kreiraj-klijenta">
                                    <div className="flex justify-start items-center py-[8px] pl-[40px] mb-[8px] rounded-[8px] hover:bg-[#F9FAFB] cursor-pointer">
                                        <span className="text-[16px] leading-[24px] text-[#344054]">
                                            Novi Klijent
                                        </span>
                                    </div>
                                </Link>
                                <Link to="/klijenti">
                                    <div className="flex justify-start items-center py-[8px] pl-[40px] mb-[8px] rounded-[8px] hover:bg-[#F9FAFB] cursor-pointer">
                                        <span className="text-[16px] leading-[24px] text-[#344054]">
                                            Lista Klijenata
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                {user?.is_admin && (
                    <div>
                        <div
                            className="flex items-center justify-between py-[8px] px-[12px] mb-[8px] rounded-[8px] hover:bg-[#F9FAFB] cursor-pointer"
                            onClick={toggleSeller}
                        >
                            <div className="flex justify-start items-center gap-[8px]">
                                <img src="bdo-team.svg" alt="users icon" />
                                <span className="text-[16px] leading-[24px] text-[#344054]">
                                    Prodavci
                                </span>
                            </div>
                            <img src="arrow-dd.svg" alt="drop down arrow" />
                        </div>
                        <div
                            className={`overflow-hidden transition-all duration-700 ease ${
                                isOpenSeller ? "max-h-96" : "max-h-0"
                            }`}
                        >
                            {isOpenSeller && (
                                <div className="bg-white w-full">
                                    <Link to="/dodaj-prodavca">
                                        <div className="flex justify-start items-center py-[8px] pl-[40px] mb-[8px] rounded-[8px] hover:bg-[#F9FAFB] cursor-pointer">
                                            <span className="text-[16px] leading-[24px] text-[#344054]">
                                                Novi Prodavac
                                            </span>
                                        </div>
                                    </Link>

                                    <Link to="/prodavci">
                                        <div className="flex justify-start items-center py-[8px] pl-[40px] mb-[8px] rounded-[8px] hover:bg-[#F9FAFB] cursor-pointer">
                                            <span className="text-[16px] leading-[24px] text-[#344054]">
                                                Lista Prodavaca
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <div>
                <p className="text-[#98A2B3] uppercase tracking-[2px] mb-[16px]">
                    podešavanja
                </p>
                <Link to="/podešavanja">
                    <div className="flex justify-start items-center gap-[8px] py-[8px] pl-[12px] mb-[8px] rounded-[8px] hover:bg-[#F9FAFB] cursor-pointer">
                        <img src="settings.svg" alt="settings icon" />
                        <span className="text-[16px] leading-[24px] text-[#344054]">
                            Podešavanja
                        </span>
                    </div>
                </Link>
                <div className="flex items-center justify-between mt-12">
                    <div className="flex items-center gap-[10px]">
                        <div className="w-[40px] h-[40px] rounded-full ">
                            <img
                                src={`http://127.0.0.1:8000/${user.profile_image}`}
                                className="w-[40px] h-[40px]"
                                alt="Profile"
                            />
                        </div>
                        <div>
                            <p className="text-[#344054] text-[14px] leading-[20px]">
                                {user?.name} {user?.last_name}
                            </p>
                        </div>
                    </div>

                    <button onClick={logout}>
                        <img
                            src="logout.svg"
                            alt="logout button"
                            className="cursor-pointer"
                        />
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;
