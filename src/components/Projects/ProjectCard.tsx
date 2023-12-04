import Image from "next/image";
import Link from "next/link";

interface IProps {
    data: {
        title: string;
        stack: string;
        imgPath: string;
    }
}

export default function ProjectCard({ data }: IProps) {

    return (

        <div className="projects__card group">
            <Image
                alt={data.title}
                src={data.imgPath}
                width={600}
                height={600}
                className="rounded-xl group-hover:opacity-10"
            />
            <div className="absolute left-[50%] top-[50%] hidden translate-x-[-50%] translate-y-[-50%] group-hover:block">
                <h3 className="text-center text-2xl tracking-wider text-white">{data.title}</h3>
                <p className="pb-4 pt-2 text-center text-white">{data.stack}</p>
                <Link href="/">
                    <p className="cursor-pointer rounded-lg bg-white py-3 text-center text-lg font-bold text-gray-700">More Info</p>
                </Link>
            </div>
        </div>
    )
}