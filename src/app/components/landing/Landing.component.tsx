import TopLanding from "./component/TopLanding";

const LandingComponent = () => {
  return (
    <div className="min-h-[110vh]  max-w-screen bg-[url('/BackgroundLandingComponent.png')] text-white px-[2rem] py-[2rem] flex flex-col gap-[5rem]">
      <TopLanding />
      <div className=" text-[6rem]">
        <h1>A FRONTEND AND </h1>
        <h1>BACKEND WEB </h1>
        <h1>DEVELOPERS</h1>
      </div>
    </div>
  );
};

export default LandingComponent;
