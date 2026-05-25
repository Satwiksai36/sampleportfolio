import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    year: "2024 – Present",
    role: "Senior Frontend Developer",
    company: "Freelance / Remote",
    desc: "Building high-performance, animated web experiences for clients worldwide. Specializing in React, Next.js, GSAP, and Three.js — delivering premium UI/UX from concept to deployment.",
    tags: ["React", "Next.js", "GSAP", "Three.js"],
    color: "from-white/10 to-white/5",
  },
  {
    year: "2023 – 2024",
    role: "UI/UX Developer",
    company: "Creative Agency",
    desc: "Led the frontend architecture for multiple client projects, building scroll-triggered animations and interactive data dashboards. Collaborated with design teams to translate Figma prototypes into pixel-perfect code.",
    tags: ["Figma", "Tailwind CSS", "Framer Motion", "React"],
    color: "from-white/10 to-white/5",
  },
  {
    year: "2022 – 2023",
    role: "Junior Web Developer",
    company: "Startup Studio",
    desc: "Worked on product landing pages, SaaS dashboards, and e-commerce storefronts. Gained deep experience with performance optimization, accessibility, and responsive layouts.",
    tags: ["HTML/CSS", "JavaScript", "Tailwind", "Vite"],
    color: "from-white/10 to-white/5",
  },
];

const Experience = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      scrollTrigger: { trigger: titleRef.current, start: "top 85%" },
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    cardsRef.current.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 85%" },
        x: i % 2 === 0 ? -60 : 60,
        opacity: 0,
        duration: 0.9,
        delay: i * 0.1,
        ease: "power3.out",
      });
    });
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="min-h-screen bg-[#0a0a0a] py-32 px-6 md:px-20"
    >
      {/* Header */}
      <div ref={titleRef} className="mb-20">
        <p className="text-white/40 text-xs tracking-[5px] uppercase font-bold mb-4">
          03 / Journey
        </p>
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
          Work <br />
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}
          >
            Experience.
          </span>
        </h2>
        <p className="mt-6 text-white/50 text-base max-w-lg leading-relaxed">
          A track record of shipping high-quality products and collaborative
          work across agencies, startups, and freelance projects.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

        <div className="flex flex-col gap-12">
          {experiences.map((exp, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Dot on line */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#0a0a0a] z-10" />

              {/* Card */}
              <div
                className={`md:w-[45%] ${
                  i % 2 !== 0 ? "md:ml-auto" : "md:mr-auto"
                } bg-linear-to-br ${exp.color} backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-500 group`}
              >
                <span className="text-white/30 text-xs tracking-[4px] uppercase font-bold">
                  {exp.year}
                </span>
                <h3 className="text-white text-2xl font-black mt-3 mb-1 tracking-tight">
                  {exp.role}
                </h3>
                <p className="text-white/50 text-sm font-semibold uppercase tracking-widest mb-4">
                  {exp.company}
                </p>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {exp.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/20 text-white/50 group-hover:border-white/40 group-hover:text-white/70 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
