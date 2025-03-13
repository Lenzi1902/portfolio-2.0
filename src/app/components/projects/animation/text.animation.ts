import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "lenis";
import SplitType from "split-type";

export const initTextanimation = () => {
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
  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
};
