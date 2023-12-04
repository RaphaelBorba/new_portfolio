import Image from "next/image";
import Link from "next/link";
import ProjectCard from "./Projects/ProjectCard";
import { projectsInfos } from "@/constants";



export default function Projects() {

    return (
        <section>
            <div className="mx-auto max-w-[1240px] px-2 py-16">
                <p className="section__first__title">Projects</p>
                <h2 className="py-4">What I Have Built</h2>
                <div className="grid gap-8 md:grid-cols-2">

                    {
                        projectsInfos.map((project) =>(
                            <ProjectCard key={project.title} data={project} />
                        ))
                    }

                </div>
            </div>
        </section>
    )
}