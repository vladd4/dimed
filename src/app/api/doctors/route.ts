import { DoctorCard } from "@/app/types/general.types";
import { collection, getDocs, QueryDocumentSnapshot } from "firebase/firestore";

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
