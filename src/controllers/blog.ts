import { BlogItem } from "@/app/types/general.types";
import { db } from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function getBlog() {
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

  return blogs;
}

export async function getBlogById(id: string) {
  const q = query(collection(db, "blog"), where("heading_1", "==", id));

  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const docSnap = querySnapshot.docs[0];
    const data = docSnap.data();

    const blogItem = {
      heading_1: data.heading_1,
      heading_2: data.heading_2,
      heading_3: data.heading_3,
      heading_4: data.heading_4,
      heading_5: data.heading_5,
      paragraph_1: data.paragraph_1,
      paragraph_2: data.paragraph_2,
      paragraph_3: data.paragraph_3,
      paragraph_4: data.paragraph_4,
      paragraph_5: data.paragraph_5,
      image_1: data.image_1,
      image_2: data.image_2,
      author: data.author,
      date: data.date,
    };
    return blogItem;
  }
}
