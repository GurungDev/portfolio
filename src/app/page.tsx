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
        
        <LandingSection />
        <IntroComp />
        <MarqueeComponent baseVelocity={-1} />

        <KnowledgeComp />
        <TechnologyUsesComponent/>
        <ProjectComp />
        {/* <ProjectComp /> */}
        <CompanyLogos baseVelocity={1} />

        
        <Background />
      </SmoothScrollWrapper>
    </div>
  );
}
