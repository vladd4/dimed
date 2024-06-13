import About from "@/components/About/About";
import AlertForm from "@/components/AlertForm/AlertForm";
import ContactForm from "@/components/ContactForm/ContactForm";
import DoctorsPage from "@/components/Doctors/DoctorsPage";
import DoctorsSliderBlock from "@/components/DoctorsSlider/DoctorsSliderBlock";
import Footer from "@/components/Footer/Footer";
import Hamburger from "@/components/Header/Hamburger";
import Header from "@/components/Header/Header";
import Services from "@/components/Services/Services";
import Welcome from "@/components/Welcome/Welcome";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";

export default function Home() {
  return (
    <main className="main">
      <Welcome />
      <About />
      <WhatWeDo />
      <Services />
      <ContactForm />
      {/* <DoctorsSliderBlock /> */}
    </main>
  );
}
