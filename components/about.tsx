"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { CodeXml, Smartphone, Monitor, Database } from "lucide-react";

import { Button } from "@/components/ui/button";

import GraduationImg from "../assets/graduation.jpg";

interface AboutProps {
    language: "pt" | "en"
}

export function About({ language }: AboutProps) {
    const content = {
        pt: {
        title: "Sobre Mim",
        description:
            "Olá! Sou Cauã Campos, um desenvolvedor Full Stack apaixonado por criar soluções tecnológicas inovadoras. Tenho experiência em desenvolvimento web e mobile, sempre buscando aprender novas tecnologias e aprimorar minhas habilidades.",
        hobbies:
            "Além da programação, gosto de jogos, música e esportes.",
        downloadCV: "Download CV",
        },
        en: {
        title: "About Me",
        description:
            "Hello! I'm Cauã Campos, a Full Stack developer passionate about creating innovative technological solutions. I have experience in web and mobile development, always seeking to learn new technologies and improve my skills.",
        hobbies:
            "Besides programming, I enjoy gaming, music and sports.",
        downloadCV: "Download CV",
        },
    }

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/cv-caua.pdf';
        link.download = 'Curriculo-Cauã.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="about" className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{content[language].title}</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
                            <Image src={GraduationImg} alt="Cauã Campos" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="space-y-4">
                            <p className="text-lg">{content[language].description}</p>
                            <p className="text-lg">{content[language].hobbies}</p>
                        </div>

                        <div className="flex flex-col">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-muted p-4 rounded-lg">
                                    <CodeXml className="text-primary mb-2" size={28}/>
                                    <h3 className="font-bold text-xs sm:text-base xl:text-lg">{language === "pt" ? "Desenvolvimento Web" : "Web Development"}</h3>
                                </div>
                                <div className="bg-muted p-4 rounded-lg">
                                    <Smartphone className="text-primary mb-2" size={28}/>
                                    <h3 className="font-bold text-xs sm:text-base xl:text-lg">
                                        {language === "pt" ? "Desenvolvimento Mobile" : "Mobile Development"}
                                    </h3>
                                </div>
                                <div className="bg-muted p-4 rounded-lg">
                                    <Monitor className="text-primary mb-2" size={28}/>
                                    <h3 className="font-bold text-xs sm:text-base xl:text-lg">{language === "pt" ? "Frontend" : "Frontend"}</h3>
                                </div>
                                <div className="bg-muted p-4 rounded-lg">
                                    <Database className="text-primary mb-2" size={28}/>
                                    <h3 className="font-bold text-xs sm:text-base xl:text-lg">Backend</h3>
                                </div>
                            </div>
                            

                            <Button
                                onClick={handleDownloadCV}
                                size="lg"
                                className="min-w-60 bg-primary hover:bg-primary/80 text-white mt-6 mx-auto group relative overflow-hidden"
                            >
                                <span className="relative z-10">{content[language].downloadCV}</span>
                                <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                                <i className="fa-solid fa-download ml-2"></i>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full"></div>
            <div className="absolute top-20 -right-20 w-60 h-60 bg-primary/5 rounded-full"></div>
        </section>
    )
}