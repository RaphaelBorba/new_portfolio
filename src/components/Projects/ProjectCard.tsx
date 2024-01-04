import { AnimationControls } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MotionDiv } from "../MotionDiv";
import { variants } from "@/constants";

interface IProps {
    data: {
        title: string;
        mainStack: string;
        imgPath: string;
        pagePath:string;
    },
    index:number,
    mainControls:AnimationControls
}

export default function ProjectCard({ data, index, mainControls }: IProps) {

    return (

        <MotionDiv 
        variants={variants}
            initial="hidden"
            animate={mainControls}
            transition={{
                delay: index*0.5,
                ease: "easeInOut",
                duration: 0.7
            }}
            viewport={{ amount: 0 }}
        className="projects__card group">
            <Image
                alt={data.title}
                src={data.imgPath}
                width={600}
                height={600}
                className="rounded-xl transition duration-200 group-hover:opacity-10"
            />
            <div className="project__card__info__box group-hover:opacity-100">
                <h3 className="text-center text-2xl tracking-wider text-white">{data.title}</h3>
                <p className="pb-4 pt-2 text-center text-white">{data.mainStack}</p>
                <Link href={`/project/${data.pagePath}`}>
                    <p className="project__card__info__button">More Info</p>
                </Link>
            </div>
        </MotionDiv>
    )
}