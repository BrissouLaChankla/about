import Cta from "./Cta"
import Image from "next/image"

export default function Navbar() {
  return (
    <div className="w-full bg-white z-40">
      <div className="max-w-7xl m-auto grid grid-cols-12 py-4 items-center">
        <div className="col-span-3 flex items-center gap-1">
          <Image src="/apple-touch-icon.png" height={44 } width={44 }/>
          <a href="#" className="flex flex-col font-bold text-lg leading-none">
            <span>Brice</span>
            <span>Eliasse</span>
          </a>
          {/* Logo ici */}
        </div>
        <nav className="col-span-6 flex justify-center gap-10 font-semibold">
          <a href="#about">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact Me</a>
        </nav>
        <div className="col-span-3 ms-auto">
          <Cta value="Télécharger CV">  
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 11.5V12.5C16.5 13.9001 16.5 14.6002 16.2275 15.135C15.9878 15.6054 15.6054 15.9878 15.135 16.2275C14.6002 16.5 13.9001 16.5 12.5 16.5H5.5C4.09987 16.5 3.3998 16.5 2.86502 16.2275C2.39462 15.9878 2.01217 15.6054 1.77248 15.135C1.5 14.6002 1.5 13.9001 1.5 12.5V11.5M13.1667 7.33333L9 11.5M9 11.5L4.83333 7.33333M9 11.5V1.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </Cta>
        </div>
      </div>
    </div>
  )
}
