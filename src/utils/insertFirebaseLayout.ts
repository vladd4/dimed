import { db } from "@/firebase";
import { collection, doc, setDoc } from "firebase/firestore";

const collectionRef = collection(db, "disease-page");

// Replace 'document-id' with the specific document ID you want to create
const documentRef = doc(collectionRef, "Артрози (гонартроз, коксартроз)");

// Define the data you want to set in the document
const data = {
  paragraph_1: "",
  paragraph_2: "",
  image_1: "",
  image_2: "",
};

// Set the data to the document, this will create the document if it doesn't exist

setDoc(documentRef, data)
  .then(() => {
    console.log("Document successfully written!");
  })
  .catch((error) => {
    console.error("Error writing document: ", error);
  });
