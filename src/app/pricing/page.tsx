import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import ServiceList from "@/components/ServiceList/ServiceList";
import { getData } from "@/utils/getDataHelper";

export default async function Pricing() {
  // const serv_res = await getData("/pricing");
  // const label_res = await getData("/pricing/label");
  return (
    <>
      <BreadCrumbs link_href="/pricing" link_label="Ціни" />
      {/* <ServiceList
        isPricing
        serviceLabel={label_res.body}
        services={serv_res.body}
      /> */}
    </>
  );
}
