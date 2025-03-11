"use client";
import Link from "next/link";
import { navbarLink } from "./config";
import gsap, { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

const NavbarComponent = () => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      const sections = document.querySelectorAll("[wb-section]");

      sections.forEach((section) => {
        const sectionName = section.getAttribute("wb-section");
        const link = document.querySelector(`[wb-nav-link="${sectionName}"]`);
        const bg = link?.querySelector(".nav-link-bg");
        console.log(bg);

        if (!link || !bg) return;

        gsap.set(bg, { xPercent: -101 });

        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          onUpdate: (self) => {
            const xTranslation = self.progress * 202 - 101; // Perubahan dari -101 ke 101
            gsap.to(bg, { xPercent: xTranslation, duration: 0.2, ease: "power1.out" });
          },
        });
      });
    }
  }, []);

  return (
    <div className="flex justify-center">
      <ul className="w-[51rem] h-[4.5rem] fixed text-white font-inter bg-[url('/backgroundNavbar.png')] text-[1rem] flex items-center px-[0.5rem] justify-between bottom-[2rem]">
        {navbarLink.map((data, index) => (
          <li key={index} wb-nav-link={data.customAttribute} className="relative overflow-hidden rounded-[0.813rem]">
            <Link href={data.url} className="w-[10rem] h-[3.75rem] flex justify-center items-center z-10">
              {data.name}
            </Link>
            <span className="nav-link-bg absolute top-0 left-0 w-full h-full bg-[#FFF1E4] z-[-1] mix-blend-difference "></span>
          </li>
        ))}
        <li>
          <Link href={"#"} className="w-[13.25rem] h-[3.75rem] bg-white flex rounded-[0.813rem] text-black justify-center items-center">
            CONTACT US
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarComponent;
