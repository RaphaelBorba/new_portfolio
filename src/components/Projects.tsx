import ProjectCard from "./Projects/ProjectCard";
import { projectsData } from "@/constants";



export default function Projects() {

    return (
        <section id="projects" className="scroll-mt-14 md:scroll-mt-8">
            <div className="mx-auto max-w-[1240px] px-2 py-16">
                <p className="section__first__title">{projectsData.sectionTitle}</p>
                <h2 className="py-4">{projectsData.title}</h2>
                <div className="grid gap-8 md:grid-cols-2">

                    {
                        projectsData.projects.map((project) =>(
                            <ProjectCard key={project.title} data={project} />
                        ))
                    }

                </div>
            </div>
        </section>
    )
}