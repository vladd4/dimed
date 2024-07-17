import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function GET() {
  const collectionRef = collection(db, "service-label");
  const querySnapshot = await getDocs(collectionRef);

  if (!querySnapshot.empty) {
    const documentData = querySnapshot.docs[0].data();
    const label = documentData.label;

    return Response.json({
      statusCode: 200,
      body: label,
    });
  } else {
    throw new Error("No document found in 'service-label' collection.");
  }
}
