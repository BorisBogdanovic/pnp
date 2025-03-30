import React, { useState } from "react";
import { useUser } from "../providers/UserProvider";

function DropDown({
    value,
    onChange,
    className = "",
    defaultValue = "",
    array = [],
    type = "",
}) {
    const { setCity, setStatus } = useUser();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemSelect = (item, e, type) => {
        e.preventDefault();
        onChange(item.id);
        if (type === "city") setCity(item.id);
        if (type === "status") setStatus(item.id);
        setIsOpen(false);
    };

    const selectedItem = array.find((item) => item.id === value);

    return (
        <div className={`relative ${className}`}>
            <button
                className="flex items-center justify-between p-[16px] border border-[#D0D5DD] rounded-[8px] text-[#344054] cursor-pointer w-full"
                onClick={toggleDropdown}
                type="button"
            >
                {selectedItem ? selectedItem.name : `${defaultValue}`}
                <img src="/arrow-dd.svg" alt="arrow" />
            </button>

            {isOpen && (
                <ul className="absolute left-0 right-0 mt-2 p-2 bg-white border border-[#D0D5DD] rounded-[8px] max-h-60 overflow-y-auto">
                    {array.map((item) => (
                        <li
                            key={item.id}
                            className="p-2 cursor-pointer hover:bg-gray-100"
                            onClick={(e) => handleItemSelect(item, e, type)}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default DropDown;
