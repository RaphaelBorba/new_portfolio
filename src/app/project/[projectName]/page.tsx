"use client"
import { projectsData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiRadioButtonFill } from "react-icons/ri"

interface IProps {
    params: any
}

interface IProject {
    title: string;
    mainStack: string;
    imgPath: string;
    pagePath: string;
    pageDetails: {
        description: string;
        linkDeploy: string;
        linkRepo: string;
        stack: string[];
    }
}

export default function ProjectScreen({ params }: IProps) {

    const [project, setProject] = useState<IProject | undefined>(undefined)

    useEffect(() => {
        setProject(projectsData.projects.find((value) => value.pagePath === params.projectName))
    }, [params])

    return (
        <main className="w-full">
            <div className="relative h-[30vh] w-screen px-10 lg:h-[40vh]">
                <div className="absolute left-0 top-0 z-10 h-[30vh] w-full bg-black/80 lg:h-[40vh]" />
                <Image
                    src={`/projects/${params.projectName}.png`}
                    alt="projectImage"
                    fill
                    objectFit="cover"
                    className="absolute z-[1]"
                />
                <div className=" absolute inset-x-[50%] top-[70%] z-20 w-full max-w-[1240px] translate-x-[-50%] translate-y-[-50%] p-2 text-white">
                    <h2 className="py-2">{project?.title}</h2>
                    <h3>{project?.mainStack}</h3>
                </div>
            </div>
            <div className="mx-auto grid max-w-[1240px] gap-4 p-2 py-8 md:grid-cols-5">
                <div className="col-span-4 ">
                    <p className="section__first__title">Project</p>
                    <h2>Overview</h2>
                    <div className="mt-4 flex flex-col gap-4" dangerouslySetInnerHTML={{ __html: project?.pageDetails.description! }} />
                    <div className="flex flex-row gap-4">
                        <a href={project?.pageDetails.linkDeploy} target="_blank">
                            <button
                                className="mt-4 rounded-xl bg-purple-dark px-8 py-2 text-xl font-semibold uppercase text-white transition hover:bg-purple-600">
                                Demo
                            </button>
                        </a>
                        <a href={project?.pageDetails.linkRepo} target="_blank">
                            <button
                                className="mt-4 rounded-xl bg-purple-dark px-8 py-2 text-xl font-semibold uppercase text-white transition hover:bg-purple-600">
                                Repository
                            </button>
                        </a>
                    </div>

                </div>
                <div className="col-span-4 my-8 rounded-xl p-4 shadow-lg shadow-gray-400 md:col-span-1 md:my-0">
                    <div className="p-2">
                        <p className="pb-2 text-center font-bold">Technologies</p>
                        <div className="grid-cols-3 md:grid-cols-1">
                            {
                                project?.pageDetails.stack.map((value, index) => (
                                    <p
                                        key={index}
                                        className="flex items-center py-2 text-gray-600"
                                    >
                                        <RiRadioButtonFill className="pr-1" />
                                        {value}
                                    </p>
                                ))
                            }

                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}