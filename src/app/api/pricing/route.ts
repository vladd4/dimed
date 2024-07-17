import { ServiceItem } from "@/app/types/general.types";
import { collection, getDocs } from "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAm9-1dZ7-07XFpyNKfvvxdnEQ7QiKl-Q",
  authDomain: "dimed-852f6.firebaseapp.com",
  projectId: "dimed-852f6",
  storageBucket: "dimed-852f6.appspot.com",
  messagingSenderId: "134932625555",
  appId: "1:134932625555:web:2e2be351750973001ff566",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

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
