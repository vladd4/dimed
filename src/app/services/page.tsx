import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import ServiceList from "@/components/ServiceList/ServiceList";
import { getData } from "@/utils/getDataHelper";

export default async function Services() {
  const serv_res = await getData("/pricing");
  const label_res = await getData("/pricing/label");
  return (
    <>
      <BreadCrumbs link_href="/services" link_label="Послуги" />
      <ServiceList serviceLabel={label_res.body} services={serv_res.body} />
    </>
  );
}
