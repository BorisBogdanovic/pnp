import React from "react";
import { useUser } from "../providers/UserProvider";
function Search() {
    const { searchTerm, setSearchTerm, setCurrentPage } = useUser();

    const handleSearch = (e) => {
        const searchValue = e.target.value;

        if (searchValue.length > 3) {
            setSearchTerm(searchValue);
            setCurrentPage(1);
        } else {
            setSearchTerm("");
        }
    };

    return (
        <input
            value={searchTerm}
            className="w-[360px] h-[56px] rounded-[8px] p-4 border border-[#D0D5DD] focus:outline-none text-[#344054] placeholder-white placeholder:text-[#D0D5DD] placeholder:opacity-100 text-[14px] leading-[20px]"
            placeholder="Pretražite članove tima"
            onChange={handleSearch}
        ></input>
    );
}

export default Search;
