import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Lenis from "lenis";
export const initTextanimation = () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  const split = SplitText.create(".reveal-text-projects", {
    type: "chars",
  });

  gsap.from(split.chars, {
    scrollTrigger: {
      trigger: split.chars,
      start: "top 80%",
      end: "top 20%",
      scrub: true,
    },
    scaleY: 0,
    y: -20,
    transformOrigin: "top",
    stagger: 0.1,
  });

  const lenis = new Lenis();
  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
};
