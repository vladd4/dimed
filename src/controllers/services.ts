import { DetailsServiceItem, ServiceItem } from "@/app/types/general.types";
import { db } from "@/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore";

export async function getServices() {
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

export async function getLabel() {
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

export async function getWhatDo() {
  const collectionRef = collection(db, "disease");
  const data = await getDocs(collectionRef);
  let hrebet: string[] = [];
  let pain: string[] = [];
  let sugloby: string[] = [];

  data.docs.forEach((doc: QueryDocumentSnapshot) => {
    const disease = doc;
    if (disease.id === "hrebet") {
      hrebet = disease.data().values as string[];
    }
    if (disease.id === "pain") {
      pain = disease.data().values as string[];
    }
    if (disease.id === "sugloby") {
      sugloby = disease.data().values as string[];
    }
  });

  return {
    hrebet,
    pain,
    sugloby,
  };
}

export async function getServiceById(id: string) {
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
