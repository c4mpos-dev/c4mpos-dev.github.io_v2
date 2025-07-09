"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Building2, Code, Briefcase } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ExperienceProps {
  language: "pt" | "en"
}

const Experience = ({ language }: ExperienceProps) => {
  const experiences = [
    {
      id: 1,
      company: "Oracclum Company LTDA",
      position: language === "pt" ? "Estagiário em Desenvolvimento Full Stack" : "Full Stack Development Intern",
      period: language === "pt" ? "Abr 2025 - Atual" : "Apr 2025 - Current",
      location: "Brasil",
      type: language === "pt" ? "Estágio" : "Internship",
      status: "current",
      description:
        language === "pt"
          ? "Desenvolvimento de aplicações web e mobile utilizando tecnologias modernas."
          : "Development of web and mobile applications using modern technologies.",
      responsibilities: [
        language === "pt" ? "Desenvolvimento de interfaces responsivas" : "Responsive interface development",
        language === "pt" ? "Integração com APIs REST" : "REST API integration",
        language === "pt" ? "Manutenção de código existente" : "Existing code maintenance",
        language === "pt" ? "Colaboração em projetos ágeis" : "Collaboration on agile projects",
      ],
      technologies: ["React", "Node.js", "TypeScript", "MongoDB", "Git"],
    },
    {
      id: 2,
      company: "INATEL",
      position: language === "pt" ? "Estagiário em Desenvolvimento Full Stack" : "Full Stack Development Intern",
      period: language === "pt" ? "Mai - Ago 2024" : "May - Aug 2024",
      location: "Santa Rita do Sapucaí, MG",
      type: language === "pt" ? "Estágio" : "Internship",
      status: "completed",
      description:
        language === "pt"
          ? "Experiência inicial no desenvolvimento de software, focando em tecnologias web."
          : "Initial experience in software development, focusing on web technologies.",
      responsibilities: [
        language === "pt" ? "Desenvolvimento de componentes React" : "React component development",
        language === "pt" ? "Criação de APIs com Node.js" : "Node.js API creation",
        language === "pt" ? "Testes unitários e integração" : "Unit and integration testing",
        language === "pt" ? "Documentação técnica" : "Technical documentation",
      ],
      technologies: ["React", "JavaScript", "Node.js", "Express", "MySQL"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            {language === "pt" ? "Experiência Profissional" : "Professional Experience"}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 transform -translate-x-2 md:-translate-x-2 z-10">
                  <div
                    className={`w-4 h-4 rounded-full border-4 border-background ${
                      exp.status === "current" ? "bg-primary animate-pulse" : "bg-primary/70"
                    }`}
                  ></div>
                  {exp.status === "current" && (
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary animate-ping opacity-75"></div>
                  )}
                </div>

                {/* Experience Card */}
                <div className={`w-full md:w-1/2 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="bg-card rounded-xl p-6 shadow-lg border border-border hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                      <Code className="w-full h-full text-primary" />
                    </div>

                    {/* Status Badge */}
                    {exp.status === "current" && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                          {language === "pt" ? "Atual" : "Current"}
                        </Badge>
                      </div>
                    )}

                    {/* Company Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-1">{exp.company}</h3>
                        <p className="text-primary font-medium">{exp.position}</p>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Briefcase className="w-4 h-4" />
                        <span className="text-sm">{exp.type}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    {/* Responsibilities */}
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-foreground">
                        {language === "pt" ? "Principais Atividades:" : "Key Activities:"}
                      </h4>
                      <ul className="space-y-1">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">
                        {language === "pt" ? "Tecnologias:" : "Technologies:"}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-muted rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              {language === "pt" ? "Interessado em trabalhar comigo?" : "Interested in working with me?"}
            </h3>
            <p className="text-muted-foreground mb-6">
              {language === "pt"
                ? "Estou sempre aberto a novas oportunidades e desafios interessantes."
                : "I'm always open to new opportunities and interesting challenges."}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              {language === "pt" ? "Entre em Contato" : "Get in Touch"}
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  )
}

export default Experience
