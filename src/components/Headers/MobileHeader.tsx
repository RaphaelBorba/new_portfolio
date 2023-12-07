import Image from "next/image";
import { AiOutlineClose } from 'react-icons/ai'
import Link from "next/link";
import IconSection from "../IconSection";

export default function MobileHeader({ nav, handleNav }: { nav: boolean, handleNav: () => void }) {

    return (
        <div className={nav ? "header__mobile" : ""}>
            <div
                className={nav ? "header__mobile__box"
                    : "fixed left-[-100%] top-0 p-10  duration-500 ease-in"}>
                <div>
                    <div className="flex w-full items-center justify-between">
                        <Link href="/#main">
                            <Image
                                onClick={handleNav}
                                alt="logo"
                                src="/rb.png"
                                width={85}
                                height={85}
                            />
                        </Link>
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
                        <Link href="/#main">
                            <li onClick={handleNav} className="py-4 text-sm">Home</li>
                        </Link>
                        <Link href="/#about">
                            <li onClick={handleNav} className="py-4 text-sm">About</li>
                        </Link>
                        <Link href="/#skills">
                            <li onClick={handleNav} className="py-4 text-sm">Skills</li>
                        </Link>
                        <Link href="/#projects">
                            <li onClick={handleNav} className="py-4 text-sm">Projects</li>
                        </Link>
                        <Link href="/#contact">
                            <li onClick={handleNav} className="py-4 text-sm">Contact</li>
                        </Link>
                    </ul>
                    <div className="pt-40">
                        <p className="uppercase tracking-widest text-purple-dark">Let&apos;s connect</p>
                        <IconSection padding="p-3" />
                    </div>
                </div>
            </div>
        </div>
    )
}