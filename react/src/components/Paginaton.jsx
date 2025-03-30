import React from "react";
import { useUser } from "../providers/UserProvider";

const Paginaton = () => {
    const { currentPage, totalPages, goToPage } = useUser();

    return (
        <div className="flex items-center gap-4">
            <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-[#f2f4f7] rounded-md disabled:opacity-50 cursor-pointer"
            >
                <img
                    src="left-pagination-arrow.svg"
                    alt="pagination arrow left"
                />
            </button>
            <span>{`Stranica ${currentPage} od ${totalPages}`}</span>
            <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-[#f2f4f7] rounded-md disabled:opacity-50 cursor-pointer"
            >
                <img
                    src="pagination-arrow-right.svg"
                    alt="pagination arrow right"
                />
            </button>
        </div>
    );
};

export default Paginaton;
