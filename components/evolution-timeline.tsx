import { Check, Sparkles } from "lucide-react"

const currentUpdates = ["Integração nativa com WhatsApp", "Novo App do Voluntário", "Relatórios de Presença IA"]

const comingSoon = ["Gestão Financeira Simplificada", "App Store Própria", "Check-in Kids via QR Code"]

export function EvolutionTimeline() {
  return (
    <section id="evolução" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-nova-dark bg-nova-yellow/20 px-4 py-2 rounded-full">Evolução</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-6 mb-4 text-balance">
            Um software que nunca para de evoluir
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ao assinar o Nova Igreja, você não compra apenas o que temos hoje, mas garante acesso a todas as novas
            tecnologias que lançamos mensalmente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Current Updates */}
          <div className="bg-background rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Disponível Agora</h3>
            </div>
            <ul className="space-y-4">
              {currentUpdates.map((item) => (
                <li key={item} className="flex items-center gap-3 text-base">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coming Soon */}
          <div className="bg-background rounded-2xl p-8 border border-nova-yellow/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-nova-yellow/20 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-nova-dark" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Em Breve</h3>
            </div>
            <ul className="space-y-4">
              {comingSoon.map((item) => (
                <li key={item} className="flex items-center gap-3 text-base">
                  <div className="w-2 h-2 bg-nova-yellow rounded-full"></div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
