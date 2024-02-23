import Image from "next/image";

export default function Project({ name, desc, link, illu, index, stacks }) {
    return (
        <div className="grid grid-cols-12 gap-8 md:gap-20 place-items-center">
            <a href={link} target="_blank" className={`col-span-12 md:col-span-6 relative h-96 w-full ${index % 2 === 0 ? "" : "md:order-last"}`}>
                <Image src={illu} fill  className="rounded-lg object-cover" />
            </a>
            <div className="col-span-12 md:col-span-6 flex flex-col items-start gap-7">
                <span className="text-white font-extrabold text-4xl">0{index + 1}</span>
                <h3 className="text-white">{name}</h3>

                <p>{desc}</p>

                <div className="flex gap-4 items-center text-white">
                    <a href={link} target="_blank" >
                        <Image src="/assets/icons/link.svg" width={20} height={20} />
                    </a>
                    <a href={link} target="_blank" >
                        <Image src="/assets/icons/github.svg" className="invert" width={20} height={20} />
                    </a> |
                    <div className="flex gap-2">
                        {stacks.map((stack, i) => <span key={i} className="whitespace-nowrap rounded-full bg-gray-200 px-2.5 py-0.5 text-xs text-black -my-2">{stack}</span>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
