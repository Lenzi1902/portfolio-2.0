/* eslint-disable @next/next/no-img-element */
"use client";

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Lenis from "lenis";
import { useEffect } from "react";

const AboutComponent = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    document.querySelectorAll(".reveal-text").forEach((element) => {
      const split = SplitText.create(element, {
        type: "chars",
      });

      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: element,
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
    <section className="min-h-[140vh] max-w-screen px-[0.2rem] md:px-[5rem] py-[5rem] md:py-[10rem] grid grid-cols-1 grid-rows-10 md:grid-cols-5 md:grid-rows-5 gap-[1rem] md:gap-[2rem] " id="section-about" wb-section="about">
      <div className=" row-span-4 md:col-span-2 md:row-span-5 ">
        <img src="./sketsa-foto-portfolio.png" alt="" className=" rounded-xl w-[100%]" />
      </div>
      <div className="flex flex-col gap-[1rem] md:gap-[2rem] row-span-6 row-start-5 md:col-span-3 md:row-span-5 md:col-start-3 w-[99%]">
        <h1 className=" font-inter font-extrabold text-[1.1rem] md:text-[3.33rem]  reveal-text">Nice to meet you all.</h1>
        <div className=" text-[1rem] md:text-[1.8rem] flex flex-col ap-[0.2rem] md:gap-[1rem] ">
          <p className="reveal-text">I&apos;m Anak Agung, a Full-Stack Developer passionate about building fast, scalable web apps.</p>
          <p className="reveal-text">Currently studying Information Systems, I enjoy working on both front-end and back-end crafting smooth user experiences and robust server logic.</p>
          <p className="reveal-text">Always curious, always learning especially new tools and tech to build better solutions.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
