"use client"

import { User, Users, HeartHandshake, ArrowRight } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function PersonasSection() {
  return (
    <section id="personas" className="py-24 lg:py-32 relative bg-muted/30">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-nova-yellow/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-nova-yellow/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative">
        <AnimatedSection animation="blur-fade" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-nova-yellow/20 text-nova-dark text-sm font-medium mb-4">
            Para Quem
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
            Feito para <span className="highlight-marker">quem faz a igreja acontecer</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Cada pessoa na sua comunidade tem necessidades únicas. O Nova Igreja entende isso.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatedSection animation="spring-up" delay={0}>
            <div className="group relative rounded-2xl bg-card border border-border/50 p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-nova-yellow/10 hover:-translate-y-2 overflow-hidden h-full">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-nova-yellow/5 to-transparent"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-nova-yellow/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-nova-yellow/20 transition-all duration-300">
                  <User className="w-8 h-8 text-nova-dark" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Para Pastores</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Visão estratégica completa. Acompanhe a saúde espiritual e o crescimento do seu rebanho em tempo real.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Dashboard executivo com métricas-chave",
                    "Alertas de membros que precisam de cuidado",
                    "Relatórios de crescimento e engajamento",
                    "Visão 360° da comunidade",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <div className="w-5 h-5 rounded-full bg-nova-yellow/10 flex items-center justify-center mt-0.5 shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-nova-dark"></div>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent p-0 h-auto font-semibold text-nova-dark hover:text-nova-dark/80 group/btn">
                  Saiba mais
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="spring-up" delay={150}>
            <div className="group relative rounded-2xl bg-card border border-border/50 p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-nova-yellow/10 hover:-translate-y-2 overflow-hidden h-full">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-nova-yellow/5 to-transparent"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-nova-yellow/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-nova-yellow/20 transition-all duration-300">
                  <Users className="w-8 h-8 text-nova-dark" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Para Líderes</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Gestão de ministérios simplificada. Organize voluntários e escalas sem dor de cabeça.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Escalas automáticas com confirmação WhatsApp",
                    "Gestão de equipes e ministérios",
                    "Comunicação direta com voluntários",
                    "Relatórios de participação",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <div className="w-5 h-5 rounded-full bg-nova-yellow/10 flex items-center justify-center mt-0.5 shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-nova-dark"></div>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent p-0 h-auto font-semibold text-nova-dark hover:text-nova-dark/80 group/btn">
                  Saiba mais
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="spring-up" delay={300}>
            <div className="group relative rounded-2xl bg-card border border-border/50 p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-nova-yellow/10 hover:-translate-y-2 overflow-hidden h-full">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-nova-yellow/5 to-transparent"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-nova-yellow/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-nova-yellow/20 transition-all duration-300">
                  <HeartHandshake className="w-8 h-8 text-nova-dark" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Para Membros</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Conexão fluida com a comunidade. Participe ativamente e nunca perca um evento importante.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Notificações de eventos e escalas",
                    "Confirmação de presença simplificada",
                    "Acesso ao diretório da igreja",
                    "Histórico de participação",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <div className="w-5 h-5 rounded-full bg-nova-yellow/10 flex items-center justify-center mt-0.5 shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-nova-dark"></div>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent p-0 h-auto font-semibold text-nova-dark hover:text-nova-dark/80 group/btn">
                  Saiba mais
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Mais de <span className="font-bold text-foreground">500 igrejas</span> já transformaram sua gestão com o
            Nova Igreja
          </p>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md glossy-btn bg-nova-yellow hover:bg-nova-yellow/90 text-nova-dark font-bold px-8">
            Começar Gratuitamente
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  )
}