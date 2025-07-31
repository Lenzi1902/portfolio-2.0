import LinkMediaSocialContact from "./component/LinkMediaSocialContact";

const FooterComponent = () => {
  return (
    <div className="max-h-[33.75rem] max-w-screen flex items-center mt-[10rem] md:mt-[20rem] ">
      <div className="  font-bold">
        <h1 className="text-[3rem] md:text-[6rem]">LET’S</h1>
        <div className=" flex flex-col md:flex-row md:items-center gap-[1rem] md:gap-[6rem] ">
          <h1 className="text-[3rem] md:text-[6rem]">CONNECT</h1>
          <LinkMediaSocialContact />
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
