"use client"

import { ArrowRight, ArrowDown, Bell, Search, ChevronDown, TrendingUp, Users, DollarSign, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

function AnimatedText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <span
      className={`inline-block transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-sm"
      } ${className}`}
    >
      {text}
    </span>
  )
}

export function HeroSection() {
  const [counter, setCounter] = useState(1247)

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + Math.floor(Math.random() * 3))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-12 md:py-20">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Yellow card with text */}
        <div className="relative">
          <div className="bg-nova-yellow rounded-[32px] p-10 md:p-14 relative overflow-hidden">
            {/* Decorative stars */}
            <svg
              className="absolute top-8 right-8 w-6 h-6 text-nova-dark animate-pulse-soft"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
            <svg className="absolute top-16 right-16 w-4 h-4 text-nova-dark/60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>

            {/* Animated Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-nova-dark leading-tight mb-6">
              <AnimatedText text="Gerencie sua" delay={0} />
              <br />
              <AnimatedText text="Igreja com" delay={200} />
              <br />
              <AnimatedText text="Inteligência." delay={400} />
            </h1>

            {/* Subtitle with animation */}
            <p
              className="text-nova-dark/80 max-w-md mb-8 text-base md:text-lg animate-blur-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              Nova Igreja oferece uma experiência completa de gestão que ajuda você a cuidar melhor das pessoas e dar o
              próximo passo na sua missão.
            </p>

            {/* CTA Button */}
            <Link
              href="/register"
              className="inline-flex items-center gap-3 bg-nova-dark text-background px-8 py-4 rounded-full text-sm font-medium hover:bg-nova-dark/90 transition-all hover:scale-105 btn-glossy"
            >
              COMECE AGORA GRÁTIS
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Find out more link */}
            <div className="mt-8 flex items-center gap-2 text-nova-dark/70">
              <span className="text-sm">Saiba mais</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </div>

            {/* Decorative curved line */}
            <svg
              className="absolute bottom-8 left-8 w-16 h-16 text-nova-dark/20"
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M8 56 Q 32 32, 56 8" strokeLinecap="round" />
            </svg>
          </div>

          {/* Floating stat card - left */}
          <div className="absolute -left-4 top-1/3 bg-background border border-border rounded-2xl px-4 py-3 flex items-center gap-3 shadow-lg animate-float hidden xl:flex">
            <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
              <Users className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="text-left">
              <p className="text-xl font-bold text-foreground">{counter.toLocaleString()}+</p>
              <p className="text-xs text-muted-foreground">Membros ativos</p>
            </div>
          </div>
        </div>

        {/* Right side - Dashboard mockup */}
        <div className="relative">
          <div className="bg-background border border-border rounded-[24px] shadow-2xl overflow-hidden">
            {/* Dashboard header */}
            <div className="p-6 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-nova-yellow rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-nova-dark" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Bom dia, Pastor!</p>
                  <p className="text-xs text-muted-foreground">Igreja Batista Central</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="relative">
                  <Bell className="w-5 h-5 text-muted-foreground" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-nova-yellow rounded-full" />
                </div>
                <Image
                  src="/pastor-brazilian-man-smiling.jpg"
                  alt="Pastor"
                  width={36}
                  height={36}
                  className="w-9 h-9 rounded-full object-cover border-2 border-nova-yellow"
                />
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-6">
              {/* Stats cards row */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-muted/50 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <DollarSign className="w-5 h-5 text-muted-foreground" />
                    <span className="text-xs text-green-600 font-medium">+12%</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">R$ 45.200</p>
                  <p className="text-xs text-muted-foreground">Dízimos do mês</p>
                </div>
                <div className="bg-muted/50 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Users className="w-5 h-5 text-muted-foreground" />
                    <span className="text-xs text-green-600 font-medium">+8%</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">1.248</p>
                  <p className="text-xs text-muted-foreground">Membros ativos</p>
                </div>
                <div className="bg-nova-yellow rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Calendar className="w-5 h-5 text-nova-dark" />
                  </div>
                  <p className="text-2xl font-bold text-nova-dark">24</p>
                  <p className="text-xs text-nova-dark/70">Eventos este mês</p>
                </div>
              </div>

              {/* Chart area */}
              <div className="bg-muted/30 rounded-2xl p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-semibold text-foreground">Presença nos Cultos</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground bg-background rounded-lg px-3 py-1.5 border border-border">
                    Mensal <ChevronDown className="w-3 h-3" />
                  </div>
                </div>
                {/* Simple bar chart */}
                <div className="flex items-end gap-2 h-32">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className={`w-full rounded-t-md transition-all duration-500 ${i === 9 ? "bg-nova-yellow" : "bg-nova-dark/80"}`}
                        style={{ height: `${height}%`, animationDelay: `${i * 0.1}s` }}
                      />
                      <span className="text-[10px] text-muted-foreground">
                        {["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"][i]}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Tooltip */}
                <div className="absolute top-1/2 right-1/4 bg-background border border-border rounded-lg px-3 py-2 shadow-lg hidden lg:block">
                  <p className="text-xs text-muted-foreground">Total Presença</p>
                  <p className="text-lg font-bold text-foreground">1.850</p>
                  <span className="text-xs text-green-600">+15%</span>
                </div>
              </div>

              {/* Quick actions */}
              <div className="flex gap-2">
                <button className="flex-1 bg-nova-dark text-background rounded-xl py-3 text-sm font-medium hover:bg-nova-dark/90 transition-colors">
                  Nova Escala
                </button>
                <button className="flex-1 bg-nova-yellow text-nova-dark rounded-xl py-3 text-sm font-medium hover:bg-nova-yellow/90 transition-colors">
                  Enviar Mensagem
                </button>
              </div>
            </div>
          </div>

          {/* Floating notification card */}
          <div
            className="absolute -right-4 top-20 bg-background border border-border rounded-2xl p-4 shadow-xl animate-float hidden xl:block"
            style={{ animationDelay: "1s" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">+23% crescimento</p>
                <p className="text-xs text-muted-foreground">vs. mês anterior</p>
              </div>
            </div>
          </div>

          {/* Floating task card */}
          <div
            className="absolute -left-8 bottom-20 bg-background border border-border rounded-2xl p-4 shadow-xl animate-float hidden xl:block"
            style={{ animationDelay: "0.5s" }}
          >
            <p className="text-xs text-muted-foreground mb-2">Próxima tarefa</p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-nova-yellow rounded-lg flex items-center justify-center">
                <Calendar className="w-4 h-4 text-nova-dark" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Reunião de Líderes</p>
                <p className="text-xs text-muted-foreground">Hoje, 19:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative shapes */}
      <div className="hidden lg:block absolute bottom-0 right-[20%] w-16 h-16 border border-border/30 rounded-2xl -rotate-12" />
    </section>
  )
}
