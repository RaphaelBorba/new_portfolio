"use client"
import { skillsData } from "@/constants";
import SkillCard from "./Skills/SkillCard";
import { useEffect, useRef } from "react";
import { useInView, useAnimation } from "framer-motion";
import { MotionDiv } from "./MotionDiv";

export default function Skills() {

    const ref = useRef(null)
    const isInView = useInView(ref, {once:true})

    const mainControls = useAnimation()

    useEffect(()=>{
        if(isInView){
            mainControls.start("visible")
        }
    }),[isInView]

    return (
        <section ref={ref} id="skills" className="w-full scroll-mt-24 p-2 md:scroll-mt-20 lg:h-screen">
            <MotionDiv 
            variants={{
                hidden:{opacity:0},
                visible:{opacity:1}
            }} 
            initial="hidden"
            animate={mainControls}
            transition={{delay:0.5}}
            className="mx-auto flex h-full max-w-[1240px] flex-col justify-center">
                <p className="section__first__title">{skillsData.sectionTitle}</p>
                <h2 className="py-4">{skillsData.title}</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {
                        skillsData.skills.map((skill, index) => (
                            <SkillCard key={skill.tech} mainControls={mainControls} index={index} imgPath={skill.path} tech={skill.tech} />
                        ))
                    }
                </div>
            </MotionDiv>
        </section>
    )
}