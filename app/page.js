import Image from "next/image";
import Link from "next/link";
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
    <main className=" min-h-screen pt-6 md:pt-24">
      <div className="grid grid-cols-12 items-center">
        <div className="col-span-12 md:col-span-6 relative min-h-56 md:min-h-96 md:order-1">
          <Image src="/assets/illustrations/hero.svg" fill  />
        </div>

        <div className="max-w-[750px] flex flex-col col-span-12 md:col-span-6">
          <div className="my-8 md:my-14">
            <h1>Hey, je suis <span className="font-extrabold"> Brice Eliasse.
              un développeur</span> <span>Fullstack </span>
              Basé à <span className="font-extrabold">Nice.</span>
            </h1>
            <p className="mt-6">Avec {new Date().getFullYear() - 2017} années d'expérience, j'ai acquis une expertise solide dans la création de sites web et d'applications.


              C'est pour ça que depuis quelque années, en plus de développer, j'enseigne le code en école supérieure et en bootcamp à Nice.

              {/* J'aime la simplicité et l'efficacité, je vois le code comme un outil me permettant de donner vie à des projets auxquels je crois. */}

            </p>
          </div>
          <div className="flex gap-5 ">
            {socials.map((social, i) => <IconSocial key={i} {...social} />)}
          </div>
        </div>

      </div>

      <div id="skills" className="mt-24">
        <h2 className="text-center">Mes <span className="font-extrabold">Skills</span></h2>
        <div className="grid grid-cols-12 lg:grid-cols-5 gap-x-6 gap-y-6 md:gap-x-16 md:gap-y-12 mt-16">
          {skills.map((skill, i) =>
            <div key={i} className="col-span-6 md:col-span-4 lg:col-span-1 h-48 border-2 border-black grid place-items-center rounded hover:bg-black group transition">
              <div className="group-hover:invert transition flex flex-col gap-5 items-center">
                <Image src={`/assets/icons/skills/${skill.icon}`} alt={skill.name} width={50} height={50} />
                <span className="font-bold text-xl">{skill.name}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-black py-20 max-w-full mt-20">
        <div className="max-w-7xl m-auto">
          <h2 className="text-center text-white">Mon <span className="font-extrabold">Experience</span></h2>
          <div className="mt-20 flex flex-col gap-6">
            {experiences.map((xp, i) => <Experience key={i} {...xp} />)}
          </div>
        </div>
      </div>


      <div id="about" className="mt-20">
        <div className="grid grid-cols-12 md:gap-10">
          <div className="col-span-12 md:col-span-6 relative h-80 md:h-96">
            <Image src="/assets/illustrations/about.svg" fill className="object-fill" />
          </div>
          <div className="col-span-12 md:col-span-6">
            <h2>A <span className="font-extrabold">Propos</span></h2>
            <div className="flex flex-col gap-6 mt-10">

              <p>I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
              <p>I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>

            </div>
          </div>
        </div>
      </div>


      <div className="bg-black py-20 max-w-full mt-20" id="project">
        <div className="max-w-7xl m-auto">
          <h2 className="text-center text-white">Mes <span className="font-extrabold">Projets</span></h2>
          <div className="mt-20 flex flex-col gap-12 md:gap-24">
            {projects.map((xp, i) => <Project key={i} index={i} {...xp} />)}
          </div>
          <div className="text-end text-white mt-16">
            <Link href="projects">Voir tous mes projets →</Link>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-center">Vos <span className="font-extrabold">Retours</span></h2>
        <div className="grid grid-cols-12 gap-6 mt-20">
          {testimonials.map((testimonial, i) =>
            <Testimonial className="col-span-12 md:col-span-4" key={i} index={i} {...testimonial} />)}
        </div>
      </div>

      <div className="mt-28 grid grid-cols-12 gap-6 md:gap-20 items-center" id="contact">
        <div className="col-span-12 md:col-span-6 flex flex-col gap-8 mb-6 md:order-1">
          <h2 className="font-extrabold max-w-sm">J'ai déjà hâte qu'on travaille ensemble</h2>
          <p>Si vous cherchez un <strong>développeur web Freelance situé à Nice</strong> pour votre projet ou si vous souhaitez simplement discuter, n'hésitez pas à me contacter.</p>
          <a href="mailto:hello@brice-eliasse.com" className="font-bold text-2xl">hello@brice-eliasse.com</a>
        </div>
        <div className="col-span-12 md:col-span-6 ">
          <Form />
        </div>
      </div>

    </main>
  );
}
