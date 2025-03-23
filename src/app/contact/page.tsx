import LinkMediaSocialContact from "./component/LinkMediaSocialContact";
import TopLanding from "./component/TopLanding";
import FormContact from "./form/FormContact";

const page = () => {
  return (
    <section className=" font-inter bg-contact-bg min-h-screen max-w-screen text-text-contact flex flex-col gap-[5rem]">
      <TopLanding />
      <div className="flex justify-around gap-[5rem] px-[10rem] py-[2rem]">
        <div className="min-w-[40%] bg-bg-form rounded-4xl p-[2rem]">
          <FormContact />
        </div>
        <div className="min-w-[60%] flex flex-col gap-[2rem]">
          <h1 className=" font-semibold text-[4rem] leading-tight">Let&apos;s build something great Create a project with us today</h1>
          <div>
            <LinkMediaSocialContact />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
