"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ExternalLink, List, MapPin, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMobile } from "@/hooks/use-mobile";
import { ThemeToggle } from "@/components/theme-toggle";
import Footer from "@/components/footer";

export default function AchievementsPage() {
    const [language, setLanguage] = useState<"pt" | "en">("pt");
    const [mounted, setMounted] = useState(false);
    const [showLegend, setShowLegend] = useState(false);
    const isMobile = useMobile();

    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
        setMounted(true);
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

    const toggleLanguage = () => {
      setLanguage(language === "pt" ? "en" : "pt")
    }

    if (!mounted) return null

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
            titlePt: "FLL CARGO CONNECT",
            titleEn: "FLL CARGO CONNECT",
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
            titlePt: "TJR Nacional",
            titleEn: "TJR National",
            datePt: "Dezembro 2021",
            dateEn: "December 2021",
            descriptionPt: "Conquistamos o 4º lugar na categoria Sumô.",
            descriptionEn: "We achieved 4th place in the Sumo category.",
            image: "/achievements/robotics/tjr-nacional-2021.png",
            local: "São Paulo - SP",
            team: "Smart Lego",
            link: "https://www.instagram.com/p/CXrRpsRJFdd/"
        },
        {
            id: 10,
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
            id: 11,
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
            id: 12,
            titlePt: "TJR Regional",
            titleEn: "TJR Regional",
            datePt: "Outubro 2021",
            dateEn: "October 2021",
            descriptionPt: "Nossa equipe foi campeã da categoria Sumô.",
            descriptionEn: "Our team was the champion of the Sumo category.",
            image: "/achievements/robotics/tjr-regional-2021.png",
            local: "Volta Redonda - RJ",
            team: "Smart Lego",
            link: ""
        },
        {
            id: 13,
            titlePt: "OBR Virtual Simulação - Nacional",
            titleEn: "OBRVS National",
            datePt: "Outubro 2021",
            dateEn: "October 2021",
            descriptionPt: "",
            descriptionEn: "",
            image: "/achievements/robotics/OBRVS-nacional-2021.png",
            local: "Virtual",
            team: "Pequeno Gigante Skydroid",
            link: ""
        },
        {
            id: 14,
            titlePt: "OBR Virtual Simulação - Estadual",
            titleEn: "OBRVS State",
            datePt: "Agosto 2021",
            dateEn: "August 2021",
            descriptionPt: "Conquistamos o 2º lugar, com isso, garantimos nossa classificação para a etapa nacional.",
            descriptionEn: "We achieved 2nd place, thus ensuring our qualification for the national stage.",
            image: "/achievements/robotics/OBRVS-estadual-2021.png",
            local: "Virtual",
            team: "Pequeno Gigante Skydroid",
            link: "https://globoplay.globo.com/v/9773030/"
        },
        {
            id: 15,
            titlePt: "OBR Virtual Simulação - Nacional",
            titleEn: "OBRVS National",
            datePt: "Novembro 2020",
            dateEn: "November 2020",
            descriptionPt: "Nossa equipe lidou com diversos desafios e ficou com 27º Lugar do Brasil, saindo na capa da OBR.",
            descriptionEn: "Our team faced several challenges and finished 27th in Brazil, appearing on the cover of OBR.",
            image: "/achievements/robotics/OBRVS-nacional-2020.png",
            local: "Virtual",
            team: "Pequeno Gigante Skydroid",
            link: "https://www.facebook.com/photo?fbid=1621196931386299&set=a.236337473205592&locale=pt_BR"
        },
        {
            id: 16,
            titlePt: "OBR Virtual Simulação - Estadual",
            titleEn: "OBRVS State",
            datePt: "Outubro 2020",
            dateEn: "October 2020",
            descriptionPt: "Nossa equipe ficou em 3º lugar, garantindo nossa classificação para a etapa nacional.",
            descriptionEn: "Our team finished in 3rd place, securing our qualification for the national stage.",
            image: "/achievements/robotics/OBRVS-estadual-2020.png",
            local: "Virtual",
            team: "Pequeno Gigante Skydroid",
            link: "https://www.facebook.com/photo/?fbid=3431539570293223&set=pcb.3431558560291324&locale=pt_BR"
        },
        {
            id: 17,
            titlePt: "TJR Nacional",
            titleEn: "TJR National",
            datePt: "Dezembro 2019",
            dateEn: "December 2019",
            descriptionPt: "A equipe Pequeno Gigante Android conquistou o 2º lugar na categoria Viagem ao Centro da Terra.",
            descriptionEn: "The Android team won 2nd place in the Journey to the Center of the Earth category.",
            image: "/achievements/robotics/tjr-nacional-2019.jpg",
            local: "São Paulo - SP",
            team: "Pequeno Gigante Android",
            link: "https://www.facebook.com/photo/?fbid=10206295353938194&set=pb.1696644253.-2207520000"
        },
        {
            id: 18,
            titlePt: "OBR Nacional",
            titleEn: "OBR National",
            datePt: "Outubro 2019",
            dateEn: "October 2019",
            descriptionPt: "A equipe não conseguiu o pódio, mas volta com mais uma medalha como participação na etapa nacional",
            descriptionEn: "The team did not make it to the podium but returns with another medal for participating in the national stage",
            image: "/achievements/robotics/obr-nacional-2019.jpg",
            local: "Rio Grande - RS",
            team: "Pequeno Gigante Skydroid",
            link: "https://www.facebook.com/PiraiPequenoGigante/posts/pfbid036idZdURcDMarMr5EYKhWv29QojMxbw99iDe52kRpQyptkhB93T4sn2mexjhjauhLl?locale=pt_BR"
        },
        {
            id: 19,
            titlePt: "OBR Estadual",
            titleEn: "OBR State",
            datePt: "Setembro 2019",
            dateEn: "September 2019",
            descriptionPt: "A equipe se consagrou campeã estadual, classificando-se para a etapa nacional.",
            descriptionEn: "The team was crowned state champion, qualifying for the national stage.",
            image: "/achievements/robotics/obr-estadual-2019.jpg",
            local: "Petrópolis - RJ",
            team: "Pequeno Gigante Skydroid",
            link: "https://www.facebook.com/PiraiPequenoGigante/posts/pfbid02PeydRhAYLARs2F94ytMazgFDS9oxR3MvDAdVjZ5DPaMrgwezJK9YjATugYDjA3Eml?locale=pt_BR"
        },
        {
            id: 20,
            titlePt: "OBR Regional",
            titleEn: "OBR Regional",
            datePt: "Agosto 2019",
            dateEn: "August 2019",
            descriptionPt: "Nossa equipe ficou com o 2º Lugar, se classificando para a etapa estadual.",
            descriptionEn: "The team finished in 2nd Place, qualifying for the state stage.",
            image: "/achievements/robotics/obr-regional-2019.jpg",
            local: "São Gonçalo - RJ",
            team: "Pequeno Gigante Skydroid",
            link: "https://www.facebook.com/osni.silva.16/posts/pfbid0sxWqqDV85zDGw8NbqaecNWZEHnu2KivNZWtpWjvKUPCQEEvPatR2LzMJbmevhaWHl?locale=pt_BR"
        },
        {
            id: 21,
            titlePt: "TJR Regional",
            titleEn: "TJR Regional",
            datePt: "Julho 2019",
            dateEn: "July 2019",
            descriptionPt: "A equipe Pequeno Gigante Android conquistou 1º Lugar na categoria Viagem ao Centro da Terra, se classificando para a etapa nacional.",
            descriptionEn: "The Pequeno Gigante Android team won 1st Place in the Journey to the Center of the Earth category, qualifying for the national stage.",
            image: "/achievements/robotics/tjr-regional-2019.jpg",
            local: "Volta Redonda - RJ",
            team: "Pequeno Gigante Android",
            link: "https://www.facebook.com/osni.silva.16/posts/pfbid02VRAEoreu991RgLVLH8U6xxdsWJsrHzU9DvUXmg8ZM24t96QFRdtL89ECSfGkr8v3l"
        },
        {
            id: 22,
            titlePt: "ITR",
            titleEn: "ITR",
            datePt: "Junho 2019",
            dateEn: "June 2019",
            descriptionPt: "A equipe Android conquistou 1º Lugar na categoria Viagem ao Centro da Terra, e a equipe SkyDroid conquistou 2º Lugar na categoria Cabo de Guerra.",
            descriptionEn: "The Android team won 1st Place in the Journey to the Center of the Earth category, and the SkyDroid team won 2nd Place in the Tug of War category.",
            image: "/achievements/robotics/itr-2019.jpg",
            local: "São Luís - MA",
            team: "Pequeno Gigante Android/SkyDroid",
            link: "https://www.facebook.com/osni.silva.16/posts/pfbid02fu2KVuWUSvodAsMnhJTcyX49WP9ENEqMyY6FiuPP8cbJkuaiEckJA6CTSXXKvaSwl"
        },
        {
            id: 23,
            titlePt: "TJR Nacional",
            titleEn: "TJR National",
            datePt: "Novembro/Dezembro 2018",
            dateEn: "November/December 2018",
            descriptionPt: "A equipe Android conquistou 1º Lugar na categoria Viagem ao Centro da Terra, se classificando para a etapa internacional.",
            descriptionEn: "The Android team won 1st Place in the Journey to the Center of the Earth category, qualifying for the international stage.",
            image: "/achievements/robotics/tjr-nacional-2018.jpg",
            local: "João Pessoa - PB",
            team: "Android",
            link: "https://www.facebook.com/photo/?fbid=10205077555133985&set=pb.1696644253.-2207520000"
        },
        {
            id: 24,
            titlePt: "TJR Regional",
            titleEn: "TJR Regional",
            datePt: "Novembro 2018",
            dateEn: "November 2018",
            descriptionPt: "A equipe Android conquistou 1º Lugar na categoria Viagem ao Centro da Terra, se classificando para a etapa nacional.",
            descriptionEn: "The Android team won 1st Place in the Journey to the Center of the Earth category, qualifying for the national stage.",
            image: "/achievements/robotics/tjr-regional-2018.jpg",
            local: "Botafogo - RJ",
            team: "Android",
            link: "https://www.facebook.com/osni.silva.16/posts/pfbid02AYDgougVJvUiCRmjfWEBtzfEciYgPKQ2B9HUa4CzuCGMFpKG52QSWycvQvV9omBQl"
        },
        {
            id: 25,
            titlePt: "OBR Estadual",
            titleEn: "OBR State",
            datePt: "Setembro 2018",
            dateEn: "September 2018",
            descriptionPt: "Em nosso primeiro ano na OBR, conquistamos 5º Lugar estadual.",
            descriptionEn: "In our first year at OBR, we achieved 5th place at the state level.",
            image: "/achievements/robotics/obr-estadual-2018.jpg",
            local: "Volta Redonda - RJ",
            team: "Android",
            link: "https://www.facebook.com/osni.silva.16/posts/pfbid04CwuLo3gUMMyYGpFx5Bjm5b2NbBjLYMAR8YMeGgMmxYq5aaVa174tTgAC8mTdCu4l?locale=pt_BR"
        },
        {
            id: 26,
            titlePt: "OBR Regional",
            titleEn: "OBR Regional",
            datePt: "Setembro 2018",
            dateEn: "September 2018",
            descriptionPt: "Em minha primeira competição, minha equipe, Android, conquistou 7º Lugar, se classificando para a etapa estadual.",
            descriptionEn: "In my first competition, my team, Android, achieved 7th place, qualifying for the state stage.",
            image: "/achievements/robotics/obr-regional-2018.jpg",
            local: "Volta Redonda - RJ",
            team: "Android",
            link: "https://www.facebook.com/osni.silva.16/posts/pfbid034Kc9KUeWQJqcE9PN1rq7EDckeFgS5vy6Gngy3zyJmRQe1nAJxm4kLTULZkyqKFvTl"
        }

    ]

    const competitions = [
      {
        code: "FRC",
        pt: "First Robotics Competition",
        en: "First Robotics Competition",
      },
      {
        code: "FLL",
        pt: "First Lego League",
        en: "First Lego League",
      },
      {
        code: "OBR",
        pt: "Olimpíada Brasileira de Robótica",
        en: "Brazilian Robotics Olympiad",
      },
      {
        code: "TJR",
        pt: "Torneio Juvenil de Robótica",
        en: "Youth Robotics Tournament",
      },
      {
        code: "ITR",
        pt: "International Tournament of Robots",
        en: "International Tournament of Robots",
      },
      {
        code: "TBR",
        pt: "Torneio Brasileiro de Robótica",
        en: "Brazilian Robotics Tournament",
      },
      {
        code: "FIRA",
        pt: "Federation of International Robot-soccer Association",
        en: "Federation of International Robot-soccer Association",
      }
    ];


  // Contagem de campeonatos por categoria
  const roboticsStats = {
    pt: {
      torneios: roboticsAchievements.length,
      premios: 20
    },
    en: {
      tournaments: roboticsAchievements.length,
      awards: 20
    },
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
        <header className="w-full bg-background/80 backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              <span className="text-primary">C</span>C
            </Link>

            <div className="flex items-center space-x-4">
              <Link href="/">
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

        <div className="pt-10">
        <div className="container mx-auto px-4 py-12">
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

          <Tabs defaultValue="robotics" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="robotics">{language === "pt" ? "Robótica" : "Robotics"}</TabsTrigger>
              <TabsTrigger value="general">
                {language === "pt" ? "Conquistas Gerais" : "General Achievements"}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="general">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-12"
              >
                <a
                  href="https://www.linkedin.com/in/cau%C3%A3-campos/details/certifications/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                          <i className="fa-brands fa-linkedin text-primary text-xl"></i>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-1">
                            {language === "pt" ? "Ver Todos os Certificados" : "View All Certificates"}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {language === "pt"
                              ? "Clique aqui para ver meus certificados em programação"
                              : "Click here to see my programming certificates"
                            }
                          </p>
                        </div>
                      </div>
                      <div className="text-primary">
                        <ExternalLink className="w-5 h-5" />
                      </div>
                    </div>
                  </motion.div>
                </a>
              </motion.div>
              {isMobile ? renderMobileTimeline(generalAchievements) : renderDesktopTimeline(generalAchievements)}
            </TabsContent>

            <TabsContent value="robotics">
              {/* Resumo de conquistas em robótica */}
              <div className="bg-card p-6 rounded-lg shadow-lg border border-primary/20 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-muted p-6 rounded-lg text-center">
                    <div className="text-4xl font-bold text-primary mb-2">
                      {language === "pt" ? roboticsStats.pt.torneios : roboticsStats.en.tournaments}
                    </div>
                    <div className="text-lg">
                      {language === "pt" ? "Torneios Participados" : "Tournaments Participated"}
                    </div>
                  </div>
                  <div className="bg-muted p-6 rounded-lg text-center">
                    <div className="text-4xl font-bold text-primary mb-2">
                      {language === "pt" ? roboticsStats.pt.premios : roboticsStats.en.awards}
                    </div>
                    <div className="text-lg">{language === "pt" ? "Prêmios Conquistados" : "Awards Won"}</div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-8"
                >
                  <Button
                    variant="outline"
                    onClick={() => setShowLegend(!showLegend)}
                    className="w-full justify-between bg-card hover:bg-muted transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <List className="text-primary" />
                      {language === "pt" ? "Legenda das Competições" : "Competition Legend"}
                    </span>
                    <motion.div animate={{ rotate: showLegend ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronLeft className="w-4 h-4 rotate-90" />
                    </motion.div>
                  </Button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: showLegend ? "auto" : 0,
                      opacity: showLegend ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="bg-card p-6 rounded-b-lg border border-t-0 border-border">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                        {competitions.map((comp) => (
                          <div key={comp.code} className="flex items-center gap-2">
                            <span className="font-bold text-primary min-w-8">{comp.code}</span>
                            <span className="text-muted-foreground"> - </span>
                            <span className="text-muted-foreground">
                              {language === "pt" ? comp.pt : comp.en}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Seção sobre equipes */}
                <Link href="/teams">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          {language === "pt" ? "Minhas Equipes de Robótica" : "My Robotics Teams"}
                        </h3>
                        <p className="text-muted-foreground">
                          {language === "pt"
                            ? "Conheça as equipes que fizeram parte da minha jornada na robótica"
                            : "Meet the teams that were part of my robotics journey"}
                        </p>
                      </div>
                      <div className="text-primary">
                        <ChevronLeft className="w-6 h-6 rotate-180" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </div>

              {isMobile ? renderMobileTimeline(roboticsAchievements) : renderDesktopTimeline(roboticsAchievements)}
            </TabsContent>
          </Tabs>
        </div>
      </div>
      </div>

      <Footer language={language} className="bg-muted" />
    </div>
  )
}
