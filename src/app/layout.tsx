import type { Metadata } from "next";
import "../styles/globals.scss";
import ReduxProvider from "@/redux/ReduxProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Hamburger from "@/components/Header/Hamburger";
import AlertForm from "@/components/AlertForm/AlertForm";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "DIMED - центр вертебрології та реабілітації у Вінниці",
  description:
    "Наша команда надає ряд послуг, а саме консультації невролога, вертебролога, сучасні високоінтенсивні фізіотерапевтичні процедури, якісний лікувальний масаж, комплексну індивідуально підібрану лікувальну фізкультуру.",
  assets: ["https://dimed.vn.ua/"],
  openGraph: {
    title: "DIMED - центр вертебрології та реабілітації у Вінниці",
    description:
      "Наша команда надає ряд послуг, а саме консультації невролога, вертебролога, сучасні високоінтенсивні фізіотерапевтичні процедури, якісний лікувальний масаж, комплексну індивідуально підібрану лікувальну фізкультуру.",
    type: "website",
    siteName: "Dimed",
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
