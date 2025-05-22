"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/mobile-menu";

interface HeaderProps {
    language: "pt" | "en"
    toggleLanguage: () => void
    theme: string
    setTheme: (theme: string) => void
}

export function Header({ language, toggleLanguage, theme, setTheme }: HeaderProps) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setMobileMenuOpen(false);
        const element = document.getElementById(id);

        if (element) {
            const headerOffset = 22; //72
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({ top: offsetPosition, behavior: 'smooth'});
        }
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
        <div>
            <header className={`w-full transition-all duration-300 fixed top-0 left-0 right-0 z-50 ${scrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold text-primary">
                        <span className="text-primary">C</span>
                        <span className="text-foreground">Campos</span> 
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
                        <Button variant="outline" size="icon" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
                            <Menu className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Component */}
            <MobileMenu
                isOpen={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                language={language}
                toggleLanguage={toggleLanguage}
                navItems={navItems}
                onNavigate={scrollToSection}
            />
        </div>
    )
}