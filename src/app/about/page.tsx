import AboutExtended from "@/components/About/AboutExtended";
import AboutCards from "@/components/AboutCards/AboutCards";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import GaleryBlock from "@/components/GalerySlider/GaleryBlock";
import Services from "@/components/Services/Services";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import { ServiceItem } from "../types/general.types";

async function getServices() {
  const collectionRef = collection(db, "services");
  const data = await getDocs(collectionRef);

  const serviceItems = data.docs.map((doc) => ({
    name: doc.get("name") as string,
    description: doc.get("description") as string,
    price: doc.get("price") as { name: string; price: string }[],
    whatDo: doc.get("whatDo") as string[],
  })) as ServiceItem[];

  return serviceItems;
}

async function getLabel() {
  const collectionRef = collection(db, "service-label");
  const querySnapshot = await getDocs(collectionRef);

  if (!querySnapshot.empty) {
    const documentData = querySnapshot.docs[0].data();
    const label = documentData.label;

    return label;
  } else {
    throw new Error("No document found in 'service-label' collection.");
  }
}

export default async function About() {
  const services = await getServices();
  const servLabel = await getLabel();

  return (
    <>
      <BreadCrumbs link_href="/about" link_label="Про нас" />
      <AboutExtended />
      <WhatWeDo />
      <AboutCards />
      <Services serviceLabel={servLabel} services={services} />
      <GaleryBlock isAbout />
    </>
  );
}
