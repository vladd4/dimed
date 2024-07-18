import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import GaleryBlock from "@/components/GalerySlider/GaleryBlock";
import ServiceApoint from "@/components/ServiceApoint/ServiceApoint";
import ServiceBenefits from "@/components/ServiceBenefits/ServiceBenefits";
import ServiceDetails from "@/components/ServiceDetails/ServiceDetails";
import VideoComp from "@/components/VideoComponent/VideoComp";

import Loader from "../Loader";

import { getServiceById } from "@/controllers/services";

type ServiceDetailsProps = {
  id: string;
};

export default async function ServiceDetailsPage({ id }: ServiceDetailsProps) {
  const service_item = await getServiceById(id);

  return service_item === undefined ? (
    <Loader />
  ) : (
    <>
      <BreadCrumbs link_href="/services" link_label={`${id}`} isServices />
      {service_item !== undefined && service_item.paragraph === "" ? (
        <h2 className="text">Опис послуги скоро з'явиться...</h2>
      ) : (
        <>
          <ServiceDetails id={`${id}`} service_item={service_item} />
          <ServiceApoint id={`${id}`} />
          <ServiceBenefits service_item={service_item} />
          <GaleryBlock
            images={
              service_item !== undefined && service_item.images
                ? service_item.images
                : []
            }
          />
          <VideoComp service_item={service_item} />
        </>
      )}
    </>
  );
}
