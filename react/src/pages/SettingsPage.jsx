import React from "react";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";
import MainContent from "../components/MainContent";
import Settings from "../components/Settings";
function SettingsPage() {
    return (
        <section>
            <Layout>
                <Sidebar />
                <MainContent>
                    <Settings />
                </MainContent>
            </Layout>
        </section>
    );
}

export default SettingsPage;
