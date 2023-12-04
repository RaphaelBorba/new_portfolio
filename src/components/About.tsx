import Image from "next/image";




export default function About() {

    return (
        <section className="flex w-full items-center p-2 py-16 md:h-screen">
            <div className="m-auto max-w-[1240px] grid-cols-3 gap-8 md:grid">
                <div className="col-span-2">
                    <p className="section__first__title">About</p>
                    <h2 className="py-4 ">How I am</h2>
                    <p className="section__p">asdqweqweasdqweasdqweasdqweasd</p>
                    <p className="section__p">asdawqweweqweqwe</p>
                    <p className="section__p">easdasdqweqweqweqwe</p>
                    <p className="section__p cursor-pointer underline">asasdqweqweqeqweqwe</p>
                </div>
                <div
                    className="m-auto flex h-auto w-full items-center justify-center rounded-xl p-4 shadow-xl shadow-gray-400 duration-300 ease-in hover:scale-105"
                >
                    <Image
                        src="/about.jpg"
                        alt="about"
                        width={400}
                        height={500}
                        className="rounded-xl"
                    />
                </div>
            </div>
        </section>
    )
}