import { skillsInfos } from "@/constants";
import SkillCard from "./Skills/SkillCard";


export default function Skills() {

    return (
        <section id="skills" className="w-full scroll-mt-24 p-2 md:scroll-mt-0 lg:h-screen">
            <div className="mx-auto flex h-full max-w-[1240px] flex-col justify-center">
                <p className="section__first__title">Skills</p>
                <h2 className="py-4">What I Can Do</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {
                        skillsInfos.map((skill) => (
                            <SkillCard key={skill.tech} path={skill.path} tech={skill.tech} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}