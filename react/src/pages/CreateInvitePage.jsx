import React from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Invite from "../components/Invite";
import MainContent from "../components/MainContent";
function CreateInvitePage() {
    return (
        <section>
            <Layout>
                <Sidebar />
                <MainContent>
                    <Invite />
                </MainContent>
            </Layout>
        </section>
    );
}

export default CreateInvitePage;
