"use client"

import { useRef, type ReactNode, type MouseEvent } from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface MagneticButtonProps extends ButtonProps {
  children: ReactNode
  glossy?: boolean
}

export function MagneticButton({ children, className, glossy = false, ...props }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return
    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    buttonRef.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
  }

  const handleMouseLeave = () => {
    if (!buttonRef.current) return
    buttonRef.current.style.transform = "translate(0, 0)"
  }

  return (
    <Button
      ref={buttonRef}
      className={cn("magnetic-btn", glossy && "btn-glossy", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </Button>
  )
}
