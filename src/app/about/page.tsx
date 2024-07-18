import AboutExtended from "@/components/About/AboutExtended";
import AboutCards from "@/components/AboutCards/AboutCards";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import GaleryBlock from "@/components/GalerySlider/GaleryBlock";
import Services from "@/components/Services/Services";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";

import { getLabel, getServices } from "@/controllers/services";

export default async function About() {
  const services = await getServices();
  const servLabel = await getLabel();

  return (
    <>
      <BreadCrumbs link_href="/about" link_label="Про нас" />
      <AboutExtended />
      <WhatWeDo />
      <AboutCards />
      <Services serviceLabel={servLabel} services={services} />
      <GaleryBlock isAbout />
    </>
  );
}
