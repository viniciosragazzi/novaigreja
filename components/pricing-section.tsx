import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Sparkles } from "lucide-react"

const plans = [
  {
    name: "Grátis / Teste",
    price: "R$ 0",
    target: "Experimente o poder da plataforma",
    limitations: "Até 30 membros | Escalas Manuais",
    features: ["Cadastro de membros (até 30)", "Escalas manuais", "Comunicação básica", "Suporte por email"],
    buttonText: "Começar Teste Grátis",
    featured: false,
  },
  {
    name: "Plano Reino",
    price: "Personalizado",
    target: "Para igrejas que buscam excelência total",
    features: [
      "Membros ilimitados",
      "IA de Engajamento",
      "API de Parceiros",
      "WhatsApp Ilimitado",
      "Suporte VIP",
      "Todas as funcionalidades",
    ],
    buttonText: "Falar com Especialista",
    featured: true,
  },
]

export function PricingSection() {
  return (
    <section id="preços" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-nova-dark bg-nova-yellow/20 px-4 py-2 rounded-full">Preços</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-6 mb-4 text-balance">
            Investimento Transparente
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Comece gratuitamente e evolua conforme sua igreja cresce.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.featured ? "bg-nova-dark border-nova-dark text-background" : "bg-background border border-border"
              } overflow-hidden`}
            >
              {/* Decorative gradient for featured */}
              {plan.featured && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-nova-yellow/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              )}

              <div className="relative z-10">
                {/* Badge */}
                {plan.featured && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-nova-yellow/20 rounded-full mb-6">
                    <Sparkles className="w-4 h-4 text-nova-yellow" />
                    <span className="text-xs font-medium text-nova-yellow">Recomendado</span>
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className={`text-2xl font-semibold mb-2 ${plan.featured ? "text-background" : "text-foreground"}`}
                  >
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className={`text-4xl font-bold ${plan.featured ? "text-nova-yellow" : "text-foreground"}`}>
                      {plan.price}
                    </span>
                    {plan.price !== "Personalizado" && (
                      <span className={plan.featured ? "text-background/70" : "text-muted-foreground"}>/mês</span>
                    )}
                  </div>
                  <p className={plan.featured ? "text-background/70" : "text-muted-foreground"}>{plan.target}</p>
                  {plan.limitations && (
                    <p className="text-sm text-muted-foreground mt-2 bg-muted/50 px-3 py-1 rounded-full inline-block">
                      {plan.limitations}
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          plan.featured ? "bg-nova-yellow" : "bg-nova-yellow/20"
                        }`}
                      >
                        <Check className={`w-3 h-3 ${plan.featured ? "text-nova-dark" : "text-nova-dark"}`} />
                      </div>
                      <span className={plan.featured ? "text-background/80" : "text-muted-foreground"}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full gap-2 ${
                    plan.featured
                      ? "bg-nova-yellow text-nova-dark hover:bg-nova-yellow/90"
                      : "bg-nova-dark text-background hover:bg-nova-dark/90"
                  }`}
                  size="lg"
                >
                  {plan.buttonText}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
