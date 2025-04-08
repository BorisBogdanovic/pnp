import React, { useState, useEffect } from "react";
import ButtonMain from "./ButtonMain";
import { Link } from "react-router-dom";

import UsersFilterBar from "./UsersFilterBar";
import UsersList from "./UsersList";
import Paginaton from "./Paginaton";

import { useUser } from "../providers/UserProvider";
import EmptyUsersList from "./EmptyUsersList";
import DeleteModal from "./DeleteModal";

function Users() {
    const { usersList } = useUser();
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);

    const openDeleteModal = (userId) => {
        setSelectedUserId(userId);
        setIsDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setSelectedUserId(null);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const modal = document.getElementById("delete-modal");
            if (modal && !modal.contains(event.target)) {
                closeDeleteModal();
            }
        };

        const handleEscapeKey = (event) => {
            if (event.key === "Escape") {
                closeDeleteModal();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscapeKey);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, []);

    return (
        <div className="flex flex-col  h-[940px] relative">
            <div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[12px] py-[14px]">
                        <p className="text-[24px] leading-[30px] text-[#344054] font-bold">
                            PNP servis Prodavci
                        </p>
                    </div>
                    <div className="flex items-center gap-[12px]">
                        <Link to="/dodaj-prodavca">
                            <ButtonMain>+ Novi član</ButtonMain>
                        </Link>
                    </div>
                </div>
                <UsersFilterBar />

                {usersList.length === 0 ? (
                    <EmptyUsersList />
                ) : (
                    <UsersList openDeleteModal={openDeleteModal} />
                )}
            </div>

            <div className="h-[80px] flex items-center justify-center absolute bottom-0 left-0 right-0 mx-auto">
                <Paginaton />
            </div>

            {isDeleteModalOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-xs w-full h-[100vh] flex items-center justify-center z-111">
                    <DeleteModal
                        userId={selectedUserId}
                        closeDeleteModal={closeDeleteModal}
                    />
                </div>
            )}
        </div>
    );
}

export default Users;
