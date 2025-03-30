import React from "react";
import Input from "./Input";
import ButtonMain from "./ButtonMain";

function Settings() {
    return (
        <>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-[12px] py-[14px]">
                    <p className="text-[24px] leading-[30px] text-[#344054] font-bold">
                        Podešavanja
                    </p>
                </div>
                <ButtonMain>Sačuvaj izmene</ButtonMain>
            </div>
            <div className="border border-[#D0D5DD] rounded-[4px] overflow-hidden mt-[30px]">
                <div className="bg-[#F9FAFB] px-[16px] py-[12px] border-b border-[#D0D5DD]">
                    <span className="text-[#344054] text-[18px] leading-[24px] font-semibold">
                        Osnovne Informacije
                    </span>
                </div>
                <form id="inviteForm" className="p-[16px]" method="POST">
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
                                placeholder="Unesite ime novog člana"
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
                                type="text"
                                placeholder="Unesite prezime novog člana"
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
                                type="email"
                                placeholder="Unesite email adresu novog člana"
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
                                type="text"
                                placeholder="Unesite broj telefona"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-[668px] pr-[36px]">
                        <ButtonMain type="submit" form="inviteForm">
                            + Pošalji poziv
                        </ButtonMain>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Settings;
