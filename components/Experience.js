import Image from "next/image"
export default function Experience() {
    return (
        <div className="p-8 border-2 border-gray-500 rounded-xl hover:bg-gray-800 transition hover:border-gray-800">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-7">
                    <Image src="/assets/icons/github.svg" className="invert" width={32} height={32} />
                    <h3 className="text-white">Lead Software Engineer at Google</h3>
                </div>
                <div className="text-gray-300 font-semibold">
                    <time datetime="2018-07-07">July 7</time> - <time datetime="2018-07-07">July 7</time>
                </div>
            </div>
            <p className="text-gray-300 mt-7">As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p>
        </div>
    )
}
