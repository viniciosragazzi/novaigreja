import { Smile, Shield, HeartHandshake } from "lucide-react"

const reasons = [
  {
    icon: Smile,
    header: "Fácil de usar",
    body: "Interface limpa, pensada para quem não tem tempo a perder com sistemas complexos.",
  },
  {
    icon: Shield,
    header: "Segurança de Dados",
    body: "Seus dados e os de seus membros protegidos com criptografia de ponta.",
  },
  {
    icon: HeartHandshake,
    header: "Suporte de Irmão",
    body: "Nossa equipe entende o dia a dia da igreja e está pronta para ajudar.",
  },
]

export function WhySection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-nova-dark bg-nova-yellow/20 px-4 py-2 rounded-full">
            Diferenciais
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-6 mb-4 text-balance">
            Por que escolher o Nova Igreja?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.header} className="text-center">
              <div className="w-16 h-16 bg-nova-yellow/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <reason.icon className="w-8 h-8 text-nova-dark" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{reason.header}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
