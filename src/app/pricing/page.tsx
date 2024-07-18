import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import ServiceList from "@/components/ServiceList/ServiceList";

import { getLabel, getServices } from "@/controllers/services";

export default async function Pricing() {
  const serv_res = await getServices();
  const label_res = await getLabel();
  return (
    <>
      <BreadCrumbs link_href="/pricing" link_label="Ціни" />
      <ServiceList isPricing serviceLabel={label_res} services={serv_res} />
    </>
  );
}
