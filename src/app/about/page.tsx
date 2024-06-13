import AboutExtended from "@/components/About/AboutExtended";
import AboutCards from "@/components/AboutCards/AboutCards";
import AlertForm from "@/components/AlertForm/AlertForm";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import Footer from "@/components/Footer/Footer";
import GaleryBlock from "@/components/GalerySlider/GaleryBlock";
import Hamburger from "@/components/Header/Hamburger";
import Header from "@/components/Header/Header";
import Services from "@/components/Services/Services";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";

export default function About() {
  return (
    <main className="main">
      <Header />
      <Hamburger />
      <BreadCrumbs link_href="/about" link_label="Про нас" />
      <AboutExtended />
      <WhatWeDo />
      <AboutCards />
      <Services />
      <GaleryBlock />
      <Footer />
      <AlertForm />
    </main>
  );
}
