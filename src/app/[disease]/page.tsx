import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import DiseaseBlock from "@/components/DiseaseBlock/DiseaseBlock";

import { getDisease } from "@/controllers/disease";
import { decrypt } from "@/utils/stringEncryptor";

export async function generateMetadata({ searchParams }: any) {
  const id = searchParams?.id;
  const decryptedId = decrypt(id);
  const disease = await getDisease(decryptedId);

  if (disease !== undefined) {
    return {
      title: decryptedId,
      openGraph: {
        images: [disease.image_1],
      },
    };
  } else return null;
}

export default function DiseasePage({ searchParams }: any) {
  const productId = searchParams?.id;
  const decryptedId = decrypt(productId);
  return (
    <>
      <BreadCrumbs
        link_href={`/disease?id=${decryptedId}`}
        link_label={`${decryptedId}`}
      />
      <DiseaseBlock id={`${decryptedId}`} />
    </>
  );
}
