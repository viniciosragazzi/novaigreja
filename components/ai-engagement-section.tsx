"use client"

import { useState, useEffect } from "react"
import { Brain, MessageCircle, TrendingUp, Heart, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  "Análise preditiva de evasão",
  "Sugestão de mensagens personalizadas (Tone of Voice cristão)",
  "Relatórios automáticos de saúde ministerial",
]

const chatMessages = [
  {
    type: "ai",
    message: "Olá, Pastor! Detectei algumas atualizações importantes sobre a congregação.",
    delay: 0,
  },
  {
    type: "ai",
    message: "João Silva não comparece há 3 domingos. Deseja enviar uma mensagem de cuidado?",
    delay: 1500,
  },
  {
    type: "suggestion",
    message: "Sugestão: 'Oi João! Sentimos sua falta. Está tudo bem? Conte conosco para o que precisar. 🙏'",
    delay: 3000,
  },
]

export function AiEngagementSection() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([])
  const [counter, setCounter] = useState(12847)

  useEffect(() => {
    chatMessages.forEach((_, index) => {
      setTimeout(() => {
        setVisibleMessages((prev) => [...prev, index])
      }, chatMessages[index].delay)
    })
  }, [])

  // Live counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + Math.floor(Math.random() * 3) + 1)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="ai_intelligence" className="py-24 px-4 sm:px-6 lg:px-8 bg-nova-dark text-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Live Counter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-background/10 backdrop-blur-sm rounded-full border border-background/20">
            <Heart className="w-5 h-5 text-nova-yellow animate-pulse" />
            <span className="text-sm text-background/80">
              <span className="font-bold text-nova-yellow tabular-nums">{counter.toLocaleString("pt-BR")}</span>{" "}
              mensagens de cuidado enviadas pela nossa rede
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-nova-yellow bg-nova-yellow/10 px-4 py-2 rounded-full mb-6">
              <Brain className="w-4 h-4" />
              Exclusivo Nova Igreja
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              A primeira IA que cuida de quem você ama
            </h2>
            <p className="text-lg text-background/70 mb-8 leading-relaxed">
              Não perca nenhum membro de vista. Nossa IA analisa padrões de frequência e engajamento, alertando sua
              liderança quando alguém precisa de um abraço ou de uma visita.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-nova-yellow/20 mt-0.5">
                    <TrendingUp className="w-3.5 h-3.5 text-nova-yellow" />
                  </div>
                  <span className="text-background/80">{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="bg-nova-yellow text-nova-dark hover:bg-nova-yellow/90 gap-2" size="lg">
              Conhecer a IA
              <Brain className="w-4 h-4" />
            </Button>
          </div>

          {/* Chat Interface Mockup */}
          <div className="relative">
            <div className="absolute inset-0 bg-nova-yellow/5 rounded-3xl blur-3xl"></div>
            <div className="relative bg-background/5 backdrop-blur-sm border border-background/10 rounded-2xl p-6">
              {/* Chat Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-background/10 mb-4">
                <div className="w-10 h-10 rounded-full bg-nova-yellow/20 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-nova-yellow" />
                </div>
                <div>
                  <h4 className="font-semibold text-background">Assistente Nova Igreja</h4>
                  <p className="text-xs text-background/50">Inteligência de Engajamento</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-xs text-background/50">Online</span>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4 min-h-[280px]">
                {chatMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      visibleMessages.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  >
                    {msg.type === "suggestion" ? (
                      <div className="bg-nova-yellow/10 border border-nova-yellow/30 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <MessageCircle className="w-4 h-4 text-nova-yellow" />
                          <span className="text-xs font-medium text-nova-yellow">Sugestão de Mensagem</span>
                        </div>
                        <p className="text-sm text-background/80">{msg.message.replace("Sugestão: ", "")}</p>
                        <div className="flex gap-2 mt-3">
                          <Button size="sm" className="bg-nova-yellow text-nova-dark hover:bg-nova-yellow/90 gap-1">
                            <Send className="w-3 h-3" />
                            Enviar via WhatsApp
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-background/20 text-background/70 bg-transparent"
                          >
                            Editar
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-nova-yellow/20 flex items-center justify-center shrink-0">
                          <Brain className="w-4 h-4 text-nova-yellow" />
                        </div>
                        <div className="bg-background/10 rounded-2xl rounded-tl-none px-4 py-3 max-w-[85%]">
                          <p className="text-sm text-background/90">{msg.message}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
