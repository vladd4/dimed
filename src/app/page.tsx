import About from "@/components/About/About";
import AlertForm from "@/components/AlertForm/AlertForm";
import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";
import Hamburger from "@/components/Header/Hamburger";
import Header from "@/components/Header/Header";
import Services from "@/components/Services/Services";
import Welcome from "@/components/Welcome/Welcome";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";

export default function Home() {
  return (
    <main className="main">
      <Header />
      <Hamburger />
      <Welcome />
      <About />
      <WhatWeDo />
      <Services />
      <ContactForm />
      <Footer />
      <AlertForm />
      {/* <DoctorsSliderBlock /> */}
    </main>
  );
}
