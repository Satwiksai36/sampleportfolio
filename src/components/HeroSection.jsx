import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

const HeroSection = ({ isLoaded }) => {

  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const projectRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const badgesRef = useRef(null);
  const dividerRef = useRef(null);
  const platformRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    if (!isLoaded) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // --- LEFT SIDE: slides in from left first ---
    tl.from(leftRef.current, {
      x: -80,
      opacity: 0,
      duration: 1,
    }, 0);

    // --- TITLE: drops down with a slight overshoot ---
    tl.from(titleRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.9,
      ease: "back.out(1.4)",
    }, 0.1);

    // --- SUBTITLE: rises up ---
    tl.from(subtitleRef.current, {
      y: 25,
      opacity: 0,
      duration: 0.7,
    }, 0.35);

    // --- DIVIDER LINE: width expands from 0 ---
    tl.from(dividerRef.current, {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 0.8,
      ease: "power2.inOut",
    }, 0.5);





    // --- RIGHT SIDE: slides in from right ---
    tl.from(rightRef.current, {
      x: 80,
      opacity: 0,
      duration: 0.9,
    }, 0.2);

    // --- PROJECT IMAGE: dramatic entrance from right with rotation ---
    tl.from(projectRef.current, {
      x: 900,
      opacity: 0,
      scale: 0.75,
      rotation: 20,
      duration: 1.4,
      ease: "expo.out",
    }, 0.3);

    // --- PLATFORM ELLIPSES: fade in after image lands ---
    tl.from(platformRef.current, {
      opacity: 0,
      scale: 0.5,
      transformOrigin: "center center",
      duration: 0.6,
      ease: "power2.out",
    }, 1.4);

    // --- SCROLL INDICATOR: fades in last ---
    tl.from(scrollIndicatorRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.6,
    }, 1.6);

    // --- IMAGE: infinite float after landing ---
    gsap.to(projectRef.current, {
      y: -18,
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1.8,
    });

    // --- PLATFORM: subtle pulse in sync with image float ---
    gsap.to(platformRef.current, {
      scaleX: 0.85,
      opacity: 0.5,
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1.8,
    });

  }, [isLoaded]);


  // --- Showcase change animation ---
  const animateProjectChange = (newIndex) => {
    const imageEl = projectRef.current;

    // Phase 1: current image flies out to the left
    gsap.to(imageEl, {
      x: -300,
      opacity: 0,
      scale: 0.8,
      rotation: -10,
      duration: 0.45,
      ease: "power2.in",
      onComplete: () => {

        // Switch project after it exits
        setCurrentIndex(newIndex);

        // Phase 2: new image flies in from the right
        gsap.fromTo(imageEl,
          { x: 400, opacity: 0, scale: 0.8, rotation: 15 },
          { x: 0, opacity: 1, scale: 1, rotation: 0, duration: 0.7, ease: "expo.out" }
        );
      },
    });
  };

  const nextSlide = () => {
    animateProjectChange((currentIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    animateProjectChange(currentIndex === 0 ? projects.length - 1 : currentIndex - 1);
  };


  const projects = [
    {
      role: "Creative Developer",
      projectType: "3D E-Commerce",
      image: "/images/creative.png",
      bg: "from-[#2b2b2b] via-[#121212] to-[#000000]",
      status: "Available For Hire",
      rotate: "0deg",
      scale: 1,
    },
    {
      role: "Frontend Engineer",
      projectType: "Web 3.0 Platform",
      image: "/images/frontend.png",
      bg: "from-[#1a3a2a] via-[#0d2116] to-[#041b12]",
      status: "Actively Building",
      rotate: "0deg",
      translateY: "0px",
      scale: 1,
    },
    {
      role: "UI/UX Specialist",
      projectType: "Saas Dashboard",
      image: "/images/ui-ux.png",
      bg: "from-[#4a1c1c] via-[#2a0e0e] to-[#120000]",
      status: "Open Source",
      rotate: "0deg",
      scale: 1,
    },
  ];

  return (
    <div
      ref={containerRef}
      className={`w-full h-screen rounded-b-4xl bg-linear-to-br ${projects[currentIndex].bg} ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transition-colors duration-700 relative flex items-center justify-between px-10 overflow-hidden`}
    >

      {/* ================= LEFT CONTENT ================= */}
      <div ref={leftRef} className="max-w-[550px] z-10 mt-20">

        <h1 ref={titleRef} className="text-[64px] font-extrabold text-white leading-[1.1] tracking-[-1.5px]">
          Crafting Digital<br />
          <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.7)" }}>
            Experiences
          </span> that inspire.
        </h1>

        <h2 ref={subtitleRef} className="text-3xl font-bold tracking-[8px] uppercase text-white mt-12">
          {projects[currentIndex].role}
        </h2>

        {/* Divider  */}
        <div
          ref={dividerRef}
          className="h-[2px] w-82 mt-3"
          style={{ background: "linear-gradient(to right, #fff, transparent)" }}
        />


      </div>


      {/* ================= CENTER SLIDER ================= */}
      <div
        ref={projectRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[420px] flex items-center justify-center pointer-events-none overflow-hidden rounded-2xl"
        style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.7)" }}
      >
        <img
          src={projects[currentIndex].image}
          alt={projects[currentIndex].projectType}
          className="w-full h-full object-cover"
        />
        {/* Gradient vignette on photo edges */}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

        <svg
          ref={platformRef}
          className="absolute top-full -translate-y-6"
          width="500"
          height="80"
          viewBox="0 0 500 80"
        >
          <ellipse cx="250" cy="40" rx="200" ry="35"
            fill="none" stroke="rgba(255,255,255,0.3)"
            strokeWidth="2" strokeDasharray="5,5"
          />
          <ellipse cx="250" cy="40" rx="180" ry="30"
            fill="none" stroke="rgba(255,255,255,0.15)"
            strokeWidth="1"
          />
        </svg>
      </div>


      {/* ================= RIGHT CONTENT ================= */}
      <div ref={rightRef} className="flex flex-col gap-8 items-end z-10">

        <div className="backdrop-blur-md border mt-10 border-white/20 rounded-2xl p-6 min-w-[280px]">
          <p className="flex items-center gap-2 text-[12px] font-bold tracking-[3px] uppercase text-white/80 mb-4">
            <span className="w-2 h-2 rounded-full bg-white block" />
            Currently Exploring
          </p>
          <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">{projects[currentIndex].projectType}</h3>

          <p className="flex items-center gap-2 text-[12px] font-bold tracking-[3px] uppercase text-white/80 mb-4">
            <span className="w-2 h-2 rounded-full bg-white block" />
            Tech Stack Map
          </p>
          <div className="flex flex-wrap gap-2 max-w-[240px]">
            {['React', 'Next.js', 'Tailwind', 'GSAP', 'Framer', 'Three.js'].map((tech) => (
              <span key={tech} className="border border-white/30 text-white/70 text-xs px-3 py-1.5 rounded-full hover:bg-white hover:text-black transition cursor-pointer">
                {tech}
              </span>
            ))}
          </div>
        </div>



        <a
          href="/resume.pdf"
          download="Satwik_Sai_Resume.pdf"
          className="flex items-center mt-10 gap-4 bg-white/15 border border-white/30 rounded-full p-2 px-6 hover:bg-white/25 transition-all duration-300 cursor-pointer no-underline"
        >
          <span className="flex items-center gap-2 bg-white text-black text-[12px] font-extrabold tracking-[2px] uppercase py-3 px-6 rounded-full hover:shadow-lg transition duration-300">
            <i className="ri-download-2-line text-sm" />
            Download Resume
          </span>
          <span className="text-white text-[14px] font-black tracking-[1px] uppercase mr-2">
            PDF
          </span>
        </a>
      </div>


      {/* ================= SCROLL INDICATOR ================= */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-30"
      >
        <span className="text-white/50 text-xs uppercase tracking-widest">Scroll Down</span>
        <div className="w-px h-8 bg-linear-to-b from-white/50 to-transparent" />
      </div>


      {/* ================= ARROWS ================= */}
      <button
        onClick={prevSlide}
        className="absolute left-[35%] top-[80%] z-50 -translate-y-1/2 text-white text-4xl cursor-pointer bg-white/10 hover:bg-white/20 px-3 py-2 rounded-full transition-all duration-300 hover:scale-110"
      >
        <i className="ri-arrow-left-s-line" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-[35%] top-[80%] z-50 -translate-y-1/2 text-white text-4xl cursor-pointer bg-white/10 hover:bg-white/20 px-3 py-2 rounded-full transition-all duration-300 hover:scale-110"
      >
        <i className="ri-arrow-right-s-line" />
      </button>

    </div>
  );
};

export default HeroSection;
