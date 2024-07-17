import { NumberCard } from "@/app/types/general.types";
import { collection, getDocs } from "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function GET() {
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
  return Response.json({
    statusCode: 200,
    body: serviceItems,
  });
}
