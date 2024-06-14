import type { Metadata } from "next";
import "../styles/globals.scss";
import ReduxProvider from "@/redux/ReduxProvider";

export const metadata: Metadata = {
  title: "Dimed - центр вертебрології та реабілітації у Вінниці",
  description:
    "Наша команда надає ряд послуг, а саме консультації невролога, вертебролога, сучасні високоінтенсивні фізіотерапевтичні процедури, якісний лікувальний масаж, комплексну індивідуально підібрану лікувальну фізкультуру.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
