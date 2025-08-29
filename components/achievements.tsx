"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { ArrowRight, Award, ChevronLeft, ChevronRight, ExternalLink, Star, Trophy } from "lucide-react";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AchievementsProps {
    language: "pt" | "en"
}

export function Achievements({ language }: AchievementsProps) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const achievements = [
        {
            id: 1,
            titlePt: "Hackathon Construtech 2024",
            titleEn: "Hackathon Construtech 2024",
            datePt: "Maio 2024",
            dateEn: "May 2024",
            descriptionPt: "A INTLOG conquistou o 1º lugar no Hackathon Construtech 2024, desenvolvendo uma solução inovadora para o setor de construção civil.",
            descriptionEn: "INTLOG won 1st place at the Construtech 2024 Hackathon, developing an innovative solution for the construction industry.",
            image: "/achievements/geral/hackathon-construtech-2024.jpg",
            link: "https://example.com/react-certification"
        },
        {
            id: 2,
            titlePt: "FIRST Robotics Championship",
            titleEn: "FIRST Robotics Championship",
            datePt: "Abril 2023",
            dateEn: "April 2023",
            descriptionPt: "Minha equipe, Nine Tails, conquistou o prêmio 'Rookie Inspiration Award' no Campeonato Mundial de Robótica FIRST em Houston, Texas.",
            descriptionEn: "My team, Nine Tails, won the 'Rookie Inspiration Award' at the FIRST Robotics World Championship in Houston, Texas.",
            image: "/achievements/robotics/frc-houston.jpg",
            link: "https://aws.amazon.com/certification/"
        },
        {
            id: 3,
            titlePt: "Fira RoboWorld Cup 2023",
            titleEn: "Fira RoboWorld Cup 2023",
            datePt: "Julho 2023",
            dateEn: "July 2023",
            descriptionPt: "A Smart Lego, minha equipe, conquistou o 3º lugar na modalidade Missão Impossível Hardware no Fira RoboWorld Cup em Wolfenbüttel, Alemanha.",
            descriptionEn: "Smart Lego, my team, won 3rd place in the Impossible Mission Hardware category at the Fira RoboWorld Cup in Wolfenbüttel, Germany.",
            image: "/achievements/robotics/fira-roboworld-cup-2023.jpg",
            link: "https://aws.amazon.com/certification/"
        },
    ]

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());

        api.scrollTo(1, false);
        setCurrent(1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        })
    }, [api]);

    const scrollTo = (index: number) => {
        api?.scrollTo(index)
    }

    return (
        <section id="achievements" className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        {language === "pt" ? "Conquistas e Certificações" : "Achievements and Certifications"}
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                </motion.div>

                <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 text-primary font-medium">
                        <ChevronLeft size={20} />
                        <span>{language === "pt" ? "Deslize para ver mais" : "Swipe to see more"}</span>
                        <ChevronRight size={20} />
                    </div>
                </div>

                <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
                    <Carousel setApi={setApi} className="w-full">
                        <CarouselContent>
                            {achievements.map((achievement) => (
                                <CarouselItem key={achievement.id} className="md:basis-1/2 lg:basis-1/2">
                                    <Card className="border-2 border-primary/10 hover:border-primary/30 transition-all duration-300">
                                        <CardContent className="p-0">
                                            <div className="relative h-48 w-full">
                                                <Image
                                                    src={achievement.image || "/placeholder.svg"}
                                                    alt={language === "pt" ? achievement.titlePt : achievement.titleEn}
                                                    fill
                                                    className="object-fill rounded-t-lg"
                                                />
                                            </div>
                                            <div className="p-6">
                                                <div className="text-sm text-primary font-medium mb-2">
                                                    {language === "pt" ? achievement.datePt : achievement.dateEn}
                                                </div>
                                                <h3 className="text-xl font-bold mb-2">
                                                    {language === "pt" ? achievement.titlePt : achievement.titleEn}
                                                </h3>
                                                <p className="text-muted-foreground">
                                                    {language === "pt" ? achievement.descriptionPt : achievement.descriptionEn}
                                                </p>
                                                {achievement.link && (
                                                    <div className="mt-4">
                                                        <a
                                                            href={achievement.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                                                        >
                                                            {language === "pt" ? "Ver Certificado" : "View Certificate"}
                                                            <ExternalLink className="ml-2 h-4 w-4" />
                                                        </a>
                                                    </div>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex justify-center mt-6">
                            <CarouselPrevious className="mr-2" />
                            <CarouselNext />
                        </div>
                    </Carousel>
                </div>

                <div className="flex justify-center gap-2 mt-4">
                    {Array.from({ length: count }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => api?.scrollTo(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === current ? "bg-primary scale-125" : "bg-primary/30 hover:bg-primary/50"
                            }`}
                            aria-label={`Ir para o slide ${index + 1}`}
                        />
                    ))}

                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <div className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl md:rounded-3xl p-4 md:p-8 border border-primary/20 overflow-hidden">
                        {/* Background Effects */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-pulse"></div>
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

                        {/* Floating Icons - Reduzidos no mobile */}
                        <div className="absolute top-2 left-4 md:top-4 md:left-8 opacity-10 md:opacity-20">
                            <motion.div
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                            >
                                <Trophy className="w-5 h-5 md:w-8 md:h-8 text-primary" />
                            </motion.div>
                        </div>
                        <div className="absolute top-4 right-6 md:top-8 md:right-12 opacity-10 md:opacity-20">
                            <motion.div
                                animate={{ y: [5, -5, 5] }}
                                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                            >
                                <Award className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                            </motion.div>
                        </div>
                        <div className="absolute bottom-3 right-4 md:bottom-6 md:right-8 opacity-10 md:opacity-20">
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            >
                                <Star className="w-4 h-4 md:w-7 md:h-7 text-primary" />
                            </motion.div>
                        </div>

                        <div className="relative z-10 text-center">
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                                className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-full mb-4 md:mb-6"
                            >
                                <Trophy className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                            </motion.div>

                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent px-2">
                                {language === "pt" ? "Quer ver todas as minhas conquistas?" : "Want to see all my achievements?"}
                            </h3>

                            <p className="text-muted-foreground mb-6 md:mb-8 text-sm md:text-lg max-w-2xl mx-auto px-2">
                                {language === "pt"
                                ? "Descubra minha jornada completa com prêmios e conquistas em robótica e tecnologia!"
                                : "Discover my complete journey with awards and achievements in robotics and technology!"}
                            </p>

                            <Link href="/achievements">
                                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="inline-block">
                                    <Button
                                        size="lg"
                                        className="bg-primary hover:bg-primary/90 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-bold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                                    >
                                        {/* Shimmer Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                                        <span className="relative z-10 flex items-center gap-2 md:gap-3">
                                            <Trophy className="w-4 h-4 md:w-5 md:h-5" />
                                            <span className="hidden sm:inline">
                                                {language === "pt" ? "Ver Todas as Conquistas" : "See All Achievements"}
                                            </span>
                                            <span className="sm:hidden">{language === "pt" ? "Ver Conquistas" : "See Achievements"}</span>
                                            <motion.div
                                                animate={{ x: [0, 3, 0] }}
                                                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                                            >
                                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                                            </motion.div>
                                        </span>
                                    </Button>
                                </motion.div>
                            </Link>

                            {/* Stats Preview */}
                            <div className="grid grid-cols-2 gap-3 mt-6 md:mt-8 max-w-md mx-auto">
                                <div className="text-center">
                                    <div className="text-xl md:text-2xl font-bold text-primary">15+</div>
                                    <div className="text-xs text-muted-foreground">
                                        {language === "pt" ? "Certificações" : "Certifications"}
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl md:text-2xl font-bold text-primary">25+</div>
                                    <div className="text-xs text-muted-foreground">
                                        {language === "pt" ? "Competições" : "Competitions"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full"></div>
                <div className="absolute bottom-20 left-10 w-20 h-20 bg-primary/10 rounded-full"></div>
            </div>
        </section>
    )
}