import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null;
    });
    const [isTokenValid, setIsTokenValid] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [statuses, setStatuses] = useState([]);
    const [invUser, setInvUser] = useState({});
    const [authToken, setAuthToken] = useState(
        () => localStorage.getItem("auth_token") || null
    );

    const [error, setError] = useState(null);
    const [cities, setCities] = useState([]);

    const navigate = useNavigate();
    const isAuthenticated = !!authToken;
    /////////////////////////////////////////////////////////////////////////////////////LOGIN
    useEffect(() => {
        if (authToken) {
            localStorage.setItem("auth_token", authToken);
        } else {
            localStorage.removeItem("auth_token");
        }
    }, [authToken]);

    const login = async (email, password) => {
        setError(null);
        try {
            setIsLoading(true);
            const response = await fetch("http://127.0.0.1:8000/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Neispravni kredencijali.");
            }

            setAuthToken(data.token);
            setUser(data.data);
            localStorage.setItem("user", JSON.stringify(data.data));
            localStorage.setItem("auth_token", data.token);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };
    /////////////////////////////////////////////////////////////////////////////////////LOGOUT
    const logout = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authToken}`,
                },
            });

            if (!response.ok) throw new Error("Greška pri odjavljivanju");
        } catch (error) {
            console.error(error.message);
        } finally {
            setUser(null);
            setAuthToken(null);
            localStorage.removeItem("auth_token");
            localStorage.removeItem("user");
            navigate("/login");
        }
    };
    /////////////////////////////////////////////////////////////////////////////////////INVITE
    const inviteUser = async (inviteData) => {
        try {
            setIsLoading(true);
            const response = await fetch(
                "http://127.0.0.1:8000/api/invite-user",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${authToken}`,
                    },
                    body: JSON.stringify(inviteData),
                }
            );

            if (response.ok) {
                const data = await response.json();

                const dynamicUrl = `/registracija/${data.data.email}/${data.data.token}/${data.data.name}/${data.data.last_name}`;

                setInvUser(data.data);
                return dynamicUrl;
            } else {
                throw new Error("Došlo je do greške prilikom slanja poziva.");
            }
        } catch (error) {
            setError(error.message || "Desila se neočekivana greška.");
        } finally {
            setIsLoading(false);
        }
    };
    /////////////////////////////////////////////////////////////////////////////////////REGISTER
    const registerUser = async (registerData) => {
        const { token: invToken, ...userData } = registerData;
        try {
            setIsLoading(true);
            const response = await fetch(
                `http://127.0.0.1:8000/api/register/${invToken}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(userData),
                }
            );
            const data = await response.json();
            if (!response.ok)
                throw new Error(data.message || "Poziv nije uspeo.");

            navigate("/login");
            setTimeout(() => {
                setIsTokenValid(null);
            }, 500);
            return data;
        } catch (error) {
            setError(
                error.message || "Došlo je do greške prilikom registracije."
            );
            console.error("Registration Error: ", error.message);
        } finally {
            setIsLoading(false);
        }
    };
    /////////////////////////////////////////////////////////////////////////////////////TOKEN VALIDATION
    const validateToken = async (token) => {
        try {
            const response = await fetch(
                `http://127.0.0.1:8000/api/check-invite/${token}`
            );
            const data = await response.json();

            if (data.status) {
                setIsTokenValid(true);
            } else {
                setIsTokenValid(false);
                navigate("/invalid-token");
            }
        } catch (error) {
            console.error("Greška pri validaciji tokena", error);
            setIsTokenValid(false);
            navigate("/invalid-token");
        }
    };
    /////////////////////////////////////////////////////////////////////////////////////GET ALL CITIES
    useEffect(() => {
        const fetchCities = async () => {
            try {
                const response = await fetch(
                    "http://127.0.0.1:8000/api/cities"
                );
                const data = await response.json();

                if (!response.ok) {
                    throw new Error("Greška pri preuzimanju gradova");
                }

                const cityArr = data.data;

                setCities(cityArr);
            } catch (error) {
                setError(error.message);
                console.error("Greška prilikom preuzimanja gradova:", error);
            }
        };

        fetchCities();
    }, []);
    /////////////////////////////////////////////////////////////////////////////////////GET ALL STATUSES
    useEffect(() => {
        const fetchStatuses = async () => {
            try {
                const response = await fetch(
                    "http://127.0.0.1:8000/api/statuses"
                );
                const data = await response.json();

                if (!response.ok) {
                    throw new Error("Greška pri preuzimanju statusa");
                }

                const statusesArr = data.data;
                setStatuses(statusesArr);
            } catch (error) {
                setError(error.message);
                console.error("Greška prilikom preuzimanja statusa:", error);
            }
        };

        fetchStatuses();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                authToken,
                login,
                logout,
                error,
                setAuthToken,
                isLoading,
                setIsLoading,
                inviteUser,
                isAuthenticated,
                cities,
                registerUser,
                setError,
                statuses,
                invUser,
                validateToken,
                isTokenValid,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
