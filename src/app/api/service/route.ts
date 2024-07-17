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
