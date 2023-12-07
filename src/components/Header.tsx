"use client"

import { useState, useEffect } from "react";
import MobileHeader from "./Headers/MobileHeader";
import DesktopHeader from "./Headers/DesktopHeader";

export default function Header() {

    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)

    useEffect(() => {
        
        const handleShadow = () => {
            if (window.scrollY >= 90) setShadow(true)
            else setShadow(false)
        }
        window.addEventListener('scroll', handleShadow)
    }, [])


    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <header className={`fixed z-[100] h-20 w-full ${shadow && "shadow-xl"} duration-200`}>
            <DesktopHeader handleNav={handleNav} />
            <MobileHeader handleNav={handleNav} nav={nav} />
        </header>
    )
}