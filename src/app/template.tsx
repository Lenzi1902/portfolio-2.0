"use client";

import { useEffect } from "react";
import { animaitionsPageTransition } from "./utils/animaitionsPageTransition";

type Props = {
  children: React.ReactNode;
};

const Template = ({ children }: Props) => {
  useEffect(() => {
    animaitionsPageTransition();
  }, []);
  return (
    <div>
      <div id="banner-1" className=" min-h-screen z-10 bg-[#a19f94] fixed top-0 left-0 w-1/4" />
      <div id="banner-2" className=" min-h-screen z-10 bg-[#a19f94] fixed top-0 left-1/4 w-1/4" />
      <div id="banner-3" className=" min-h-screen z-10 bg-[#a19f94] fixed top-0 left-2/4 w-1/4" />
      <div id="banner-4" className=" min-h-screen z-10 bg-[#a19f94] fixed top-0 left-3/4 w-1/4" />
      {children}
    </div>
  );
};

export default Template;
