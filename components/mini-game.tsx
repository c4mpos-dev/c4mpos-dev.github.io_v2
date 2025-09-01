"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface MiniGameProps {
    language: "pt" | "en"
}

interface Dot {
    id: number
    x: number
    y: number
}

export function MiniGame({ language }: MiniGameProps) {
    const [isGameActive, setIsGameActive] = useState(false)
    const [score, setScore] = useState(0)
    const [timeLeft, setTimeLeft] = useState(15)
    const [dots, setDots] = useState<Dot[]>([])
    const [gameOver, setGameOver] = useState(false)
    const [highScore, setHighScore] = useState(0)

    const startGame = useCallback(() => {
        setIsGameActive(true)
        setScore(0)
        setTimeLeft(15)
        setGameOver(false)
        setDots([])

        // Gerar primeiro dot imediatamente
        const firstDot: Dot = {
            id: Date.now(),
            x: Math.random() * (window.innerWidth - 100) + 50,
            y: Math.random() * (window.innerHeight - 200) + 100,
        }
        setDots([firstDot])
    }, [])

    // Atalho de teclado simples: G + A + M + E
    useEffect(() => {
        let keySequence: string[] = []
        const targetSequence = ["KeyG", "KeyA", "KeyM", "KeyE"]

        const handleKeyDown = (e: KeyboardEvent) => {
            keySequence.push(e.code)

            // Manter apenas os últimos 4 caracteres
            if (keySequence.length > 4) {
                keySequence = keySequence.slice(-4)
            }

            // Verificar se a sequência está correta
            if (keySequence.length === 4 && keySequence.every((key, index) => key === targetSequence[index])) {
                e.preventDefault()
                startGame()
                keySequence = []
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [startGame])

    // Carregar high score
    useEffect(() => {
        const savedHighScore = localStorage.getItem("cauaPortfolioHighScore")
        if (savedHighScore) {
            setHighScore(Number.parseInt(savedHighScore))
        }
    }, [])

    const generateDot = useCallback(() => {
        const newDot: Dot = {
            id: Date.now(),
            x: Math.random() * (window.innerWidth - 100) + 50,
            y: Math.random() * (window.innerHeight - 200) + 100,
        }
        return newDot
    }, [])

    const catchDot = useCallback(
        (dotId: number) => {
            // Remover o dot clicado e gerar um novo IMEDIATAMENTE
            setDots([generateDot()])
            setScore((prev) => prev + 1)
            },
        [generateDot],
    )

    // sempre que um novo dot aparece, inicia um timer de 1s
    useEffect(() => {
        if (isGameActive && dots.length > 0) {
            const timer = setTimeout(() => {
                // se o jogador não clicou no dot em 700ms, substitui por um novo
                setDots([generateDot()])
            }, 700)

            return () => clearTimeout(timer) // limpa o timer se o dot sumir antes (por clique)
        }
    }, [dots, isGameActive, generateDot])


    const endGame = useCallback(() => {
        setIsGameActive(false)
        setGameOver(true)
        setDots([])

        // Salvar high score
        if (score > highScore) {
            setHighScore(score)
            localStorage.setItem("cauaPortfolioHighScore", score.toString())
        }
    }, [score, highScore])

    // Timer do jogo - runs for exactly 15 seconds non-stop
    useEffect(() => {
        if (isGameActive && timeLeft > 0) {
            const timer = setTimeout(() => {
                setTimeLeft((prev) => prev - 1)
            }, 1000)
            return () => clearTimeout(timer)
        } else if (timeLeft === 0 && isGameActive) {
         endGame()
        }
    }, [isGameActive, timeLeft, endGame])

    // Fechar jogo com ESC
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsGameActive(false)
                setGameOver(false)
                setDots([])
            }
        }

        if (isGameActive || gameOver) {
            window.addEventListener("keydown", handleKeyPress)
            return () => window.removeEventListener("keydown", handleKeyPress)
        }
    }, [isGameActive, gameOver])

    return (
        <AnimatePresence>
            {(isGameActive || gameOver) && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center"
                >
                    {/* Game UI */}
                    <div className="absolute top-4 left-4 text-white font-mono">
                        <div className="text-xl">Score: {score}</div>
                        <div className="text-lg">Time: {timeLeft}s</div>
                        <div className="text-sm opacity-70">High Score: {highScore}</div>
                    </div>

                    {/* Instructions */}
                    <div className="absolute top-4 right-4 text-white font-mono text-right">
                        <div className="text-sm opacity-70">
                            {language === "pt" ? "Clique nos pontos vermelhos!" : "Click the red dots!"}
                        </div>
                        <div className="text-xs opacity-50">ESC para sair</div>
                        <div className="text-xs opacity-50">
                            {language === "pt" ? "15 segundos!" : "15 seconds!"}
                        </div>
                    </div>

                    {/* Game Dots */}
                    {dots.map((dot) => (
                        <motion.div
                            key={dot.id}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            className="absolute w-8 h-8 bg-red-500 rounded-full cursor-pointer shadow-lg"
                            style={{ left: dot.x, top: dot.y }}
                            onClick={() => catchDot(dot.id)}
                        >
                            {/* Pulse effect */}
                            <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
                        </motion.div>
                    ))}

                    {/* Game Over Screen */}
                    {gameOver && (
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-card p-8 rounded-2xl border border-border text-center max-w-md mx-4"
                        >
                            <h2 className="text-3xl font-bold mb-4">{language === "pt" ? "Fim de Jogo!" : "Game Over!"}</h2>

                            <div className="text-6xl font-bold text-primary mb-4">{score}</div>

                            <div className="text-muted-foreground mb-6">
                                {score >= highScore ? (
                                    <div className="text-green-500 font-bold">
                                        🎉 {language === "pt" ? "RECORDE!" : "HIGH SCORE!"}
                                    </div>
                                    ) : (
                                    <div>{language === "pt" ? "Pontuação Final" : "Final Score"}</div>
                                )}
                            </div>

                            <div className="flex gap-4 justify-center">
                                <button
                                    onClick={startGame}
                                    className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/80 transition-colors"
                                >
                                    {language === "pt" ? "Jogar Novamente" : "Play Again"}
                                </button>

                                <button
                                    onClick={() => {
                                        setGameOver(false)
                                        setIsGameActive(false)
                                    }}
                                    className="bg-muted text-foreground px-6 py-2 rounded-lg hover:bg-muted/80 transition-colors"
                                >
                                    {language === "pt" ? "Fechar" : "Close"}
                                </button>
                            </div>

                            <div className="text-xs text-muted-foreground mt-4">
                                {language === "pt" ? "Digite G-A-M-E para jogar novamente" : "Type G-A-M-E to play again"}
                            </div>
                        </motion.div>
                    )}

                    {/* Loading/Starting countdown */}
                    {isGameActive && timeLeft === 15 && score === 0 && (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="text-white text-6xl font-bold"
                        >
                            {language === "pt" ? "COMEÇOU!" : "START!"}
                        </motion.div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    )
}