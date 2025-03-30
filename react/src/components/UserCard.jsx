import React, { useState } from "react";

import { useAuth } from "../providers/AuthProviders";
import ActionBtn from "./ActionBtn";

function UserCard({ user, openDeleteModal }) {
    const { cities, statuses } = useAuth();

    const userCity = cities.find((city) => city.id === user.city_id);
    const userStatuses = statuses.find(
        (status) => status.id === user.status_id
    );

    return (
        <>
            <div className="border border-[#D0D5DD] rounded-md p-4">
                <div className="flex justify-between items-start mb-4">
                    <div
                        className={`py-1 px-2 rounded-full flex items-center justify-center ${
                            user.status_id === 2
                                ? "bg-[#FEFBE8]"
                                : user.status_id === 1
                                ? "bg-[#ECFDF3]"
                                : ""
                        }`}
                    >
                        <span
                            className={`text-medium leading-5 ${
                                user.status_id === 2
                                    ? "text-[#A15C07]"
                                    : user.status_id === 1
                                    ? "text-[#027A48]"
                                    : ""
                            }`}
                        >
                            {userStatuses?.name}
                        </span>
                    </div>

                    <div className="flex intems-center gap-[8px]">
                        {user.status_id === 2 && (
                            <ActionBtn>
                                <img src="refresh.svg" alt="Delete user" />
                            </ActionBtn>
                        )}
                        <ActionBtn
                            onClick={() => {
                                openDeleteModal(user.id);
                            }}
                        >
                            <img src="delete.svg" alt="Delete user" />
                        </ActionBtn>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 mx-auto">
                    <div className="h-14 w-14 rounded-full ">
                        <img
                            src={`http://127.0.0.1:8000/${user.profile_image}`}
                            className="h-14 w-14"
                            alt="Profile"
                        />
                    </div>
                    <div className="flex gap-1">
                        <span className="text-lg leading-6 text-[#344054] font-medium first-letter:uppercase">
                            {user.name}
                        </span>
                        <span className="text-lg leading-6 text-[#344054] font-medium first-letter:uppercase">
                            {user.last_name}
                        </span>
                    </div>
                    <div className="text-lg leading-6 text-[#98A2B3]">
                        <span>{userCity?.name}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserCard;
