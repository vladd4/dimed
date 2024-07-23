import type { Metadata } from "next";
import "../../styles/globals.scss";

export const metadata: Metadata = {
  description:
    "Безопераційне відновлення хребта та суглобів у Вінниці. Консультація невролога, вертебролога, високоінтенсивні фіз. процедури, лікувальний масаж.",
  openGraph: {
    description:
      "Безопераційне відновлення хребта та суглобів у Вінниці. Консультація невролога, вертебролога, високоінтенсивні фіз. процедури, лікувальний масаж.",
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
