import { db } from "@/firebase";
import { collection, getDocs, QueryDocumentSnapshot } from "firebase/firestore";

export async function GET() {
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

  return Response.json({
    statusCode: 200,
    hrebet,
    pain,
    sugloby,
  });
}
