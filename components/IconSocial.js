import Image from "next/image"
export default function IconSocial({ icon, link }) {
    return (
        <a href={link} target="_blank" className="border-2 border-black grid place-items-center rounded w-12 h-12 hover:bg-black group transition">
            <Image src={`/assets/icons/${icon}`} width={18} height={18} className="group-hover:invert transition" />
        </a>
    )
}
