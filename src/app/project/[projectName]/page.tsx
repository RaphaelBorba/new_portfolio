import Image from "next/image";
import { RiRadioButtonFill} from "react-icons/ri"

interface IProps {
    params: any
}

export default function ProjectScreen({ params }: IProps) {


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
                    <h2 className="py-2">{"CARHUB"}</h2>
                    <h3>{"STACK"}</h3>
                </div>
            </div>
            <div className="mx-auto grid max-w-[1240px] gap-8 p-2 pt-8 md:grid-cols-5">
                <div className="col-span-4 ">
                    <p className="section__first__title">Project</p>
                    <h2>Overview</h2>
                    <p>{"TEXT"}</p>
                    <button className="mr-8 mt-4 px-8 py-2">Demo</button>
                    <button className="mt-4 px-8 py-2">Demo</button>
                </div>
            <div className="col-span-4 rounded-xl p-4 shadow-lg shadow-gray-400 md:col-span-1">
                <div className="p-2">
                    <p className="pb-2 text-center font-bold">Technologies</p>
                    <div className="grid-cols-3 md:grid-cols-1">
                        <p className="flex items-center py-2 text-gray-600"><RiRadioButtonFill className="pr-1"/>{"TECH"}</p>
                        <p className="flex items-center py-2 text-gray-600"><RiRadioButtonFill className="pr-1"/>{"TECH"}</p>
                        <p className="flex items-center py-2 text-gray-600"><RiRadioButtonFill className="pr-1"/>{"TECH"}</p>
                        <p className="flex items-center py-2 text-gray-600"><RiRadioButtonFill className="pr-1"/>{"TECH"}</p>
                        <p className="flex items-center py-2 text-gray-600"><RiRadioButtonFill className="pr-1"/>{"TECH"}</p>
                        <p className="flex items-center py-2 text-gray-600"><RiRadioButtonFill className="pr-1"/>{"TECH"}</p>
                        <p className="flex items-center py-2 text-gray-600"><RiRadioButtonFill className="pr-1"/>{"TECH"}</p>
                    </div>
                </div>

            </div>
            </div>
        </main>
    )
}