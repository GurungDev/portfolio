import { Background } from "@/components/background";
import CompanyLogos from "@/components/companylogo";
import IntroComp from "@/components/introComp";
import KnowledgeComp from "@/components/knowledgeComp";
import LandingSection from "@/components/landingSection";
import MarqueeComponent from "@/components/marque";
import ProjectComp from "@/components/projectsComp";
import SmoothScrollWrapper from "@/components/smoothScroll";
import TechnologyUsesComponent from "@/components/technology";

export default function Home() {
  return (
    <div>
       <SmoothScrollWrapper>
        <div id="home">
          <LandingSection />
        </div>
        <div id="about">
          <IntroComp />
        </div>
        <MarqueeComponent baseVelocity={-1} />

        <div id="services">
          <KnowledgeComp />
        </div>
        <div id="services"> {/* Optionally change this id if it's meant to be different */}
          <TechnologyUsesComponent />
        </div>
        <div id="projects">
          <ProjectComp />
        </div>
        <div id="experience">
          <CompanyLogos baseVelocity={1} />
        </div>
        <div id="contact">
          <Background />
        </div>
      </SmoothScrollWrapper>
    </div>
  );
}
