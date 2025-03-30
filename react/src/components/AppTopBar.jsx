import React from "react";
import DateAndTime from "./DateAndTime";
import Container from "./Container";
import NotificationBar from "./NotificationBar";

function AppTopBar() {
    return (
        <div className="border-b border-[#667085] relative mb-[16px]">
            <Container>
                <div className="flex justify-between items-center py-[8px]">
                    <DateAndTime />
                    <NotificationBar />
                </div>
            </Container>
        </div>
    );
}

export default AppTopBar;
