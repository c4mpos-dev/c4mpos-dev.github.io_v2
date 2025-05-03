"use client"

import { motion } from "framer-motion"

interface SkillsProps {
  language: "pt" | "en"
}

const Skills = ({ language }: SkillsProps) => {
  const skillCategories = [
    {
      id: "frontend",
      titlePt: "Frontend",
      titleEn: "Frontend",
      skills: [
        { name: "HTML5", icon: "fa-brands fa-html5" },
        { name: "CSS3", icon: "fa-brands fa-css3-alt" },
        { name: "JavaScript", icon: "fa-brands fa-js" },
        { name: "TypeScript", icon: "fa-brands fa-js" },
        { name: "React", icon: "fa-brands fa-react" },
        { name: "Vue.js", icon: "fa-brands fa-vuejs" },
        { name: "Angular", icon: "fa-brands fa-angular" },
        { name: "Tailwind CSS", icon: "fa-solid fa-wind" },
      ],
    },
    {
      id: "backend",
      titlePt: "Backend",
      titleEn: "Backend",
      skills: [
        { name: "Node.js", icon: "fa-brands fa-node-js" },
        { name: "Express", icon: "fa-brands fa-node-js" },
        { name: "Python", icon: "fa-brands fa-python" },
        { name: "Django", icon: "fa-brands fa-python" },
        { name: "PHP", icon: "fa-brands fa-php" },
        { name: "Laravel", icon: "fa-brands fa-laravel" },
        { name: "Java", icon: "fa-brands fa-java" },
        { name: "Spring Boot", icon: "fa-solid fa-leaf" },
      ],
    },
    {
      id: "mobile",
      titlePt: "Mobile",
      titleEn: "Mobile",
      skills: [
        { name: "React Native", icon: "fa-brands fa-react" },
        { name: "Flutter", icon: "fa-solid fa-mobile-screen" },
        { name: "Swift", icon: "fa-brands fa-swift" },
        { name: "Kotlin", icon: "fa-brands fa-android" },
      ],
    },
    {
      id: "database",
      titlePt: "Banco de Dados",
      titleEn: "Database",
      skills: [
        { name: "MongoDB", icon: "fa-solid fa-database" },
        { name: "MySQL", icon: "fa-solid fa-database" },
        { name: "PostgreSQL", icon: "fa-solid fa-database" },
        { name: "Firebase", icon: "fa-solid fa-fire" },
      ],
    },
    {
      id: "tools",
      titlePt: "Ferramentas",
      titleEn: "Tools",
      skills: [
        { name: "Git", icon: "fa-brands fa-git-alt" },
        { name: "Docker", icon: "fa-brands fa-docker" },
        { name: "AWS", icon: "fa-brands fa-aws" },
        { name: "Figma", icon: "fa-brands fa-figma" },
        { name: "VS Code", icon: "fa-solid fa-code" },
        { name: "Jira", icon: "fa-brands fa-jira" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            {language === "pt" ? "Minhas Habilidades" : "My Skills"}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <div className="w-10 h-1 bg-primary mr-3"></div>
                {language === "pt" ? category.titlePt : category.titleEn}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={`${category.id}-${skillIndex}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.05 + skillIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                    className="skill-icon bg-card rounded-lg p-4 text-center shadow-md border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    <i className={`${skill.icon} text-primary text-3xl mb-2`}></i>
                    <p className="font-medium">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-10 -left-20 w-40 h-40 bg-primary/5 rounded-full"></div>
      <div className="absolute -bottom-10 right-10 w-20 h-20 bg-primary/10 rounded-full"></div>
    </section>
  )
}

export default Skills
