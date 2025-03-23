/* eslint-disable @next/next/no-img-element */

import GsapMagnetic from "@/app/common/GsapMagnetic";
import Link from "next/link";

const TopLanding = () => {
  return (
    <div className="max-w-screen flex justify-between items-center text-[2rem] font-semibold relative z-[3] px-[2rem] py-[2rem]">
      <GsapMagnetic>
        <h1 className="cursor-pointer">AGUNG GEDE</h1>
      </GsapMagnetic>
      <GsapMagnetic>
        <Link href={"/"}>
          <img src={"./logo.png"} alt={""} className=" w-[2.8rem]" />
        </Link>
      </GsapMagnetic>
    </div>
  );
};

export default TopLanding;
