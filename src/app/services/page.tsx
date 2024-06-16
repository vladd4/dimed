import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import ServiceList from "@/components/ServiceList/ServiceList";

export default function Services() {
  return (
    <>
      <BreadCrumbs link_href="/services" link_label="Послуги" />
      <ServiceList />
    </>
  );
}
