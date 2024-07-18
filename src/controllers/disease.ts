import { Disease } from "@/app/types/general.types";
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

export async function getDisease(id: string) {
  const docRef = doc(db, "disease-page", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();

    const disease: Disease = {
      paragraph_1: data.paragraph_1,
      paragraph_2: data.paragraph_2,
      image_1: data.image_1,
      image_2: data.image_2,
    };

    return disease;
  } else {
    throw new Error(`Document with ID ${id} does not exist`);
  }
}
