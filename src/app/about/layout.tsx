import type { Metadata } from "next";
import "../../styles/globals.scss";

export const metadata: Metadata = {
  title: "DIMED - центр вертебрології та реабілітації у Вінниці",
  description:
    "Безопераційне відновлення хребта та суглобів у Вінниці. Консультація невролога, вертебролога, високоінтенсивні фіз. процедури, лікувальний масаж.",
  openGraph: {
    title: "DIMED - центр вертебрології та реабілітації у Вінниці",
    description:
      "Безопераційне відновлення хребта та суглобів у Вінниці. Консультація невролога, вертебролога, високоінтенсивні фіз. процедури, лікувальний масаж.",
    type: "website",
    siteName: "Dimed",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
