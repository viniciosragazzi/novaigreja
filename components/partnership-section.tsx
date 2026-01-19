import { Users, Code, Megaphone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const partners = [
  {
    type: "Consultores",
    icon: Users,
    benefit: "Ganhe comissão recorrente indicando o sistema para outras igrejas.",
  },
  {
    type: "Desenvolvedores",
    icon: Code,
    benefit: "Acesse nossa API aberta para criar soluções personalizadas.",
  },
  {
    type: "Agências de Mídia",
    icon: Megaphone,
    benefit: "Ferramentas exclusivas para gerir a comunicação de múltiplos templos.",
  },
]

export function PartnershipSection() {
  return (
    <section id="partners_area" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-nova-dark bg-nova-yellow/20 px-4 py-2 rounded-full">Parceiros</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-6 mb-4 text-balance">Cresça com o Reino</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seja um parceiro integrador ou um consultor oficial do Nova Igreja e ajude a transformar comunidades.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {partners.map((partner) => (
            <div
              key={partner.type}
              className="group relative bg-background border border-border rounded-2xl p-8 hover:border-nova-yellow/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-nova-yellow/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-nova-yellow/10 flex items-center justify-center mb-6 group-hover:bg-nova-yellow transition-colors">
                  <partner.icon className="w-7 h-7 text-nova-dark" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{partner.type}</h3>
                <p className="text-muted-foreground leading-relaxed">{partner.benefit}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-nova-dark text-background hover:bg-nova-dark/90 gap-2" size="lg">
            Quero ser um parceiro
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
