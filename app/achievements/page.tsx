"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ExternalLink, Group, MapPin, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMobile } from "@/hooks/use-mobile";

export default function AchievementsPage() {
    const [language, setLanguage] = useState<"pt" | "en">("pt")
    const isMobile = useMobile()

    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    type Achievement = {
        id: number;
        titlePt: string;
        titleEn: string;
        datePt: string;
        dateEn: string;
        descriptionPt: string;
        descriptionEn: string;
        image: string;
        local?: string;
        link?: string;
        team?: string;
    };

    const generalAchievements: Achievement[] = [
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

    const roboticsAchievements: Achievement[] = [
        {
            id: 1,
            titlePt: "FRC OFF-SEASON",
            titleEn: "FRC OFF-SEASON",
            datePt: "Agosto 2023",
            dateEn: "August 2023",
            descriptionPt: "3º lugar geral e campeão da categoria 'Engineering Award' no evento FRC OFF-SEASON 2023 no Rio de Janeiro.",
            descriptionEn: "3rd overall and champion of the 'Engineering Award' category at the FRC OFF-SEASON 2023 event in Rio de Janeiro.",
            image: "/achievements/robotics/off-season-2023.jpg",
            link: "https://www.instagram.com/p/Cv5QHVjO-j9/?img_index=1",
            local: "Rio de Janeiro - RJ",
            team: "Nine Tails"
        },
        {
            id: 2,
            titlePt: "FIRA ROBO WORLD CUP",
            titleEn: "FIRA ROBO WORLD CUP",
            datePt: "Julho 2023",
            dateEn: "July 2023",
            descriptionPt: "3º lugar na categoria 'Cabo de Guerra' e Missão Impossível Hardware.",
            descriptionEn: "3rd place in the 'Tug of War' category and Impossible Mission Hardware.",
            image: "/achievements/robotics/fira-roboworld-cup-2023.jpg",
            link: "https://g1.globo.com/rj/sul-do-rio-costa-verde/noticia/2023/07/14/estudantes-de-resende-viajam-a-alemanha-para-disputar-copa-do-mundo-de-robotica.ghtml",
            local: "Wolfenbüttel, Germany",
            team: "Smart Lego"
        },
        {
            id: 3,
            titlePt: "FRC - Houston World Championship",
            titleEn: "FRC - Houston World Championship",
            datePt: "Abril 2023",
            dateEn: "April 2023",
            descriptionPt: "Conquistamos o prêmio 'Rookie Inspiration Award' da divisão Curie.",
            descriptionEn: "We won the Curie division's 'Rookie Inspiration Award'.",
            image: "/achievements/robotics/frc-houston.jpg",
            link: "https://odia.ig.com.br/resende/2023/04/6618347-alunos-de-resende-ganham-premio-em-torneio-mundial-de-robotica-nos-eua.html",
            local: "Houston, EUA",
            team: "Nine Tails"
        },
        {
            id: 4,
            titlePt: "FRC - Brasil Regional",
            titleEn: "FRC - Brazil Regional",
            datePt: "Março 2023",
            dateEn: "March 2023",
            descriptionPt: "Conquistamos o prêmio 'Rookie All-Star' da competição. Conquistando o direito de participar do mundial em Houston.",
            descriptionEn: "We won the competition's 'Rookie All-Star' award, earning the right to participate in the world championship in Houston.",
            image: "/achievements/robotics/frc-brasilia.jpg",
            link: "https://www.instagram.com/p/Cp_YwuGOO4c/",
            local: "Brasília - DF",
            team: "Nine Tails"
        },
        {
            id: 5,
            titlePt: "FLL SUPERPOWERED",
            titleEn: "FLL SUPERPOWERED",
            datePt: "Dezembro 2022",
            dateEn: "December 2022",
            descriptionPt: "3º lugar geral no torneio nacional de robótica FLL Superpowered, o famoso Champions's Award.",
            descriptionEn: "3rd overall in the national FLL Superpowered robotics tournament, winning the prestigious Champion's Award.",
            image: "/achievements/robotics/fll-superpowered.jpg",
            local: "Duque de Caxias - RJ",
            link: "https://www.instagram.com/p/Co2PMGCOoTp/?img_index=2",
            team: "Smart Lego"
        },
        {
            id: 6,
            titlePt: "FIRA Nacional",
            titleEn: "FIRA National",
            datePt: "Novembro 2022",
            dateEn: "November 2022",
            descriptionPt: "Conquistamos o 4º lugar na categoria Missão Impossível. Nos classificamos para o mundial na Alemanha.",
            descriptionEn: "We achieved 4th place in the Impossible Mission category, qualifying for the world championship in Germany.",
            local: "São Luís - MA",
            image: "/achievements/robotics/fira-nacional.jpg",
            team: "Smart Lego"
        },
        {
            id: 7,
            titlePt: "FIRA Regional",
            titleEn: "FIRA Regional",
            datePt: "Setembro 2022",
            dateEn: "September 2022",
            descriptionPt: "Campeão das categorias Cabo de Guerra e Missão Impossível.",
            descriptionEn: "Champion of the Tug of War and Impossible Mission categories.",
            image: "/achievements/robotics/fira-regional-rj.jfif",
            local: "Rio de Janeiro - RJ",
            team: "Smart Lego",
            link: "https://www.instagram.com/p/Ci-81jWOZul/"
        },
        {
            id: 8,
            titlePt: "FLL Cargo Connect",
            titleEn: "FLL Cargo Connect",
            datePt: "Março 2022",
            dateEn: "March 2022",
            descriptionPt: "2º Lugar na categoria Projeto de Inovação na estapa estadual.",
            descriptionEn: "2nd Place in the Innovation Project category at the state stage.",
            image: "/achievements/robotics/fll-cargoconnect.png",
            local: "Virtual",
            team: "Smart Lego",
            link: "https://www.instagram.com/p/CcJaI-TO7CQ/?img_index=1"
        },
        {
            id: 9,
            titlePt: "TBR Nacional",
            titleEn: "TBR National",
            datePt: "Dezembro 2021",
            dateEn: "December 2021",
            descriptionPt: "Nossa equipe apresentou um projeto social sólido baseado no tema da temporada.",
            descriptionEn: "Our team presented a solid social project based on the season's theme.",
            image: "/achievements/robotics/tbr-nacional-2021.png",
            local: "Virtual",
            team: "Smart Lego",
            link: "https://www.instagram.com/p/CXHW5YSpxz-/"
        },
        {
            id: 10,
            titlePt: "TBR Regional",
            titleEn: "TBR Regional",
            datePt: "Setembro 2021",
            dateEn: "September 2021",
            descriptionPt: "A equipe apresentou um projeto bem sólido sobre o tema e conseguiu a classificação para a etapa nacional.",
            descriptionEn: "The team presented a solid project on the topic and qualified for the national stage.",
            image: "/achievements/robotics/tbr-regional-2021.png",
            local: "Virtual",
            team: "Smart Lego",
            link: "https://www.instagram.com/p/CUTXGXisRy_/?img_index=1"
        },
        
        {
            id: 11,
            titlePt: "TJR Nacional",
            titleEn: "TJR National",
            datePt: "2021",
            dateEn: "2021",
            descriptionPt: "Modalidade: Sumô - 4º Lugar | Modalidade: Viagem ao Centro da Terra - --º Lugar",
            descriptionEn: "Category: Sumo - 4th Place | Category: Journey to the Center of the Earth - --th Place",
            image: "/achievements/robotics/tjr-2021-nacional.jfif",
            local: "São Paulo - SP",
            team: "Smart Lego",
            link: ""
        },
        {
            id: 12,
            titlePt: "TJR Regional/Estadual",
            titleEn: "TJR Regional/State",
            datePt: "2021",
            dateEn: "2021",
            descriptionPt: "Modalidade: Sumô - 1º Lugar - Classificação | Modalidade: Viagem ao Centro da Terra - --º Lugar - Classificação",
            descriptionEn: "Category: Sumo - 1st Place - Classification | Category: Journey to the Center of the Earth - --th Place - Classification",
            image: "/achievements/robotics/tjr-2021-regional.jfif",
            local: "Volta Redonda - RJ",
            team: "Smart Lego",
            link: ""
        },
        {
            id: 13,
            titlePt: "OBRVS Nacional",
            titleEn: "OBRVS National",
            datePt: "2021",
            dateEn: "2021",
            descriptionPt: "--º Lugar",
            descriptionEn: "--th Place",
            image: "/achievements/robotics/obrvs-2021-nacional.jfif",
            local: "Rio de Janeiro - RJ (Virtual)",
            team: "Smart Lego",
            link: ""
        },
        {
            id: 14,
            titlePt: "OBRVS Estadual",
            titleEn: "OBRVS State",
            datePt: "2021",
            dateEn: "2021",
            descriptionPt: "2º Lugar - Classificação",
            descriptionEn: "2nd Place - Classification",
            image: "/achievements/robotics/obrvs-2021-estadual.jfif",
            local: "Rio de Janeiro - RJ (Virtual)",
            team: "Smart Lego",
            link: ""
        },
        {
            id: 15,
            titlePt: "OBRVS Nacional",
            titleEn: "OBRVS National",
            datePt: "2020",
            dateEn: "2020",
            descriptionPt: "27º Lugar",
            descriptionEn: "27th Place",
            image: "/achievements/robotics/obrvs-2020-nacional.jfif",
            local: "Rio de Janeiro - RJ (Virtual)",
            team: "Smart Lego",
            link: ""
        },
        {
            id: 16,
            titlePt: "OBRVS Estadual",
            titleEn: "OBRVS State",
            datePt: "2020",
            dateEn: "2020",
            descriptionPt: "3º Lugar - Classificação",
            descriptionEn: "3rd Place - Classification",
            image: "/achievements/robotics/obrvs-2020-estadual.jfif",
            local: "Rio de Janeiro - RJ (Virtual)",
            team: "Smart Lego",
            link: ""
        },
        {
            id: 17,
            titlePt: "OBR Nacional",
            titleEn: "OBR National",
            datePt: "2019",
            dateEn: "2019",
            descriptionPt: "32º Lugar",
            descriptionEn: "32nd Place",
            image: "/achievements/robotics/obr-2019-nacional.jfif",
            local: "Rio Grande - RS",
            team: "Smart Lego",
            link: ""
        },
        {
            id: 18,
            titlePt: "OBR Estadual",
            titleEn: "OBR State",
            datePt: "2019",
            dateEn: "2019",
            descriptionPt: "1º Lugar - Classificação",
            descriptionEn: "1st Place - Classification",
            image: "/achievements/robotics/obr-2019-estadual.jfif",
            local: "Petrópolis - RJ",
            team: "Smart Lego",
            link: ""
        },
        {
            id: 19,
            titlePt: "OBR Regional",
            titleEn: "OBR Regional",
            datePt: "2019",
            dateEn: "2019",
            descriptionPt: "2º Lugar - Classificação",
            descriptionEn: "2nd Place - Classification",
            image: "/achievements/robotics/obr-2019-regional.jfif",
            local: "São Gonçalo - RJ",
            team: "Smart Lego",
            link: ""
        },
        {
            id: 20,
            titlePt: "TJR Nacional",
            titleEn: "TJR National",
            datePt: "2019",
            dateEn: "2019",
            descriptionPt: "Modalidade: Viagem ao Centro da Terra - 2º Lugar - Classificação",
            descriptionEn: "Category: Journey to the Center of the Earth - 2nd Place - Classification",
            image: "/achievements/robotics/tjr-2019-nacional.jfif",
            local: "São Paulo - SP",
            team: "Smart Lego",
            link: ""
        },
        {
            id: 21,
            titlePt: "TJR Regional/Estadual",
            titleEn: "TJR Regional/State",
            datePt: "2019",
            dateEn: "2019",
            descriptionPt: "Modalidade: Viagem ao Centro da Terra - 1º Lugar - Classificação",
            descriptionEn: "Category: Journey to the Center of the Earth - 1st Place - Classification",
            image: "/achievements/robotics/tjr-2019-regional.jfif",
            local: "Volta Redonda - RJ",
            team: "Smart Lego",
            link: ""
        },
        {
            id: 22,
            titlePt: "ITR Internacional",
            titleEn: "ITR International",
            datePt: "2019",
            dateEn: "2019",
            descriptionPt: "Modalidade: Viagem ao Centro da Terra - 1º Lugar (ETMAX) | Modalidade: Cabo de Guerra - 2º Lugar (ETMAX)",
            descriptionEn: "Category: Journey to the Center of the Earth - 1st Place (ETMAX) | Category: Tug of War - 2nd Place (ETMAX)",
            image: "/achievements/robotics/itr-2019-internacional.jfif",
            local: "São Luís - MA",
            team: "Smart Lego",
            link: ""
        },
        {
            id: 23,
            titlePt: "TJR Nacional",
            titleEn: "TJR National",
            datePt: "2018",
            dateEn: "2018",
            descriptionPt: "Modalidade: Viagem ao Centro da Terra - 1º Lugar - Classificação",
            descriptionEn: "Category: Journey to the Center of the Earth - 1st Place - Classification",
            image: "/achievements/robotics/tjr-2018-nacional.jfif",
            local: "João Pessoa - PB",
            team: "Smart Lego",
            link: ""
        },
        {
            id: 24,
            titlePt: "TJR Regional/Estadual",
            titleEn: "TJR Regional/State",
            datePt: "2018",
            dateEn: "2018",
            descriptionPt: "Modalidade: Viagem ao Centro da Terra - 1º Lugar - Classificação",
            descriptionEn: "Category: Journey to the Center of the Earth - 1st Place - Classification",
            image: "/achievements/robotics/tjr-2018-regional.jfif",
            local: "Botafogo - RJ",
            team: "Smart Lego",
            link: ""
        },
        {
            id: 25,
            titlePt: "OBR Estadual",
            titleEn: "OBR State",
            datePt: "2018",
            dateEn: "2018",
            descriptionPt: "5º Lugar",
            descriptionEn: "5th Place",
            image: "/achievements/robotics/obr-2018-estadual.jfif",
            local: "Volta Redonda - RJ",
            team: "Smart Lego",
            link: ""
        },
        {
            id: 26,
            titlePt: "OBR Regional",
            titleEn: "OBR Regional",
            datePt: "2018",
            dateEn: "2018",
            descriptionPt: "7º Lugar - Classificação",
            descriptionEn: "7th Place - Classification",
            image: "/achievements/robotics/obr-2018-regional.jfif",
            local: "Volta Redonda - RJ",
            team: "Smart Lego",
            link: ""
        }

    ]

  // Contagem de campeonatos por categoria
  const roboticsStats = {
    pt: {
      torneios: roboticsAchievements.length,
      internacionais: roboticsAchievements.filter((a) => a.titlePt.toLowerCase().includes("internacional")).length,
      nacionais: roboticsAchievements.filter(
        (a) => a.titlePt.toLowerCase().includes("nacional") || a.titlePt.toLowerCase().includes("brasileira"),
      ).length,
      regionais: roboticsAchievements.filter((a) => a.titlePt.toLowerCase().includes("regional")).length,
    },
    en: {
      tournaments: roboticsAchievements.length,
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
              <div className="bg-card px-6 py-4 rounded-lg shadow-lg border border-border hover:border-primary/30 transition-all duration-300">
                <div className="inline-flex gap-1 text-sm text-muted-foreground font-medium mb-2">
                    {language === "pt" ? achievement.datePt : achievement.dateEn} -
                    <div className="inline-flex items-center text-sm text-primary mb-2">
                        <MapPin className="inline-block mr-0.5 h-4 w-4" />
                        {language === "pt" ? achievement.local : achievement.local}
                    </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2">
                  {language === "pt" ? achievement.titlePt : achievement.titleEn}
                </h3>
                <p className="text-muted-foreground">
                  {language === "pt" ? achievement.descriptionPt : achievement.descriptionEn}
                </p>
                <span className={`flex items-center mt-2 ${achievement.team === "Nine Tails" ? "text-purple-500" : achievement.team == "Smart Lego" ? "text-pink-500" : "text-blue-600"} ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                  <Users className="mr-1.5 h-4 w-4" />
                  {achievement.team}
                </span>

                {achievement.link && (
                      <a
                          href={achievement.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center mt-3 text-sm text-primary font-medium"
                      >
                          {language === "pt" ? "Ver Matéria" : "View Material"}
                          <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                )}
              </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center z-10">
              <span className="text-white font-bold">{achievement.id}</span>
            </div>
            <div className="w-1/2">
              <div className="relative h-72 w-full overflow-hidden rounded-lg shadow-lg">
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
            <div className="absolute left-[16px] w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10 transform -translate-x-3.5">
              <span className="text-white text-center font-bold text-sm">{achievement.id}</span>
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
                <div className="flex gap-1 text-sm font-medium mb-2">
                  {language === "pt" ? achievement.datePt : achievement.dateEn} -
                  <div className="inline-flex items-center text-sm text-primary mb-2">
                      <MapPin className="inline-block mr-0.5 h-4 w-4" />
                      {language === "pt" ? achievement.local : achievement.local}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-1">
                  {language === "pt" ? achievement.titlePt : achievement.titleEn}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {language === "pt" ? achievement.descriptionPt : achievement.descriptionEn}
                </p>

                
                {achievement.link && (
                    <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-4 text-sm text-primary font-medium"
                    >
                        {language === "pt" ? "Ver Matéria" : "View Material"}
                        <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                )}
                
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
                    {language === "pt" ? roboticsStats.pt.torneios : roboticsStats.en.tournaments}
                  </div>
                  <div className="text-sm">{language === "pt" ? "Torneios" : "Tournaments"}</div>
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
