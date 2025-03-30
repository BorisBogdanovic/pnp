import React, { useState } from "react";
import Search from "./Search";
import DropDown from "./DropDown";
import { useAuth } from "../providers/AuthProviders";
import { useUser } from "../providers/UserProvider";

function UsersFilterBar() {
    const { cities, statuses } = useAuth();
    const { setSearchTerm, setCity, setStatus } = useUser();
    const [localCity, setLocalCity] = useState("");
    const [localStatus, setLocalStatus] = useState("");
    const [searchKey, setSearchKey] = useState(0);

    const handleRefresh = () => {
        setCity("");
        setStatus("");
        setSearchTerm("");
        setLocalCity("");
        setLocalStatus("");
        setSearchKey((prev) => prev + 1);
    };

    return (
        <div className="flex items-center justify-start gap-[16px] mb-[16px]">
            <Search key={searchKey} />
            <DropDown
                value={localCity}
                onChange={setLocalCity}
                defaultValue="Grad"
                array={cities}
                className="w-[256px]"
                type="city"
            />

            <DropDown
                value={localStatus}
                onChange={setLocalStatus}
                defaultValue="Status"
                array={statuses}
                className="w-[256px]"
                type="status"
            />
            <button
                onClick={handleRefresh}
                className="bg-[#21409a] h-[56px] w-[56px] rounded-[8px] flex items-center justify-center cursor-pointer hover:bg-[#1C3683] ease transition-all duration-400"
            >
                <img src="big-refresh.svg" alt="Refresh icon" />
            </button>
        </div>
    );
}

export default UsersFilterBar;
