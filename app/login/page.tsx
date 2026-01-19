"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login:", { email, password })
  }

  return (
    <main className="min-h-screen bg-background flex">
      {/* Left side - Form */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
        <div className="max-w-md w-full mx-auto">
          <Link href="/" className="flex items-center mb-12">
            <Image src="/logo-nova-igreja.svg" alt="Nova Igreja" width={140} height={40} className="h-10 w-auto" />
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Bem-vindo de volta</h1>
            <p className="text-muted-foreground">
              Não tem uma conta?{" "}
              <Link href="/register" className="text-nova-yellow font-medium hover:underline">
                Cadastre-se
              </Link>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-xl border-border bg-muted/30 focus:border-nova-yellow focus:ring-nova-yellow"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-sm font-medium">
                  Senha
                </Label>
                <Link href="/forgot-password" className="text-xs text-muted-foreground hover:text-foreground">
                  Esqueceu a senha?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 rounded-xl border-border bg-muted/30 pr-12 focus:border-nova-yellow focus:ring-nova-yellow"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 rounded-xl bg-nova-yellow text-nova-dark hover:bg-nova-yellow/90 text-sm font-semibold"
            >
              Entrar
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-background px-4 text-muted-foreground">ou continue com</span>
            </div>
          </div>

          {/* Social login */}
          <div className="grid grid-cols-2 gap-4">
            <Button
              type="button"
              variant="outline"
              className="h-12 rounded-xl border-border hover:bg-muted/50 bg-transparent"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-12 rounded-xl border-border hover:bg-muted/50 bg-transparent"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </Button>
          </div>
        </div>
      </div>

      <div className="hidden lg:block lg:flex-1 relative bg-nova-yellow">
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="relative w-full max-w-lg">
            {/* Decorative shapes */}
            <div className="absolute -top-8 -left-8 w-24 h-24 border-2 border-nova-dark/20 rounded-2xl rotate-12" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 border-2 border-nova-dark/20 rounded-2xl -rotate-6" />

            {/* Dashboard mockup */}
            <div className="bg-background rounded-3xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-nova-yellow rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-nova-dark" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Bom dia, Pastor!</p>
                    <p className="text-xs text-muted-foreground">Igreja Batista Central</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-muted/50 rounded-xl p-3 text-center">
                  <p className="text-xl font-bold text-foreground">1.248</p>
                  <p className="text-[10px] text-muted-foreground">Membros</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-3 text-center">
                  <p className="text-xl font-bold text-foreground">24</p>
                  <p className="text-[10px] text-muted-foreground">Eventos</p>
                </div>
                <div className="bg-nova-yellow rounded-xl p-3 text-center">
                  <p className="text-xl font-bold text-nova-dark">92%</p>
                  <p className="text-[10px] text-nova-dark/70">Engajamento</p>
                </div>
              </div>

              {/* Chart placeholder */}
              <div className="bg-muted/30 rounded-xl p-4 mb-4">
                <div className="flex items-end gap-1 h-20">
                  {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-t-sm ${i === 5 ? "bg-nova-yellow" : "bg-nova-dark/80"}`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-bold text-foreground mb-1">Gerencie com facilidade</h3>
                <p className="text-xs text-muted-foreground">Tudo que você precisa para cuidar melhor das pessoas.</p>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -right-4 top-8 bg-background rounded-xl p-3 shadow-xl">
              <p className="text-xs text-muted-foreground">Novos membros</p>
              <p className="text-lg font-bold text-green-600">+23%</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
