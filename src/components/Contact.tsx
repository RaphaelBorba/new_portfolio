"use client"
import { handleScroll } from "@/utils";
import Image from "next/image";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import contactImage from '../../public/contact.jpg'
import IconSection from "./IconSection";
import { FormEvent } from "react";



export default function Contact() {

    const handleForm = (e:FormEvent) => {
        e.preventDefault()
    }

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
                                <IconSection padding="p-4" />
                            </div>
                        </div>
                    </div>
                    {/* RIGHT */}

                    <div className="col-span-3 h-auto w-full rounded-xl shadow-xl shadow-gray-400 lg:p-4">
                        <div className="p-4">
                            <form onSubmit={handleForm} >
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
                                <button className="button_gradiant mt-4 w-full p-4 text-gray-100">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center pt-12">

                    <div
                        onClick={() => handleScroll("main")}
                        className="page__icons p-6 text-purple-dark">
                        <HiOutlineChevronDoubleUp size={23} />
                    </div>

                </div>
            </div>
        </section>
    )
}