/* eslint-disable @next/next/no-img-element */

import GsapMagnetic from "@/app/common/GsapMagnetic";
import Link from "next/link";

const TopLanding = () => {
  return (
    <div className="max-w-screen flex justify-between items-center text-[1.3rem] md:text-[2rem] font-semibold relative z-[3]">
      <GsapMagnetic>
        <div className=" w-[9rem] md:w-[14rem] overflow-hidden group">
          <h1 className="cursor-pointer whitespace-nowrap group-hover:translate-x-[-100%] transition-all duration-1000">AGUNG GEDE FullStack web</h1>
        </div>
      </GsapMagnetic>
      <GsapMagnetic>
        <Link href={"/"}>
          <img src={"./logo.png"} alt={""} className=" w-[2rem] md:w-[2.8rem]" />
        </Link>
      </GsapMagnetic>
    </div>
  );
};

export default TopLanding;
