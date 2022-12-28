import { ReactNode } from "react";
import { AppBody } from "../src/layout/styles";
import "../src/styles/main.scss";
import { Nunito } from "@next/font/google";

const nunito = Nunito({ 
  subsets: ["latin"],
  weight: ["400", "800"],
  variable: "--nunito-font"
});

export default function AppLayout({ children }: {
  children: ReactNode
}) {
  return (
    <html className={nunito.variable} lang="en">
      <AppBody>
        {children}
      </AppBody>
    </html>
  );
}