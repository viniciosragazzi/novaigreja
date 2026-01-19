"use client"

import {
  Brain,
  Calendar,
  PieChart,
  QrCode,
  Route,
  LayoutDashboard,
  MessageCircle,
  Check,
  Users,
  Zap,
  Shield,
  Heart,
} from "lucide-react"
import { TiltCard } from "./tilt-card"
import { AnimatedSection } from "./animated-section"
import { useState, useEffect, useRef } from "react"

function EngagementGauge({ value = 82 }: { value?: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.5 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const circumference = 283
  const strokeDashoffset = circumference - (value / 100) * circumference

  return (
    <div
      ref={ref}
      className="relative w-20 h-20 mx-auto mt-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg viewBox="0 0 100 100" className="transform -rotate-90">
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="10" className="text-muted" />
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke={isHovered ? "#F0DE4D" : "#1a1a1a"}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={isVisible ? strokeDashoffset : circumference}
          className="transition-all duration-1000 ease-out"
          style={{ filter: isHovered ? "drop-shadow(0 0 10px rgba(240, 222, 77, 0.8))" : "none" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`text-base font-bold transition-colors ${isHovered ? "text-nova-yellow" : "text-foreground"}`}>
          {value}%
        </span>
      </div>
    </div>
  )
}

function WhatsAppNotification() {
  const [confirmed, setConfirmed] = useState(false)

  return (
    <div className="mt-3 space-y-2">
      <div className="bg-green-50 border border-green-200 rounded-xl p-2 animate-spring-up">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-3 h-3 text-white" />
          </div>
          <p className="text-[10px] text-green-700 truncate">Lembrete: Escala amanhã</p>
        </div>
      </div>
      <button
        onClick={() => setConfirmed(!confirmed)}
        className={`w-full py-1.5 rounded-lg text-xs font-medium transition-all ${
          confirmed ? "bg-green-500 text-white" : "bg-nova-yellow/20 text-nova-dark hover:bg-nova-yellow/30"
        }`}
      >
        {confirmed ? <Check className="w-3 h-3 mx-auto" /> : "Confirmar"}
      </button>
    </div>
  )
}

function TransparencyChart() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.5 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const bars = [
    { value: 45, color: "bg-nova-yellow" },
    { value: 30, color: "bg-blue-400" },
    { value: 25, color: "bg-green-400" },
  ]

  return (
    <div ref={ref} className="mt-3 flex items-end justify-center gap-2 h-16">
      {bars.map((bar, i) => (
        <div
          key={i}
          className={`w-6 ${bar.color} rounded-t-lg transition-all duration-1000 ease-out`}
          style={{
            height: isVisible ? `${bar.value * 1.2}px` : "0px",
            transitionDelay: `${i * 150}ms`,
          }}
        />
      ))}
    </div>
  )
}

function QRBracelet() {
  const [isScanned, setIsScanned] = useState(false)

  return (
    <div className="mt-3 flex flex-col items-center">
      <button
        onClick={() => setIsScanned(!isScanned)}
        className={`p-2 rounded-xl transition-all duration-500 ${
          isScanned ? "bg-green-100 scale-105" : "bg-nova-yellow/10 hover:bg-nova-yellow/20"
        }`}
      >
        <QrCode className={`w-8 h-8 transition-colors ${isScanned ? "text-green-600" : "text-nova-dark"}`} />
      </button>
    </div>
  )
}

function JourneyTimeline() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.5 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="mt-3 flex items-center justify-center gap-1">
      {[1, 2, 3, 4].map((step, i) => (
        <div
          key={step}
          className={`w-3 h-3 rounded-full transition-all duration-500 ${isVisible ? "bg-nova-yellow" : "bg-muted"}`}
          style={{ transitionDelay: `${i * 200}ms` }}
        />
      ))}
    </div>
  )
}

function MiniDashboard() {
  return (
    <div className="mt-3 grid grid-cols-3 gap-1">
      {["89%", "+12%", "94%"].map((value, i) => (
        <div key={i} className="bg-muted/50 rounded-lg p-1.5 text-center">
          <p className="text-xs font-bold text-foreground">{value}</p>
        </div>
      ))}
    </div>
  )
}

const bentoCards = [
  {
    id: "ia_pastoreio",
    title: "IA de Pastoreio",
    desc: "Alertas inteligentes de cuidado pastoral",
    icon: Brain,
    component: EngagementGauge,
  },
  {
    id: "escalas_paz",
    title: "Escalas Automáticas",
    desc: "Lembretes via WhatsApp",
    icon: Calendar,
    component: WhatsAppNotification,
  },
  {
    id: "saude_financeira",
    title: "Transparência",
    desc: "Relatórios claros e objetivos",
    icon: PieChart,
    component: TransparencyChart,
  },
  {
    id: "checkin_kids",
    title: "Segurança Kids",
    desc: "QR Code exclusivo para pais",
    icon: QrCode,
    component: QRBracelet,
  },
  {
    id: "fluxo_visitantes",
    title: "Jornada do Membro",
    desc: "Do primeiro culto ao batismo",
    icon: Route,
    component: JourneyTimeline,
  },
  {
    id: "dashboard_lider",
    title: "Dashboard",
    desc: "Visão completa da igreja",
    icon: LayoutDashboard,
    component: MiniDashboard,
  },
  {
    id: "comunicacao",
    title: "Comunicação",
    desc: "Mensagens em massa",
    icon: MessageCircle,
    component: () => (
      <div className="mt-3 text-center">
        <Zap className="w-8 h-8 mx-auto text-nova-yellow" />
      </div>
    ),
  },
  {
    id: "membros",
    title: "Gestão de Membros",
    desc: "Cadastro completo",
    icon: Users,
    component: () => (
      <div className="mt-3 text-center">
        <Heart className="w-8 h-8 mx-auto text-red-400 animate-pulse" />
      </div>
    ),
  },
  {
    id: "seguranca",
    title: "Segurança Total",
    desc: "Dados protegidos",
    icon: Shield,
    component: () => (
      <div className="mt-3 text-center">
        <Shield className="w-8 h-8 mx-auto text-green-500" />
      </div>
    ),
  },
]

export function BentoGrid() {
  return (
    <section
      id="funcionalidades"
      className="py-20 -mx-5 md:-mx-10 lg:-mx-[140px] px-5 md:px-10 lg:px-[140px] bg-nova-yellow/5"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="blur-fade" className="text-center mb-12">
          <span className="text-xs font-medium text-nova-dark bg-nova-yellow px-4 py-2 rounded-full">
            Funcionalidades
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-5 mb-3 text-balance">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Ferramentas pensadas para quem cuida de pessoas, não de planilhas.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bentoCards.map((card, index) => (
            <AnimatedSection key={card.id} animation="spring-up" delay={index * 100}>
              <TiltCard className="group bg-background border border-border rounded-2xl p-5 hover:border-nova-yellow transition-all duration-300 card-glow h-full">
                <div className="flex items-start justify-between mb-2">
                  <div className="w-10 h-10 rounded-xl bg-nova-yellow/20 flex items-center justify-center group-hover:bg-nova-yellow transition-colors">
                    <card.icon className="w-5 h-5 text-nova-dark" />
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{card.title}</h3>
                <p className="text-xs text-muted-foreground">{card.desc}</p>
                <card.component />
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
