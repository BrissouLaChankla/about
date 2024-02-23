"use client"
import Cta from "./Cta"
import Image from "next/image"
import { useState } from "react"
import Burger from "./Burger"
import SideMenu from "./SideMenu"

export default function Navbar() {

  const [isOpen, setOpen] = useState(false);

  isOpen ? document.body.style.overflow= "hidden" : document.body.style.overflow= "visible";

  const toggleOpen = () => {
    setOpen(!isOpen);
  }


  return (
    <div className="w-full bg-white z-40 navbar overflow-hidden relative">
      {isOpen ?
        <SideMenu toggleOpen={toggleOpen} /> :
        <div className="max-w-7xl m-auto grid grid-cols-12 py-4 items-center">
          <div className="col-span-10 md:col-span-3 flex items-center md:gap-1">
            <Image src="/apple-touch-icon.png" height={44} width={44} className="h-9 md:h-11 object-contain" />
            <a href="/" className="flex pt-[2.5px] flex-col font-bold text-sm leading-tight md:text-lg md:leading-none">
              <span>Brice</span>
              <span>Eliasse</span>
            </a>
          </div>
          <nav className="col-span-6 hidden md:flex justify-center gap-6 lg:gap-10 font-semibold  ">
            <a href="#about">About Me</a>
            <a href="#skills">Skills</a>
            <a href="#project">Project</a>
            <a href="#contact">Contact Me</a>
          </nav>
          <div className="col-span-2 md:col-span-3 ms-auto">
            <span className="hidden md:block">
              <Cta value="Télécharger CV">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5 11.5V12.5C16.5 13.9001 16.5 14.6002 16.2275 15.135C15.9878 15.6054 15.6054 15.9878 15.135 16.2275C14.6002 16.5 13.9001 16.5 12.5 16.5H5.5C4.09987 16.5 3.3998 16.5 2.86502 16.2275C2.39462 15.9878 2.01217 15.6054 1.77248 15.135C1.5 14.6002 1.5 13.9001 1.5 12.5V11.5M13.1667 7.33333L9 11.5M9 11.5L4.83333 7.33333M9 11.5V1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Cta>
            </span>
          </div>

        </div>
      }
      <Burger toggleOpen={toggleOpen} isOpen={isOpen} />
    </div>
  )
}
