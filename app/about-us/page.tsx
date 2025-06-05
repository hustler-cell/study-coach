import AboutBanner from "./aboutBanner";
import JourneyBanner from "./journeyBanner";
import OfferBanner from "./offerBanner";
import OurMission from "./ourMission";
import ValuesBanner from "./valuesBanner";

export default function About() {
  return (
    <main className="container mx-auto ">
      <AboutBanner />
      <JourneyBanner />
      <OfferBanner />
      <ValuesBanner />
      <OurMission />
    </main>
  );
}
