/* eslint-disable @next/next/no-img-element */
"use client";

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Lenis from "lenis";
import { useEffect } from "react";
import { SkillStack } from "./techAboutList";
import { useMediaQuery } from "react-responsive";

const AboutComponent = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
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

    gsap.to(".tech-skill", {
      duration: 60,
      ease: "none",
      x: "-=2952", //move each box 500px to right
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % 2952), //force x value to be between 0 and 500 using modulus
      },
      repeat: -1,
    });

    // animation about-intro
    if (!isMobile) {
      gsap.set(".about-foto", {
        xPercent: 40,
        left: "40%",
      });
    }
    gsap.set(".about-detail", {
      opacity: 0,
    });

    const textIntroSplit = SplitText.create(".about-intro", {
      type: "chars",
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section-about",
          pin: true,
          markers: false,
          scrub: 1.5,
        },
      })
      .to(textIntroSplit.chars, {
        opacity: 0,
        stagger: 0.1,
      })
      .to(".about-foto", {
        xPercent: 0,
        left: "0%",
      })
      .to(".about-detail", {
        opacity: 1,
      });

    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <section className="min-h-[140vh] max-w-screen px-[0.2rem] md:px-[5rem] py-[5rem] md:py-[10rem] grid grid-cols-1 grid-rows-10 md:grid-cols-5 md:grid-rows-5 gap-[1rem] md:gap-[2rem] " id="section-about" wb-section="about">
      <div className="about-foto  row-span-4 md:col-span-2 md:row-span-5 relative">
        <h1 className="about-intro font-inter font-extrabold text-[1.1rem] md:text-[3.33rem] absolute top-[-15%] w-full text-center">ABOUT ME</h1>
        <img src="./sketsa-foto-portfolio.png" alt="" className=" rounded-xl w-[100%]" />
      </div>
      <div className="about-detail flex flex-col gap-[1rem] md:gap-[2rem] row-span-6 row-start-5 md:col-span-3 md:row-span-5 md:col-start-3 w-[99%]">
        <h1 className=" font-inter font-extrabold text-[1.1rem] md:text-[3.33rem]  reveal-text">Nice to meet you all.</h1>
        <div className=" text-[1rem] md:text-[1.8rem] flex flex-col ap-[0.2rem] md:gap-[1rem] ">
          <p className="reveal-text">I&apos;m Anak Agung, a Full-Stack Developer passionate about building fast, scalable web apps.</p>
          <p className="reveal-text">Currently studying Information Systems, I enjoy working on both front-end and back-end crafting smooth user experiences and robust server logic.</p>
          <p className="reveal-text">Always curious, always learning especially new tools and tech to build better solutions.</p>
        </div>
        <div className="w-[100%] h-[100%] flex flex-col justify-center">
          <div className="h-[10.25rem] w-full flex items-center gap-[1rem] relative overflow-hidden">
            <div className="w-[10.563rem] h-[10.25rem] absolute left-0 bg-[linear-gradient(to_left,_#FFF1E4B8_0%,_#FFF1E4_39%,_#FFF1E4_100%)] z-[2]"></div>

            <div className="flex gap-[1rem] z-[1]">
              {SkillStack.map((skill, index) => (
                <div key={index} className="h-[10.25rem] w-[10.25rem] tech-skill flex items-center justify-center border border-black rounded-2xl">
                  <img src={skill.sources} alt={skill.alt} className="w-[9rem] h-[9rem] object-contain" />
                </div>
              ))}
            </div>

            <div className="w-[10.563rem] h-[10.25rem] absolute right-0 bg-[linear-gradient(to_right,_#FFF1E4B8_0%,_#FFF1E4_39%,_#FFF1E4_100%)] z-[2]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
