import type { Metadata } from "next";
import "../styles/globals.scss";
import ReduxProvider from "@/redux/ReduxProvider";

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
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
