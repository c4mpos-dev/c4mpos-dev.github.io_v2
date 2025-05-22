"use client"

import { useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";

interface MobileMenuProps {
    isOpen: boolean
    onClose: () => void
    language: "pt" | "en"
    toggleLanguage: () => void
    navItems: Array<{
        id: string
        labelPt: string
        labelEn: string
    }>
    onNavigate: (id: string) => void
}

export function MobileMenu({ isOpen, onClose, language, toggleLanguage, navItems, onNavigate }: MobileMenuProps) {
    // bloquear scroll quando o menu está aberto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    const handleNavigate = (id: string) => {
        onNavigate(id);
        onClose();
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] md:hidden">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Menu Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
                        className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-card shadow-2xl"
                    >
                        <div className="flex flex-col h-full">
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-border">
                                <div className="text-xl font-bold text-primary">
                                    <span className="text-primary">Cauã</span> Campos
                                </div>
                                <Button variant="ghost" size="icon" onClick={onClose}>
                                    <X className="h-5 w-5" />
                                </Button>
                            </div>

                            {/* Navigation */}
                            <div className="flex-1 overflow-y-auto py-6">
                                <nav className="px-6 space-y-2">
                                    {navItems.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => handleNavigate(item.id)}
                                            className="w-full text-left py-3 px-4 rounded-lg hover:bg-muted transition-colors flex items-center space-x-3 group"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-primary opacity-60 group-hover:opacity-100 transition-opacity"></div>
                                            <span className="text-lg">{language === "pt" ? item.labelPt : item.labelEn}</span>
                                        </button>
                                    ))}
                                </nav>
                            </div>

                            {/* Footer */}
                            <div className="p-6 border-t border-border">
                                <Button variant="outline" onClick={toggleLanguage} className="w-full mb-6">
                                    {language === "pt" ? "English" : "Português"}
                                </Button>

                                <div className="flex justify-center space-x-6">
                                    <a href="#" className="text-foreground hover:text-primary transition-colors" aria-label="GitHub">
                                        <i className="fa-brands fa-github text-xl"></i>
                                    </a>
                                    <a href="#" className="text-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                                        <i className="fa-brands fa-linkedin text-xl"></i>
                                    </a>
                                    <a href="#" className="text-foreground hover:text-primary transition-colors" aria-label="Twitter">
                                        <i className="fa-brands fa-twitter text-xl"></i>
                                    </a>
                                    <a href="#" className="text-foreground hover:text-primary transition-colors" aria-label="Instagram">
                                        <i className="fa-brands fa-instagram text-xl"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}