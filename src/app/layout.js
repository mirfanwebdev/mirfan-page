import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Header from "./components/header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: "/icon.svg",
  },
  title: "M. Irfan - Web Developer",
  description:
    "M. Irfan is science and tech enthusiast who pursue his passion in web development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main>
          <div className="container">
            <div className="header-container">
              <Navbar />
              <Header />
            </div>
            <div className="main-container">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
