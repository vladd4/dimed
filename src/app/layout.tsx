import type { Metadata } from "next";
import "../styles/globals.scss";
import ReduxProvider from "@/redux/ReduxProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Hamburger from "@/components/Header/Hamburger";
import AlertForm from "@/components/AlertForm/AlertForm";

export const metadata: Metadata = {
  title: "Dimed - центр вертебрології та реабілітації у Вінниці",
  description:
    "Наша команда надає ряд послуг, а саме консультації невролога, вертебролога, сучасні високоінтенсивні фізіотерапевтичні процедури, якісний лікувальний масаж, комплексну індивідуально підібрану лікувальну фізкультуру.",
  // assets: ["https://dimed.vercel.app/"],
  openGraph: {
    title: "Dimed - центр вертебрології та реабілітації у Вінниці",
    description:
      "Наша команда надає ряд послуг, а саме консультації невролога, вертебролога, сучасні високоінтенсивні фізіотерапевтичні процедури, якісний лікувальний масаж, комплексну індивідуально підібрану лікувальну фізкультуру.",
    type: "website",
    siteName: "Dimed",
    // url: "https://dimed.vercel.app/",
  },
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="" />
      </head>
      <body>
        <ReduxProvider>
          <main className="main">
            <Header />
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
