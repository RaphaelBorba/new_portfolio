import Image from "next/image";
import Link from "next/link";

interface IProps {
    data: {
        title: string;
        stack: string;
        imgPath: string;
        pagePath:string;
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
            <div className="project__card__info__box group-hover:block">
                <h3 className="text-center text-2xl tracking-wider text-white">{data.title}</h3>
                <p className="pb-4 pt-2 text-center text-white">{data.stack}</p>
                <Link href={`/project/${data.pagePath}`}>
                    <p className="project__card__info__button">More Info</p>
                </Link>
            </div>
        </div>
    )
}