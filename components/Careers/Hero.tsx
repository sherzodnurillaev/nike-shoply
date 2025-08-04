'use client'

import { useState } from "react";
import CareersBtn from "../ui/CareersBtn";
import Modal from "../ui/Modal";
import OpenRoles from "./OpenRoles";

const HeroSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="text-center !mt-[30px] sm:!mt-[50px] md:!mt-[70px] lg:!mt-[100px] !px-[20px]">
            <h2 className="text-[20px] md:text-[24px] lg:text-[32px] font-bold">Want to work with us?</h2>
            <p className="text-gray-500 text-[16px] md:text-[18px] lg:text-[24px] !my-2">We're always looking for passionate creators and developers</p>
            <CareersBtn onClick={() => setIsOpen(true)} />

            {isOpen && <Modal onClose={() => setIsOpen(false)} />}
            <OpenRoles onApply={() => setIsOpen(true)} />
        </div>
    );
};

export default HeroSection;
