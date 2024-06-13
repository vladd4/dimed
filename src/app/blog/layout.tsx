import AlertForm from "@/components/AlertForm/AlertForm";
import Footer from "@/components/Footer/Footer";
import Hamburger from "@/components/Header/Hamburger";
import Header from "@/components/Header/Header";
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
      <body>
        <Header />
        <Hamburger />
        {children}

        <AlertForm />
      </body>
    </html>
  );
}
