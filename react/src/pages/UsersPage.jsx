import React from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import Users from "../components/Users";
function UsersPage() {
    return (
        <section>
            <Layout>
                <Sidebar />
                <MainContent>
                    <Users />
                </MainContent>
            </Layout>
        </section>
    );
}

export default UsersPage;
