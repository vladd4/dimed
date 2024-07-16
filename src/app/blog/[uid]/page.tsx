import BlogPage from "@/components/BlogPage/BlogPage";
import { db } from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function generateMetadata({ searchParams }: any) {
  const blogId = searchParams.id;

  const q = query(collection(db, "blog"), where("heading_1", "==", blogId));

  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const docSnap = querySnapshot.docs[0];
    const data = docSnap.data();

    const disease = {
      heading_1: data.heading_1,
      image_1: data.image_1,
    };

    return {
      title: blogId,
      openGraph: {
        images: [disease.image_1],
      },
    };
  } else {
    console.log(`No document found with heading_1 equal to ${blogId}`);
    return null;
  }
}

export default function BlogItemPage({ searchParams }: any) {
  const blogId = searchParams.id;
  return <BlogPage id={blogId} />;
}
