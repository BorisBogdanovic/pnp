import React from "react";
import { useState, useEffect } from "react";

function DateAndTime() {
    const [formattedDate, setFormattedDate] = useState("");
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const date = new Date();
        const formatted = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
        setFormattedDate(formatted);
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            const hours = date.getHours().toString().padStart(2, "0");
            const minutes = date.getMinutes().toString().padStart(2, "0");
            setCurrentTime(`${hours}:${minutes}`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className=" text-[14px] leading-[20px] text-white flex justify-center items-center gap-[32px]">
            <div className="flex gap-[4px]">
                <svg
                    className="w-[20px] h-[20px] text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
                    />
                </svg>

                <span>{formattedDate}</span>
            </div>
            <div className="flex gap-[4px]">
                <svg
                    className="w-[20px] h-[20px] text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                </svg>
                <span>{currentTime}</span>
            </div>
        </div>
    );
}

export default DateAndTime;
