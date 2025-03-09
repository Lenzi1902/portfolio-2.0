import LinkMediaSocialContact from "./component/LinkMediaSocialContact";

const FooterComponent = () => {
  return (
    <div className="min-h-[33.75rem] max-w-screen flex items-center">
      <div className="  font-bold">
        <h1 className="text-[6rem]">LET’S</h1>
        <div className=" flex items-center gap-[6rem]">
          <h1 className="text-[6rem]">CONNECT</h1>
          <LinkMediaSocialContact />
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
