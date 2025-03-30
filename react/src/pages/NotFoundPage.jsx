import React from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import NotFoundContent from "../components/NotFoundContent";

function NotFoundPage() {
    return (
        <section>
            <Layout>
                <Sidebar />
                <MainContent>
                    <NotFoundContent />
                </MainContent>
            </Layout>
        </section>
    );
}

export default NotFoundPage;
