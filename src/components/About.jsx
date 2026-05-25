import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const traits = [
  { icon: "ri-code-s-slash-line", label: "Clean Code" },
  { icon: "ri-magic-line", label: "Animations" },
  { icon: "ri-layout-4-line", label: "UI Design" },
  { icon: "ri-speed-line", label: "Performance" },
  { icon: "ri-smartphone-line", label: "Responsive" },
  { icon: "ri-open-source-line", label: "Open Source" },
];



const About = () => {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const traitRefs = useRef([]);
  const avatarRef = useRef(null);

  useGSAP(() => {
    // Avatar card entrance
    gsap.from(avatarRef.current, {
      scrollTrigger: { trigger: avatarRef.current, start: "top 85%" },
      x: -60,
      opacity: 0,
      duration: 1.1,
      ease: "power3.out",
    });

    // Badge
    gsap.from(badgeRef.current, {
      scrollTrigger: { trigger: badgeRef.current, start: "top 85%" },
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    // Title
    gsap.from(titleRef.current, {
      scrollTrigger: { trigger: titleRef.current, start: "top 85%" },
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.1,
      ease: "power3.out",
    });

    // Text block
    gsap.from(textRef.current, {
      scrollTrigger: { trigger: textRef.current, start: "top 88%" },
      y: 30,
      opacity: 0,
      duration: 0.9,
      delay: 0.2,
      ease: "power3.out",
    });

    // Trait chips
    traitRefs.current.forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 92%" },
        scale: 0.7,
        opacity: 0,
        duration: 0.5,
        delay: i * 0.07,
        ease: "back.out(2)",
      });
    });

  }, []);

  return (
    <section id="about" ref={sectionRef} className="bg-white py-32 px-6 md:px-20 relative overflow-hidden min-h-screen flex items-center">
      {/* Background Typography */}
      <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-black/3 pointer-events-none uppercase tracking-tighter whitespace-nowrap z-0">
        ABOUT
      </h1>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-black/2 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-[-60px] w-[350px] h-[350px] bg-black/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Section badge ─────────────────────── */}
        <div ref={badgeRef} className="mb-14">
          <span className="inline-flex items-center gap-2 border border-black/15 text-black/50 text-[10px] tracking-[5px] uppercase font-bold px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 bg-black/40 rounded-full" />
            01 / About Me
          </span>
        </div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-20 items-start">
          {/* ── LEFT column ───────────────────────── */}
          <div className="flex flex-col gap-10">
            {/* Avatar card */}
            <div
              ref={avatarRef}
              className="relative rounded-3xl overflow-hidden border border-black/10 bg-linear-to-br from-black/5 to-transparent group"
              style={{ height: "380px" }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-white/90 via-white/40 to-transparent z-10" />

              {/* Initials avatar */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-36 h-36 rounded-full bg-black/5 border border-black/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <span className="text-6xl font-black text-black/80 tracking-tighter">SS</span>
                </div>
              </div>

              {/* Bottom name card */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-7">
                <h3 className="text-black font-black text-2xl tracking-tight">Satwik Sai</h3>
                <p className="text-black/50 text-sm mt-1 font-medium">Creative Frontend Developer</p>
                <div className="flex gap-2 mt-3">
                  {["React", "GSAP", "Three.js"].map((tag) => (
                    <span key={tag} className="bg-black/5 text-black/60 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-black/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner glow */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-black/5 rounded-full blur-2xl group-hover:bg-black/10 transition-all duration-500" />
            </div>

            {/* Traits grid */}
            <div className="grid grid-cols-3 gap-3">
              {traits.map((t, i) => (
                <div
                  key={t.label}
                  ref={(el) => (traitRefs.current[i] = el)}
                  className="flex flex-col items-center gap-2 bg-black/5 border border-black/10 rounded-xl py-4 px-2 hover:bg-black/10 hover:border-black/20 transition-all duration-300 cursor-default group"
                >
                  <i className={`${t.icon} text-xl text-black/40 group-hover:text-black transition-colors duration-300`} />
                  <span className="text-black/40 text-[10px] font-bold uppercase tracking-widest group-hover:text-black/80 transition-colors duration-300">
                    {t.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT column ─────────────────────── */}
          <div className="flex flex-col gap-8">
            {/* Headline */}
            <div ref={titleRef}>
              <h2 className="text-5xl md:text-6xl font-black text-black/90 tracking-tighter leading-[1.05] mb-6">
                Crafting Digital{" "}
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1px rgba(0,0,0,0.35)" }}
                >
                  Experiences.
                </span>
              </h2>
            </div>

            {/* Text */}
            <div ref={textRef} className="flex flex-col gap-5 text-black/60 text-base leading-relaxed">
              <p>
                Hi, I'm{" "}
                <span className="text-black font-bold">Satwik Sai</span> — a creative frontend
                developer passionate about turning ideas into beautifully crafted digital products.
                I specialize in building modern, responsive, and highly interactive web experiences.
              </p>
              <p>
                From sleek landing pages to complex SaaS dashboards, I bring together design
                sensibility and technical precision. I love working at the intersection of
                animation, 3D, and clean UI — using tools like{" "}
                <span className="text-black font-semibold">GSAP, Three.js &amp; Framer Motion</span>{" "}
                to make the web feel alive.
              </p>
              <p>
                When I'm not coding, I'm exploring new design trends, contributing to open source,
                or sketching out the next big idea.
              </p>
            </div>

            {/* CTA row */}
            <div className="flex gap-4 flex-wrap">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-black text-white font-black uppercase tracking-[3px] text-xs px-7 py-3.5 rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.2)] transition-all duration-300"
              >
                Hire Me
              </a>
              <a
                href="/resume.pdf"
                download="Satwik_Sai_Resume.pdf"
                className="border border-black/20 text-black font-bold uppercase tracking-[2px] text-xs px-7 py-3.5 rounded-full hover:bg-black/5 hover:border-black/40 transition-all duration-300 flex items-center gap-2"
              >
                <i className="ri-download-2-line" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
