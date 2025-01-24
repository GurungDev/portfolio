import { Background } from "@/components/background";
import IntroComp from "@/components/introComp";
import KnowledgeComp from "@/components/knowledgeComp";
import LandingSection from "@/components/landingSection";
import MarqueeComponent from "@/components/marque";
import ProjectComp from "@/components/projectsComp";

export default function Home() {
  return (
    <div>
      <LandingSection />
      <IntroComp />
      <KnowledgeComp />
      <MarqueeComponent baseVelocity={-1} />
      <ProjectComp />
      <Background />
    </div>
  );
}
