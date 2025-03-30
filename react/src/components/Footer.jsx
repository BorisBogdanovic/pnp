import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <div className="bg-[#F2F4F7] w-full pb-[48px] pt-[64px]">
            <Container>
                <div className="  px-[32px] flex items-center justify-between mb-[65px]">
                    <div className="flex items-center gap-[32px]">
                        <Link to="/">
                            <span className="text-[#344054] text-base font-medium leading-6">
                                Analitika
                            </span>
                        </Link>
                        <Link to="/klijenti">
                            <span className="text-[#344054] text-base font-medium leading-6">
                                Klijenti
                            </span>
                        </Link>

                        <Link to="/prodavci">
                            <span className="text-[#344054] text-base font-medium leading-6">
                                Prodavci
                            </span>
                        </Link>

                        <Link to="/podešavanja">
                            <span className="text-[#344054] text-base font-medium leading-6">
                                Podešavanja
                            </span>
                        </Link>
                    </div>
                    <div className="w-[150px]">
                        <Logo />
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-[#98A2B3] text-base font-medium leading-6">
                        © 2025 PNP servis. All rights reserved.
                    </p>
                    <div className="flex items-center gap-[32px]">
                        <span className="text-[#98A2B3] text-base font-medium leading-6">
                            Uslovi korišćenja
                        </span>
                        <span className="text-[#98A2B3] text-base font-medium leading-6">
                            Politika privatnosti
                        </span>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Footer;
