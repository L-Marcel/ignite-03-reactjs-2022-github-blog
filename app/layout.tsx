import { ReactNode } from "react";
import "../src/styles/main.scss";
import { Nunito } from "@next/font/google";
import { Header } from "../src/components/Header";

const nunito = Nunito({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--nunito-font"
});

export default function AppLayout({ children }: {
  children: ReactNode
}) {
  return (
    <html className={nunito.variable} lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}