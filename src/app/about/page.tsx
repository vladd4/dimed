import AboutExtended from "@/components/About/AboutExtended";
import AboutCards from "@/components/AboutCards/AboutCards";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import GaleryBlock from "@/components/GalerySlider/GaleryBlock";
import Services from "@/components/Services/Services";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";

export default function About() {
  return (
    <>
      <BreadCrumbs link_href="/about" link_label="Про нас" />
      <AboutExtended />
      <WhatWeDo />
      <AboutCards />
      <Services />
      <GaleryBlock isAbout />
    </>
  );
}
