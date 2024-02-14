import Image from "next/image";

export default function Project({ name, desc, link, illu, index }) {
    return (
        <div className="grid grid-cols-12 gap-20 place-items-center">
            <div className={`col-span-6 relative h-96 w-full ${index%2 === 0 ? "": "order-last"}`}>
                <Image src={illu} fill objectFit="cover" className="rounded-lg" />
            </div>
            <div className="col-span-6 flex flex-col items-start gap-7">
                <span className="text-white font-extrabold text-4xl">0{index+1}</span>
                <h3 className="text-white">{name}</h3>
                <p>{desc}</p>
                <a href={link} target="_blank" >
                    <Image src="/assets/icons/link.svg" width={20} height={20} />
                </a>
            </div>
        </div>
    )
}
