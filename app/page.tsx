"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import About from "@/components/about"
import Achievements from "@/components/achievements"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [language, setLanguage] = useState<"pt" | "en">("pt")
  const { theme, setTheme } = useTheme()

  // Apenas verificamos se o componente está montado para evitar problemas de hidratação
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt")
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header language={language} toggleLanguage={toggleLanguage} theme={theme as string} setTheme={setTheme} />
      </div>
      <Hero language={language} />
      <About language={language} />
      <Achievements language={language} />
      <Projects language={language} />
      <Skills language={language} />
      <Contact language={language} />
      <Footer language={language} />
      <Toaster />
    </main>
  )
}
