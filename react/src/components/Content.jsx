import React from "react";

function Content({ children }) {
    return (
        <div className="min-h-[728px] w-full bg-white rounded-[4px] overflow-hidden p-[16px]  mb-[32px]">
            {children}
        </div>
    );
}

export default Content;
