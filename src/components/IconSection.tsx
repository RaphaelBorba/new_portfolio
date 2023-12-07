"use client"
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

interface IProps {
    padding: "p-4" | "p-6" | "p-3"
}

export default function IconSection({ padding }: IProps) {

    return (
        <div className="m-auto flex max-w-[330px] items-center justify-between py-4">

            <a href="https://www.linkedin.com/in/raphael-borba/" target='_blank' >
                <div className={`page__icons ${padding}`}>
                    <FaLinkedinIn size={20} />
                </div>
            </a>
            <a href="https://github.com/RaphaelBorba" target='_blank'>
                <div className={`page__icons ${padding}`}>
                    <FaGithub size={20} />
                </div>
            </a>
                <div
                    onClick={() => {
                        navigator.clipboard.writeText("raphaelbsx@gmail.com")
                        window.alert("Email copied!")
                    }}
                    className={`page__icons ${padding}`}>
                    <AiOutlineMail size={20} />
                </div>
        </div>
    )
}