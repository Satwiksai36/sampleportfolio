import React, { useState } from "react";

const projects = [
  {
    id: "01",
    category: "E-Commerce",
    name: ["Project", "Alpha"],
    description:
      "A high-performance e-commerce platform built for scale. Featuring seamless 3D product previews, instant cart updates, and a fully custom payment flow using Next.js and Stripe. Designed to maximize conversion with micro-interactions.",
    image: "/images/tempo-sole.png",
    alt: "Project Alpha",
    watermark: "ALPHA",
    tags: [
      { name: "Next.js", color: "text-[#ffffff] border-[#ffffff]/30" },
      { name: "Vercel", color: "text-[#facc15] border-[#facc15]" },
      { name: "E-Commerce", color: "text-[#60a5fa] border-[#60a5fa]" },
    ],
    buttons: ["View Live", "GitHub"],
    imageLeft: false,
  },
  {
    id: "02",
    category: "SaaS Platform",
    name: ["Funnel", "Dash"],
    description:
      "A powerful analytics dashboard for modern marketing teams. Built with React and Recharts, it features real-time data synchronization, dark/light modes, and an intuitive drag-and-drop widget system for personalized tracking.",
    image: "/images/tempo-2.png",
    alt: "FunnelDash",
    watermark: "DASH",
    tags: [
      { name: "React", color: "text-[#38bdf8] border-[#38bdf8]" },
      { name: "Budgeting", color: "text-[#ef4444] border-[#ef4444]" },
      { name: "Analytics", color: "text-[#a855f7] border-[#a855f7]" },
    ],
    buttons: ["View Live", "Case Study"],
    imageLeft: true,
  },
  {
    id: "03",
    category: "Agency Portfolio",
    name: ["Creative", "Studio"],
    description:
      "An award-winning agency website focusing on smooth scroll-triggered animations and WebGL experiences. Developed using Three.js and GSAP to deliver a memorable visual journey that pushes the boundaries of web design.",
    image: "/images/tempo-3.png",
    alt: "Creative Studio",
    watermark: "STUDIO",
    tags: [
      { name: "Three.js", color: "text-[#a3e635] border-[#a3e635]" },
      { name: "GSAP", color: "text-[#4ade80] border-[#4ade80]" },
      { name: "WebGL", color: "text-[#f472b6] border-[#f472b6]" },
    ],
    buttons: ["View Live", "GitHub"],
    imageLeft: false,
  },
];

const Projects = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + projects.length) % projects.length);
  const next = () => setCurrent((c) => (c + 1) % projects.length);

  const p = projects[current];

  return (
    <div className="min-h-screen w-screen rounded-t-4xl bg-[#0a0a0a] flex flex-col">

      {/* Header */}
      <div className="w-full max-w-7xl mx-auto px-10 md:px-20 pt-32 pb-12 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 border border-white/15 text-white/40 text-[10px] tracking-[5px] uppercase font-bold px-4 py-2 rounded-full mb-6">
          <i className="ri-folder-add-line" />
          03 / Projects
        </span>
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
          Featured{" "}
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "2px rgba(255,255,255,0.65)" }}
          >
            Projects.
          </span>
        </h2>
      </div>

      {/* Carousel */}
      <div className="flex-1 w-full flex items-center relative overflow-hidden min-h-[70vh]">

        {/* Background watermark */}
        <h1
          className={`absolute ${p.imageLeft ? "right-0" : "left-0"} top-1/2 -translate-y-1/2 text-[15vw] font-black text-white/5 pointer-events-none uppercase tracking-tighter transition-all duration-500`}
        >
          {p.watermark}
        </h1>

        {/* Left Arrow */}

        {/* Right Arrow */}

        {/* Project Slide */}
        <div
          key={current}
          className={`w-full flex items-center ${p.imageLeft ? "flex-row-reverse" : ""} animate-fade px-20`}
        >
          {/* Image */}
          <div className="w-[50%] flex items-center justify-center">
            <img
              className="max-h-[60vh] drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              src={p.image}
              alt={p.alt}
            />
          </div>

          {/* Info */}
          <div className={`w-[50%] flex flex-col justify-center ${p.imageLeft ? "pr-16" : "pl-16"}`}>
            <h4 className="text-sm font-bold tracking-[5px] text-white/40 uppercase mb-4">
              {p.id} / {p.category}
            </h4>
            <div>
              {p.name.map((word, i) => (
                <h1 key={i} className="text-[5rem] leading-none uppercase text-white font-black tracking-tighter">
                  {word}
                </h1>
              ))}
            </div>
            
            {/* Colorful Tags */}
            {p.tags && (
              <div className="flex flex-wrap gap-3 mt-6">
                {p.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[1px] uppercase border bg-transparent ${tag.color}`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            )}

            <p className="font-medium text-white/60 w-[85%] leading-relaxed mt-6 text-lg">
              {p.description}
            </p>
            <div className="mt-8 flex gap-4">
              {p.buttons.map((label, i) => (
                <button
                  key={i}
                  className={`px-8 py-3 font-bold uppercase tracking-widest text-xs rounded-full transition ${i === 0
                      ? "bg-white text-black hover:bg-neutral-200"
                      : "bg-transparent border border-white/20 text-white hover:bg-white/5"
                    }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Controls: Arrows + Dots */}
      <div className="w-full flex items-center justify-center gap-4 pt-2 pb-6">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
        >
          <i className="ri-arrow-left-s-line text-lg" />
        </button>

        {/* Dot Indicators */}
        <div className="flex gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/30"
                }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
        >
          <i className="ri-arrow-right-s-line text-lg" />
        </button>
      </div>
    </div>
  );
};

export default Projects;
