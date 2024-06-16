"use client";

import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import DiseaseBlock from "@/components/DiseaseBlock/DiseaseBlock";

import { useSearchParams } from "next/navigation";

export default function DiseasePage() {
  const params = useSearchParams();
  const id = params.get("id");
  return (
    <>
      <BreadCrumbs link_href={`/disease?id=${id}`} link_label={`${id}`} />
      <DiseaseBlock />
    </>
  );
}
