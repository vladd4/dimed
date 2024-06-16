import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import GaleryBlock from "@/components/GalerySlider/GaleryBlock";
import ServiceApoint from "@/components/ServiceApoint/ServiceApoint";
import ServiceBenefits from "@/components/ServiceBenefits/ServiceBenefits";
import ServiceDetails from "@/components/ServiceDetails/ServiceDetails";
import VideoComp from "@/components/VideoComponent/VideoComp";

export default function ServDetails() {
  return (
    <>
      <BreadCrumbs link_href="/services" link_label="Назва послуги" />
      <ServiceDetails />
      <ServiceApoint />
      <ServiceBenefits />
      <GaleryBlock />
      <VideoComp />
    </>
  );
}
