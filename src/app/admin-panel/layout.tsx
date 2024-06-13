import AdminHeader from "@/components/AdminPanel/AdminHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DIMED | Admin",
  description: "DIMED | Admin",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>
        <AdminHeader />
        {children}
      </body>
    </html>
  );
}
