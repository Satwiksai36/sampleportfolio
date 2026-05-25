import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = ["Frontend", "Animation", "Backend & Tools", "Design"];

const skillsData = {
  Frontend: [
    { name: "React.js", icon: "ri-reactjs-line", level: 92, color: "#61dafb" },
    { name: "Next.js", icon: "ri-nextjs-line", level: 88, color: "#ffffff" },
    { name: "TypeScript", icon: "ri-code-s-slash-line", level: 80, color: "#3178c6" },
    { name: "Tailwind CSS", icon: "ri-layout-grid-line", level: 95, color: "#38bdf8" },
    { name: "HTML5", icon: "ri-html5-line", level: 98, color: "#e34c26" },
    { name: "CSS3", icon: "ri-css3-line", level: 93, color: "#264de4" },
  ],
  Animation: [
    { name: "GSAP", icon: "ri-magic-line", level: 90, color: "#88ce02" },
    { name: "Framer Motion", icon: "ri-film-line", level: 85, color: "#ff4d4d" },
    { name: "Three.js", icon: "ri-earth-line", level: 75, color: "#ffffff" },
    { name: "ScrollTrigger", icon: "ri-scroll-to-bottom-line", level: 88, color: "#88ce02" },
  ],
  "Backend & Tools": [
    { name: "Node.js", icon: "ri-server-line", level: 70, color: "#68a063" },
    { name: "Git & GitHub", icon: "ri-git-branch-line", level: 88, color: "#f05032" },
    { name: "MongoDB", icon: "ri-database-2-line", level: 65, color: "#47a248" },
    { name: "Vite", icon: "ri-flashlight-line", level: 90, color: "#bd34fe" },
    { name: "Firebase", icon: "ri-fire-line", level: 72, color: "#ffca28" },
    { name: "Vercel", icon: "ri-cloud-line", level: 92, color: "#ffffff" },
  ],
  Design: [
    { name: "Figma", icon: "ri-pen-nib-line", level: 78, color: "#f24e1e" },
    { name: "VS Code", icon: "ri-code-box-line", level: 97, color: "#007acc" },
    { name: "Postman", icon: "ri-send-plane-line", level: 75, color: "#ff6c37" },
  ],
};



// Circular progress SVG
const CircleProgress = ({ level, color }) => {
  const r = 28;
  const circ = 2 * Math.PI * r;
  const dash = (level / 100) * circ;
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" className="-rotate-90">
      <circle cx="36" cy="36" r={r} fill="none" stroke="rgba(0,0,0,0.07)" strokeWidth="5" />
      <circle
        cx="36" cy="36" r={r} fill="none"
        stroke={color} strokeWidth="5"
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap="round"
        style={{ transition: "stroke-dasharray 1.2s ease" }}
      />
    </svg>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const tabsRef = useRef(null);
  const gridRef = useRef(null);

  useGSAP(() => {
    gsap.from(headerRef.current, {
      scrollTrigger: { trigger: headerRef.current, start: "top 82%" },
      y: 70,
      opacity: 0,
      duration: 1.1,
      ease: "power3.out",
    });

    gsap.from(tabsRef.current, {
      scrollTrigger: { trigger: tabsRef.current, start: "top 85%" },
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      ease: "power2.out",
    });

    gsap.from(gridRef.current, {
      scrollTrigger: { trigger: gridRef.current, start: "top 85%" },
      y: 40,
      opacity: 0,
      duration: 0.9,
      delay: 0.35,
      ease: "power2.out",
    });

  }, []);

  // Animate grid cards whenever tab changes
  const handleTab = (cat) => {
    setActiveTab(cat);
    gsap.fromTo(
      ".skill-card",
      { y: 20, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.45, stagger: 0.06, ease: "back.out(1.6)" }
    );
  };

  const currentSkills = skillsData[activeTab];

  return (
    <section id="skills" ref={sectionRef} className="bg-[#fafafa] pt-32 pb-32 px-6 md:px-20 relative overflow-hidden">
      {/* Background Typography */}
      <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-black/3 pointer-events-none uppercase tracking-tighter whitespace-nowrap z-0">
        SKILLS
      </h1>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-black/3 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Header ───────────────────────────── */}
        <div ref={headerRef} className="flex flex-col items-center text-center gap-4 mb-14">
          <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter leading-none">
            Tools of{" "}
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2px rgba(0,0,0,0.75)" }}
            >
              the trade.
            </span>
          </h2>
          <p className="text-black/70 text-sm leading-relaxed max-w-sm mt-4">
            Technologies and libraries I use to build scalable, high-performance web applications.
          </p>
        </div>

        {/* ── Category Tabs ──────────────────────── */}
        <div ref={tabsRef} className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleTab(cat)}
              className={`text-xs font-black uppercase tracking-[3px] px-6 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${activeTab === cat
                ? "bg-black text-white border-black"
                : "border-black/15 text-black/50 hover:border-black/40 hover:text-black/80"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Skills Grid ───────────────────────── */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
        >
          {currentSkills.map((skill) => (
            <div
              key={skill.name}
              className="skill-card group flex flex-col items-center gap-3 bg-black/5 border border-black/10 rounded-2xl py-7 px-4 hover:border-black/20 hover:bg-black/10 transition-all duration-400 cursor-default"
            >
              {/* Circular ring */}
              <div className="relative">
                <CircleProgress level={skill.level} color={skill.color} />
                <i
                  className={`${skill.icon} text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black/60 group-hover:text-black transition-colors duration-300`}
                />
              </div>
              <div className="text-center">
                <p className="text-black/70 text-xs font-bold leading-tight mb-1 group-hover:text-black/90 transition-colors duration-300">
                  {skill.name}
                </p>
                <p className="text-[10px] font-black" style={{ color: skill.color }}>
                  {skill.level}%
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
