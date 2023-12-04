import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

export default function Main() {

    return (
        <div className="h-screen w-full text-center">
            <div className="mx-auto flex h-full w-full max-w-[1240px] items-center justify-center p-2">
                <div>
                    <p className="text-sm uppercase tracking-widest text-gray-600">Lets do somithing</p>
                    <h1 className="py-4 text-gray-700">
                        Hi, I&apos;m    <span className="text-purple-dark">Raphael</span>
                    </h1>
                    <h1 className="py-4 text-gray-700">
                        A Full-Stack Web Developer
                    </h1>
                    <p className="m-auto max-w-[70%] py-4 text-gray-600">
                        I am a full-stack web developer specializing in building web sites!
                    </p>
                    <div className="m-auto flex max-w-[330px] items-center justify-between py-4">
                        <div className='main__icons'>
                            <FaLinkedinIn size={20} />
                        </div>
                        <div className='main__icons'>
                            <FaGithub size={20} />
                        </div>
                        <div className='main__icons'>
                            <AiOutlineMail size={20} />
                        </div>
                        <div className='main__icons'>
                            <BsFillPersonLinesFill size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}