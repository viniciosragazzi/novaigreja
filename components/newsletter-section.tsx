"use client"

import type React from "react"

import { useState } from "react"
import { Mail, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-nova-dark">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-nova-yellow/10 rounded-full mb-6">
          <Mail className="w-4 h-4 text-nova-yellow" />
          <span className="text-sm font-medium text-nova-yellow">Newsletter</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-background mb-4 text-balance">
          Receba dicas de gestão e tecnologia para sua igreja semanalmente
        </h2>
        <p className="text-lg text-background/70 mb-8">
          Conteúdo exclusivo sobre liderança, comunicação e inovação para ministérios.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-green-500/20 border border-green-500/30 rounded-xl">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <span className="text-green-400 font-medium">Inscrição confirmada! Verifique seu email.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-background/10 border-background/20 text-background placeholder:text-background/50 h-12"
              required
            />
            <Button type="submit" className="bg-nova-yellow text-nova-dark hover:bg-nova-yellow/90 gap-2 h-12 px-6">
              Inscrever
              <ArrowRight className="w-4 h-4" />
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
