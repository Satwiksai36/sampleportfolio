import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    institution: "Your University Name",
    year: "2021 – 2025",
    grade: "CGPA: 8.5 / 10",
    icon: "ri-graduation-cap-fill", // Fallback icon
    image: "", // Add your university logo path here, e.g., "/images/uni-logo.png"
    accent: "#ffffff",
    current: true,
    description:
      "Focused on software engineering, data structures, and full-stack web development. Active member of the coding club and web-dev society.",
  },
  {
    degree: "Higher Secondary (12th)",
    field: "Mathematics, Physics & Computer Science",
    institution: "Your School Name",
    year: "2019 – 2021",
    grade: "Score: 92%",
    icon: "ri-book-open-line", // Fallback icon
    image: "", // Add your high school logo path here
    accent: "rgba(255,255,255,0.6)",
    current: false,
    description:
      "Strong foundation in analytical thinking and problem solving through rigorous study of Mathematics and Physics.",
  },
  {
    degree: "Secondary (10th)",
    field: "Science & Mathematics",
    institution: "Your School Name",
    year: "2019",
    grade: "Score: 95%",
    icon: "ri-award-line", // Fallback icon
    image: "", // Add your secondary school logo path here
    accent: "rgba(255,255,255,0.35)",
    current: false,
    description:
      "Developed a love for computing and logical reasoning. Participated in district-level science olympiad.",
  },
];



const Education = () => {
  const titleRef   = useRef(null);
  const lineRef    = useRef(null);
  const cardRefs   = useRef([]);

  useGSAP(() => {
    // Header
    gsap.from(titleRef.current, {
      scrollTrigger: { trigger: titleRef.current, start: "top 85%" },
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Timeline line grows down
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0, transformOrigin: "top center" },
      {
        scrollTrigger: { trigger: lineRef.current, start: "top 80%", end: "bottom 70%", scrub: 1 },
        scaleY: 1,
        ease: "none",
      }
    );

    // Education cards
    cardRefs.current.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 88%" },
        x: -50,
        opacity: 0,
        duration: 0.85,
        delay: i * 0.12,
        ease: "power3.out",
      });
    });

  }, []);

  return (
    <section
      id="education"
      className="bg-[#050505] pt-32 pb-12 px-6 md:px-20 relative overflow-hidden"
    >
      {/* Background Typography */}
      <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[16vw] font-black text-white/3 pointer-events-none uppercase tracking-tighter whitespace-nowrap z-0">
        EDUCATION
      </h1>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/2.5 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-20 right-0 w-[300px] h-[300px] bg-white/1.5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Header ─────────────────────────────── */}
        <div ref={titleRef} className="mb-20 flex flex-col items-center text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
            Academic{" "}
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2px rgba(255,255,255,0.65)" }}
            >
              Background.
            </span>
          </h2>
        </div>

        {/* ── Timeline ──────────────────────────── */}
        <div className="relative mb-8 md:ml-24">
          {/* Vertical line */}
          <div
            ref={lineRef}
            className="absolute left-[47px] top-0 bottom-0 w-px bg-linear-to-b from-white/30 via-white/15 to-transparent"
          />

          <div className="flex flex-col gap-10 pl-24">
            {educationData.map((edu, i) => (
              <div
                key={i}
                ref={(el) => (cardRefs.current[i] = el)}
                className="relative group"
              >
                {/* Timeline dot */}
                <div
                  className="absolute -left-[58px] top-8 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 group-hover:scale-125"
                  style={{
                    borderColor: edu.accent,
                    backgroundColor: edu.current ? edu.accent : "transparent",
                  }}
                >
                  {edu.current && <div className="w-2 h-2 rounded-full bg-[#080808]" />}
                </div>

                {/* Year label beside dot */}
                <span className="absolute right-full mr-[80px] top-8 text-[12px] tracking-[2px] font-bold text-white hidden md:block whitespace-nowrap text-right">
                  {edu.year}
                </span>

                {/* Card */}
                <div
                  className={`rounded-2xl border p-7 transition-all duration-500 hover:scale-[1.01] ${
                    edu.current
                      ? "bg-white/8 border-white/20 hover:border-white/40"
                      : "bg-white/3 border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex items-start gap-5">
                      {/* Logo or Icon bubble */}
                      {edu.image ? (
                        <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/10 flex items-center justify-center shrink-0 border border-white/20 transition-all duration-300 group-hover:scale-110">
                          <img src={edu.image} alt={edu.institution} className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                          style={{ backgroundColor: `${edu.accent}15`, border: `1px solid ${edu.accent}30` }}
                        >
                          <i className={`${edu.icon} text-xl`} style={{ color: edu.accent }} />
                        </div>
                      )}

                      <div>
                        {edu.current && (
                          <span className="inline-flex items-center gap-1.5 bg-white/10 text-white/60 text-[9px] tracking-[3px] uppercase font-black px-2.5 py-1 rounded-full mb-2">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                            Current
                          </span>
                        )}
                        <h3 className="text-white font-black text-lg tracking-tight leading-tight">
                          {edu.degree}
                        </h3>
                        <p className="text-white/55 text-sm mt-1">{edu.field}</p>
                        <p className="text-white/30 text-[10px] tracking-widest uppercase mt-1.5 font-semibold">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    {/* Grade + year (mobile shows year here) */}
                    <div className="shrink-0 text-right">
                      <span className="text-white/25 text-[10px] tracking-[3px] uppercase font-bold block md:hidden">
                        {edu.year}
                      </span>
                      <span
                        className="font-black text-base block mt-1"
                        style={{ color: edu.accent }}
                      >
                        {edu.grade}
                      </span>
                    </div>
                  </div>

                  <p className="text-white/40 text-sm leading-relaxed mt-5 border-t border-white/8 pt-5">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default Education;
