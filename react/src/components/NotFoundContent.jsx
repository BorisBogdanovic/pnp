import React from "react";
import { Link } from "react-router-dom";
function NotFoundContent() {
    return (
        <div className="flex w-[769px] gap-[32px] items-center">
            <div>
                <img src="alert.png" alt="alert" />
            </div>
            <div>
                <h4 className="text-[24px] leading-[32px] font-bold text-[#344054]">
                    404 - Stranica nije pronađena
                </h4>
                <p className="text-[16px] leading-[24px] font-medium text-[#98A2B3]">
                    Stranica koju tražite ne postoji. Možda je došlo do gresko
                    usled pogrešne veze ili je stranica obrisana u međuvremenu.
                </p>
                <Link to="/">
                    <p className="underline text-[#21409A] text-[14px] leading-[24px]">
                        Vratite se na početak
                    </p>
                </Link>
            </div>
        </div>
    );
}

export default NotFoundContent;
