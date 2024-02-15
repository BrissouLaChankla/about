import Image from "next/image"
export default function Experience({icon, title, startDate, endDate, description}) {
    return (
        <div className="p-8 border-2 border-gray-500 rounded-xl hover:bg-gray-800 transition hover:border-gray-800">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <Image src={`/assets/experiences/${icon}`} className="rounded-full" width={32} height={32} />
                    <h3 className="text-white">{title}</h3>
                </div>
                <div className="text-gray-300 font-semibold">
                    <time datetime="2018-07-07">{startDate}</time> - <time datetime="2018-07-07">{endDate}</time>
                </div>
            </div>
            <p className="text-gray-300 mt-7">{description}</p>
        </div>
    )
}
