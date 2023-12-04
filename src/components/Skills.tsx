import { routesImages } from "@/constants";
import SkillCard from "./SkillCard";


export default function Skills() {

    return (
        <section className="w-full p-2 lg:h-screen">
            <div className="mx-auto flex h-full max-w-[1240px] flex-col justify-center">
                <p className="section__first__title">Skills</p>
                <h2 className="py-4">What I can do</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {
                        routesImages.map((skill) => (
                            <SkillCard key={skill.tech} path={skill.path} tech={skill.tech} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}