import gsap, { ScrollTrigger } from "gsap/all";

export const initProjectAnimation = (isMobile: boolean) => {
  const startValue = isMobile ? "top 30%" : "top top";
  const endValue = isMobile ? "bottom 40%" : "bottom 40%";
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".section-projects", {
    scrollTrigger: {
      trigger: ".section-projects",
      start: startValue,
      end: endValue,
      scrub: true,
      pin: ".section-projects",
      markers: true,
    },
  });
};
