/* eslint-disable @next/next/no-img-element */

import GsapMagnetic from "@/app/common/GsapMagnetic";
import TranisitionLink from "@/app/utils/TranisitionLink";

const TopLanding = () => {
  return (
    <div className="max-w-screen flex justify-between items-center text-[2rem] font-semibold relative z-[3] px-[2rem] py-[2rem]">
      <GsapMagnetic>
        <h1 className="cursor-pointer">AGUNG GEDE</h1>
      </GsapMagnetic>
      <GsapMagnetic>
        <TranisitionLink href={"/"} className=" cursor-pointer">
          <img src={"./logo.png"} alt={""} className=" w-[2.8rem]" />
        </TranisitionLink>
      </GsapMagnetic>
    </div>
  );
};

export default TopLanding;
