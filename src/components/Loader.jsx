import React, { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Loader = ({ onComplete }) => {
  const [showSplit, setShowSplit] = useState(false);
  const [count, setCount] = useState(0);
  const logoRef = useRef(null);
  const barContainerRef = useRef(null);
  const barFillRef = useRef(null);
  const counterRef = useRef(null);
  const labelRef = useRef(null);
  const groupRef = useRef(null);
  const splitUpRef = useRef(null);
  const splitDownRef = useRef(null);

  // Counter from 0 to 100 over 2.4s
  useEffect(() => {
    let start = null;
    const duration = 2400;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * 100));
      if (progress < 1) requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Staggered fade-up entrance
    tl.from([logoRef.current, counterRef.current, barContainerRef.current, labelRef.current], {
      y: 20,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: "power2.out",
    });

    // Bar fills
    tl.to(barFillRef.current, {
      width: "100%",
      duration: 2.4,
      ease: "power1.inOut",
    }, 0.8);

    // Fade out entire group
    tl.to(groupRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
    }, 3.2);
  }, []);

  useEffect(() => {
    const splitTimer = setTimeout(() => setShowSplit(true), 3700);
    const completeTimer = setTimeout(() => onComplete?.(), 4600);
    return () => {
      clearTimeout(splitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  useGSAP(() => {
    if (!showSplit) return;
    gsap.to(splitUpRef.current, {
      xPercent: 100,
      opacity: 0,
      duration: 0.9,
      ease: "power3.inOut",
    });
    gsap.to(splitDownRef.current, {
      xPercent: -100,
      opacity: 0,
      duration: 0.9,
      ease: "power3.inOut",
    });
  }, [showSplit]);

  return (
    <div className="fixed inset-0 z-9999 bg-[#0a0a0a]">

      {/* Background tagline */}
      <p className="absolute inset-0 flex items-center justify-center text-white/10 text-[8rem] font-black tracking-widest uppercase pointer-events-none whitespace-nowrap opacity-20">
        SATWIK SAI
      </p>

      {/* Main content group */}
      <div
        ref={groupRef}
        className="absolute inset-0 flex flex-col items-center justify-center gap-6"
      >
        <h1 ref={logoRef} className="text-4xl font-extrabold text-white tracking-[0.2em] mb-10">
          SATWIK.
        </h1>


        {/* Progress bar — thin, minimal */}
        <div
          ref={barContainerRef}
          className="w-48 h-px bg-white/10 relative"
        >
          <div
            ref={barFillRef}
            className="h-full bg-white"
            style={{ width: "0%" }}
          />
        </div>

        {/* Label */}
        <span
          ref={labelRef}
          className="text-[10px] text-white/25 uppercase tracking-[0.15em]"
        >
          Loading Experience
        </span>
      </div>

      {/* Split panels */}
      {showSplit && (
        <>
          <div
            ref={splitUpRef}
            className="absolute top-0 left-0 w-full h-1/2 bg-[#0a0a0a] z-50"
          />
          <div
            ref={splitDownRef}
            className="absolute bottom-0 left-0 w-full h-1/2 bg-[#0a0a0a] z-50"
          />
        </>
      )}
    </div>
  );
};

export default Loader;