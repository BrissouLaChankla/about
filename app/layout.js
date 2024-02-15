import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
const sora = Sora({ subsets: ["latin"] });

export const metadata = {
  title: "Brice Eliasse - Formateur & Développeur web Freelance sur Nice",
  description: "Développeur web / formateur sur Nice et dans les Alpes-Maritimes. J'enseigne et utilise principalement Laravel, Javascript et Next.js pour la création de sites.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className={sora.className}>
        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}
