"use client"

import type React from "react"

import { Send } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { MagneticButton } from "./magnetic-button"
import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    challenge: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 bg-nova-dark">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection animation="blur-fade" className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-balance">
            Ainda tem dúvidas? Vamos conversar de líder para líder.
          </h2>
          <p className="text-sm text-white/70">
            Conte-nos sobre sua igreja e seus desafios. Responderemos em até 24 horas.
          </p>
        </AnimatedSection>

        {isSubmitted ? (
          <AnimatedSection animation="spring-up" className="text-center py-12">
            <div className="w-16 h-16 bg-nova-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-nova-dark" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Mensagem enviada!</h3>
            <p className="text-sm text-white/70">Entraremos em contato em breve. Deus abençoe!</p>
          </AnimatedSection>
        ) : (
          <AnimatedSection animation="spring-up" delay={200}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-white/80 mb-2">Seu Nome</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-nova-yellow transition-colors"
                  placeholder="Como podemos te chamar?"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-white/80 mb-2">E-mail da Igreja</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-nova-yellow transition-colors"
                  placeholder="contato@suaigreja.com.br"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-white/80 mb-2">Qual sua maior dificuldade hoje?</label>
                <textarea
                  value={formData.challenge}
                  onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-nova-yellow transition-colors resize-none h-28"
                  placeholder="Conte-nos um pouco sobre os desafios da gestão da sua igreja..."
                  required
                />
              </div>
              <MagneticButton
                type="submit"
                size="lg"
                glossy
                className="w-full bg-nova-yellow text-nova-dark hover:bg-nova-yellow/90 gap-2"
              >
                Enviar Mensagem
                <Send className="w-4 h-4" />
              </MagneticButton>
            </form>
          </AnimatedSection>
        )}

        <AnimatedSection animation="blur-fade" delay={400} className="text-center mt-12">
          <p className="text-sm text-white/60">
            Você chegou ao fim da página. Se chegou até aqui, é porque sente que sua igreja pode mais.{" "}
            <span className="text-nova-yellow">Vamos juntos?</span>
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
