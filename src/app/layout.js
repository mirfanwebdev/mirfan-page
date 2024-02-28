import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Header from "./components/header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "M. Irfan ",
  description:
    "M. irfan is former biologist who currently career switching to front end web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        <div className="main-container">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
