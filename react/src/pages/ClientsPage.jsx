import React from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

function ClientsPage() {
    return (
        <section>
            <Layout>
                <Sidebar />
                <MainContent>Lista Klijenata</MainContent>
            </Layout>
        </section>
    );
}

export default ClientsPage;
