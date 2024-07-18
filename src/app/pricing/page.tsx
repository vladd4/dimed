import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import ServiceList from "@/components/ServiceList/ServiceList";
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
