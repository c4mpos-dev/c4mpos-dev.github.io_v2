"use client"

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

interface HeroProps {
    language: "pt" | "en"
}

export function Hero({ language }: HeroProps) {
    const terminalRef = useRef<HTMLDivElement>(null);
    const [typedText, setTypedText] = useState("");
    const [cursorVisible, setCursorVisible] = useState(true);
    const [mounted, setMounted] = useState(false);

    // Código para simular terminal
    const codeSnippets = [
        "class Developer {",
        "  constructor() {",
        "    this.name = 'Cauã Campos';",
        "    this.role = 'Full Stack Developer';",
        "  }",
        "",
        "  code() {",
        "    return 'Creating innovative solutions';",
        "  }",
        "}",
        "",
    ];

    // Efeito de digitação
    useEffect(() => {
        setMounted(true)
        let currentLine = 0;
        let currentChar = 0;
        let isDeleting = false;
        let typingSpeed = 50; // velocidade base de digitação

        const type = () => {
            // Se chegou ao final de todas as linhas, reinicia
            if (currentLine >= codeSnippets.length) {
                currentLine = 0;
                setTypedText("");
                setTimeout(type, 3000); // Pausa antes de reiniciar
                return;
            }

            // Texto atual a ser digitado
            const fullText = codeSnippets.slice(0, currentLine + 1).join("\n");

            if (!isDeleting) {
                // Digitando
                if (currentChar < fullText.length) {
                    setTypedText(fullText.substring(0, currentChar + 1));
                    currentChar++;

                    // Velocidade variável para parecer mais natural
                    typingSpeed = Math.random() * 30 + 20;

                    // Pausa maior após caracteres específicos
                    const lastChar = fullText[currentChar - 1]
                    if (lastChar === ";" || lastChar === "{" || lastChar === "}") {
                        typingSpeed = 300;
                    }
                } else {
                // Terminou de digitar a linha atual
                if (currentLine < codeSnippets.length - 1) {
                    currentLine++;
                    setTimeout(type, 500); // Pausa antes da próxima linha
                    return;
                } else {
                    // Terminou todas as linhas, pausa antes de começar a apagar
                    setTimeout(() => {
                        isDeleting = true;
                        type();
                    }, 5000);
                    return;
                }
                }
            } else {
                // Não implementamos a deleção, apenas reiniciamos quando chega ao fim
                isDeleting = false;
                currentLine = 0;
                currentChar = 0;
                setTypedText("");
                setTimeout(type, 1000);
                return;
            }

            setTimeout(type, typingSpeed);
        }

        // Inicia o efeito de digitação
        const typingTimeout = setTimeout(type, 1000);

        // Efeito de cursor piscando
        const cursorInterval = setInterval(() => {
            setCursorVisible((prev) => !prev);
        }, 500)

        // Scroll automático para o final do terminal
        if (terminalRef.current) {
            const scrollToBottom = () => {
                if (terminalRef.current) {
                    terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
                }
            }

            const scrollInterval = setInterval(scrollToBottom, 100);
            return () => {
                clearTimeout(typingTimeout);
                clearInterval(cursorInterval);
                clearInterval(scrollInterval);
            }
        }

        return () => {
            clearTimeout(typingTimeout);
            clearInterval(cursorInterval);
        }
    }, []);

    const socialLinks = [
        { icon: "fa-brands fa-whatsapp", url: "http://wa.me/55241372475", label: "WhatsApp" },
        { icon: "fa-brands fa-github", url: "https://github.com/c4mpos-dev", label: "GitHub" },
        { icon: "fa-brands fa-linkedin", url: "https://www.linkedin.com/in/cau%C3%A3-campos/", label: "LinkedIn" },
        { icon: "fa-brands fa-instagram", url: "https://www.instagram.com/c4mp02/", label: "Instagram" }
    ]

    if (!mounted) return null;

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 lg:pt-0 overflow-hidden">
            {/* Background com grid de código */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

            {/* Overlay com gradiente */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>

            {/* Elementos de decoração - circuitos */}
            <div className="absolute inset-0 circuit-pattern opacity-10"></div>

            {/* Silhueta de programador */}
            <div className="absolute right-0 bottom-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute right-0 bottom-0 w-full md:w-1/2 h-full opacity-10 programmer-silhouette"></div>
            </div>

            <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8">
                {/* Conteúdo principal */}
                <div className="lg:w-1/2 lg:text-left flex flex-col items-center lg:items-start">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            <span className="text-primary">Cauã</span> Campos
                        </h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p className="text-xl md:text-2xl mb-8">
                            {language === "pt" ? "Desenvolvedor Full Stack" : "Full Stack Developer"}
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex space-x-4 mb-8"
                    >
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-foreground hover:text-primary transition-colors"
                                aria-label={link.label}
                            >
                                <i className={`${link.icon} text-2xl`}></i>
                            </a>
                        ))}
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/80 text-white"
                            onClick={() => {
                                const aboutSection = document.getElementById("about")
                                if (aboutSection) {
                                aboutSection.scrollIntoView({ behavior: "smooth" })
                                }
                            }}
                        >
                            {language === "pt" ? "Conheça meu trabalho" : "See my work"}
                        </Button>
                    </motion.div>
                </div>

                {/* Terminal com código */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="w-full md:w-1/2 mt-8 md:mt-0"
                >
                    <div className="terminal-window">
                        <div className="terminal-header">
                            <div className="terminal-buttons">
                                <span className="terminal-button close"></span>
                                <span className="terminal-button minimize"></span>
                                <span className="terminal-button maximize"></span>
                            </div>
                            <div className="terminal-title">~/developer/projects</div>
                        </div>
                        <div ref={terminalRef} className="terminal-body">
                            <pre className="text-xs md:text-sm">
                                <code className="language-javascript">
                                    {typedText}
                                    <span className={`cursor ${cursorVisible ? "visible" : "invisible"}`}>|</span>
                                </code>
                            </pre>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <i className="fa-solid fa-chevron-down text-primary text-2xl"></i>
            </div>
        </section>
    )
}