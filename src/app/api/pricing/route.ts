import { ServiceItem } from "@/app/types/general.types";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function GET() {
  const collectionRef = collection(db, "services");
  const data = await getDocs(collectionRef);

  const serviceItems = data.docs.map((doc) => ({
    name: doc.get("name") as string,
    description: doc.get("description") as string,
    price: doc.get("price") as { name: string; price: string }[],
    whatDo: doc.get("whatDo") as string[],
  })) as ServiceItem[];

  return Response.json({
    statusCode: 200,
    body: serviceItems,
  });
}
