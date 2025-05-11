"use client"

import { useState, useEffect } from "react"
import { Button } from "components/ui/button"
import { Menu, X } from "lucide-react"
import { useToast } from "components/ui/use-toast"
import { useMobile } from "hooks/use-mobile"
import { ThemeToggle } from "components/theme-toggle"

interface HeaderProps {
  language: "pt" | "en"
  toggleLanguage: () => void
  theme: string
  setTheme: (theme: string) => void
}

const Header = ({ language, toggleLanguage, theme, setTheme }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { toast } = useToast()
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const navItems = [
    { id: "home", labelPt: "Início", labelEn: "Home" },
    { id: "about", labelPt: "Sobre", labelEn: "About" },
    { id: "achievements", labelPt: "Conquistas", labelEn: "Achievements" },
    { id: "projects", labelPt: "Projetos", labelEn: "Projects" },
    { id: "skills", labelPt: "Habilidades", labelEn: "Skills" },
    { id: "contact", labelPt: "Contato", labelEn: "Contact" },
  ]

  return (
    <header
      className={`w-full transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">
          <span className="text-primary">Cauã</span> Campos
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {language === "pt" ? item.labelPt : item.labelEn}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-2">
          <ThemeToggle />
          <Button variant="outline" onClick={toggleLanguage} className="min-w-[80px]">
            {language === "pt" ? "EN" : "PT-BR"}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-2">
          <ThemeToggle />
          <Button variant="outline" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors py-2 border-b border-border"
              >
                {language === "pt" ? item.labelPt : item.labelEn}
              </button>
            ))}
            <Button variant="outline" onClick={toggleLanguage} className="w-full">
              {language === "pt" ? "English" : "Português"}
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
