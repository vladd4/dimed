import type { Metadata } from "next";
import "../../styles/globals.scss";

export const metadata: Metadata = {
  description:
    "Наша команда надає ряд послуг, а саме консультації невролога, вертебролога, сучасні високоінтенсивні фізіотерапевтичні процедури, якісний лікувальний масаж, комплексну індивідуально підібрану лікувальну фізкультуру.",
  openGraph: {
    description:
      "Наша команда надає ряд послуг, а саме консультації невролога, вертебролога, сучасні високоінтенсивні фізіотерапевтичні процедури, якісний лікувальний масаж, комплексну індивідуально підібрану лікувальну фізкультуру.",
    type: "website",
    siteName: "Dimed",
  },
};

export default function DiseaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
