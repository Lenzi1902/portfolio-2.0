import AboutComponent from "./components/about/About.component";
import FooterComponent from "./components/footer/Footer.component";
import LandingComponent from "./components/landing/Landing.component";
import ProjectsComponent from "./components/projects/Projects.component";

export default function Home() {
  return (
    <div className=" bg-[#FFF1E4] text-black">
      <LandingComponent />
      <div className=" px-[2rem]">
        <AboutComponent />
        <ProjectsComponent />
        <FooterComponent />
      </div>
    </div>
  );
}
