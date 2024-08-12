import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RC interviews test",
  description: "Richclicks interviews",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-background text-primary min-h-screen flex flex-col ${inter.className}`}
      >
        <header className="shad">
          <div className="h-[60px] cont flex items-center">
            <img src="/rc.svg" className="h-8" alt="Richclicks" />
          </div>
        </header>
        <div className="flex-grow">{children}</div>
        <footer className="border-t border-primary">
          <div className="cont flex items-center h-[60px]">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Richclicks. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
