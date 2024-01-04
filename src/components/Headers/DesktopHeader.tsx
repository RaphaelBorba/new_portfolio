import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from 'react-icons/ai'

export default function DesktopHeader({ handleNav, pathName, shadow }:
    {
        shadow: boolean,
        handleNav: () => void,
        pathName: Params | null
    }) {

    return (
        <div className={`header__desktop ${(!pathName?.projectName || shadow) && "bg-gray-light"}`}>
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
                <ul className={`hidden transition duration-300 md:flex ${(pathName?.projectName && !shadow) && "text-gray-light"}`}>
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
                <div onClick={handleNav} className={`transition duration-300 md:hidden ${(pathName?.projectName && !shadow) && "text-gray-light"}`}>
                    <AiOutlineMenu size={25} />
                </div>
            </div>
        </div>
    )
}