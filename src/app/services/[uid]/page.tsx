import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import Footer from "@/components/Footer/Footer";
import GaleryBlock from "@/components/GalerySlider/GaleryBlock";
import Header from "@/components/Header/Header";
import ServiceApoint from "@/components/ServiceApoint/ServiceApoint";
import ServiceBenefits from "@/components/ServiceBenefits/ServiceBenefits";
import ServiceDetails from "@/components/ServiceDetails/ServiceDetails";
import VideoComp from "@/components/VideoComponent/VideoComp";

export default function ServDetails() {
  return (
    <main className="main">
      <Header />
      <BreadCrumbs link_href="/services" link_label="Назва послуги" />
      <ServiceDetails />
      <ServiceApoint />
      <ServiceBenefits />
      <GaleryBlock />
      <VideoComp />
      <Footer />
    </main>
  );
}
