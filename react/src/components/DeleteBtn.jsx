import React from "react";

function DeleteBtn({ children, onClick }) {
    return (
        <button
            className=" h-[44px] bg-[#D92D20] text-[#fff] rounded-[8px] px-[20px] cursor-pointer 
hover:bg-[#C0251A] transition-all duration-400 ease"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default DeleteBtn;
