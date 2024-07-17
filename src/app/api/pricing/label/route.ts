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
