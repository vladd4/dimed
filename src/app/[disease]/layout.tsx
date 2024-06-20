import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DIMED | Детальний опис захворювання",
  description:
    "Наша команда надає ряд послуг, а саме консультації невролога, вертебролога, сучасні високоінтенсивні фізіотерапевтичні процедури, якісний лікувальний масаж, комплексну індивідуально підібрану лікувальну фізкультуру.",
};

export default function DiseaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
