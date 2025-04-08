import React from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import Clients from "../components/Clients";

function ClientsPage() {
    return (
        <section>
            <Layout>
                <Sidebar />
                <MainContent>
                    <Clients />
                </MainContent>
            </Layout>
        </section>
    );
}

export default ClientsPage;
