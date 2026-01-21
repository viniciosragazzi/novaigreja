"use client"

import type React from "react"
import { useState } from "react"
import { MessageCircle, Mail, Clock, Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    challenge: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 relative bg-muted/30 ">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-nova-yellow/5 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-nova-yellow/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-nova-yellow/20 text-nova-dark text-xs font-medium mb-4">
              Contato
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-6 leading-tight">
              Ainda tem dúvidas? <span className="highlight-marker">Vamos conversar</span>
            </h2>
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
              De líder para líder. Nossa equipe entende os desafios da gestão eclesiástica porque vivemos isso também.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border/50">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">WhatsApp</h3>
                  <p className="text-xs text-muted-foreground">Resposta em até 2 horas</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border/50">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Email</h3>
                  <p className="text-xs text-muted-foreground">contato@novaigreja.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border/50">
                <div className="w-12 h-12 rounded-xl bg-nova-yellow/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-nova-dark" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Horário de Atendimento</h3>
                  <p className="text-xs text-muted-foreground">Seg a Sex, 8h às 18h</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                  <span className="text-[10px] font-medium text-muted-foreground">1</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                  <span className="text-[10px] font-medium text-muted-foreground">2</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                  <span className="text-[10px] font-medium text-muted-foreground">3</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                  <span className="text-[10px] font-medium text-muted-foreground">4</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground ml-2">Equipe pronta para te ajudar</p>
            </div>
          </div>
          <div className="bg-background rounded-2xl border border-border/50 p-8 shadow-xl">
            <h3 className="text-lg font-bold mb-2">Envie sua mensagem</h3>
            <p className="text-xs text-muted-foreground mb-6">Responderemos o mais rápido possível</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label
                  className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="name"
                >
                  Seu Nome
                </label>
                <input
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-xs file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-xs h-10"
                  id="name"
                  placeholder="Como podemos te chamar?"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  E-mail da Igreja
                </label>
                <input
                  type="email"
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-xs file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-xs h-10"
                  id="email"
                  placeholder="contato@suaigreja.com.br"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="challenge"
                >
                  Qual sua maior dificuldade hoje?
                </label>
                <textarea
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-xs ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                  id="challenge"
                  placeholder="Conte-nos um pouco sobre os desafios da gestão da sua igreja..."
                  required
                  rows={4}
                  value={formData.challenge}
                  onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                />
              </div>
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 px-4 py-2 w-full h-10 bg-nova-yellow hover:bg-nova-yellow/90 text-nova-dark font-semibold glossy-btn"
                type="submit"
              >
                Enviar Mensagem
                <Send className="w-4 h-4 ml-2" />
              </button>
              <p className="text-[10px] text-center text-muted-foreground">
                Ao enviar, você concorda com nossa política de privacidade
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
