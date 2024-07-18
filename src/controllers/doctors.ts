import { DoctorCard } from "@/app/types/general.types";
import { db } from "@/firebase";
import { collection, getDocs, QueryDocumentSnapshot } from "firebase/firestore";

export async function getDoctors() {
  const collectionRef = collection(db, "doctors");
  const data = await getDocs(collectionRef);

  return data.docs.map((doc: QueryDocumentSnapshot) => ({
    name: doc.get("name"),
    position: doc.get("position"),
    image: doc.get("image"),
  })) as DoctorCard[];
}
