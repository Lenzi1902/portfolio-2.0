import gsap, { ScrollTrigger } from "gsap/all";
import Lenis from "lenis";

export const initProjectAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".img",
      start: "top bottom",
      end: "top 20%",
      scrub: 2,
    },
  });

  tl.to(".img", {
    stagger: 0.2,
    y: -700,
  });

  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
};
