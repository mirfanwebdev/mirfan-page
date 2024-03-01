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
        <div className="header-container">
          <Navbar />
          <Header />
        </div>
        <main className="main-container">{children}</main>
      </body>
    </html>
  );
}
