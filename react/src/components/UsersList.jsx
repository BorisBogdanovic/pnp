import React from "react";
import UserCard from "./UserCard";
import Loader from "./Loader";
import { useUser } from "../providers/UserProvider";

function UsersList({ openDeleteModal }) {
    const { usersList, isLoading } = useUser();

    if (isLoading) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center">
                <Loader />
            </div>
        );
    }

    return (
        <div className="grid grid-cols-4 gap-4">
            {usersList.map((user) => (
                <UserCard
                    user={user}
                    key={user.id}
                    openDeleteModal={openDeleteModal}
                />
            ))}
        </div>
    );
}

export default UsersList;
