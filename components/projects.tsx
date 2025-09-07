"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectsProps {
    language: "pt" | "en"
}

const Projects = ({ language }: ProjectsProps) => {
    const [currentPageWeb, setCurrentPageWeb] = useState(1)
    const [currentPageMobile, setCurrentPageMobile] = useState(1)
    const projectsPerPage = 2

    const projects = {
        web: [
        {
            id: 1,
            titlePt: "Green Reverse Logistics",
            titleEn: "Green Reverse Logistics",
            descriptionPt: "Site criado para a empresa Green Reverse Logistics, com uma landing page responsiva e otimizada.",
            descriptionEn: "Website created for Green Reverse Logistics, featuring a responsive and optimized landing page.",
            image: "/projects/web/green-reverse-logistics.png",
            link: "https://www.greenreverselogistics.com.br/",
            technologies: ["Next.js", "TypeScript", "Tailwind.css", "API", "Shadcn UI", "Vercel"],
        },
        {
            id: 2,
            titlePt: "Scoder Fake Store",
            titleEn: "Scoder Fake Store",
            descriptionPt: "Loja virtual com produtos fictícios e carrinho de compras. Feito durante o processo seletivo da Scoder.",
            descriptionEn: "Virtual store with fictional products and shopping cart. Made during the Scoder selection process.",
            image: "/projects/web/scoder-fakestore.png",
            link: "https://scoder-fakestore.vercel.app/",
            technologies: ["Next.js", "TypeScript", "Tailwind.css", "API", "Shadcn UI", "Vercel"],
        },
        {
            id: 5,
            titlePt: "GitHub Blog",
            titleEn: "GitHub Blog",
            descriptionPt: "Permite que você busque usuários do GitHub, onde é mostrado um resumo rápido dele e de seus repositórios. Foi utilizada a API oficial do GitHub.",
            descriptionEn: "Allows you to search for GitHub users, showing a quick summary of them and their repositories. The official GitHub API was used.",
            image: "/projects/web/github-blog.png",
            link: "https://github-blog-campos.vercel.app/",
            technologies: ["React", "TypeScript", "Tailwind.css", "API", "Vite"],
        },
        {
            id: 6,
            titlePt: "Portfólio Cauã Campos v1",
            titleEn: "Cauã Campos Portfolio v1",
            descriptionPt: "Primeira versão do meu portfólio pessoal desenvolvido em HTML, CSS e JavaScript.",
            descriptionEn: "First version of my personal portfolio developed in HTML, CSS, and JavaScript.",
            image: "/projects/web/c4mpos-dev.png",
            link: "https://c4mpos-dev.github.io/",
            technologies: ["HTML", "CSS", "JavaScript"],
        },
        {
            id: 7,
            titlePt: "Ignite Timer",
            titleEn: "Ignite Timer",
            descriptionPt: "Aplicação para gerenciamento de tempo com técnicas de Pomodoro.",
            descriptionEn: "Time management app using Pomodoro techniques.",
            image: "/projects/web/ignite-timer.png",
            link: "https://ignite-timer-campos.vercel.app/",
            technologies: ["React", "TypeScript", "Tailwind.css", "API", "Vite"],
        },
        ],
        mobile: [
        {
            id: 3,
            titlePt: "Currency Converter",
            titleEn: "Currency Converter",
            descriptionPt: "Aplicativo para conversão de moedas em tempo real.",
            descriptionEn: "App for real-time currency conversion.",
            image: "/projects/mobile/currency-converter.jpg",
            link: "https://github.com/c4mpos-dev/currency-converter",
            technologies: ["React Native", "TypeScript", "NativeWind", "Awesome API", "Expo"],
        },
        {
            id: 4,
            titlePt: "Daily Diet",
            titleEn: "Daily Diet",
            descriptionPt: "Aplicativo para controle de dieta e alimentação saudável.",
            descriptionEn: "App for diet control and healthy eating.",
            image: "/projects/mobile/daily-diet.jpg",
            link: "https://github.com/c4mpos-dev/daily-diet",
            technologies: ["React Native", "TypeScript", "Styled Components", "Expo"],
        },
        {
            id: 9,
            titlePt: "Ignite Gym",
            titleEn: "Ignite Gym",
            descriptionPt: "Aplicativo para gerenciamento de treinos e atividades físicas.",
            descriptionEn: "App for managing workouts and physical activities.",
            image: "/projects/mobile/ignite-gym.jpg",
            link: "https://github.com/c4mpos-dev/ignite-gym",
            technologies: ["React Native", "TypeScript", "NativeWind", "API", "Expo"],
        },
        {
            id: 10,
            titlePt: "To Do List",
            titleEn: "To Do List",
            descriptionPt: "Aplicativo para gerenciamento de tarefas e listas de afazeres.",
            descriptionEn: "App for task management and to-do lists.",
            image: "/projects/mobile/todo-list.jpg",
            link: "https://github.com/c4mpos-dev/todo-list",
            technologies: ["React Native", "TypeScript", "Expo"],
        }
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
                                    initial={{ opacity: 0, y: 15 }}
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
                                        className="object-fill project-image"
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
                                        <div className="relative h-full w-[150px]">
                                            <Image
                                                src={project.image || "/placeholder.svg"}
                                                alt={language === "pt" ? project.titlePt : project.titleEn}
                                                fill
                                                className="object-fill rounded-lg project-image"
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