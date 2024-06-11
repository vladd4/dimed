import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DIMED | About",
  description: "DIMED | About",
};

export default function AboutLayout({
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
