import React from "react";

function ActionBtn({ children, onClick }) {
    return (
        <button
            className="flex items-center justify-center bg-[#F2F4F7] w-11 h-11 rounded-lg cursor-pointer hover:bg-[#EAECF0] transition ease duration-[400ms]"
            aria-label="Delete user"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default ActionBtn;
