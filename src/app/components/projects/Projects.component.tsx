"use client";
import { useEffect } from "react";
import { initTextanimation } from "./animation/text.animation";
import { initProjectAnimation } from "./animation/project.animation";
import { projectList } from "./project.config";
import { useMediaQuery } from "react-responsive";

const ProjectsComponent = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useEffect(() => {
    initTextanimation();
    initProjectAnimation(isMobile);
  }, []);
  return (
    <section id="section-projects" wb-section="projects" className="h-[200vh] md:h-[400vh] relative ">
      <div className="h-[100%] max-w-screen section-projects z-[1] ">
        <div className=" flex justify-center">
          <div className=" w-[100%] md:w-[83%] leading-tight title-projects">
            <h1 className=" font-black text-[2.4rem] md:text-[8.375rem] text-center reveal-text-projects">LET’S DO THIS TOGETHER</h1>
            <p className=" text-[1.21rem] md:text-[2rem] text-center reveal-text">We believe that the best work comes from collaboration. Understanding you deeply. Sharing your vision and committing to your future. If that’s the kind of relationship you’re looking for, let’s talk.</p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-[5] top-[20%] md:top-[40%] ">
        <div className=" flex flex-col gap-8">
          {projectList.map((pic, index) => (
            <div key={index} className={`flex ${index % 2 == 0 ? "justify-start" : "justify-end"}`}>
              <div>
                <img src={`${pic.src}`} className="w-[12rem] md:w-[25rem] h-auto object-contain " />
                <p>test</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsComponent;
