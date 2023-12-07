"use client"
import { handleScroll } from "@/utils";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import contactImage from '../../public/contact.jpg'



export default function Contact() {

    return (
        <section id="contact" className="w-full scroll-mt-10 lg:h-screen">
            <div className="m-auto w-full max-w-[1240px] px-2 py-16">
                <p className="section__first__title">Contact</p>
                <h2 className="py-4">Get In Touch</h2>
                <div className="grid gap-8 lg:grid-cols-5">
                    {/* LEFT */}
                    <div className="col-span-3 h-full w-full rounded-xl p-4 shadow-xl shadow-gray-400 lg:col-span-2">
                        <div className="h-full lg:p-4">
                            <div>
                                <Image
                                    alt="contact"
                                    src={contactImage}

                                    className="rounded-xl duration-200 ease-in hover:scale-105"
                                />
                            </div>
                            <div>
                                <h2 className="py-2">Raphael Borba</h2>
                                <p>Full-Stack Developer</p>
                                <p className="py-4">I am available for freelance or full-time positions. Contact me let&lsquo;s talk!</p>
                            </div>
                            <div>
                                <p className="pt-8 uppercase">Connect With Me</p>
                                <div className="flex max-w-[330px] items-center justify-between py-4">
                                    <div className='contact__icons'>
                                        <FaLinkedinIn size={20} />
                                    </div>
                                    <div className='contact__icons'>
                                        <FaGithub size={20} />
                                    </div>
                                    <div className='contact__icons'>
                                        <AiOutlineMail size={20} />
                                    </div>
                                    <div className='contact__icons'>
                                        <BsFillPersonLinesFill size={20} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* RIGHT */}

                    <div className="col-span-3 h-auto w-full rounded-xl shadow-xl shadow-gray-400 lg:p-4">
                        <div className="p-4">
                            <form >
                                <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                                    <div className="flex flex-col">
                                        <label htmlFor="name" className="py-2 text-sm uppercase">Name</label>
                                        <input type="text" id="name" className="flex rounded-lg border-2 border-gray-300 p-3" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="phone" className="py-2 text-sm uppercase">Phone Number</label>
                                        <input type="text" id="phone" className="flex rounded-lg border-2 border-gray-300 p-3" />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="py-2 text-sm uppercase">Email</label>
                                    <input type="email" id="email" className="flex rounded-lg border-2 border-gray-300 p-3" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="subject" className="py-2 text-sm uppercase">subject</label>
                                    <input type="text" id="subject" className="flex rounded-lg border-2 border-gray-300 p-3" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="message" className="py-2 text-sm uppercase">Message</label>
                                    <textarea rows={10} id="message" className="rounded-lg border-2 border-gray-300 p-3" />
                                </div>
                                <button className="mt-4 w-full p-4 text-gray-100">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center pt-12">

                    <div
                        onClick={() => handleScroll("main")}
                        className="contact__icons text-purple-dark">
                        <HiOutlineChevronDoubleUp size={23} />
                    </div>

                </div>
            </div>
        </section>
    )
}