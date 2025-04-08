import React, { useState, useEffect } from "react";
import { useUser } from "../providers/UserProvider"; // Pretpostavljam da dolazi iz nekog konteksta

function Search({ placeholder = "Pretražite članove tima" }) {
    const { searchTerm, setSearchTerm, setCurrentPage } = useUser();
    const [inputValue, setInputValue] = useState(searchTerm || "");

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (inputValue.length === 0 || inputValue.length > 3) {
                setSearchTerm(inputValue);
                setCurrentPage(1);
            }
        }, 300);

        return () => clearTimeout(timeout);
    }, [inputValue, setSearchTerm, setCurrentPage]);

    return (
        <input
            value={inputValue}
            className="w-[360px] h-[56px] rounded-[8px] p-4 border border-[#D0D5DD] focus:outline-none text-[#344054] placeholder-white placeholder:text-[#D0D5DD] placeholder:opacity-100 text-[14px] leading-[20px]"
            placeholder={placeholder}
            onChange={(e) => setInputValue(e.target.value)}
        />
    );
}

export default Search;
