import type { Metadata } from "next";
import "../styles/globals.scss";
import ReduxProvider from "@/redux/ReduxProvider";
import Header from "@/components/Header/Header";
import Hamburger from "@/components/Header/Hamburger";
import Footer from "@/components/Footer/Footer";
import AlertForm from "@/components/AlertForm/AlertForm";

export const metadata: Metadata = {
  title: "DIMED",
  description: "DIMED",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>
        <ReduxProvider>
          <Header />
          <Hamburger />
          {children}
          <Footer />
          <AlertForm />
        </ReduxProvider>
      </body>
    </html>
  );
}
