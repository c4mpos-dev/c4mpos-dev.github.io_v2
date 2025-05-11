"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "components/ui/button"
import { ChevronLeft } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/ui/tabs"
import { useMobile } from "hooks/use-mobile"

export default function AchievementsPage() {
  const [language, setLanguage] = useState<"pt" | "en">("pt")
  const isMobile = useMobile()

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const generalAchievements = [
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
    {
      id: 4,
      titlePt: "Hackathon Fintech - 1º Lugar",
      titleEn: "Fintech Hackathon - 1st Place",
      datePt: "Outubro 2021",
      dateEn: "October 2021",
      descriptionPt: "Vencedor do hackathon nacional com solução inovadora para inclusão financeira.",
      descriptionEn: "Winner of the national hackathon with an innovative solution for financial inclusion.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 5,
      titlePt: "Certificação em UI/UX Design",
      titleEn: "UI/UX Design Certification",
      datePt: "Julho 2021",
      dateEn: "July 2021",
      descriptionPt: "Especialização em design de interfaces e experiência do usuário.",
      descriptionEn: "Specialization in interface design and user experience.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 6,
      titlePt: "Certificação Node.js",
      titleEn: "Node.js Certification",
      datePt: "Abril 2021",
      dateEn: "April 2021",
      descriptionPt: "Certificação em desenvolvimento backend com Node.js e Express.",
      descriptionEn: "Certification in backend development with Node.js and Express.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const roboticsAchievements = [
    {
      id: 1,
      titlePt: "Campeonato Mundial de Robótica - 3º Lugar",
      titleEn: "World Robotics Championship - 3rd Place",
      datePt: "Dezembro 2022",
      dateEn: "December 2022",
      descriptionPt: "Medalha de bronze na competição mundial de robótica na categoria de resgate.",
      descriptionEn: "Bronze medal in the world robotics competition in the rescue category.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      titlePt: "Olimpíada Brasileira de Robótica - 1º Lugar",
      titleEn: "Brazilian Robotics Olympiad - 1st Place",
      datePt: "Setembro 2022",
      dateEn: "September 2022",
      descriptionPt: "Campeão nacional na competição de robótica autônoma com projeto inovador de navegação.",
      descriptionEn: "National champion in the autonomous robotics competition with an innovative navigation project.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      titlePt: "Torneio Regional de Robótica - 1º Lugar",
      titleEn: "Regional Robotics Tournament - 1st Place",
      datePt: "Maio 2022",
      dateEn: "May 2022",
      descriptionPt: "Primeiro lugar na competição regional com robô de alta precisão para tarefas de montagem.",
      descriptionEn: "First place in the regional competition with a high-precision robot for assembly tasks.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 4,
      titlePt: "Competição FIRST LEGO League - Destaque em Inovação",
      titleEn: "FIRST LEGO League Competition - Innovation Award",
      datePt: "Novembro 2021",
      dateEn: "November 2021",
      descriptionPt: "Reconhecimento pela solução mais inovadora na competição internacional de robótica com LEGO.",
      descriptionEn: "Recognition for the most innovative solution in the international LEGO robotics competition.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 5,
      titlePt: "Campeonato Nacional de Robótica - 2º Lugar",
      titleEn: "National Robotics Championship - 2nd Place",
      datePt: "Agosto 2021",
      dateEn: "August 2021",
      descriptionPt: "Vice-campeão nacional na categoria de robôs de combate com design inovador.",
      descriptionEn: "National runner-up in the combat robots category with innovative design.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 6,
      titlePt: "Hackathon de Robótica - Melhor Protótipo",
      titleEn: "Robotics Hackathon - Best Prototype",
      datePt: "Junho 2021",
      dateEn: "June 2021",
      descriptionPt: "Premiado pelo melhor protótipo funcional desenvolvido em 48 horas de hackathon.",
      descriptionEn: "Awarded for the best functional prototype developed in 48 hours of hackathon.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 7,
      titlePt: "Competição de Robótica Educacional - 1º Lugar",
      titleEn: "Educational Robotics Competition - 1st Place",
      datePt: "Março 2021",
      dateEn: "March 2021",
      descriptionPt: "Primeiro lugar na competição de robótica educacional com projeto de assistência a idosos.",
      descriptionEn: "First place in the educational robotics competition with a project for elderly assistance.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 8,
      titlePt: "Torneio Internacional de Robótica - Finalista",
      titleEn: "International Robotics Tournament - Finalist",
      datePt: "Dezembro 2020",
      dateEn: "December 2020",
      descriptionPt: "Finalista entre mais de 200 equipes no torneio internacional de robótica.",
      descriptionEn: "Finalist among more than 200 teams in the international robotics tournament.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  // Contagem de campeonatos por categoria
  const roboticsStats = {
    pt: {
      mundiais: roboticsAchievements.filter((a) => a.titlePt.toLowerCase().includes("mundial")).length,
      internacionais: roboticsAchievements.filter((a) => a.titlePt.toLowerCase().includes("internacional")).length,
      nacionais: roboticsAchievements.filter(
        (a) => a.titlePt.toLowerCase().includes("nacional") || a.titlePt.toLowerCase().includes("brasileira"),
      ).length,
      regionais: roboticsAchievements.filter((a) => a.titlePt.toLowerCase().includes("regional")).length,
    },
    en: {
      world: roboticsAchievements.filter((a) => a.titleEn.toLowerCase().includes("world")).length,
      international: roboticsAchievements.filter((a) => a.titleEn.toLowerCase().includes("international")).length,
      national: roboticsAchievements.filter(
        (a) => a.titleEn.toLowerCase().includes("national") || a.titleEn.toLowerCase().includes("brazilian"),
      ).length,
      regional: roboticsAchievements.filter((a) => a.titleEn.toLowerCase().includes("regional")).length,
    },
  }

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt")
  }

  // Renderiza a linha do tempo para desktop
  const renderDesktopTimeline = (achievements: typeof generalAchievements) => (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30"></div>
      <div className="space-y-16">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} gap-8`}
          >
            <div className={`w-1/2 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
              <div className="bg-card p-6 rounded-lg shadow-lg border border-border hover:border-primary/30 transition-all duration-300">
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
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center z-10">
              <span className="text-white font-bold">{achievement.id}</span>
            </div>
            <div className="w-1/2">
              <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={achievement.image || "/placeholder.svg"}
                  alt={language === "pt" ? achievement.titlePt : achievement.titleEn}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )

  // Renderiza a linha do tempo para mobile
  const renderMobileTimeline = (achievements: typeof generalAchievements) => (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-1 bg-primary/30"></div>
      <div className="space-y-12">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-12"
          >
            <div className="absolute left-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10 transform -translate-x-3.5">
              <span className="text-white font-bold text-sm">{achievement.id}</span>
            </div>
            <div className="bg-card rounded-lg shadow-lg border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={achievement.image || "/placeholder.svg"}
                  alt={language === "pt" ? achievement.titlePt : achievement.titleEn}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="text-sm text-primary font-medium mb-1">
                  {language === "pt" ? achievement.datePt : achievement.dateEn}
                </div>
                <h3 className="text-lg font-bold mb-2">
                  {language === "pt" ? achievement.titlePt : achievement.titleEn}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {language === "pt" ? achievement.descriptionPt : achievement.descriptionEn}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <Link href="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ChevronLeft size={16} />
              {language === "pt" ? "Voltar" : "Back"}
            </Button>
          </Link>
          <Button variant="outline" onClick={toggleLanguage}>
            {language === "pt" ? "EN" : "PT-BR"}
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {language === "pt" ? "Conquistas e Certificações" : "Achievements and Certifications"}
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="general">
              {language === "pt" ? "Conquistas Gerais" : "General Achievements"}
            </TabsTrigger>
            <TabsTrigger value="robotics">{language === "pt" ? "Robótica" : "Robotics"}</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            {isMobile ? renderMobileTimeline(generalAchievements) : renderDesktopTimeline(generalAchievements)}
          </TabsContent>

          <TabsContent value="robotics">
            {/* Resumo de conquistas em robótica */}
            <div className="bg-card p-6 rounded-lg shadow-lg border border-primary/20 mb-12">
              <h2 className="text-2xl font-bold mb-4 text-center">
                {language === "pt" ? "Resumo de Conquistas em Robótica" : "Robotics Achievements Summary"}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-muted p-4 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {language === "pt" ? roboticsStats.pt.mundiais : roboticsStats.en.world}
                  </div>
                  <div className="text-sm">{language === "pt" ? "Campeonatos Mundiais" : "World Championships"}</div>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {language === "pt" ? roboticsStats.pt.internacionais : roboticsStats.en.international}
                  </div>
                  <div className="text-sm">
                    {language === "pt" ? "Torneios Internacionais" : "International Tournaments"}
                  </div>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {language === "pt" ? roboticsStats.pt.nacionais : roboticsStats.en.national}
                  </div>
                  <div className="text-sm">
                    {language === "pt" ? "Campeonatos Nacionais" : "National Championships"}
                  </div>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {language === "pt" ? roboticsStats.pt.regionais : roboticsStats.en.regional}
                  </div>
                  <div className="text-sm">{language === "pt" ? "Competições Regionais" : "Regional Competitions"}</div>
                </div>
              </div>
            </div>

            {isMobile ? renderMobileTimeline(roboticsAchievements) : renderDesktopTimeline(roboticsAchievements)}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
