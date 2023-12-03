"use client"

import { useState } from "react";
import MobileHeader from "./Headers/MobileHeader";
import DesktopHeader from "./Headers/DesktopHeader";

export default function Header() {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <header className="fixed z-[100] h-20 w-full shadow-xl">
            <DesktopHeader handleNav={handleNav} />
            <MobileHeader handleNav={handleNav} nav={nav} />
        </header>
    )
}