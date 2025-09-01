"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useIsMobile } from "./ui/use-mobile"

interface GameHintProps {
  language: "pt" | "en"
}

export function GameHint({ language }: GameHintProps) {
    const [showHint, setShowHint] = useState(false);
    const isMobile = useIsMobile();

    useEffect(() => {
        // Mostrar dica após 10 segundos na página
        const timer = setTimeout(() => {
            setShowHint(true);
            // Esconder após 5 segundos
            setTimeout(() => setShowHint(false), 5000);
        }, 10000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence>
            {showHint && !isMobile && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className="fixed bottom-4 right-4 z-50 bg-primary text-white p-4 rounded-lg shadow-lg max-w-xs"
                >
                    <div className="text-sm font-medium mb-2">
                        🎮 {language === "pt" ? "Easter Egg Descoberto!" : "Easter Egg Found!"}
                    </div>
                    <div className="text-xs opacity-90">
                        {language === "pt" ? "Aperte G+A+M+E para jogar!" : "Press G+A+M+E to play!"}
                    </div>
                    <button
                        onClick={() => setShowHint(false)}
                        className="absolute top-1 right-2 text-white/70 hover:text-white text-xs"
                    >
                        ×
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
