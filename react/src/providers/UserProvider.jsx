import React, { useState, createContext, useContext, useEffect } from "react";
import { useAuth } from "../providers/AuthProviders";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const { authToken, invUser } = useAuth();
    const [usersList, setUsersList] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [city, setCity] = useState("");
    const [status, setStatus] = useState("");
    //////////////////////////////////////////////////////////////////////////////////////////////////////USER LIST
    useEffect(() => {
        const controller = new AbortController();
        const fetchUsers = async () => {
            try {
                setIsLoading(true);
                const params = new URLSearchParams();
                if (searchTerm) params.append("search", searchTerm);
                if (city) params.append("city", city);
                if (status) params.append("status", status);

                const response = await fetch(
                    `http://127.0.0.1:8000/api/users?page=${currentPage}&${params.toString()}`,
                    {
                        headers: {
                            Authorization: `Bearer ${authToken}`,
                        },
                        signal: controller.signal,
                    }
                );

                if (!response.ok) {
                    throw new Error("Greška pri preuzimanju usera");
                }

                const data = await response.json();

                setUsersList(data.data);
                setTotalPages(data.last_page);
            } catch (error) {
                if (error.name !== "AbortError") {
                    setError(error.message);
                }
            } finally {
                setIsLoading(false);
            }
        };

        if (authToken) fetchUsers();

        return () => {
            controller.abort();
        };
    }, [currentPage, searchTerm, city, status, authToken, invUser]);

    const goToPage = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////DELETE USER

    const deleteUser = async (id) => {
        if (!authToken) {
            setError("Nema tokena za autorizaciju");
            return;
        }
        const userExists = usersList.some((user) => user.id === id);
        if (!userExists) {
            setError("Korisnik ne postoji u listi");
            return;
        }
        try {
            const response = await fetch(
                `http://127.0.0.1:8000/api/user/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                }
            );
            if (!response.ok) {
                throw new Error(`Nije uspelo brisanje korisnika`);
            }
            setUsersList((prevUsers) =>
                prevUsers.filter((user) => user.id !== id)
            );

            setCurrentPage(1);
        } catch (error) {
            setError(error.message);
        }
    };
    return (
        <UserContext.Provider
            value={{
                usersList,
                error,
                isLoading,
                goToPage,
                currentPage,
                totalPages,
                setSearchTerm,
                setCity,
                setStatus,
                deleteUser,
                setCurrentPage,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
