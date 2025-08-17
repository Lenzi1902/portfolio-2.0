import gsap, { ScrollTrigger } from "gsap/all";

export const initProjectAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".section-projects", {
    scrollTrigger: {
      trigger: "#section-projects",
      start: "top top",
      end: "bottom 40%",
      scrub: true,
      pin: ".section-projects",
      pinSpacing: false,
      markers: false,
    },
  });

  gsap.set(".project-list", { position: "relative", zIndex: 5 });
};
