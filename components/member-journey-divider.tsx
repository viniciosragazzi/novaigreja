"use client"

import { ArrowRight, User, UserCheck, Heart } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const journeySteps = [
  { icon: User, label: "Visitante", color: "bg-gray-200" },
  { icon: UserCheck, label: "Integrado", color: "bg-nova-yellow/50" },
  { icon: Heart, label: "Voluntário", color: "bg-nova-yellow" },
]

export function MemberJourneyDivider() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <AnimatedSection animation="blur-fade" className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {journeySteps.map((step, index) => (
            <div key={step.label} className="flex items-center gap-4">
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center transition-all duration-300 hover:scale-110`}
                >
                  <step.icon className="w-8 h-8 text-nova-dark" />
                </div>
                <span className="text-sm font-medium text-foreground">{step.label}</span>
              </div>
              {index < journeySteps.length - 1 && (
                <ArrowRight className="w-6 h-6 text-muted-foreground hidden sm:block" />
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-6 text-sm">
          Acompanhe a jornada de cada membro em sua comunidade
        </p>
      </AnimatedSection>
    </section>
  )
}
