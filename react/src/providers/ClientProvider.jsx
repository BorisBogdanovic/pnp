import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "../providers/AuthProviders";

const ClientContext = createContext();

export const ClientProvider = ({ children }) => {
    const [clients, setClients] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [services, setServices] = useState([]);
    const { authToken } = useAuth();

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await fetch(
                    `http://localhost:8000/api/clients`,
                    {
                        headers: {
                            Authorization: `Bearer ${authToken}`,
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error(`Greška pri preuzimanju klijenata`);
                }

                const data = await response.json();

                setClients(data.data.data);
            } catch (error) {
                console.error("Error fetching clients:", error.message);
            }
        };

        fetchClients();
    }, [authToken]);

    return (
        <ClientContext.Provider value={{ clients }}>
            {children}
        </ClientContext.Provider>
    );
};

export const useClient = () => useContext(ClientContext);
