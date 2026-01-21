import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

const footerLinks = ["Sobre nós", "Segurança", "Ajuda", "Blog"]

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
                        <Image src="/logo-nova-igreja.svg" alt="Nova Igreja" width={140} height={40} className="h-10 w-auto" />
            
          </div>

          <nav className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-nova-yellow/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-foreground" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-nova-yellow/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-foreground" />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground mb-2">Nova Igreja - Tecnologia inteligente para o serviço do Reino.</p>
          <p className="text-sm text-muted-foreground">© 2026 Nova Igreja. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
