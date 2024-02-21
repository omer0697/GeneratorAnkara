import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ankara Jeneratör",
  description: "Sektörde 20 yıldır hizmet veren Ankara Jeneratör, jeneratör kiralama, jeneratör satışı, jeneratör bakımı, jeneratör yedek parça ve jeneratör servisi konularında hizmet vermektedir.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
