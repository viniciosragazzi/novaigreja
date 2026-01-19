"use client"

import { useState } from "react"
import { Wallet, GitBranch, Cloud, Play, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    id: "financeiro",
    name: "Gestão Financeira Profética",
    desc: "Dashboards de entradas, saídas e metas de arrecadação para missões e obras.",
    icon: Wallet,
    visual: "chart",
  },
  {
    id: "workflow",
    name: "Workflow de Integração",
    desc: "Trilha automatizada para novos convertidos (Boas-vindas → Batismo → Membresia).",
    icon: GitBranch,
    visual: "flow",
  },
  {
    id: "midia",
    name: "Central de Mídia Cloud",
    desc: "Armazene e transmita artes, avisos e letras diretamente para o telão.",
    icon: Cloud,
    visual: "gallery",
  },
]

export function AdvancedFeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(features[0])

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-nova-dark bg-nova-yellow/20 px-4 py-2 rounded-full">Avançado</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-6 mb-4 text-balance">
            Funcionalidades que você só encontra aqui
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Feature List */}
          <div className="space-y-4">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature)}
                className={cn(
                  "w-full text-left p-6 rounded-xl border transition-all duration-300",
                  activeFeature.id === feature.id
                    ? "bg-nova-dark text-background border-nova-dark shadow-lg"
                    : "bg-background border-border hover:border-nova-yellow/50",
                )}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                      activeFeature.id === feature.id ? "bg-nova-yellow" : "bg-nova-yellow/10",
                    )}
                  >
                    <feature.icon
                      className={cn("w-6 h-6", activeFeature.id === feature.id ? "text-nova-dark" : "text-nova-dark")}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3
                        className={cn(
                          "font-semibold text-lg",
                          activeFeature.id === feature.id ? "text-background" : "text-foreground",
                        )}
                      >
                        {feature.name}
                      </h3>
                      <ChevronRight
                        className={cn(
                          "w-5 h-5 transition-transform",
                          activeFeature.id === feature.id ? "text-nova-yellow rotate-90" : "text-muted-foreground",
                        )}
                      />
                    </div>
                    <p
                      className={cn(
                        "mt-2 text-sm leading-relaxed",
                        activeFeature.id === feature.id ? "text-background/70" : "text-muted-foreground",
                      )}
                    >
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Visual Preview */}
          <div className="relative lg:sticky lg:top-24">
            <div className="absolute inset-0 bg-nova-yellow/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-background border border-border rounded-2xl p-6 shadow-xl overflow-hidden">
              {activeFeature.visual === "chart" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">Dashboard Financeiro</h4>
                    <span className="text-xs text-muted-foreground">Janeiro 2025</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-green-50 rounded-xl p-4">
                      <p className="text-xs text-green-600 mb-1">Entradas</p>
                      <p className="text-xl font-bold text-green-700">R$ 45.230</p>
                    </div>
                    <div className="bg-red-50 rounded-xl p-4">
                      <p className="text-xs text-red-600 mb-1">Saídas</p>
                      <p className="text-xl font-bold text-red-700">R$ 12.450</p>
                    </div>
                    <div className="bg-nova-yellow/20 rounded-xl p-4">
                      <p className="text-xs text-nova-dark/70 mb-1">Saldo</p>
                      <p className="text-xl font-bold text-nova-dark">R$ 32.780</p>
                    </div>
                  </div>
                  {/* Bar Chart */}
                  <div className="h-40 flex items-end gap-2">
                    {[65, 45, 80, 55, 90, 70, 85].map((height, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2">
                        <div
                          className="w-full bg-nova-yellow rounded-t transition-all duration-500"
                          style={{ height: `${height}%` }}
                        />
                        <span className="text-[10px] text-muted-foreground">
                          {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeFeature.visual === "flow" && (
                <div className="space-y-6">
                  <h4 className="font-semibold text-foreground">Trilha do Novo Convertido</h4>
                  <div className="relative">
                    {["Boas-vindas", "Curso Batismo", "Batismo", "Membresia", "Integração"].map((step, i) => (
                      <div key={step} className="flex items-center gap-4 mb-4">
                        <div
                          className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0",
                            i < 3 ? "bg-nova-yellow text-nova-dark" : "bg-muted text-muted-foreground",
                          )}
                        >
                          {i + 1}
                        </div>
                        <div className="flex-1">
                          <p className={cn("font-medium", i < 3 ? "text-foreground" : "text-muted-foreground")}>
                            {step}
                          </p>
                          {i < 3 && <p className="text-xs text-green-600">Concluído</p>}
                        </div>
                        {i < 4 && (
                          <div
                            className={cn(
                              "absolute left-5 w-0.5 h-4 -translate-x-1/2",
                              i < 2 ? "bg-nova-yellow" : "bg-muted",
                            )}
                            style={{ top: `${56 + i * 56}px` }}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeFeature.visual === "gallery" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">Central de Mídia</h4>
                    <span className="text-xs bg-nova-yellow/20 text-nova-dark px-2 py-1 rounded">12 itens</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {["Avisos Culto", "Letra - Santo", "Aniversários", "Evento Jovens", "Missões", "Oferta"].map(
                      (item, i) => (
                        <div
                          key={item}
                          className="aspect-video bg-gradient-to-br from-nova-yellow/20 to-nova-yellow/5 rounded-lg flex flex-col items-center justify-center p-2 hover:scale-105 transition-transform cursor-pointer group"
                        >
                          <Play className="w-6 h-6 text-nova-dark/50 group-hover:text-nova-dark transition-colors" />
                          <span className="text-[10px] text-center text-muted-foreground mt-1 line-clamp-1">
                            {item}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
