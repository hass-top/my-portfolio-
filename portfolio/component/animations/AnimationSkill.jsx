"use client";
import { FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
export default function AnimationSkill() {

const skills = [
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "next.js", icon: <JsIcon /> }, 
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Python", icon: <FaPython /> },
   



 

];
  const ribbon = Array(11).fill(skills).flat();
  return (
    <>
    <div className=" h-64 flex items-center justify-center">
      <div className="overflow-hidden max-auto w-9/12 bg-black py-5 border border-zinc-800 border-3 border-solid rounded-xl ">
        <div className="flex w-max animate-scroll gap-8">
          {ribbon.map((skill, i) => (
            <div
              key={i}
              className="mx-8 text-4xl text-white shrink-0 flex items-center justify-center gap-4"
            >
              {skill.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="py-12 mt-8">
      <div className="flex flex-wrap items-center justify-center gap-6 max-w-5xl mx-auto px-4">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="group flex items-center gap-4 px-6 py-3 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-2xl hover:border-white/20 transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)]"
          >
            <div className="text-2xl text-white/70 group-hover:text-white transition-colors duration-300 flex items-center justify-center">
              {skill.icon}
            </div>
            <span className="text-lg font-semibold tracking-wide text-white/70 group-hover:text-white transition-colors duration-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
</>

  );
}



const JsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="1em" height="1em">
    <mask height="180" id=":r8:mask0_408_134" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: "alpha" }}>
       <circle cx="90" cy="90" fill="black" r="90"></circle>
    </mask>
    <g mask="url(#:r8:mask0_408_134)">
      <circle cx="90" cy="90" data-circle="true" fill="currentColor" r="90"></circle>
      <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#:r8:paint0_linear_408_134)"></path>
      <rect fill="url(#:r8:paint1_linear_408_134)" height="72" width="12" x="115" y="54"></rect>
    </g>
    <defs>
      <linearGradient gradientUnits="userSpaceOnUse" id=":r8:paint0_linear_408_134" x1="109" x2="144.5" y1="116.5" y2="160.5">
        <stop stopColor="black"></stop>
        <stop offset="1" stopColor="black" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id=":r8:paint1_linear_408_134" x1="121" x2="120.799" y1="54" y2="106.875">
        <stop stopColor="black"></stop>
        <stop offset="1" stopColor="black" stopOpacity="0"></stop>
      </linearGradient>
    </defs>
  </svg>


);
