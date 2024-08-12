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
      <body className={`bg-background text-primary ${inter.className}`}>
        <div className="shad">
          <header className="h-[60px] cont flex items-center">
            <img src="/rc.svg" className="h-8" alt="Richclicks" />
          </header>
        </div>
        {children}
      </body>
    </html>
  );
}
