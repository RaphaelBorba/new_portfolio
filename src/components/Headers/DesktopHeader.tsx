import { handleScroll } from "@/utils";
import Image from "next/image";
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
                    <li onClick={()=>handleScroll("main")} className="header__desktop__li">
                        Home
                    </li>
                    <li onClick={()=>handleScroll("about")} className="header__desktop__li">
                        About
                    </li>
                    <li onClick={()=>handleScroll("skills")} className="header__desktop__li">
                        Skills
                    </li>
                    <li onClick={()=>handleScroll("projects")} className="header__desktop__li">
                        Projects
                    </li>
                    <li onClick={()=>handleScroll("contact")} className="header__desktop__li">
                        Contact
                    </li>
                </ul>
                <div onClick={handleNav} className="md:hidden">
                    <AiOutlineMenu size={25} />
                </div>
            </div>
        </div>
    )
}