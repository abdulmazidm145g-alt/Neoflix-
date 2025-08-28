"use client"

import { useState, useEffect } from "react"

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 500) // Wait for fade out animation
    }, 4000) // Show for 4 seconds

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-background z-50 flex items-center justify-center transition-opacity duration-500 opacity-0 pointer-events-none">
        <div className="text-6xl font-bold bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent animate-pulse-glow">
          NEOFLIX
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent animate-pulse-glow mb-4">
          NEOFLIX
        </div>
        <div className="w-32 h-1 bg-gradient-to-r from-primary to-red-600 mx-auto rounded-full animate-pulse"></div>
      </div>
    </div>
  )
}
