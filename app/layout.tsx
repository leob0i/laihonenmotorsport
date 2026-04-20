import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Leon Korjaamo - Luotettava autokorjaamo",
  description:
    "Leon Korjaamo tarjoaa laadukasta autohuoltoa ja korjauspalvelua kaikille automerkeille. 2 vuoden takuu kaikelle tyolle. BMW ja Mercedes-Benz erikoishuollot.",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fi" className="bg-background">
      <body className={inter.className}>
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
