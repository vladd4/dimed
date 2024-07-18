import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import DiseaseBlock from "@/components/DiseaseBlock/DiseaseBlock";

import { getDisease } from "@/controllers/disease";

export async function generateMetadata({ searchParams }: any) {
  const id = searchParams?.id;

  const disease = await getDisease(id);

  if (disease !== undefined) {
    return {
      title: id,
      openGraph: {
        images: [disease.image_1],
      },
    };
  } else return null;
}

export default function DiseasePage({ searchParams }: any) {
  const productId = searchParams?.id;
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
