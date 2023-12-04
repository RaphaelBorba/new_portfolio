import Image from "next/image";

interface IProps {
    tech: string;
    path: string;
}

export default function SkillCard({ path, tech }: IProps) {

    return (
        <div key={tech} className="rounded-xl p-6 shadow-xl duration-200 ease-in hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
                <div className="m-auto">
                    <Image
                        alt={tech}
                        src={path}
                        width={64}
                        height={64}
                    />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h3>{tech}</h3>
                </div>
            </div>
        </div>
    )
}