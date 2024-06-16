import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DIMED | Doctors",
  description: "DIMED | Doctors",
};

export default function DoctorsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
