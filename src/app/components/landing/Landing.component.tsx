import TopLanding from "./component/TopLanding";

const LandingComponent = () => {
  return (
    <section className="min-h-[110vh]  max-w-screen bg-[url('/BackgroundLandingComponent.png')] text-white px-[2rem] py-[2rem] flex flex-col gap-[5rem]" id="section-landing" wb-section="landing">
      <TopLanding />
      <div className=" text-[6rem] font-bold">
        <h1>A FRONTEND AND </h1>
        <h1>BACKEND WEB </h1>
        <h1>DEVELOPERS</h1>
      </div>
    </section>
  );
};

export default LandingComponent;
