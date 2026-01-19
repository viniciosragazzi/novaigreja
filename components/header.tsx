"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Menu, X } from "lucide-react"

const menuItems = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Preços", href: "#precos" },
  { label: "Suporte", href: "#suporte" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="py-6">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-nova-igreja.svg"
            alt="Nova Igreja"
            width={140}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Menu - navegação central */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors px-4 py-2"
          >
            Entrar
          </Link>
          <Link
            href="/register"
            className="flex items-center gap-2 bg-nova-dark text-background px-5 py-2.5 rounded-full text-sm font-medium hover:bg-nova-dark/90 transition-colors"
          >
            CADASTRAR
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-4 border-b border-border">
          <nav className="flex flex-col items-center gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/login" className="text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>
              Entrar
            </Link>
            <Link
              href="/register"
              className="flex items-center gap-2 bg-nova-dark text-background px-5 py-2.5 rounded-full text-sm font-medium"
            >
              CADASTRAR
              <ArrowRight className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
