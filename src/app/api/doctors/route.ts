import { DoctorCard } from "@/app/types/general.types";
import { db } from "@/firebase";
import { collection, getDocs, QueryDocumentSnapshot } from "firebase/firestore";

export async function GET() {
  const collectionRef = collection(db, "doctors");
  const data = await getDocs(collectionRef);

  return Response.json({
    statusCode: 200,
    body: data.docs.map((doc: QueryDocumentSnapshot) => ({
      name: doc.get("name"),
      position: doc.get("position"),
      image: doc.get("image"),
    })) as DoctorCard[],
  });
}
