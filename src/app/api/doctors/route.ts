import { DoctorCard } from "@/app/types/general.types";
import { collection, getDocs, QueryDocumentSnapshot } from "firebase/firestore";

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
