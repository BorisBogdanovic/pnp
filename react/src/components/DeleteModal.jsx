import React from "react";
import { useUser } from "../providers/UserProvider";
import SecondaryButton from "../components/SecondaryButton";
import DeleteBtn from "../components/DeleteBtn";

function DeleteModal({ userId, closeDeleteModal }) {
    const { deleteUser } = useUser();

    const handleDelete = async () => {
        await deleteUser(userId);
        closeDeleteModal();
    };

    return (
        <div
            className="w-[500px] bg-[#F9FAFB] rounded-[8px] overflow-hidden border border-[#D0D5DD] shadow-lg"
            id="delete-modal"
        >
            <div className="px-[16px] py-[12px]">
                <span className="font-semibold text-[18px] leading-[24px] text-[#344054]">
                    Brisanje korisnika
                </span>
            </div>
            <div className="px-[16px] py-[24px] bg-[#fff] flex flex-col items-center gap-[16px] border-t border-b border-[#D0D5DD]">
                <div className="flex flex-col items-center mb-[8px]">
                    <img src="delete-icon.png" alt="delete icon" />
                    <span className="font-semibold text-[24px] leading-[28px] text-[#344054] ">
                        Da li ste sigurni?
                    </span>
                </div>
                <p className="font-medium text-[16px] leading-[24px] text-[#98A2B3] text-center">
                    Ako nastavite sa ovom akcijom sve Vaše prethodne promene
                    biće poništene
                </p>
            </div>
            <div className="px-[16px] py-[12px] flex items-center justify-end gap-[12px]">
                <SecondaryButton onClick={closeDeleteModal}>
                    Odustani
                </SecondaryButton>
                <DeleteBtn onClick={handleDelete}>Nastavite</DeleteBtn>
            </div>
        </div>
    );
}

export default DeleteModal;
