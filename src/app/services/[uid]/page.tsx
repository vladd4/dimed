import ServiceDetailsPage from "@/components/ServiceDetailsPage/ServiceDetailsPage";
import { getServiceById } from "@/controllers/services";

export async function generateMetadata({ searchParams }: any) {
  const productId = searchParams.id;

  const service_item = await getServiceById(productId);

  if (service_item !== undefined) {
    return {
      title: productId,
      openGraph: {
        images: [service_item.image],
      },
    };
  } else return null;
}

export default function ServDetails({ searchParams }: any) {
  const productId = searchParams.id;
  return <ServiceDetailsPage id={productId} />;
}
