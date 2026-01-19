import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nova Igreja - A plataforma definitiva para a gestão da igreja moderna",
  description:
    "Um software inteligente, completo e em constante evolução. Do gerenciamento de membros à automação de escalas via WhatsApp, centralize sua operação no Nova Igreja.",
  keywords: [
    "igreja",
    "gestão",
    "voluntários",
    "escala",
    "whatsapp",
    "software para igreja",
    "membros",
    "secretaria digital",
  ],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
