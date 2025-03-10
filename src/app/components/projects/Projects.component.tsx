"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "lenis";
import { useEffect } from "react";
import SplitType from "split-type";

const ProjectsComponent = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitTypes = document.querySelectorAll(".reveal-text-projects");
    splitTypes.forEach((char) => {
      const text = new SplitType(char as HTMLElement, { types: "chars,words" });

      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
        scaleY: 0,
        y: -20,
        transformOrigin: "top",
        stagger: 0.1,
      });
    });

    const lenis = new Lenis();
    lenis.on("scroll", (e) => {
      console.log(e);
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="min-h-screen max-w-screen">
      <div className=" flex justify-center">
        <div className=" w-[83%] leading-tight">
          <h1 className=" font-black text-[9.375rem] text-center reveal-text-projects">LET’S DO THIS TOGETHER</h1>
          <p className=" text-[2rem] text-center reveal-text">We believe that the best work comes from collaboration. Understanding you deeply. Sharing your vision and committing to your future. If that’s the kind of relationship you’re looking for, let’s talk.</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponent;
