import AboutExtended from "@/components/About/AboutExtended";
import AboutCards from "@/components/AboutCards/AboutCards";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import GaleryBlock from "@/components/GalerySlider/GaleryBlock";
import Services from "@/components/Services/Services";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";
import { getData } from "@/utils/getDataHelper";

export default async function About() {
  const serv_res = await getData("/pricing");
  const label_res = await getData("/pricing/label");

  return (
    <>
      <BreadCrumbs link_href="/about" link_label="Про нас" />
      <AboutExtended />
      <WhatWeDo />
      <AboutCards />
      <Services serviceLabel={label_res.body} services={serv_res.body} />
      <GaleryBlock isAbout />
    </>
  );
}
