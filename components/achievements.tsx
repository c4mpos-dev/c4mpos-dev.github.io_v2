"use client"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useMobile } from "hooks/use-mobile"

interface AchievementsProps {
  language: "pt" | "en"
}

const Achievements = ({ language }: AchievementsProps) => {
  const isMobile = useMobile()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [showSwipeAnimation, setShowSwipeAnimation] = useState(true)

  // Efeito para mostrar a animação de swipe apenas nas primeiras visitas
  useEffect(() => {
    const hasSeenSwipeAnimation = localStorage.getItem("hasSeenSwipeAnimation")
    if (!hasSeenSwipeAnimation && isMobile) {
      setShowSwipeAnimation(true)
      // Esconder a animação após 5 segundos
      const timer = setTimeout(() => {
        setShowSwipeAnimation(false)
        localStorage.setItem("hasSeenSwipeAnimation", "true")
      }, 5000)
      return () => clearTimeout(timer)
    } else {
      setShowSwipeAnimation(false)
    }
  }, [isMobile])

  const achievements = [
    {
      id: 1,
      titlePt: "Certificação em React",
      titleEn: "React Certification",
      datePt: "Janeiro 2023",
      dateEn: "January 2023",
      descriptionPt: "Certificação avançada em desenvolvimento com React, incluindo hooks, context API e Redux.",
      descriptionEn: "Advanced certification in React development, including hooks, context API, and Redux.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      titlePt: "Prêmio de Inovação Tecnológica",
      titleEn: "Technological Innovation Award",
      datePt: "Junho 2022",
      dateEn: "June 2022",
      descriptionPt: "Reconhecimento por desenvolvimento de solução inovadora para o setor financeiro.",
      descriptionEn: "Recognition for developing an innovative solution for the financial sector.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      titlePt: "Certificação AWS Developer",
      titleEn: "AWS Developer Certification",
      datePt: "Março 2022",
      dateEn: "March 2022",
      descriptionPt: "Certificação oficial da Amazon Web Services para desenvolvimento em nuvem.",
      descriptionEn: "Official Amazon Web Services certification for cloud development.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

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

        {/* Indicador visual de swipe para mobile */}
        {isMobile && (
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 text-primary font-medium">
              <ChevronLeft size={20} />
              <span>{language === "pt" ? "Deslize para ver mais" : "Swipe to see more"}</span>
              <ChevronRight size={20} />
            </div>

            {/* Animação de swipe */}
            {showSwipeAnimation && (
              <div className="relative h-8 mt-2">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-8">
                  <div className="w-6 h-6 bg-primary/20 rounded-full absolute left-0 animate-ping"></div>
                  <div className="w-6 h-6 border-2 border-primary rounded-full absolute left-0 animate-[swipe_2s_ease-in-out_infinite]"></div>
                </div>
              </div>
            )}
          </div>
        )}

        <div
          ref={carouselRef}
          className="relative w-full max-w-4xl mx-auto overflow-hidden"
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
        >
          <Carousel className="w-full" onSelect={(index) => setActiveIndex(index)}>
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

        {/* Indicadores de slide para mobile */}
        <div className="flex justify-center gap-2 mt-6">
          {achievements.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex ? "bg-primary w-6" : "bg-primary/30"
              }`}
            />
          ))}
        </div>

        <div className="text-center mt-12">
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

export default Achievements
