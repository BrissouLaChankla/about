import Image from "next/image"

export default function SideMenu(props) {
    return (
        <div className="flex h-screen flex-col justify-between border-e bg-white">
            <div className="p-4">
                <div className="flex items-center justify-between">
                    <span className="h-10 w-32 flex">
                        <Image src="/apple-touch-icon.png" height={44} width={44} className="h-9 md:h-11 object-contain" />
                        <a href="/" className="flex pt-[2.5px] flex-col font-bold text-sm leading-tight md:text-lg md:leading-none">
                            <span>Brice</span>
                            <span>Eliasse</span>
                        </a>
                    </span>
                    <Image src="/assets/icons/cross.svg" height={35} width={35} className="cursor-pointer" onClick={() => props.closeSide()} />

                </div>
                <ul className="mt-6 space-y-1">
                    <li>
                        <a
                            href="#about"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            A propos
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            href="#project"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            Projets
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            Contact
                        </a>
                    </li>

                </ul>
            </div>

            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">

                <a href="mailto:hello@brice-eliasse.com" className="flex items-center gap-4 bg-white p-4 hover:bg-gray-50">
                    <Image src="/assets/illustrations/head.svg" height={30} width={30} />

                    <div>
                        <p className="text-xs">
                            <strong className="block font-medium">Brice Eliasse</strong>

                            <span> hello@brice-eliasse.com </span>
                        </p>
                    </div>
                </a>
            </div>
        </div>
    )
}
