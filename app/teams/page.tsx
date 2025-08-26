"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, MapPin, Trophy } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Footer from "@/components/footer"

export default function TeamsPage() {
    const [language, setLanguage] = useState<"pt" | "en">("pt");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setMounted(true);
    }, [])

    const toggleLanguage = () => {
        setLanguage(language === "pt" ? "en" : "pt");
    }

    if (!mounted) return null

    const teams = [
        {
            id: 1,
            namePt: "Nine Tails #9219",
            nameEn: "Nine Tails #9219",
            locationPt: "Resende - RJ",
            locationEn: "Resende - RJ",
            period: "2022 - 2023",
            descriptionPt: "A Nine Tails foi onde atingi o mais alto nível da robótica, ela é uma equipe do Sesi Senai Resende destinada a competição FRC (First Robotics Competition), a maior competição do planeta. Fundada no final de 2022, participei da primeira geração da equipe, saindo logo após a conclusão do ensino médio.",
            descriptionEn: "The Nine Tails was where I reached the highest level of robotics, it is a team from Sesi Senai Resende dedicated to the FRC (First Robotics Competition), the largest competition on the planet. Founded in late 2022, I participated in the first generation of the team, leaving right after graduating from high school.",
            image: "/teams/ninetails-9219.jpg",
            logo: "/logos/logo-nine-tails-9219.png",
            achievements: [
                {
                    titlePt: "Rookie All Star Award",
                    titleEn: "Rookie All Star Award",
                },
                {
                    titlePt: "Rookie Inspiration Award (Houston)",
                    titleEn: "Rookie Inspiration Award (Houston)",
                },
                {
                    titlePt: "Engineering Award",
                    titleEn: "Engineering Award",
                },
            ],
        },
        {
            id: 2,
            namePt: "Smart Lego",
            nameEn: "Smart Lego",
            locationPt: "Resende - RJ",
            locationEn: "Resende - RJ",
            period: "2021 - 2023",
            descriptionPt: "A Smart Lego é o time de robótica da escola Sesi Resende, participa de várias competições e é subdividida em equipes menores. Na foto ao lado, é a equipe da minha última competição pelo time, também a equipe que levou a Smart Lego a uma competição fora do país pela primeira vez. Fiquei na equipe durante todo meu ensino médio.",
            descriptionEn: "Smart Lego is the robotics team from Sesi Resende school, participates in several competitions and is divided into smaller teams. In the picture next to it, it is the team from my last competition for the team, also the team that took Smart Lego to a competition abroad for the first time. I stayed with the team throughout my high school.",
            image: "/teams/smart-lego.jpg",
            logo: "/logos/logo-smart-lego.jpg",
            achievements: [
                {
                    titlePt: "3º Lugar - Mission Impossible Hardware (Alemanha)",
                    titleEn: "3rd Place - Mission Impossible Hardware (Germany)",
                },
                {
                    titlePt: "3º Lugar - FLL Champion's Award",
                    titleEn: "3rd Place - FLL Champion's Award",
                },
                {
                    titlePt: "1º Lugar - Missão Impossível e Cabo de Guerra",
                    titleEn: "1st Place - Mission Impossible and Tug of War",
                },
            ],
        },
        {
            id: 3,
            namePt: "Pequeno Gigante",
            nameEn: "Pequeno Gigante",
            locationPt: "Piraí - RJ",
            locationEn: "Piraí - RJ",
            period: "2018 - 2021",
            descriptionPt: "É o time de robótica da prefeitura de Piraí. Minha primeira equipe de robótica, onde aprendi os fundamentos da programação e do trabalho em equipe. Começou com um grupo pequeno e foi se expandindo ao longo do tempo, funcionava da mesma forma que em Resende, era subdividida em equipes menores. Fiz parte da primeira geração do time, entrei no 7º ano do fundamental e sai logo após entrar no ensino médio.",
            descriptionEn: "It is the robotics team of the city hall of Piraí. My first robotics team, where I learned the fundamentals of programming and teamwork. It started with a small group and expanded over time, functioning in the same way as in Resende, it was divided into smaller teams. I was part of the first generation of the team, I joined in the 7th grade and left shortly after entering high school.",
            image: "/teams/pequeno-gigante.jpg",
            logo: "/logos/logo-pequeno-gigante.png",
            achievements: [
                {
                    titlePt: "1º Lugar - OBR Estadual",
                    titleEn: "1st Place - OBR State",
                },
                {
                    titlePt: "2º Lugar - OBR Regional",
                    titleEn: "2nd Place - OBR Regional",
                },
                {
                    titlePt: "1º Lugar - ITR",
                    titleEn: "1st Place - ITR",
                },
            ],
        },
    ]

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="w-full bg-background/80 backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link href="/achievements" className="text-2xl font-bold text-primary hidden sm:flex">
                        <div className="text-2xl font-bold text-primary">
                            <span className="text-primary">C</span>
                            <span className="text-foreground">C</span>
                        </div>
                    </Link>

                    <div className="flex items-center justify-between w-full sm:justify-end sm:space-x-4">
                        <Link href="/achievements">
                            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                                <ChevronLeft size={16} />
                                
                                {language === "pt" ? "Voltar" : "Back"}
                            </Button>
                        </Link>

                        <ThemeToggle />

                        <Button variant="outline" onClick={toggleLanguage} className="min-w-[80px] bg-transparent">
                            {language === "pt" ? "EN" : "PT-BR"}
                        </Button>
                    </div>
                </div>
            </header>

            <div className="pt-20">
                <div className="container mx-auto px-4 py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        {language === "pt" ? "Minhas Equipes de Robótica" : "My Robotics Teams"}
                        </h1>
                        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        {language === "pt"
                            ? "Conheça as equipes que fizeram parte da minha jornada na robótica, cada uma com suas especialidades e conquistas únicas."
                            : "Meet the teams that were part of my robotics journey, each with their unique specialties and achievements."}
                        </p>
                    </motion.div>

                    <div className="space-y-12">
                        {teams.map((team, index) => (
                            <motion.div
                                key={team.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:border-primary/30 transition-all duration-300"
                            >
                                <div className="grid md:grid-cols-2 gap-0">
                                    {/* Image */}
                                    <div className="relative h-64 md:h-full">
                                        <Image
                                        src={team.image || "/placeholder.svg"}
                                        alt={language === "pt" ? team.namePt : team.nameEn}
                                        fill
                                        className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8">
                                        <div className="flex items-start justify-between mb-4">
                                        <h2 className="text-2xl font-bold">{language === "pt" ? team.namePt : team.nameEn}</h2>
                                        <div className="text-primary font-medium text-sm">{team.period}</div>
                                        </div>

                                        {/* Logo da equipe */}
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-16 h-16 bg-app rounded-lg border border-border flex items-center justify-center">
                                                <Image
                                                src={team.logo || "/placeholder.svg"}
                                                alt={language === "pt" ? team.namePt : team.nameEn}
                                                width={64}
                                                height={64}
                                                className="object-cover rounded-lg"
                                                />
                                            </div>
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <MapPin className="w-4 h-4 text-primary" />
                                                <span>{language === "pt" ? team.locationPt : team.locationEn}</span>
                                            </div>
                                        </div>

                                        <p className="text-muted-foreground mb-6">
                                            {language === "pt" ? team.descriptionPt : team.descriptionEn}
                                        </p>

                                        {/* Achievements */}
                                        <div>
                                            <h3 className="font-semibold mb-3 flex items-center gap-2">
                                                <Trophy className="w-4 h-4 text-primary" />
                                                {language === "pt" ? "Principais Conquistas:" : "Main Achievements:"}
                                            </h3>
                                            <ul className="space-y-2">
                                                {team.achievements.map((achievement, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                                    <span>{language === "pt" ? achievement.titlePt : achievement.titleEn}</span>
                                                </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer language={language} className="bg-muted" />
        </div>
    );
}