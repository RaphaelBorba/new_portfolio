import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from 'react-icons/ai'

export default function DesktopHeader({ handleNav }: { handleNav: () => void }) {

    return (
        <div className="header__desktop">
            <Image
                alt="logo"
                src="/rb.png"
                width={80}
                height={80}
            />
            <div>
                <ul className="hidden md:flex">
                    <Link href="/">
                        <li className="header__desktop__li">
                            Home
                        </li>
                    </Link>
                    <Link href="/">
                        <li className="header__desktop__li">
                            About
                        </li>
                    </Link>
                    <Link href="/">
                        <li className="header__desktop__li">
                            Skills
                        </li>
                    </Link>
                    <Link href="/">
                        <li className="header__desktop__li">
                            Projects
                        </li>
                    </Link>
                    <Link href="/">
                        <li className="header__desktop__li">
                            Contact
                        </li>
                    </Link>
                </ul>
                <div onClick={handleNav} className="md:hidden">
                    <AiOutlineMenu size={25} />
                </div>
            </div>
        </div>
    )
}