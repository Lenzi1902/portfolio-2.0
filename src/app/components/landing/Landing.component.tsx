"use client"; // Jika pakai Next.js

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import TopLanding from "./component/TopLanding";

const LandingComponent = () => {
  const containerRef = useRef(null);
  const yellowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(yellowRef.current, { xPercent: 0 }); // Awalnya Page 2 menimpa Page 1

      gsap.to(yellowRef.current, {
        xPercent: 100, // Bergerak ke kanan keluar layar
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          // markers: true,
        },
      });
    });

    return () => ctx.revert(); // Cleanup GSAP saat unmount
  }, []);
  return (
    <section
      ref={containerRef}
      className="min-h-[110vh]  max-w-screen bg-[url('/BackgroundLandingComponent.png')] text-white 
      flex flex-col gap-[5rem]      relative overflow-hidden"
      id="section-landing"
      wb-section="landing"
    >
      <div className=" px-[2rem] py-[2rem]">
        <TopLanding />
        <div className=" text-[6rem] font-bold absolute z-[1]">
          <h1>A FRONTEND AND </h1>
          <h1>BACKEND WEB </h1>
          <h1>DEVELOPERS</h1>
        </div>
      </div>
      <div ref={yellowRef} className=" absolute w-screen h-screen z-[2] bg-landing-gray font-inter">
        <div className=" flex justify-end items-center w-screen h-screen px-[10rem]">
          <h1 className=" text-[4rem] font-semibold">HELLO I’M AGUNG</h1>
        </div>
      </div>
    </section>
  );
};

export default LandingComponent;
