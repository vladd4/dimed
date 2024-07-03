import ServiceDetailsPage from "@/components/ServiceDetailsPage/ServiceDetailsPage";
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

export async function generateMetadata({ searchParams }: any) {
  const productId = searchParams.id;

  const docRef = doc(db, "service-page", productId);
  const docSnap = await getDoc(docRef);

  const data = docSnap.data();
  const disease = {
    paragraph: data?.paragraph,
    image: data?.image,
    images: data?.images,
    video_id: data?.video_id,
    pokazania: data?.pokazania,
    anti_pokazania: data?.anti_pokazania,
    benefits: data?.benefits,
    effects: data?.effects,
  };

  return {
    title: productId,
    openGraph: {
      images: [disease.image],
    },
  };
}

export default function ServDetails() {
  return <ServiceDetailsPage />;
}
