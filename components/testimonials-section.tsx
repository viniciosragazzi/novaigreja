"use client"

import { Quote } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const testimonials = [
  {
    quote:
      "Antes eu passava horas organizando escalas. Agora o Nova Igreja faz isso em segundos e ainda avisa os voluntários pelo WhatsApp.",
    author: "Pr. Roberto Almeida",
    church: "Igreja Batista Central",
    role: "Pastor Titular",
  },
  {
    quote:
      "A IA me avisou que a Dona Maria não vinha há 3 semanas. Fiz uma visita e ela estava passando por um momento difícil. Isso é pastoreio de verdade.",
    author: "Pra. Juliana Santos",
    church: "Comunidade Graça e Paz",
    role: "Pastora de Cuidado",
  },
  {
    quote:
      "Os relatórios financeiros são tão claros que até nossa assembleia entende. Transparência nunca foi tão fácil.",
    author: "Diác. Fernando Lima",
    church: "Igreja Presbiteriana Renovada",
    role: "Tesoureiro",
  },
  {
    quote: "O check-in do berçário deu paz para as mães e segurança para nós. Nenhuma criança sai sem o QR Code certo.",
    author: "Ana Paula Costa",
    church: "Igreja Metodista Wesleyana",
    role: "Líder do Ministério Infantil",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="blur-fade" className="text-center mb-12">
          <span className="text-sm font-medium text-nova-dark bg-nova-yellow/20 px-4 py-2 rounded-full">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-6 mb-4 text-balance">
            Histórias reais de quem recuperou a paz no domingo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Relatos de líderes que simplificaram a gestão e focaram no que importa.
          </p>
        </AnimatedSection>

        {/* Testimonials marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-[350px] mx-3">
                <div className="glass rounded-3xl p-6 h-full">
                  <Quote className="w-8 h-8 text-nova-yellow mb-4" />
                  <p className="text-sm text-foreground leading-relaxed mb-4">"{testimonial.quote}"</p>
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.church}</p>
                    <p className="text-xs text-nova-yellow">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
