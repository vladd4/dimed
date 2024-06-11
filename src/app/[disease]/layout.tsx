import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DIMED | Disease",
  description: "DIMED | Disease",
};

export default function DiseaseLayout({
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
