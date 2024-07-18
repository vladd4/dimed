import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import GaleryBlock from "@/components/GalerySlider/GaleryBlock";
import ServiceApoint from "@/components/ServiceApoint/ServiceApoint";
import ServiceBenefits from "@/components/ServiceBenefits/ServiceBenefits";
import ServiceDetails from "@/components/ServiceDetails/ServiceDetails";
import VideoComp from "@/components/VideoComponent/VideoComp";

import Loader from "../Loader";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { DetailsServiceItem } from "@/app/types/general.types";

type ServiceDetailsProps = {
  id: string;
};

async function getService(id: string) {
  const docRef = doc(db, "service-page", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();

    const service: DetailsServiceItem = {
      paragraph: data.paragraph,
      image: data.image,
      images: data.images,
      video_id: data.video_id,
      pokazania: data.pokazania,
      anti_pokazania: data.anti_pokazania,
      benefits: data.benefits,
      effects: data.effects,
    };

    return service;
  } else {
    throw new Error(`Document with ID ${id} does not exist`);
  }
}

export default async function ServiceDetailsPage({ id }: ServiceDetailsProps) {
  const service_item = await getService(id);

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
