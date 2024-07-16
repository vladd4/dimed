import ServiceDetailsPage from "@/components/ServiceDetailsPage/ServiceDetailsPage";
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

export async function generateMetadata({ searchParams }: any) {
  const productId = searchParams.id;

  const docRef = doc(db, "service-page", productId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    const disease = {
      image: data?.image,
    };

    return {
      title: productId,
      openGraph: {
        images: [disease.image],
      },
    };
  } else return null;
}

export default function ServDetails({ searchParams }: any) {
  const productId = searchParams.id;
  return <ServiceDetailsPage id={productId} />;
}
