import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useEffect } from "react";

export const InitTextanimation = () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  useEffect(() => {
    const split = SplitText.create(".reveal-text-projects", {
      type: "chars",
    });
    const tl = gsap.timeline();

    tl.from(split.chars, {
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

    // const splitTypes = document.querySelectorAll(".reveal-text-projects");
    // splitTypes.forEach((char) => {
    //   const text = new SplitType(char as HTMLElement, { types: "chars,words" });

    //   gsap.from(text.chars, {
    //     scrollTrigger: {
    //       trigger: char,
    //       start: "top 80%",
    //       end: "top 20%",
    //       scrub: true,
    //     },
    //     scaleY: 0,
    //     y: -20,
    //     transformOrigin: "top",
    //     stagger: 0.1,
    //   });
    // });

    return () => {
      tl.kill();
      split.revert();
    };
  }, []);

  return null;
};
