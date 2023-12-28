"use client"

import ProjectCard from "./Projects/ProjectCard";
import { projectsData } from "@/constants";
import { useEffect, useRef } from "react";
import { useInView, useAnimation } from "framer-motion";
import { MotionDiv } from "./MotionDiv";


export default function Projects() {

    const ref = useRef(null)
    const isInView = useInView(ref, {once:true})

    const mainControls = useAnimation()

    useEffect(()=>{
        if(isInView){
            mainControls.start("visible")
        }
    },[isInView, mainControls])

    return (
        <section id="projects" className="scroll-mt-14 md:scroll-mt-8">
            <MotionDiv 
            variants={{
                hidden:{opacity:0},
                visible:{opacity:1}
            }} 
            initial="hidden"
            animate={mainControls}
            transition={{
                ease:"easeInOut"
            }}
            className="mx-auto max-w-[1240px] px-2 py-16">
                <p className="section__first__title">{projectsData.sectionTitle}</p>
                <h2 className="py-4">{projectsData.title}</h2>
                <div className="grid gap-8 md:grid-cols-2" ref={ref}>

                    {
                        projectsData.projects.map((project, index) =>(
                            <ProjectCard key={project.title} index={index} mainControls={mainControls} data={project} />
                        ))
                    }

                </div>
            </MotionDiv>
        </section>
    )
}