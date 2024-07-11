import About from "@/components/About/About";
import ContactForm from "@/components/ContactForm/ContactForm";
import DoctorsSliderBlock from "@/components/DoctorsSlider/DoctorsSliderBlock";
import Services from "@/components/Services/Services";
import Welcome from "@/components/Welcome/Welcome";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";

export default function Home() {
  return (
    <>
      <Welcome />
      <About />
      <WhatWeDo />
      <Services />
      <ContactForm />
      <DoctorsSliderBlock />
    </>
  );
}
