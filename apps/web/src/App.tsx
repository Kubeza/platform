import AIMentor from "./components/sections/ai-mentor/AIMentor";
import CTA from "./components/sections/cta/CTA";
import Ecosystem from "./components/sections/ecosystem/Ecosystem";
import Hero from "./components/sections/hero/Hero";
import HowItWorks from "./components/sections/how-it-works/HowItWorks";
import InteractiveLabs from "./components/sections/interactive-labs/InteractiveLabs";
import Mission from "./components/sections/mission/Mission";
import Navbar from "./components/navigation/Navbar";
import PlatformOverview from "./components/sections/platform-overview/PlatformOverview";
import Footer from "./components/sections/footer/Footer";

export default function App(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <main>
        <Hero />
        <PlatformOverview />
        <HowItWorks />
        <InteractiveLabs />
        <AIMentor />
        <Ecosystem />
        <Mission />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}