"use client";

import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import GaleryBlock from "@/components/GalerySlider/GaleryBlock";
import ServiceApoint from "@/components/ServiceApoint/ServiceApoint";
import ServiceBenefits from "@/components/ServiceBenefits/ServiceBenefits";
import ServiceDetails from "@/components/ServiceDetails/ServiceDetails";
import VideoComp from "@/components/VideoComponent/VideoComp";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { fetchServiceDetails } from "@/redux/slices/serviceDetailsSlice";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ServiceDetailsPage() {
  const params = useSearchParams();
  const id = params.get("id");
  const dispatch = useAppDispatch();
  const { status, service_item } = useAppSelector(
    (state) => state.serviceDetails
  );

  useEffect(() => {
    dispatch(fetchServiceDetails(id!));
  }, [dispatch]);
  return (
    <>
      <BreadCrumbs link_href="/services" link_label={`${id}`} isServices />
      {status === "loaded" &&
      service_item !== null &&
      service_item.paragraph === "" ? (
        <h2 className="text">Опис послуги скоро з'явиться...</h2>
      ) : (
        <>
          <ServiceDetails id={`${id}`} />
          <ServiceApoint id={`${id}`} />
          <ServiceBenefits />
          <GaleryBlock
            images={
              service_item !== null && service_item.images
                ? service_item.images
                : []
            }
          />
          <VideoComp />
        </>
      )}
    </>
  );
}