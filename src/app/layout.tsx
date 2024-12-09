import "@/styles/globals.css"
import "@/styles/mdx.css"

import * as React from "react"
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/react"

import { fontHeading, fontInter, fontUrbanist } from "@/config/fonts"
import { siteConfig } from "@/config/site"

import { SmoothScrollProvider } from "@/providers/smooth-scroll-provider"
import { ThemeProvider } from "@/providers/theme-provider"
import { cn } from "@/lib/utils"

import { Toaster } from "@/components/ui/toaster"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import CustomWhatsAppWidget from "@/components/WhatsappWidget"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Dissertation Writer Help in UK",
    template: `%s - Dissertation Writer Help`,
  },
  description:
    "Expert dissertation writer help in the UK! Specialized support in law, business, nursing; from topic selection to editing. Affordable & trusted.",
  authors: [
    {
      name: siteConfig.author,
    },
  ],
  creator: siteConfig.author,
  keywords: siteConfig.keywords,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Dissertation Writer Help in UK",
    description:
      "Expert dissertation writer help in the UK! Specialized support in law, business, nursing; from topic selection to editing. Affordable & trusted.",
    siteName: "Dissertation Writer Help",
    images: [
      {
        url: siteConfig.links.openGraphImage,
        width: 1200,
        height: 630,
        alt: "Dissertation Writer Help in UK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Get Dissertation Writer Help from UK Experts - Trusted Dissertation Assistance",
    description:
      "Need help with your dissertation? Contact our UK-based team for personalized support at every stage. Trusted by students in law, business, nursing, and more. Affordable, expert help is just a click away.",
    images: [siteConfig.links.openGraphImage],
    creator: siteConfig.author,
  },
  icons: {
    icon: "/favicon.ico",
  },
  // Optional manifest for PWA capabilities
  // manifest: `${siteConfig.url}/site.webmanifest`,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en" className="overflow-x-hidden overflow-y-scroll">
      <body
        className={cn(
          "w-full bg-background bg-gradient-to-r from-background to-pink-400/10 font-sans antialiased",
          fontInter.variable,
          fontUrbanist.variable,
          fontHeading.variable
        )}
      >
        <SmoothScrollProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
            <Analytics />
            <TailwindIndicator />
            <CustomWhatsAppWidget />
            <Script
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                  (function(){
                    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                    s1.async=true;
                    s1.src='https://embed.tawk.to/67382c952480f5b4f59edfc8/1icpmsb87';
                    s1.charset='UTF-8';
                    s1.setAttribute('crossorigin','*');
                    s0.parentNode.insertBefore(s1,s0);
                  })();
                `,
              }}
            />
          </ThemeProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
