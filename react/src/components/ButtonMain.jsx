import React from "react";
function ButtonMain({ children, type }) {
    return (
        <button
            type={type}
            className={`h-[44px] bg-[#21409A] text-white rounded-[8px] px-[20px] cursor-pointer 
         hover:bg-[#1C3683] transition-all duration-400 ease`}
        >
            {children}
        </button>
    );
}

export default ButtonMain;
