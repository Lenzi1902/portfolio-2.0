"use client";
import { useEffect } from "react";
import { InitTextanimation } from "./animation/text.animation";
import { initProjectAnimation } from "./animation/project.animation";
import { projectList } from "./project.config";
import { ScrollTrigger } from "gsap/all";
import Lenis from "lenis";

const ProjectsComponent = () => {
  useEffect(() => {
    // InitTextanimation();
    initProjectAnimation();

    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
  return (
    <section id="section-projects" wb-section="projects" className="min-h-[200vh] relative ">
      {/* text */}
      <div className="h-[100%] max-w-screen section-projects z-[1]  ">
        <div className=" flex justify-center">
          <div className=" w-[100%] md:w-[83%] leading-tight title-projects">
            <h1 className=" font-black text-[2.4rem] md:text-[8.375rem] text-center reveal-text-projects">LET’S DO THIS TOGETHER</h1>
            <p className=" text-[1.21rem] md:text-[2rem] text-center reveal-text">We believe that the best work comes from collaboration. Understanding you deeply. Sharing your vision and committing to your future. If that’s the kind of relationship you’re looking for, let’s talk.</p>
          </div>
        </div>
      </div>
      <InitTextanimation />
      {/* projectlist */}
      <div className="project-list z-[5] mt-[20%] md:mt-[40%]">
        <div className=" flex flex-col gap-8">
          {projectList.map((pic, index) => (
            <div key={index} className={`flex ${index % 2 == 0 ? "justify-start" : "justify-end"}`}>
              <div className=" rounded-2xl overflow-hidden w-[12rem] md:w-[38rem]">
                <img src={`${pic.src}`} className=" h-auto object-contain " />
                <div className=" bg-transparent backdrop-blur-[10px] px-[1.2rem]">
                  <h1 className=" font-semibold text-[1.3rem]">Title</h1>
                  <p className="text-[1.1rem]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti quo, temporibus ut nostrum velit illum exercitationem. Ut aperiam harum labore,</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsComponent;
