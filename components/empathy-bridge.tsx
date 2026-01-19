"use client"

import { Clock, Eye, Heart } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const empathyPoints = [
  {
    icon: Clock,
    text: "Para que você tenha tempo de preparar a mensagem sem ser interrompido por escalas vazias.",
  },
  {
    icon: Eye,
    text: "Para que cada membro sinta que é visto, mesmo quando a igreja cresce.",
  },
  {
    icon: Heart,
    text: "Para que a gestão financeira seja um testemunho e não um fardo.",
  },
]

export function EmpathyBridge() {
  return (
    <section id="por-que-nos" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="blur-fade" className="space-y-6">
            <span className="text-xs font-medium text-nova-dark bg-nova-yellow/20 px-3 py-1.5 rounded-full">
              Por que nós
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-balance">
              Por que o Nova Igreja na minha comunidade?
            </h2>

            <div className="space-y-5">
              {empathyPoints.map((point, index) => (
                <AnimatedSection
                  key={index}
                  animation="spring-up"
                  delay={index * 150}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-nova-yellow/10 flex items-center justify-center flex-shrink-0 group-hover:bg-nova-yellow transition-colors">
                    <point.icon className="w-5 h-5 text-nova-dark" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pt-2">{point.text}</p>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="spring-up" delay={300} className="relative">
            <div className="relative rounded-3xl overflow-hidden soft-shadow-lg">
              <img
                src="/pastor-smiling-with-tablet-modern-church-warm-ligh.jpg"
                alt="Pastor usando o Nova Igreja com tranquilidade"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nova-dark/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-sm font-medium">
                  "Finalmente tenho tempo para o que realmente importa: cuidar das pessoas."
                </p>
                <p className="text-white/80 text-xs mt-1">Pr. Marcos Silva, Igreja Vida Nova</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
