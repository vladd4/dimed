import { BlogItem } from "@/app/types/general.types";
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

export const db = getFirestore(app);


export async function GET() {
  const collectionRef = collection(db, "blog");
  const data = await getDocs(collectionRef);

  const blogs = data.docs.map((doc) => ({
    heading_1: doc.get("heading_1") as string,
    heading_2: doc.get("heading_2") as string,
    heading_3: doc.get("heading_3") as string,
    heading_4: doc.get("heading_4") as string,
    heading_5: doc.get("heading_5") as string,
    paragraph_1: doc.get("paragraph_1") as string,
    paragraph_2: doc.get("paragraph_2") as string,
    paragraph_3: doc.get("paragraph_3") as string,
    paragraph_4: doc.get("paragraph_4") as string,
    paragraph_5: doc.get("paragraph_5") as string,
    image_1: doc.get("image_1") as string,
    image_2: doc.get("image_2") as string,
    author: doc.get("author") as string,
    date: doc.get("date") as string,
  })) as BlogItem[];

  return Response.json({
    statusCode: 200,
    body: blogs,
  });
}
