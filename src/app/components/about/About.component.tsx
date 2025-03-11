"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "lenis";
import { useEffect } from "react";
import SplitType from "split-type";

const AboutComponent = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitTypes = document.querySelectorAll(".reveal-text");
    splitTypes.forEach((char) => {
      const text = new SplitType(char as HTMLElement, { types: "chars,words" });

      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
        opacity: 0.2,
        stagger: 0.1,
      });
    });

    const lenis = new Lenis();
    // lenis.on("scroll", (e) => {
    //   console.log(e);
    // });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <section className="min-h-[140vh] max-w-screen px-[5rem] py-[3rem] flex flex-col gap-[3rem]" id="section-about" wb-section="about">
      <h1 className=" font-inter font-extrabold text-[4.313rem]  reveal-text">Nice to meet you all.</h1>
      <div className=" text-[2rem] flex flex-col gap-[2rem] w-[90%]">
        <p className="reveal-text">Hi, I&apos;m Anak Agung, a passionate Full-Stack Developer with a strong interest in building scalable and efficient web applications. Currently, I&apos;m pursuing a degree in Information Systems, where I&apos;m deepening my knowledge of software development, databases, and system architecture.</p>
        <p className="reveal-text">
          With experience in both front-end and back-end technologies, I enjoy crafting seamless user experiences while ensuring robust and optimized server-side performance. I&apos;m always eager to learn new technologies and stay up-to-date with industry trends to improve my skills and create innovative solutions. Let&apos;s build something
          amazing together!
        </p>
      </div>
    </section>
  );
};

export default AboutComponent;
