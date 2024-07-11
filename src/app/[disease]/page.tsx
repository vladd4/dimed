import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import DiseaseBlock from "@/components/DiseaseBlock/DiseaseBlock";
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

export async function generateMetadata({ searchParams }: any) {
  const productId = searchParams.id;

  const docRef = doc(db, "disease-page", productId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    const disease = {
      image_1: data?.image_1,
    };

    return {
      title: productId,
      openGraph: {
        images: [disease.image_1],
      },
    };
  } else return null;
}

export default function DiseasePage({ searchParams }: any) {
  const productId = searchParams.id;

  return (
    <>
      <BreadCrumbs
        link_href={`/disease?id=${productId}`}
        link_label={`${productId}`}
      />
      <DiseaseBlock id={`${productId}`} />
    </>
  );
}
