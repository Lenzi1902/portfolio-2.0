"use client";
import GsapMagnetic from "@/app/common/GsapMagnetic";
import TranisitionLink from "@/app/utils/TranisitionLink";
import Link from "next/link";

const LinkMediaSocialContact = () => {
  return (
    <div className=" flex gap-[4rem]">
      <GsapMagnetic>
        <TranisitionLink href="/contact" label="CONTACT ME" className=" bg-contactme w-[15rem] h-[3.6rem] flex text-white text-[1.6rem] rounded-[0.375rem] text-center items-center justify-center gap-[1rem]">
          <span className=" w-[0.938rem] h-[0.938rem] bg-white rounded-[100%]"></span>
        </TranisitionLink>
        {/* <Link href={"/contact"} className=" bg-contactme w-[15rem] h-[3.6rem] flex text-white text-[1.6rem] rounded-[0.375rem] text-center items-center justify-center gap-[1rem]">
          <span className=" w-[0.938rem] h-[0.938rem] bg-white rounded-[100%]"></span>
          CONTACT ME
        </Link> */}
      </GsapMagnetic>
      <GsapMagnetic>
        <Link href={"https://www.instagram.com/xlennzii/"} className=" text-black  h-[3.6rem] flex text-[1.6rem] rounded-[0.375rem] text-center items-center justify-center gap-[1rem]">
          <span className=" w-[0.938rem] h-[0.938rem] bg-black rounded-[100%]"></span>
          Instagram
        </Link>
      </GsapMagnetic>
      <GsapMagnetic>
        <Link href={"#"} className=" text-black w-[15rem] h-[3.6rem] flex  text-[1.6rem] rounded-[0.375rem] text-center items-center justify-center gap-[1rem]">
          <span className=" w-[0.938rem] h-[0.938rem] bg-black rounded-[100%]"></span>
          Linkedin
        </Link>
      </GsapMagnetic>
    </div>
  );
};

export default LinkMediaSocialContact;
