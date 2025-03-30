import React from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

function CreateClinentPage() {
    return (
        <section>
            <Layout>
                <Sidebar />
                <MainContent>Kreiraj klijenta</MainContent>
            </Layout>
        </section>
    );
}

export default CreateClinentPage;
