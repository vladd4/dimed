import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DIMED | Ціни на послуги",
  description:
    "Наша команда надає ряд послуг, а саме консультації невролога, вертебролога, сучасні високоінтенсивні фізіотерапевтичні процедури, якісний лікувальний масаж, комплексну індивідуально підібрану лікувальну фізкультуру.",
};

export default function PricingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
