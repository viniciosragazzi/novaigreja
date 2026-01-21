"use client"

import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import { AnimatedSection } from "./animated-section"

export function RoiCalculator() {
  const [churchSize, setChurchSize] = useState([100])
  const [hoursSaved, setHoursSaved] = useState(0)
  const [displayHours, setDisplayHours] = useState(0)

  useEffect(() => {
    const calculated = Math.round(churchSize[0] * 0.5)
    setHoursSaved(calculated)
  }, [churchSize])

  useEffect(() => {
    if (displayHours < hoursSaved) {
      const timer = setTimeout(() => {
        setDisplayHours((prev) => Math.min(prev + 1, hoursSaved))
      }, 30)
      return () => clearTimeout(timer)
    } else if (displayHours > hoursSaved) {
      const timer = setTimeout(() => {
        setDisplayHours((prev) => Math.max(prev - 1, hoursSaved))
      }, 30)
      return () => clearTimeout(timer)
    }
  }, [displayHours, hoursSaved])

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-nova-dark rounded-2xl">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="blur-fade" className="text-center mb-12">
          <span className="text-sm font-medium text-nova-dark bg-nova-yellow px-4 py-2 rounded-full">Calculadora</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-6 mb-4 text-balance">
            Calcule sua Liberdade
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Descubra quantas horas por mês sua equipe pode economizar com o Nova Igreja.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="spring-up" delay={200}>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="mb-8">
              <label className="text-white font-medium mb-4 block">
                Tamanho da sua igreja: <span className="text-nova-yellow">{churchSize[0]} membros</span>
              </label>
              <Slider
                value={churchSize}
                onValueChange={setChurchSize}
                max={1000}
                min={20}
                step={10}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>20 membros</span>
                <span>1000+ membros</span>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-400 mb-2">Horas economizadas por mês</p>
              <div className="flex items-center justify-center gap-1">
                {String(displayHours)
                  .padStart(3, "0")
                  .split("")
                  .map((digit, i) => (
                    <div key={i} className="w-16 h-20 bg-nova-yellow rounded-lg flex items-center justify-center">
                      <span className="text-4xl font-bold text-nova-dark animate-odometer">{digit}</span>
                    </div>
                  ))}
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Isso equivale a{" "}
                <span className="text-nova-yellow font-semibold">{Math.round(displayHours / 8)} dias</span> de trabalho
                por mês
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
