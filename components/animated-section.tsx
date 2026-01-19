"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "blur-fade" | "spring-up" | "stagger"
  delay?: number
}

export function AnimatedSection({ children, className, animation = "blur-fade", delay = 0 }: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const animationClass = {
    "blur-fade": isVisible ? "animate-blur-fade-in" : "opacity-0",
    "spring-up": isVisible ? "animate-spring-up" : "opacity-0 translate-y-10",
    stagger: isVisible ? "stagger-children" : "opacity-0",
  }

  return (
    <div ref={ref} className={cn(animationClass[animation], className)}>
      {children}
    </div>
  )
}
