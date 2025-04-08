import React, { useState, useEffect } from "react";
import Input from "./Input";
import ButtonMain from "./ButtonMain";
import DropDown from "./DropDown";
import { useAuth } from "../providers/AuthProviders";

function Settings() {
    const { user, cities } = useAuth();

    const [formData, setFormData] = useState({
        name: user.name,
        last_name: user.last_name,
        phone: user.phone,
        city_id: user.city_id,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

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
            <div className="border border-[#D0D5DD] rounded-[4px] mt-[30px]">
                <div className="bg-[#F9FAFB] px-[16px] py-[12px] border-b border-[#D0D5DD]">
                    <span className="text-[#344054] text-[18px] leading-[24px] font-semibold">
                        Osnovne Informacije
                    </span>
                </div>
                <form id="inviteForm" className="p-[16px]" method="POST">
                    <div className="flex w-[668px] justify-between pr-[36px] pl-[8px]">
                        <div>
                            <span className="font-medium text-[14px] leading-[20px] text-[#344054]">
                                profilna slika
                            </span>
                        </div>
                        <div className="w-[360px] flex justify-between items-center mb-[16px]">
                            <img
                                src={`http://127.0.0.1:8000/${user.profile_image}`}
                                alt="profile image"
                                className="w-[64px] h-[64px]"
                            />
                            <ButtonMain>Promeni sliku</ButtonMain>
                        </div>
                    </div>
                    <div className="flex w-[668px] justify-between pr-[36px] pl-[8px]">
                        <div>
                            <span className="font-medium text-[14px] leading-[20px] text-[#344054]">
                                Grad
                            </span>
                        </div>
                        <div className="w-[360px] mb-[16px]">
                            <DropDown
                                array={cities}
                                type="city"
                                defaultValue={
                                    cities.find(
                                        (city) => city.id === formData.city_id
                                    )?.name || ""
                                }
                            />
                        </div>
                    </div>
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
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex w-[668px] justify-between pr-[36px] pl-[8px]">
                        <div>
                            <span className="font-medium text-[14px] leading-[20px] text-[#344054]">
                                Prezime
                            </span>
                        </div>
                        <div className="w-[360px]">
                            <Input
                                name="last_name"
                                type="text"
                                placeholder="Unesite prezime novog člana"
                                value={formData.last_name}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex w-[668px] justify-between pr-[36px] pl-[8px]">
                        <div>
                            <span className="font-medium text-[14px] leading-[20px] text-[#344054]">
                                Email Adresa
                            </span>
                        </div>
                        <div className="w-[360px]">
                            <div className="w-full bg-[#EAECF0] h-[52px] rounded-[8px] border border-[#667085] py-4 px-6 mb-6 flex items-center">
                                <span className="text-[#98A2B3]">
                                    {user.email}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-[668px] justify-between pr-[36px] pl-[8px]">
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
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex w-[668px] justify-between pr-[36px] pl-[8px]">
                        <div>
                            <span className="font-medium text-[14px] leading-[20px] text-[#344054]">
                                Lozinka
                            </span>
                        </div>
                        <div className="w-[360px]">
                            <div className="w-full bg-white h-[52px] rounded-[8px] border border-[#D0D5DD] py-4 px-6 mb-6 flex items-center">
                                <span className="text-[#98A2B3]">
                                    **************
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-end w-[668px] pr-[36px]">
                        <ButtonMain type="submit" form="inviteForm">
                            Promeni lozinku
                        </ButtonMain>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Settings;
