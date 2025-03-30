import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { AuthProvider } from "./providers/AuthProviders";
import { UserProvider } from "./providers/UserProvider";

import ClientsPage from "./pages/ClientsPage";
import UsersPage from "./pages/UsersPage";
import SettingsPage from "./pages/SettingsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateClinentPage from "./pages/CreateClinentPage";
import CreateInvitePage from "./pages/CreateInvitePage";
import RegisterPage from "./pages/RegisterPage";
import NotValitTokenPage from "./pages/NotValitTokenPage";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <UserProvider>
                    <Routes>
                        <Route path="login" element={<Login />} />

                        <Route element={<ProtectedRoute />}>
                            <Route index element={<HomePage />} />
                            <Route path="klijenti" element={<ClientsPage />} />
                            <Route
                                path="kreiraj-klijenta"
                                element={<CreateClinentPage />}
                            />

                            <Route path="prodavci" element={<UsersPage />} />
                            <Route
                                path="dodaj-prodavca"
                                element={<CreateInvitePage />}
                            />
                            <Route
                                path="podešavanja"
                                element={<SettingsPage />}
                            />
                            <Route path="*" element={<NotFoundPage />} />
                        </Route>
                        <Route
                            path="/invalid-token"
                            element={<NotValitTokenPage />}
                        />

                        <Route
                            path="registracija/:email/:token/:name/:last_name"
                            element={<RegisterPage />}
                        />
                    </Routes>
                </UserProvider>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
