"use client"

import { motion } from "framer-motion"
import { Button } from "components/ui/button"
import Image from "next/image"

interface AboutProps {
  language: "pt" | "en"
}

const About = ({ language }: AboutProps) => {
  const content = {
    pt: {
      title: "Sobre Mim",
      description:
        "Olá! Sou Cauã Campos, um desenvolvedor Full Stack apaixonado por criar soluções tecnológicas inovadoras. Tenho experiência em desenvolvimento web e mobile, sempre buscando aprender novas tecnologias e aprimorar minhas habilidades.",
      hobbies:
        "Além da programação, gosto de jogos, música e fotografia. Sou um entusiasta de novas tecnologias e sempre estou em busca de novos desafios.",
      downloadCV: "Download CV",
    },
    en: {
      title: "About Me",
      description:
        "Hello! I'm Cauã Campos, a Full Stack developer passionate about creating innovative technological solutions. I have experience in web and mobile development, always seeking to learn new technologies and improve my skills.",
      hobbies:
        "Besides programming, I enjoy gaming, music, and photography. I'm a technology enthusiast and always looking for new challenges.",
      downloadCV: "Download CV",
    },
  }

  const handleDownloadCV = () => {
    // This would be replaced with the actual CV download logic
    alert(language === "pt" ? "Download do CV iniciado!" : "CV download started!")
  }

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{content[language].title}</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=400&width=400" alt="Cauã Campos" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              <div className="text-center">
                <div className="text-2xl">5+</div>
                <div className="text-xs">{language === "pt" ? "Anos de" : "Years of"}</div>
                <div className="text-xs">{language === "pt" ? "Experiência" : "Experience"}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg">{content[language].description}</p>
              <p className="text-lg">{content[language].hobbies}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted p-4 rounded-lg">
                <i className="fa-solid fa-code text-primary text-2xl mb-2"></i>
                <h3 className="font-bold text-lg">{language === "pt" ? "Desenvolvimento Web" : "Web Development"}</h3>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <i className="fa-solid fa-mobile-screen text-primary text-2xl mb-2"></i>
                <h3 className="font-bold text-lg">
                  {language === "pt" ? "Desenvolvimento Mobile" : "Mobile Development"}
                </h3>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <i className="fa-solid fa-database text-primary text-2xl mb-2"></i>
                <h3 className="font-bold text-lg">{language === "pt" ? "Banco de Dados" : "Database"}</h3>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <i className="fa-solid fa-server text-primary text-2xl mb-2"></i>
                <h3 className="font-bold text-lg">Backend</h3>
              </div>
            </div>

            <Button
              onClick={handleDownloadCV}
              size="lg"
              className="bg-primary hover:bg-primary/80 text-white mt-6 group relative overflow-hidden"
            >
              <span className="relative z-10">{content[language].downloadCV}</span>
              <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <i className="fa-solid fa-download ml-2"></i>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full"></div>
      <div className="absolute top-20 -right-20 w-60 h-60 bg-primary/5 rounded-full"></div>
    </section>
  )
}

export default About
