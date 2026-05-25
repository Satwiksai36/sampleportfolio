import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      scrollTrigger: { trigger: titleRef.current, start: "top 85%" },
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(formRef.current, {
      scrollTrigger: { trigger: formRef.current, start: "top 85%" },
      y: 40,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen bg-white py-32 px-6 md:px-20 relative overflow-hidden"
    >
      {/* Background Typography */}
      <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-black/3 pointer-events-none uppercase tracking-tighter whitespace-nowrap z-0">
        CONTACT
      </h1>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-black/3 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Header */}
      <div ref={titleRef} className="mb-16 relative z-10 flex flex-col items-center">
        <div className="w-fit text-center flex flex-col items-center">
          <p className="text-black/50 text-sm tracking-[5px] uppercase font-medium mb-4">
            04 / Contact
          </p>
          <h2 className="text-6xl md:text-8xl font-black text-black/90 tracking-tighter leading-none text-center">
            Let's Build something <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2px rgba(0,0,0,0.7)" }}
            >
              Amazing.
            </span>
          </h2>
          <p className="mt-6 text-black/60 text-base max-w-lg leading-relaxed">
            Have a project in mind? Let's talk. I'm always open to discussing new
            opportunities, collaborations, and creative ideas.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 relative z-10">
        {/* Left – Contact Info */}
        <div className="flex flex-col gap-8 lg:w-1/3">
          <div>
            <p className="text-black/80 text-xs tracking-[4px] uppercase font-bold mb-2">Email</p>
            <a
              href="mailto:satwiksai36@gmail.com"
              className="text-black/90 font-bold text-lg hover:text-black/60 transition-colors duration-300"
            >
              satwiksai36@gmail.com
            </a>
          </div>
          <div>
            <p className="text-black/80 text-xs tracking-[4px] uppercase font-bold mb-2">Location</p>
            <p className="text-black/90 font-bold text-lg">India 🇮🇳</p>
          </div>
          <div>
            <p className="text-black/80 text-xs tracking-[4px] uppercase font-bold mb-4">Socials</p>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-black/5 border border-black/10 flex items-center justify-center text-black/60 hover:bg-black hover:text-white transition-all duration-300"
              >
                <i className="ri-github-fill text-lg" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-black/5 border border-black/10 flex items-center justify-center text-black/60 hover:bg-black hover:text-white transition-all duration-300"
              >
                <i className="ri-linkedin-fill text-lg" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-black/5 border border-black/10 flex items-center justify-center text-black/60 hover:bg-black hover:text-white transition-all duration-300"
              >
                <i className="ri-twitter-x-line text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Right – Form */}
        <div ref={formRef} className="lg:w-2/3">
          {sent ? (
            <div className="flex flex-col items-center justify-center h-full gap-6 py-20">
              <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center">
                <i className="ri-check-line text-3xl text-black/80" />
              </div>
              <h3 className="text-black/90 text-2xl font-black">Message Sent!</h3>
              <p className="text-black/60 text-center">
                Thanks for reaching out. I'll get back to you shortly.
              </p>
              <button
                onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                className="text-black/50 text-sm underline hover:text-black/90 transition-colors"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-black/80 text-xs tracking-[3px] uppercase font-bold">Name</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="bg-black/5 border border-black/10 rounded-xl px-5 py-4 text-black/90 placeholder-black/30 text-sm focus:outline-none focus:border-black/40 transition-all duration-300"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-black/80 text-xs tracking-[3px] uppercase font-bold">Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Enter your email"
                    className="bg-black/5 border border-black/10 rounded-xl px-5 py-4 text-black/90 placeholder-black/30 text-sm focus:outline-none focus:border-black/40 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-black/80 text-xs tracking-[3px] uppercase font-bold">Message</label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="bg-black/5 border border-black/10 rounded-xl px-5 py-4 text-black/90 placeholder-black/30 text-sm focus:outline-none focus:border-black/40 transition-all duration-300 resize-none"
                />
              </div>
              <button
                type="submit"
                className="self-start bg-black text-white font-black tracking-[1px] text-sm px-8 py-4 rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-black/20 transition-all duration-300"
              >
                Get in touch
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
