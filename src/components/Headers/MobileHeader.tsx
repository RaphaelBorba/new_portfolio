import Image from "next/image";
import { AiOutlineClose, AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { handleScroll } from "@/utils";
import { useRouter } from "next/navigation";

export default function MobileHeader({ nav, handleNav }: { nav: boolean, handleNav: () => void }) {
    const router = useRouter()

    const handleClickToScroll = (tagId: string) => {
        handleNav()
        const bool = handleScroll(tagId)
        if (!bool) {
            router.push("/")
            setTimeout(() => handleScroll(tagId), 300)
        }
    }

    return (
        <div className={nav ? "header__mobile" : ""}>
            <div
                className={nav ? "header__mobile__box"
                    : "fixed left-[-100%] top-0 p-10  duration-500 ease-in"}>
                <div>
                    <div className="flex w-full items-center justify-between">
                        <Image
                            alt="logo"
                            src="/rb.png"
                            width={85}
                            height={85}
                        />
                        <div onClick={handleNav} className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400">
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className="my-4 border-b border-gray-300">
                        <p className="w-[85%] py-4 md:w-[90%]">Let&apos;s build something cool together</p>
                    </div>
                </div>
                <div className="flex flex-col py-4">
                    <ul className="uppercase">
                        <li onClick={() => handleClickToScroll("main")} className="py-4 text-sm">Home</li>
                        <li onClick={() => handleClickToScroll("about")} className="py-4 text-sm">About</li>
                        <li onClick={() => handleClickToScroll("skills")} className="py-4 text-sm">Skills</li>
                        <li onClick={() => handleClickToScroll("projects")} className="py-4 text-sm">Projects</li>
                        <li onClick={() => handleClickToScroll("contact")} className="py-4 text-sm">Contact</li>
                    </ul>
                    <div className="pt-40">
                        <p className="uppercase tracking-widest text-purple-dark">Let&apos;s connect</p>
                        <div className="my-4 flex w-full items-center justify-between sm:w-[80%]">
                            <div className="header__mobile__icons">
                                <FaLinkedinIn />
                            </div>
                            <div className="header__mobile__icons">
                                <FaGithub />
                            </div>
                            <div className="header__mobile__icons">
                                <AiOutlineMail />
                            </div>
                            <div className="header__mobile__icons">
                                <BsFillPersonLinesFill />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}