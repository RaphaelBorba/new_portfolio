"use client"
import { variants } from "@/constants";
import { MotionDiv } from "./MotionDiv";
import { useEffect, useRef } from "react";
import { useInView, useAnimation } from "framer-motion";
import { aboutData } from "@/constants";
import Image from "next/image";

export default function About() {

    const ref = useRef(null)
    const isInView = useInView(ref)

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }), [isInView]

    return (
        <section id="about" className="flex w-full scroll-mt-10 items-center p-2 py-16 md:h-screen">
            <MotionDiv
                variants={variants}
                initial="hidden"
                animate={mainControls}
                transition={{
                    ease: "easeInOut",
                    duration: 1.5
                }}
                className="m-auto max-w-[1240px] grid-cols-3 gap-8 md:grid">
                <div ref={ref} className="col-span-2">
                    <p className="section__first__title">{aboutData.sectionTitle}</p>
                    <h2 className="py-4 ">{aboutData.title}</h2>
                    <p className="section__p">{aboutData.firstText}</p>
                    <p className="section__p">{aboutData.secondText}</p>
                    <p className="section__p">{aboutData.thirdText}</p>
                </div>
                <div
                    className="m-auto flex h-auto w-full items-center justify-center rounded-xl p-4 shadow-xl shadow-gray-400 duration-300 ease-in hover:scale-105"
                >
                    <Image
                        src="/about.jpg"
                        alt="about"
                        width={400}
                        height={500}
                        className="rounded-xl"
                    />
                </div>
            </MotionDiv>
        </section>
    )
}