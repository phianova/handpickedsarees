import { Inter } from "next/font/google";
import "./globals.css";
import MobileNavBar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";
import { Toaster } from "../components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alamara",
  description: "Handpicked sarees",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
      <MobileNavBar></MobileNavBar>
      <NavBar></NavBar>
      {children}
      <Toaster></Toaster>
      </body>
    </html>
  );
}
