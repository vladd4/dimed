import About from "@/components/About/About";
import ContactForm from "@/components/ContactForm/ContactForm";
import DoctorsSliderBlock from "@/components/DoctorsSlider/DoctorsSliderBlock";
import Services from "@/components/Services/Services";
import Welcome from "@/components/Welcome/Welcome";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";

import { getLabel, getServices } from "@/controllers/services";

export default async function Home() {
  const serv_res = await getServices();
  const label_res = await getLabel();
  return (
    <>
      <Welcome />
      <About />
      <WhatWeDo />
      <Services serviceLabel={label_res} services={serv_res} />
      <ContactForm />
      <DoctorsSliderBlock />
    </>
  );
}
