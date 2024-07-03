import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DIMED | Наші послуги",
  description:
    "Наша команда надає ряд послуг, а саме консультації невролога, вертебролога, сучасні високоінтенсивні фізіотерапевтичні процедури, якісний лікувальний масаж, комплексну індивідуально підібрану лікувальну фізкультуру.",
  openGraph: {
    title: "DIMED | Наші послуги",
    description:
      "Наша команда надає ряд послуг, а саме консультації невролога, вертебролога, сучасні високоінтенсивні фізіотерапевтичні процедури, якісний лікувальний масаж, комплексну індивідуально підібрану лікувальну фізкультуру.",
    type: "website",
    siteName: "Dimed",
  },
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
