import { NumberCard } from "@/app/types/general.types";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function getNumberCards() {
  const collectionRef = collection(db, "about-numbers");
  const data = await getDocs(collectionRef);

  const serviceItems = data.docs.map((doc) => ({
    heading: doc.get("heading") as string,
    description: doc.get("description") as string,
    number: doc.get("number") as string,
  })) as NumberCard[];

  serviceItems.sort((a, b) => {
    const numberA = parseInt(a.number);
    const numberB = parseInt(b.number);

    if (numberA < numberB) {
      return -1;
    }
    if (numberA > numberB) {
      return 1;
    }
    return 0;
  });

  return serviceItems;
}
