import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

  // --- All Refs ---
  const footerRef = useRef(null);
  const brandRef = useRef(null);

  const col1Ref = useRef(null);
  const col2Ref = useRef(null);
  const col3Ref = useRef(null);
  const col4Ref = useRef(null);

  const bottomRef = useRef(null);

  useGSAP(() => {

    // ================================

    // ================================
    // GRID COLUMNS — each one rises up
    // with a stagger delay so they come
    // in one after another left to right
    // ================================
    gsap.fromTo(
      [brandRef.current, col1Ref.current, col2Ref.current, col3Ref.current, col4Ref.current],
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,       // each column comes in 0.12s after the previous
        immediateRender: false,
        scrollTrigger: {
          trigger: col1Ref.current,
          start: "top 92%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // ================================
    // BOTTOM BAR — fades in last
    // ================================
    gsap.fromTo(bottomRef.current,
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: bottomRef.current,
          start: "top 98%",
          toggleActions: "play none none reverse",
        },
      }
    );

  }, { scope: footerRef });

  return (
    <footer
      ref={footerRef}
      className="w-full bg-linear-to-b from-[#0a0a0a] to-black text-white px-10 pt-20 pb-8"
    >

      {/* BRANDING & MIDDLE GRID */}
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

        {/* LEFT BRANDING */}
        <div ref={brandRef} className="lg:w-1/4 flex flex-col items-start">
          <div className="w-16 h-16 bg-[#0a0a0a] border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] rounded-2xl flex flex-col justify-center items-center mb-6 relative group overflow-hidden">
             <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <span className="text-xl font-black text-white leading-none flex">
               S<span className="text-white/50">P</span>
             </span>
          </div>
          <h2 className="text-xl font-black text-white">Satwik's <span className="text-white/80 font-bold">Portfolio</span></h2>
          <p className="text-[10px] tracking-[2px] text-white/50 uppercase mt-2 mb-5 font-semibold">Software Engineer</p>
          <p className="text-sm text-white/60 leading-relaxed pr-4">
            Building scalable, high-performance systems engineered to impress.
          </p>
        </div>

        {/* RIGHT LINKS GRID */}
        <div className="lg:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-10">

        <div ref={col1Ref}>
          <h2 className="text-sm tracking-widest text-white/50 mb-4">SOCIALS</h2>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="hover:text-white cursor-pointer transition">LinkedIn</li>
            <li className="hover:text-white cursor-pointer transition">GitHub</li>
            <li className="hover:text-white cursor-pointer transition">Twitter</li>
            <li className="hover:text-white cursor-pointer transition">Dribbble</li>
          </ul>
        </div>

        <div ref={col2Ref}>
          <h2 className="text-sm tracking-widest text-white/50 mb-4">EXPERIENCE</h2>
          <ul className="space-y-3 text-sm text-white/80">
            <li>Frontend Dev</li>
            <li>UI/UX Design</li>
            <li>Animations</li>
            <li>Web GL</li>
          </ul>
        </div>

        <div ref={col3Ref}>
          <h2 className="text-sm tracking-widest text-white/50 mb-4">NAVIGATE</h2>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="cursor-pointer hover:text-white transition">Home</li>
            <li className="cursor-pointer hover:text-white transition">Work</li>
            <li className="cursor-pointer hover:text-white transition">About</li>
            <li className="cursor-pointer hover:text-white transition">Contact</li>
          </ul>
        </div>

        <div ref={col4Ref}>
          <h2 className="text-sm tracking-widest text-white/50 mb-4">CONTACT</h2>
          <ul className="space-y-3 text-sm text-white/80">
            <li>hello@satwiksai.com</li>
            <li>+91 9876543210</li>
          </ul>
        </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div
        ref={bottomRef}
        className="flex flex-col md:flex-row justify-between items-center text-xs text-white/50 mt-10 border-t border-white/10 pt-6"
      >
        <p>© 2026 Satwik Sai. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;