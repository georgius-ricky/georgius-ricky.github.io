import type { Metadata } from "next";
import "./globals.css";

import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: "Ricky's",
  description: "Portfolio Created By Ricky",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="bg-gray-300 dark:bg-gray-600 dark:text-gray-200">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
