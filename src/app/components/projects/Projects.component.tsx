"use client";
import { useEffect } from "react";
import { initTextanimation } from "./animation/text.animation";
import { initProjectAnimation } from "./animation/project.animation";

const ProjectsComponent = () => {
  useEffect(() => {
    initTextanimation();
    initProjectAnimation();
  }, []);
  return (
    <>
      <section className="min-h-screen max-w-screen section-projects" id="section-projects" wb-section="projects">
        <div className=" flex justify-center">
          <div className=" w-[83%] leading-tight title-projects">
            <h1 className=" font-black text-[9.375rem] text-center reveal-text-projects">LET’S DO THIS TOGETHER</h1>
            <p className=" text-[2rem] text-center reveal-text">We believe that the best work comes from collaboration. Understanding you deeply. Sharing your vision and committing to your future. If that’s the kind of relationship you’re looking for, let’s talk.</p>
          </div>
        </div>
      </section>
      <div className="test gallery">
        <section className="min-h-screen">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </section>

        <section className="min-h-screen">
          <div className="img" style={{ backgroundImage: `url(${"https://assets.codepen.io/2621168/img1.jpg"})` }}></div>
          <div className="img" style={{ backgroundImage: `url(${"https://assets.codepen.io/2621168/img1.jpg"})` }}></div>
          <div className="img" style={{ backgroundImage: `url(${"https://assets.codepen.io/2621168/img1.jpg"})` }}></div>
          <div className="img" style={{ backgroundImage: `url(${"https://assets.codepen.io/2621168/img1.jpg"})` }}></div>
        </section>

        <section className="min-h-screen"></section>
      </div>
    </>
  );
};

export default ProjectsComponent;
