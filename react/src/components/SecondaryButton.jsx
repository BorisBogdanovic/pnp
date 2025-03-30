import React from "react";
function SecondaryButton({ children, type, onClick }) {
    return (
        <button
            onClick={onClick}
            type={type}
            className=" h-[44px] bg-[#F2F4F7] text-[#344054] rounded-[8px] px-[20px] cursor-pointer 
 hover:bg-[#EAECF0] transition-all duration-400 ease"
        >
            {children}
        </button>
    );
}

export default SecondaryButton;
