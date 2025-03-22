import AboutComponent from "./components/about/About.component";
import FooterComponent from "./components/footer/Footer.component";
import LandingComponent from "./components/landing/Landing.component";
import ProjectsComponent from "./components/projects/Projects.component";
// import HorizontalSplitScroll from "./components/test3/test3";
// import Test from "./components/test/test";
// import Test2 from "./components/test2/test";

export default function Home() {
  return (
    <div className=" bg-[#FFF1E4] text-black font-inter overflow-y-hidden">
      {/* <HorizontalSplitScroll /> */}
      {/* <Test2 />
      <Test /> */}
      <LandingComponent />
      <div className=" px-[2rem]">
        <AboutComponent />
        <ProjectsComponent />
        <FooterComponent />
      </div>
    </div>
  );
}
