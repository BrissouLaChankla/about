import Image from "next/image";
import IconSocial from "@/components/IconSocial";

// Data
import skills from '@/data/skills'
import socials from '@/data/socials'
import experiences from '@/data/experiences'
import projects from '@/data/projects'
import testimonials from '@/data/testimonials'


import Experience from "@/components/Experience";
import Project from "@/components/Project";
import Testimonial from "@/components/Testimonial";
import Form from "@/components/Form";

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

      <div id="skills" className="mt-24">
        <h2 className="text-center">My <span className="font-extrabold">Skills</span></h2>
        <div className="grid grid-cols-5 gap-x-16 gap-y-12 mt-16">
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

      <div className="bg-black py-20 max-w-full mt-20">
        <div className="max-w-7xl m-auto">
          <h2 className="text-center text-white">My <span className="font-extrabold">Experience</span></h2>
          <div className="mt-20 flex flex-col gap-6">
            {experiences.map((xp, i) => <Experience key={i} {...xp} />)}
          </div>
        </div>
      </div>


      <div id="about" className="mt-20">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-6 relative">
            <Image src="/assets/illustrations/about.svg" fill objectFit="contain" />
          </div>
          <div className="col-span-6">
            <h2>About <span className="font-extrabold">Me</span></h2>
            <div className="flex flex-col gap-6 mt-10">

              <p>I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
              <p>I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>

            </div>
          </div>
        </div>
      </div>


      <div className="bg-black py-20 max-w-full mt-20">
        <div className="max-w-7xl m-auto">
          <h2 className="text-center text-white">My <span className="font-extrabold">Projects</span></h2>
          <div className="mt-20 flex flex-col gap-24">
            {projects.map((xp, i) => <Project key={i} index={i} {...xp} />)}
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-center">My <span className="font-extrabold">Testimonial</span></h2>
        <div className="grid grid-cols-3 gap-6 mt-20">
          {testimonials.map((testimonial, i) => 
          <Testimonial key={i} index={i} {...testimonial} />)}
        </div>
      </div>

      <div className="mt-20 grid grid-cols-12 gap-10">
        <div className="col-span-6">
          <Form />
        </div>
        <div className="col-span-6 flex flex-col gap-10">
          <h2 className="font-extrabold max-w-sm">Let's talk for Something Special</h2>
          <p>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
              <a href="mailto:hello@brice-eliasse.com" className="font-bold text-2xl">hello@brice-eliasse.com</a>
        </div>

      </div>

    </main>
  );
}
