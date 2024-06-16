import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import ServiceList from "@/components/ServiceList/ServiceList";

export default function Pricing() {
  return (
    <>
      <BreadCrumbs link_href="/pricing" link_label="Ціни" />
      <ServiceList isPricing />
    </>
  );
}
