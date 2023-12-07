import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai'

export default function DesktopHeader({ handleNav }: { handleNav: () => void }) {

    const router = usePathname()
    const [pathName, setPathName] = useState("")
    

    useEffect(() => {
        setPathName(router)
        
      }, [router]);

    return (
        <div className={`header__desktop ${pathName === "/" && "bg-gray-light"}`}>
            <Link href="/#main">
                <Image
                    className="cursor-pointer"
                    alt="logo"
                    src="/rb.png"
                    width={80}
                    height={80}
                />
            </Link>
            <div>
                <ul className={`hidden md:flex ${pathName !== "/" && "text-gray-light"}`}>
                    <Link href="/#main">
                        <li className="header__desktop__li">Home</li>
                    </Link>
                    <Link href="/#about">
                        <li className="header__desktop__li">About</li>
                    </Link>
                    <Link href="/#skills">
                        <li className="header__desktop__li">Skills</li>
                    </Link>
                    <Link href="/#projects">
                        <li className="header__desktop__li">Projects</li>
                    </Link>
                    <Link href="/#contact">
                        <li className="header__desktop__li">Contact</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className={`md:hidden ${pathName !== "/" && "text-gray-light"}`}>
                    <AiOutlineMenu size={25} />
                </div>
            </div>
        </div>
    )
}