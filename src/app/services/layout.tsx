import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DIMED | Services",
  description: "DIMED | Services",
};

export default function ServicesLayout({
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
