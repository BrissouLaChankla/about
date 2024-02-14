import Image from "next/image"
export default function Testimonial({ avatar, text, name, job, index }) {
  const even = index % 2 !== 0;

  return (
    <div className={`rounded-2xl shadow-xl p-10 text-center flex flex-col items-center justify-between gap-6 ${even ? "bg-black text-white" : ""}`}>
      <div className="relative">
        <Image src={avatar} width={96} height={96} className="rounded-full border-2 border-black" quality={100} />
        <Image src={"/assets/icons/quote.svg"} width={30} height={30} className="absolute right-0 bottom-0" />
      </div>
      <p className={` ${even ? "text-white" : "text-neutral"}`}>{text}</p>
      <div className="flex flex-col gap-4 items-center">
        <div className={`border-b-2 ${even ? "border-white" : "border-black"}  w-24`}></div>
        <span className={`font-semibold ${even ? "text-white" : "text-neutral"}`}>{name}</span>
        <span className={`font-semibold ${even ? "text-white" : "text-gray-500"}`}>{job}</span>
      </div>
    </div>
  )
}
