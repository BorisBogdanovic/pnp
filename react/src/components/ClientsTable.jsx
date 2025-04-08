import React from "react";
import { useClient } from "../providers/ClientProvider";
import { useUser } from "../providers/UserProvider";
function ClientsTable() {
    const { clients } = useClient();
    const { usersList } = useUser();

    return (
        <div className="w-full overflow-x-auto">
            <div className="min-w-[3600px]">
                <div className="flex items-center bg-[#F0F5FF] ">
                    {[
                        "Ime klijenta",
                        "Adresa",
                        "Telefon",
                        "Email",
                        "Marka automobila",
                        "Model automobila",
                        "Reg. tablica",
                        "Broj šasije",
                        "PNP Paket",
                        "Prodavac",
                        "Datum poč.",
                        "Opcije",
                    ].map((text, index) => (
                        <div
                            key={index}
                            className="min-w-[300px] px-[24px] py-[12px] text-center text-[#21409A] font-medium text-[14px] leading-[18px]"
                        >
                            {text}
                        </div>
                    ))}
                </div>

                {clients.map((client, index) => (
                    <div
                        key={client.id}
                        className={`flex items-center ${
                            index % 2 === 0 ? "bg-[#F9FAFB]" : ""
                        }`}
                    >
                        <div className="min-w-[300px] px-[24px] py-[12px] text-center text-[14px] font-medium text-[#344054]">
                            {`${client.client_name} ${client.client_last_name}`}
                        </div>
                        <div className="min-w-[300px] px-[24px] py-[12px] text-center text-[14px] font-medium text-[#344054]">
                            {client.address}
                        </div>
                        <div className="min-w-[300px] px-[24px] py-[12px] text-center text-[14px] font-medium text-[#344054]">
                            {client.phone}
                        </div>
                        <div className="min-w-[300px] px-[24px] py-[12px] text-center text-[14px] font-medium text-[#344054]">
                            {client.email}
                        </div>
                        <div className="min-w-[300px] px-[24px] py-[12px] text-center text-[14px] font-medium text-[#344054]">
                            {client.car_brand}
                        </div>
                        <div className="min-w-[300px] px-[24px] py-[12px] text-center text-[14px] font-medium text-[#344054]">
                            {client.car_model}
                        </div>
                        <div className="min-w-[300px] px-[24px] py-[12px] text-center text-[14px] font-medium text-[#344054]">
                            {client.register}
                        </div>
                        <div className="min-w-[300px] px-[24px] py-[12px] text-center text-[14px] font-medium text-[#344054]">
                            {client.vehicle_identification_number}
                        </div>
                        <div className="min-w-[300px] px-[24px] py-[12px] text-center text-[14px] font-medium text-[#344054]">
                            {client.service.name}
                        </div>
                        <div className="min-w-[300px] px-[24px] py-[12px] text-center text-[14px] font-medium text-[#344054]">
                            {client.user.name} {client.user.last_name}
                        </div>
                        <div className="min-w-[300px] px-[24px] py-[12px] text-center text-[14px] font-medium text-[#344054]">
                            {client.start_date}
                        </div>
                        <div className="min-w-[300px] px-[24px] py-[12px] text-center text-[14px] font-medium text-[#344054] flex items-center justify-center gap-[20px]">
                            <button className="cursor-pointer">
                                <img
                                    src="delete.svg"
                                    alt="delete"
                                    className="w-[25px] h-[25px]"
                                />
                            </button>
                            <button className="cursor-pointer">
                                <img
                                    src="edit.svg"
                                    alt="edit"
                                    className="w-[25px] h-[25px]"
                                />
                            </button>
                            <button className="cursor-pointer">
                                <img
                                    src="print.svg"
                                    alt="print"
                                    className="w-[25px] h-[25px]"
                                />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ClientsTable;
