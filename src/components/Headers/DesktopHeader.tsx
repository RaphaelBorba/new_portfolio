import { handleScroll } from "@/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AiOutlineMenu } from 'react-icons/ai'


export default function DesktopHeader({ handleNav }: { handleNav: () => void }) {

    const router = useRouter()

    const checkScroll = (tagId: string) => {
        const bool = handleScroll(tagId)
        if (!bool) {
            router.push("/")
            setTimeout(() => handleScroll(tagId), 300)
        }
    }

    return (
        <div className="header__desktop">
            <Image
                onClick={() => checkScroll("main")}
                alt="logo"
                src="/rb.png"
                width={80}
                height={80}
            />
            <div>
                <ul className="hidden md:flex">
                    <li onClick={() => checkScroll("main")} className="header__desktop__li">
                        Home
                    </li>
                    <li onClick={() => checkScroll("about")} className="header__desktop__li">
                        About
                    </li>
                    <li onClick={() => checkScroll("skills")} className="header__desktop__li">
                        Skills
                    </li>
                    <li onClick={() => checkScroll("projects")} className="header__desktop__li">
                        Projects
                    </li>
                    <li onClick={() => checkScroll("contact")} className="header__desktop__li">
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