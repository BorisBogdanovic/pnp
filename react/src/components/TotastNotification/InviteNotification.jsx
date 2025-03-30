import React, { useState } from "react";

function InviteNotification() {
    const [isClose, setIsClose] = useState(false); // Postavi default kao false, znači notifikacija je prikazana

    const handleClose = () => {
        setIsClose(true); // Kada klikneš na close, setuj stanje na true
    };

    // Ako je isClose true, ne renderuj notifikaciju
    if (isClose) return null;

    return (
        <div className="p-[16px] border border-[#EAECF0] w-[512px] rounded-[4px] shadow-md relative">
            <div className="flex items-start gap-[16px]">
                <img src="invite.svg" alt="invite image" />
                <div className="w-[350px]">
                    <h5 className="text-[14px] text-[#344054] leading-[20px] font-medium mb-[16px]">
                        Poziv poslat uspešno!
                    </h5>
                    <p className="text-[14px] text-[#98A2B3] leading-[20px] font-medium">
                        Poziv je uspešno poslat. Uskoro ćeš moći da sarađuješ sa
                        novim korisnikom.
                    </p>
                </div>
                <img
                    onClick={handleClose}
                    className="absolute top-[10px] right-[10px] cursor-pointer"
                    src="close.svg"
                    alt="close icon"
                />
            </div>
        </div>
    );
}

export default InviteNotification;
