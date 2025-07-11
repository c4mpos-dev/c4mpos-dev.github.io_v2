"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
            descriptionPt: "A INTLOG, minha equipe, conquistou o 1º lugar no Hackathon Construtech 2024, desenvolvendo uma solução inovadora para o setor de construção civil.",
            descriptionEn: "INTLOG, my team, won 1st place at the Construtech 2024 Hackathon, developing an innovative solution for the construction industry.",
            image: "/achievements/geral/hackathon-construtech-2024.jpg",
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
        },
        {
            id: 3,
            titlePt: "Fira RoboWorld Cup 2023",
            titleEn: "Fira RoboWorld Cup 2023",
            datePt: "Julho 2023",
            dateEn: "July 2023",
            descriptionPt: "A Smart Lego, minha equipe, conquistou o 3º lugar na modalidade Missão Impossível Hardware no Fira RoboWorld Cup em Wolfenbüttel, Alemanha.",
            descriptionEn: "Smart Lego, my team, won 3rd place in the Impossible Mission Hardware category at the Fira RoboWorld Cup in Wolfenbüttel, Germany.",
            image: "/achievements/robotics/fira-roboworld-cup-20231.jpg",
        },
    ]

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        })
    }, [api]);

    return (
        <section id="achievements" className="py-20 bg-muted relative overflow-hidden">
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
                                                    className="object-cover rounded-t-lg"
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
                        key={index}
                        onClick={() => {
                            if (api) {
                                api.scrollTo(index)
                            }
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === current ? "bg-primary scale-125" : "bg-primary/30 hover:bg-primary/50"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <div className="text-center mt-10">
                    <Link href="/achievements">
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                            {language === "pt" ? "Ver Mais" : "See More"}
                            <i className="fa-solid fa-arrow-right ml-2"></i>
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full"></div>
                <div className="absolute bottom-20 left-10 w-20 h-20 bg-primary/10 rounded-full"></div>
            </div>
        </section>
    )
}