"use client"
import { skillsData, variants } from "@/constants";
import SkillCard from "./Skills/SkillCard";
import { MotionDiv } from "./MotionDiv";
import { useEffect, useRef } from "react";
import { useInView, useAnimation } from "framer-motion";

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
        <section id="skills" className="w-full scroll-mt-24 p-2 md:scroll-mt-20 lg:h-screen">
            <MotionDiv 
            variants={variants} 
            initial="hidden"
            animate={mainControls}
            transition={{
                ease:"easeInOut"
            }}
            className="mx-auto flex h-full max-w-[1240px] flex-col justify-center">
                <p  className="section__first__title">{skillsData.sectionTitle}</p>
                <h2 className="py-4">{skillsData.title}</h2>
                <div ref={ref} className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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