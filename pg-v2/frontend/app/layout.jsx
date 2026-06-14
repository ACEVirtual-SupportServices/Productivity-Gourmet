import { Playwrite_GB_S, Syne, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "../styles/globals.scss";

const fontHeading = Playwrite_GB_S({
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

const fontSans = Syne({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  
  title: {
    default: "Productivity Gourmet",
    template: "%s | Productivity Gourmet", 
  },
  description: "Operational support for service providers, executives, and creators.",
  
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",

  // 4. OPEN GRAPH (For LinkedIn, Facebook, iMessage, Slack)
  openGraph: {
    title: "Productivity Gourmet",
    description: "Operational support for service providers, executives, and creators.",
    url: "/",
    siteName: "Productivity Gourmet",
    images: [
      {
        url: "https://placehold.co/1200x630/121A1A/007575.png?text=Productivity+Gourmet", 
        width: 1200,
        height: 630,
        alt: "Productivity Gourmet - Operations & Client Communications",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  
  // 5. TWITTER 
  twitter: {
    card: "summary_large_image",
    title: "Productivity Gourmet",
    description: "Operational support for service providers, executives, and creators.",
    images: ["https://placehold.co/1200x630/121A1A/007575.png?text=Productivity+Gourmet"], 
  },
  
  // openGraph: {
  //   title: "Productivity Gourmet",
  //   description: "Operational support for service providers, executives, and creators.",
  //   url: "/",
  //   siteName: "Productivity Gourmet",
  //   images: [
  //     {
  //       url: "/og-default.png",
  //       width: 1200,
  //       height: 630,
  //       alt: "Productivity Gourmet - Operations & Client Communications",
  //     },
  //   ],
  //   locale: "en_GB",
  //   type: "website",
  // },
  
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Productivity Gourmet",
  //   description: "Operational support for service providers, executives, and creators.",
  //   images: ["/og-default.png"], 
  // },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontSans.variable} ${fontHeading.variable} ${fontMono.variable}`}
    >
      {/* killswitch to prevent extension injection crashes */}
      <body suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}