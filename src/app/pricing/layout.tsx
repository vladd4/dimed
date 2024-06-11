import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DIMED | Pricing",
  description: "DIMED | Pricing",
};

export default function PricingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
