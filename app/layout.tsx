import type { Metadata } from "next";
import { Raleway,Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "TriageHome | Revolutionizing Healthcare Access",
    template: "%s | TriageHome"
  },
  description: "TriageHome provides premium healthcare services including VIP concierge, standard nursing, and corporate partnerships. Bringing quality care to your doorstep.",
  keywords: [
    "healthcare Nigeria", 
    "home nursing services", 
    "VIP medical concierge", 
    "TriageHome", 
    "mobile clinical services", 
    "corporate wellness Nigeria",
    "at-home medical care"
  ],
  authors: [{ name: "TriageHome Team" }],
  creator: "TriageHome",
  publisher: "TriageHome",
  openGraph: {
    title: "TriageHome | Revolutionizing Healthcare Access",
    description: "Premium healthcare services at your convenience. Join TriageHome for a new standard of care.",
    url: "https://triagehome.com",
    siteName: "TriageHome",
    images: [
      {
        url: "/heroImg.png", // Using existing hero image as OG image for now
        width: 1200,
        height: 630,
        alt: "TriageHome - Healthcare at your doorstep",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TriageHome | Revolutionizing Healthcare Access",
    description: "Premium healthcare services at your convenience. Join TriageHome for a new standard of care.",
    images: ["/heroImg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${raleway.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
