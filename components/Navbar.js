import Cta from "./Cta"

export default function Navbar() {
  return (
    <div className="w-full bg-white fixed z-40">
      <div className="max-w-7xl m-auto grid grid-cols-12 py-4 items-center">
        <div className="col-span-3">
          Logo ici
        </div>
        <nav className="col-span-6 flex justify-center gap-10 font-semibold">
          <a href="#about">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact Me</a>
        </nav>
        <div className="col-span-3 ms-auto">
          <Cta value="Resume" />
        </div>
      </div>

    </div>
  )
}
