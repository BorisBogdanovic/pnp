import React from "react";
import ButtonMain from "./ButtonMain";
import { Link } from "react-router-dom";
import ClientsTable from "./ClientsTable";
import Search from "./Search";
import DropDown from "./DropDown";
function Clients() {
    return (
        <div>
            <div
                className="flex items-center justify-between border-b border-[#D0D5DD] pb-[14px]
             "
            >
                <div className="flex items-center gap-[12px] ">
                    <p className="text-[24px] leading-[30px] text-[#344054] font-bold">
                        Lista Klijenata
                    </p>
                </div>
                <div>
                    <Link to="/kreiraj-klijenta">
                        <ButtonMain>+ Dodaj Klijenta</ButtonMain>
                    </Link>
                </div>
            </div>
            <div className="py-[16px] flex items-center gap-[12px]">
                <Search placeholder="Pretrazi po registraciji" />
                <DropDown defaultValue="Korisnici" className="w-[256px]" />
                <DropDown defaultValue="PNP Paketi" className="w-[256px]" />
                <button className="bg-[#21409a] h-[56px] w-[56px] rounded-[8px] flex items-center justify-center cursor-pointer hover:bg-[#1C3683] ease transition-all duration-400">
                    <img src="big-refresh.svg" alt="Refresh icon" />
                </button>
            </div>
            <ClientsTable />
        </div>
    );
}

export default Clients;
