"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"

interface ProjectsProps {
  language: "pt" | "en"
}

const Projects = ({ language }: ProjectsProps) => {
  const [currentPageWeb, setCurrentPageWeb] = useState(1)
  const [currentPageMobile, setCurrentPageMobile] = useState(1)
  const projectsPerPage = 4

  const projects = {
    web: [
      {
        id: 1,
        titlePt: "E-commerce Moderno",
        titleEn: "Modern E-commerce",
        descriptionPt: "Plataforma de e-commerce completa com pagamentos, carrinho e painel administrativo.",
        descriptionEn: "Complete e-commerce platform with payments, cart, and admin dashboard.",
        image: "/placeholder.svg?height=300&width=500",
        link: "#",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      },
      {
        id: 2,
        titlePt: "Dashboard Analítico",
        titleEn: "Analytics Dashboard",
        descriptionPt: "Dashboard para visualização de dados com gráficos interativos e relatórios personalizados.",
        descriptionEn: "Dashboard for data visualization with interactive charts and custom reports.",
        image: "/placeholder.svg?height=300&width=500",
        link: "#",
        technologies: ["Vue.js", "Express", "PostgreSQL", "D3.js"],
      },
      {
        id: 5,
        titlePt: "Rede Social",
        titleEn: "Social Network",
        descriptionPt: "Plataforma de rede social com recursos de postagem, comentários e mensagens diretas.",
        descriptionEn: "Social network platform with posting, commenting, and direct messaging features.",
        image: "/placeholder.svg?height=300&width=500",
        link: "#",
        technologies: ["React", "Firebase", "Redux", "Material UI"],
      },
      {
        id: 6,
        titlePt: "Blog Tecnológico",
        titleEn: "Tech Blog",
        descriptionPt: "Blog com sistema de gerenciamento de conteúdo para artigos sobre tecnologia.",
        descriptionEn: "Blog with content management system for technology articles.",
        image: "/placeholder.svg?height=300&width=500",
        link: "#",
        technologies: ["Next.js", "Sanity.io", "Tailwind CSS"],
      },
      {
        id: 7,
        titlePt: "Plataforma de Cursos",
        titleEn: "Course Platform",
        descriptionPt: "Sistema de gerenciamento de cursos online com vídeos, quizzes e certificados.",
        descriptionEn: "Online course management system with videos, quizzes, and certificates.",
        image: "/placeholder.svg?height=300&width=500",
        link: "#",
        technologies: ["React", "Node.js", "MongoDB", "AWS S3"],
      },
      {
        id: 8,
        titlePt: "Sistema de Reservas",
        titleEn: "Booking System",
        descriptionPt: "Aplicação para gerenciamento de reservas de hotéis e restaurantes.",
        descriptionEn: "Application for managing hotel and restaurant bookings.",
        image: "/placeholder.svg?height=300&width=500",
        link: "#",
        technologies: ["Angular", "Express", "PostgreSQL", "Stripe"],
      },
    ],
    mobile: [
      {
        id: 3,
        titlePt: "Aplicativo de Fitness",
        titleEn: "Fitness App",
        descriptionPt: "Aplicativo para acompanhamento de treinos, nutrição e progresso físico.",
        descriptionEn: "App for tracking workouts, nutrition, and physical progress.",
        image: "/placeholder.svg?height=600&width=300",
        link: "#",
        technologies: ["React Native", "Firebase", "Redux"],
      },
      {
        id: 4,
        titlePt: "App de Entrega",
        titleEn: "Delivery App",
        descriptionPt: "Aplicativo para pedidos e entregas de comida com rastreamento em tempo real.",
        descriptionEn: "Food ordering and delivery app with real-time tracking.",
        image: "/placeholder.svg?height=600&width=300",
        link: "#",
        technologies: ["Flutter", "Firebase", "Google Maps API"],
      },
      {
        id: 9,
        titlePt: "App de Finanças Pessoais",
        titleEn: "Personal Finance App",
        descriptionPt: "Aplicativo para controle de gastos, orçamentos e investimentos pessoais.",
        descriptionEn: "App for expense tracking, budgeting, and personal investments.",
        image: "/placeholder.svg?height=600&width=300",
        link: "#",
        technologies: ["React Native", "Redux", "Firebase"],
      },
      {
        id: 10,
        titlePt: "App de Notas",
        titleEn: "Notes App",
        descriptionPt: "Aplicativo para criação e organização de notas com sincronização na nuvem.",
        descriptionEn: "App for creating and organizing notes with cloud synchronization.",
        image: "/placeholder.svg?height=600&width=300",
        link: "#",
        technologies: ["Flutter", "Firebase", "Provider"],
      },
      {
        id: 11,
        titlePt: "App de Clima",
        titleEn: "Weather App",
        descriptionPt: "Aplicativo para previsão do tempo com dados em tempo real e notificações.",
        descriptionEn: "Weather forecast app with real-time data and notifications.",
        image: "/placeholder.svg?height=600&width=300",
        link: "#",
        technologies: ["React Native", "OpenWeatherMap API", "Redux"],
      },
    ],
  }

  // Paginação para projetos web
  const indexOfLastWebProject = currentPageWeb * projectsPerPage
  const indexOfFirstWebProject = indexOfLastWebProject - projectsPerPage
  const currentWebProjects = projects.web.slice(indexOfFirstWebProject, indexOfLastWebProject)
  const totalWebPages = Math.ceil(projects.web.length / projectsPerPage)

  // Paginação para projetos mobile
  const indexOfLastMobileProject = currentPageMobile * projectsPerPage
  const indexOfFirstMobileProject = indexOfLastMobileProject - projectsPerPage
  const currentMobileProjects = projects.mobile.slice(indexOfFirstMobileProject, indexOfLastMobileProject)
  const totalMobilePages = Math.ceil(projects.mobile.length / projectsPerPage)

  return (
    <section id="projects" className="py-20 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{language === "pt" ? "Meus Projetos" : "My Projects"}</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <Tabs defaultValue="web" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="web">
              <i className="fa-solid fa-globe mr-2"></i>
              {language === "pt" ? "Web" : "Web"}
            </TabsTrigger>
            <TabsTrigger value="mobile">
              <i className="fa-solid fa-mobile-screen mr-2"></i>
              {language === "pt" ? "Mobile" : "Mobile"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="web" className="mt-4">
            <div className="grid md:grid-cols-2 gap-8">
              {currentWebProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="project-card bg-card rounded-lg overflow-hidden shadow-lg border border-border"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={language === "pt" ? project.titlePt : project.titleEn}
                      fill
                      className="object-cover project-image"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{language === "pt" ? project.titlePt : project.titleEn}</h3>
                    <p className="text-muted-foreground mb-4">
                      {language === "pt" ? project.descriptionPt : project.descriptionEn}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="tech-tag">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      {language === "pt" ? "Ver Projeto" : "View Project"}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Paginação para projetos web */}
            {totalWebPages > 1 && (
              <div className="flex justify-center items-center mt-10 gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentPageWeb((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPageWeb === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: totalWebPages }, (_, i) => (
                    <Button
                      key={i}
                      variant={currentPageWeb === i + 1 ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPageWeb(i + 1)}
                      className={currentPageWeb === i + 1 ? "bg-primary" : ""}
                    >
                      {i + 1}
                    </Button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentPageWeb((prev) => Math.min(prev + 1, totalWebPages))}
                  disabled={currentPageWeb === totalWebPages}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="mobile" className="mt-4">
            <div className="grid md:grid-cols-2 gap-8">
              {currentMobileProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="project-card bg-card rounded-lg overflow-hidden shadow-lg border border-border"
                >
                  <div className="relative h-80 w-full overflow-hidden flex justify-center py-4 bg-muted/50">
                    <div className="relative h-full w-[200px]">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={language === "pt" ? project.titlePt : project.titleEn}
                        fill
                        className="object-cover rounded-lg project-image"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{language === "pt" ? project.titlePt : project.titleEn}</h3>
                    <p className="text-muted-foreground mb-4">
                      {language === "pt" ? project.descriptionPt : project.descriptionEn}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="tech-tag">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      {language === "pt" ? "Ver Projeto" : "View Project"}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Paginação para projetos mobile */}
            {totalMobilePages > 1 && (
              <div className="flex justify-center items-center mt-10 gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentPageMobile((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPageMobile === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: totalMobilePages }, (_, i) => (
                    <Button
                      key={i}
                      variant={currentPageMobile === i + 1 ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPageMobile(i + 1)}
                      className={currentPageMobile === i + 1 ? "bg-primary" : ""}
                    >
                      {i + 1}
                    </Button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentPageMobile((prev) => Math.min(prev + 1, totalMobilePages))}
                  disabled={currentPageMobile === totalMobilePages}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Background decoration */}
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-primary/5 rounded-full"></div>
    </section>
  )
}

export default Projects
