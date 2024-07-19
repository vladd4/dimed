import ServiceDetailsPage from "@/components/ServiceDetailsPage/ServiceDetailsPage";
import { getServiceById } from "@/controllers/services";
import { decrypt } from "@/utils/stringEncryptor";

export async function generateMetadata({ searchParams }: any) {
  const productId = searchParams.id;
  const decryptedId = decrypt(productId);
  const service_item = await getServiceById(decryptedId);

  if (service_item !== undefined) {
    return {
      title: decryptedId,
      openGraph: {
        images: [service_item.image],
      },
    };
  } else return null;
}

export default function ServDetails({ searchParams }: any) {
  const productId = searchParams.id;
  const decryptedId = decrypt(productId);
  return <ServiceDetailsPage id={decryptedId} />;
}
