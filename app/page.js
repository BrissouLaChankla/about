import Image from "next/image";
import IconSocial from "@/components/IconSocial";

// Data
import skills from '@/data/skills'
import socials from '@/data/socials'
import experiences from '@/data/experiences'


import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className=" min-h-screen pt-24">
      <div className="grid grid-cols-12 ">
        <div className="max-w-[750px] flex flex-col col-span-6">
          <div className="my-16">
            <h1>Hello I'm <span className="font-extrabold"> Brice Eliasse.
              Fullstack</span> <span> Developer </span>
              Based In <span className="font-extrabold">France.</span>
            </h1>
            <p className="mt-6">I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
          </div>
          <div className="flex gap-5 ">
            {socials.map((social, i) => <IconSocial key={i} {...social} />)}
          </div>
        </div>
        <div className="col-span-6 relative">
          <Image src="/assets/illustrations/hero.svg" fill />
        </div>
      </div>

      <div id="skills">
        <h2>My Skills</h2>
        <div className="grid grid-cols-5 gap-x-16 gap-y-12">
          {skills.map((skill, i) =>
            <div key={i} className="col-span-1 h-48 border-2 border-black grid place-items-center rounded hover:bg-black group transition">
              <div className="group-hover:invert transition flex flex-col gap-5 items-center">
                <Image src={`/assets/icons/${skill.icon}`} width={50} height={50} />
                <span className="font-bold text-xl">{skill.link}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-black py-20 max-w-full">
        <div className="max-w-7xl m-auto">
          <h2 className="text-center text-white">My <span className="font-bold">Experience</span></h2>
          <div className="mt-20 flex flex-col gap-6">
            {experiences.map((xp, i) => <Experience key={i} {...xp} />)}

          </div>
        </div>
      </div>
    </main>
  );
}
