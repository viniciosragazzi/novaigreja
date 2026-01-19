"use client"

import { ArrowRight } from "lucide-react"
import { MagneticButton } from "./magnetic-button"
import { AnimatedSection } from "./animated-section"

export function ClosingCta() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background illustration - light rays emanating from center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-gradient-radial from-nova-yellow/20 via-transparent to-transparent rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <AnimatedSection animation="blur-fade" className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            O futuro da sua igreja começa agora.
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Junte-se a centenas de igrejas que já estão transformando sua gestão com o Nova Igreja.
          </p>

          <MagneticButton
            size="lg"
            glossy
            className="bg-nova-yellow text-nova-dark hover:bg-nova-yellow/90 text-lg px-8 py-6 h-auto gap-3"
          >
            Começar Gratuitamente
            <ArrowRight className="w-5 h-5" />
          </MagneticButton>

          <p className="text-sm text-muted-foreground mt-6">Sem cartão de crédito. Teste grátis por 14 dias.</p>
        </AnimatedSection>
      </div>

      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to));
        }
      `}</style>
    </section>
  )
}
