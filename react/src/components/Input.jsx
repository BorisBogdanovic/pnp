import React from "react";

function Input({
    name,
    type,
    placeholder = "",
    value,
    onChange,
    className = "",
}) {
    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            className={`w-full bg-white h-[52px] rounded-[8px] border border-[#D0D5DD] py-4 px-6 mb-6 ${className}`}
            value={value}
            onChange={onChange}
        />
    );
}
export default Input;
