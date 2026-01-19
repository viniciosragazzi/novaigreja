import { CalendarCheck, Database, Zap, Airplay } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    id: "escalas",
    title: "Escalas Inteligentes",
    description: "Gestão de voluntários com notificações automáticas via WhatsApp para confirmação de serviço.",
    icon: CalendarCheck,
  },
  {
    id: "secretaria",
    title: "Secretaria Digital",
    description: "Cadastro completo de membros, controle de batismos, células e departamentos.",
    icon: Database,
  },
  {
    id: "comunicacao",
    title: "Comunicação Integrada",
    description: "Envio de avisos, aniversariantes e comunicados oficiais direto no celular da liderança e membros.",
    icon: Zap,
  },
  {
    id: "projecao",
    title: "Projeção & Mídia",
    description: "Sistema de apresentação de letras e avisos integrado para o time de louvor e transmissão.",
    icon: Airplay,
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-medium text-nova-dark bg-nova-yellow/20 px-3 py-1.5 rounded-full">Módulos</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-5 mb-3 text-balance">
            Um ecossistema feito para crescer com você
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Diga adeus à bagunça de usar vários sistemas. O Nova Igreja une todas as frentes da sua comunidade em uma
            interface intuitiva.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
          {features.map((feature) => (
            <Card
              key={feature.id}
              className="group cursor-pointer transition-all duration-300 soft-shadow hover:soft-shadow-lg border-border bg-background hover:border-nova-yellow/30 rounded-3xl card-glow"
            >
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 bg-nova-yellow/10 group-hover:bg-nova-yellow transition-colors">
                  <feature.icon className="w-6 h-6 text-nova-dark animate-float-subtle" />
                </div>
                <CardTitle className="text-base text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
