import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BentoGrid } from "@/components/bento-grid"
import { EmpathyBridge } from "@/components/empathy-bridge"
import { SupportChat } from "@/components/support-chat"
import { TestimonialsSection } from "@/components/testimonials-section"
import { RoiCalculator } from "@/components/roi-calculator"
import { TrustSecurity } from "@/components/trust-security"
import { EvolutionTimeline } from "@/components/evolution-timeline"
import { PricingSection } from "@/components/pricing-section"
import { FaqSection } from "@/components/faq-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { ReadingProgress } from "@/components/reading-progress"

export default function Home() {
  return (
    <main className="min-h-screen bg-background px-5 md:px-10 lg:px-[140px]">
      <div className="mx-auto max-w-[1600px]">
        <ReadingProgress />
        <Header />
        <HeroSection />
        <BentoGrid />
        <EmpathyBridge />
        <SupportChat />
        <TestimonialsSection />
        <RoiCalculator />
        <TrustSecurity />
        <EvolutionTimeline />
        <PricingSection />
        <FaqSection />
        <ContactForm />
        <Footer />
      </div>
    </main>
  )
}
