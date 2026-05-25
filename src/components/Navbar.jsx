import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef, useState, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ isLoaded }) => {
  const navref = useRef(null);
  const [active, setActive] = useState("Home");

  useGSAP(() => {
    if (!isLoaded) return;
    gsap.from(navref.current, {
      y: -100,
      duration: 0.8,
      opacity: 0,
    });
  }, [isLoaded]);

  const handleClick = (e, label, href) => {
    e.preventDefault();
    setActive(label);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={navref} className="w-full flex items-center justify-between">
      {/* Logo */}
      <a
        href="#home"
        onClick={(e) => handleClick(e, "Home", "#home")}
        className="logo cursor-pointer text-white font-black text-2xl tracking-widest uppercase"
      >
        Satwik<span className="text-white/50">Sai</span>
      </a>

      {/* Nav Links */}
      <div className="navlinks bg-black/20 flex backdrop-blur-md p-1 rounded-full border border-white/10 items-center gap-1">
        {navLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            onClick={(e) => handleClick(e, label, href)}
            className={`py-2.5 px-5 rounded-full font-semibold text-sm transition-all duration-300 ${active === label
                ? "bg-white text-black shadow-lg shadow-white/10"
                : "text-white hover:bg-white/10"
              }`}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-3">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl bg-white/10 cursor-pointer hover:bg-white/20 py-2 px-3 rounded-full transition-all duration-300 hover:scale-110"
        >
          <i className="ri-github-fill" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl bg-white/10 cursor-pointer hover:bg-white/20 py-2 px-3 rounded-full transition-all duration-300 hover:scale-110"
        >
          <i className="ri-linkedin-fill" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
