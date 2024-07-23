import type { Metadata } from "next";
import "../styles/globals.scss";
import ReduxProvider from "@/redux/ReduxProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Hamburger from "@/components/Header/Hamburger";
import AlertForm from "@/components/AlertForm/AlertForm";
import { ToastContainer } from "react-toastify";
import Script from "next/script";

export const metadata: Metadata = {
  title: "DIMED - центр вертебрології та реабілітації у Вінниці",
  description:
    "Безопераційне відновлення хребта та суглобів у Вінниці. Консультація невролога, вертебролога, високоінтенсивні фіз. процедури, лікувальний масаж.",
  assets: ["https://dimed.vn.ua/"],
  openGraph: {
    title: "DIMED - центр вертебрології та реабілітації у Вінниці",
    description:
      "Безопераційне відновлення хребта та суглобів у Вінниці. Консультація невролога, вертебролога, високоінтенсивні фіз. процедури, лікувальний масаж.",
    type: "website",
    siteName: "DIMED",
    url: "https://dimed.vn.ua/",
  },
  metadataBase: new URL("https://dimed.vn.ua/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8LRPZ84Q1L"
        ></Script>
        <Script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8LRPZ84Q1L');
          `}
        </Script>
        <meta property="author" content="vladdonets" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <meta
          name="google-site-verification"
          content="3Bx8YPxhp1yGn-NYElVeQyzLptKEu1PmTChP9V267hk"
        />
        <link rel="canonical" href="https://dimed.vn.ua/" />
        <link
          rel="icon"
          href="https://dimed.vn.ua/favicon.ico"
          type="image/x-icon"
        />
      </head>
      <body>
        <ReduxProvider>
          <main className="main">
            <Header />
            <ToastContainer />
            <Hamburger />
            {children}
            <Footer />
            <AlertForm />
          </main>
        </ReduxProvider>
      </body>
    </html>
  );
}
