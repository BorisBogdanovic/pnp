import React from "react";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";
import MainContent from "../components/MainContent";
import Loader from "../components/Loader";

function HomePage() {
    return (
        <section>
            <Layout>
                <Sidebar />
                <MainContent>
                    <h1>Analitika</h1>
                </MainContent>
            </Layout>
        </section>
    );
}

export default HomePage;
