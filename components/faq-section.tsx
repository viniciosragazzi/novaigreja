import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    q: "O sistema recebe novas funções sempre?",
    a: "Sim! O Nova Igreja está em desenvolvimento constante. Novas ferramentas são adicionadas mensalmente sem custo adicional para os assinantes.",
  },
  {
    q: "Preciso instalar algo?",
    a: "Não. O sistema é 100% em nuvem. Você acessa do computador, tablet ou celular via novaigreja.com.",
  },
]

export function FaqSection() {
  return (
    <section id="suporte" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-nova-dark bg-nova-yellow/20 px-4 py-2 rounded-full">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-6 mb-4 text-balance">
            Perguntas frequentes
          </h2>
          <p className="text-lg text-muted-foreground">Tudo o que você precisa saber sobre o Nova Igreja.</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-muted/30 border border-border rounded-xl px-6"
            >
              <AccordionTrigger className="text-left text-foreground hover:no-underline py-6">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
