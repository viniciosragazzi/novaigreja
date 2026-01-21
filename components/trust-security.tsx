"use client"

import { Shield, Cloud, Lock, Server } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function TrustSecurity() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="blur-fade">
            <span className="text-sm font-medium text-nova-dark bg-nova-yellow/20 px-4 py-2 rounded-full">
              Segurança
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-6 mb-4 text-balance">
              Segurança de Nível Bancário
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Criptografia ponta a ponta para proteger cada ovelha do seu rebanho. Seus dados e os de seus membros estão
              seguros conosco.
            </p>

            <div className="space-y-4">
              {[
                { icon: Lock, text: "Criptografia AES-256" },
                { icon: Cloud, text: "Backup automático em nuvem" },
                { icon: Server, text: "Servidores redundantes" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-base">
                  <div className="w-10 h-10 rounded-lg bg-nova-yellow/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-nova-dark" />
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="spring-up" delay={200}>
            <div className="relative flex items-center justify-center">
              {/* Central lock illustration */}
              <div className="relative">
                {/* Glowing rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full border-2 border-nova-yellow/20 animate-pulse" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-48 h-48 rounded-full border-2 border-nova-yellow/30 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-32 h-32 rounded-full border-2 border-nova-yellow/40 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />
                </div>

                {/* Central shield */}
                <div className="relative w-24 h-24 bg-nova-yellow rounded-2xl flex items-center justify-center shadow-2xl shadow-nova-yellow/30 animate-float">
                  <Shield className="w-12 h-12 text-nova-dark" />
                </div>

                {/* Floating cloud icons */}
                <div
                  className="absolute -top-8 -right-8 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center animate-float"
                  style={{ animationDelay: "0.5s" }}
                >
                  <Cloud className="w-6 h-6 text-nova-dark" />
                </div>
                <div
                  className="absolute -bottom-8 -left-8 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <Lock className="w-6 h-6 text-nova-dark" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
