import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DIMED | Blog",
  description: "DIMED | Blog",
};

export default function BlogLayout({
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
