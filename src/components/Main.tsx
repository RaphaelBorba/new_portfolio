import { mainData } from '@/constants'
import IconSection from './IconSection'

export default function Main() {

    return (
        <div id='main' className="h-screen w-full text-center">
            <div className="mx-auto flex h-full w-full max-w-[1240px] items-center justify-center p-2">
                <div>
                    <p className="text-sm uppercase tracking-widest text-gray-600">{mainData.smallTitle}</p>
                    <h1 className="py-4 text-gray-700">
                        {mainData.introdution}    <span className="text-purple-dark">{mainData.titleName}</span>
                    </h1>
                    <h1 className="py-4 text-gray-700">
                        {mainData.secondTitle}
                    </h1>
                    <p className="m-auto max-w-[70%] py-4 text-gray-600">
                        {mainData.description}
                    </p>
                    <IconSection padding='p-6' />
                </div>
            </div>
        </div>
    )
}