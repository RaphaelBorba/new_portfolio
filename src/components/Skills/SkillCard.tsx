import Image from "next/image";
import { MotionDiv } from "../MotionDiv";
import { AnimationControls } from "framer-motion";
import { variants } from "@/constants";

interface IProps {
    tech: string;
    imgPath: string;
    index:number;
    mainControls?: AnimationControls
}

export default function SkillCard({ imgPath,mainControls, tech,index }: IProps) {

    return (
        <MotionDiv
            variants={variants}
            initial="hidden"
            animate={mainControls}
            transition={{
                delay: index*0.2,
                ease: "easeInOut",
                duration: 0.3
            }}
            viewport={{ amount: 0 }}
            className="rounded-xl p-6 shadow-xl duration-200 ease-in hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
                <div className="m-auto">
                    <Image
                        alt={tech}
                        src={imgPath}
                        width={64}
                        height={64}
                    />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h3>{tech}</h3>
                </div>
            </div>
        </MotionDiv>
    )
}