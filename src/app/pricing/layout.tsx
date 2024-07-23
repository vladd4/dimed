import type { Metadata } from "next";
import "../../styles/globals.scss";

export const metadata: Metadata = {
  title: "Ціни на послуги | DIMED",
  description:
    "Безопераційне відновлення хребта та суглобів у Вінниці. Консультація невролога, вертебролога, високоінтенсивні фіз. процедури, лікувальний масаж.",
  openGraph: {
    title: "Ціни на послуги | DIMED",
    description:
      "Безопераційне відновлення хребта та суглобів у Вінниці. Консультація невролога, вертебролога, високоінтенсивні фіз. процедури, лікувальний масаж.",
    type: "website",
    siteName: "Dimed",
  },
};

export default function PricingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
