"use client"

const partners = [
  "Igreja Batista",
  "Assembleia de Deus",
  "Igreja Presbiteriana",
  "Igreja Metodista",
  "Comunidade Cristã",
  "Igreja Quadrangular",
  "Sara Nossa Terra",
  "Bola de Neve",
]

export function PartnerMarquee() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dot-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-nova-dark bg-nova-yellow/20 px-4 py-2 rounded-full">Parceiros</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-6 mb-4 text-balance">
            Ecossistema de Parceiros
          </h2>
        </div>

        <div className="relative">
          <div className="flex animate-marquee">
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-8 px-6 py-3 bg-muted rounded-full text-muted-foreground font-medium grayscale hover:grayscale-0 hover:text-nova-dark hover:bg-nova-yellow/20 transition-all duration-300 cursor-pointer"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
