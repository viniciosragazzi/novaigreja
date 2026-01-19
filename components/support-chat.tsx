"use client"

import { MessageCircle } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { useState } from "react"

const teamMembers = [
  { name: "Ana", role: "Suporte", initial: "A" },
  { name: "Carlos", role: "Onboarding", initial: "C" },
  { name: "Maria", role: "Sucesso", initial: "M" },
]

export function SupportChat() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="blur-fade" className="space-y-6">
            <span className="text-xs font-medium text-nova-dark bg-nova-yellow/20 px-3 py-1.5 rounded-full">
              Suporte Humano
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-balance">
              Você nunca estará sozinho no suporte
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Não falamos "tecniquês". Nossa equipe fala a língua da igreja. Estamos aqui para servir.
            </p>

            {/* Team faces */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {teamMembers.map((member) => (
                  <div
                    key={member.name}
                    className="w-12 h-12 rounded-full bg-nova-yellow flex items-center justify-center border-3 border-background text-nova-dark font-bold text-sm"
                    title={`${member.name} - ${member.role}`}
                  >
                    {member.initial}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Nossa equipe de cuidado</p>
                <p className="text-xs text-muted-foreground">Resposta média: 15 minutos</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="spring-up" delay={200} className="relative">
            {/* Chat mockup */}
            <div className="bg-background rounded-3xl p-5 soft-shadow-lg border border-border">
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <div className="w-10 h-10 rounded-full bg-nova-yellow flex items-center justify-center">
                  <span className="text-nova-dark font-bold text-sm">A</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Ana do Suporte</p>
                  <p className="text-xs text-green-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Online agora
                  </p>
                </div>
              </div>

              <div className="py-4 space-y-3">
                <div className="flex justify-start">
                  <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%]">
                    <p className="text-sm text-foreground">Olá! Como posso ajudar sua igreja hoje?</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-nova-yellow/20 rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                    <p className="text-sm text-foreground">Estou com dúvida sobre as escalas...</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%]">
                    <p className="text-sm text-foreground">
                      Claro! Vou te mostrar como configurar. É bem simples, você vai ver.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center gap-2 bg-muted rounded-xl px-4 py-2.5">
                  <input
                    type="text"
                    placeholder="Digite sua mensagem..."
                    className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                  />
                  <button className="w-8 h-8 rounded-lg bg-nova-yellow flex items-center justify-center hover:bg-nova-yellow/80 transition-colors">
                    <MessageCircle className="w-4 h-4 text-nova-dark" />
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Floating WhatsApp button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all hover:scale-110 z-50 animate-pulse-soft"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </button>
    </section>
  )
}
