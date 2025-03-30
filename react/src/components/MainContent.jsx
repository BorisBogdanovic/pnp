import React from "react";
import BgRectangle from "./BgRectangle";
import AppTopBar from "./AppTopBar";
import Content from "./Content";
import Container from "./Container";
import Footer from "./Footer";

function MainContent({ children }) {
    return (
        <main className="relative flex-1 ml-[312px] ">
            <BgRectangle />
            <AppTopBar />

            <Container>
                <Content>{children}</Content>
            </Container>
            <Footer />
        </main>
    );
}

export default MainContent;
