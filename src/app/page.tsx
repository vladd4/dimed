import About from "@/components/About/About";
import ContactForm from "@/components/ContactForm/ContactForm";
import DoctorsSliderBlock from "@/components/DoctorsSlider/DoctorsSliderBlock";
import Services from "@/components/Services/Services";
import Welcome from "@/components/Welcome/Welcome";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";
import { getData } from "@/utils/getDataHelper";

export default async function Home() {
  // const serv_res = await getData("/pricing");
  // const label_res = await getData("/pricing/label");
  return (
    <>
      <Welcome />
      <About />
      {/* <WhatWeDo /> */}
      {/* <Services serviceLabel={label_res.body} services={serv_res.body} /> */}
      <ContactForm />
      {/* <DoctorsSliderBlock /> */}
    </>
  );
}
