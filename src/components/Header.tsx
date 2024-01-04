"use client"

import { useState, useEffect } from "react";
import MobileHeader from "./Headers/MobileHeader";
import DesktopHeader from "./Headers/DesktopHeader";
import { useParams } from "next/navigation";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default function Header() {

    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)

    useEffect(() => {

        const handleShadow = () => {
            if (window.scrollY >= 160) setShadow(true)
            else setShadow(false)
        }
        window.addEventListener('scroll', handleShadow)
    }, [])

    const router = useParams()
    const [pathName, setPathName] = useState<Params | null>(null)
    useEffect(() => {
        setPathName(router)
    }, [router]);

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <header className={`fixed z-[100] h-20 w-full ${shadow && "shadow-xl"} duration-200`}>
            <DesktopHeader handleNav={handleNav} pathName={pathName} shadow={shadow} />
            <MobileHeader handleNav={handleNav} nav={nav} />
        </header>
    )
}