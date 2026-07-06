import { siteConfig } from "./data/site-config";
import {
  Nav,
  Hero,
  About,
  Timeline,
  Prizes,
  Schedule,
  RegisterCTA,
  FAQ,
  Footer,
} from "./components";

export default function Page() {
  return (
    <>
      <Nav links={siteConfig.navigation} />
      <Hero />
      <About />
      <Timeline />
      <Prizes />
      <Schedule />
      <RegisterCTA />
      <FAQ />
      <Footer />
    </>
  );
}
