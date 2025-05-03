"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

interface ContactProps {
  language: "pt" | "en"
}

const Contact = ({ language }: ContactProps) => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send the form data to your backend
    console.log(formData)

    toast({
      title: language === "pt" ? "Mensagem enviada!" : "Message sent!",
      description:
        language === "pt"
          ? "Obrigado pelo contato. Responderei em breve."
          : "Thank you for reaching out. I'll respond soon.",
      variant: "default",
    })

    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const contactInfo = [
    {
      icon: "fa-solid fa-envelope",
      titlePt: "Email",
      titleEn: "Email",
      value: "caua.campos@example.com",
      link: "mailto:caua.campos@example.com",
    },
    {
      icon: "fa-brands fa-whatsapp",
      titlePt: "WhatsApp",
      titleEn: "WhatsApp",
      value: "+55 (11) 98765-4321",
      link: "https://wa.me/5511987654321",
    },
    {
      icon: "fa-brands fa-linkedin",
      titlePt: "LinkedIn",
      titleEn: "LinkedIn",
      value: "cauacampos",
      link: "https://linkedin.com/in/cauacampos",
    },
    {
      icon: "fa-brands fa-github",
      titlePt: "GitHub",
      titleEn: "GitHub",
      value: "cauacampos",
      link: "https://github.com/cauacampos",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{language === "pt" ? "Contato" : "Contact"}</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">{language === "pt" ? "Vamos Conversar" : "Let's Talk"}</h3>
            <p className="text-muted-foreground">
              {language === "pt"
                ? "Estou disponível para projetos freelance, oportunidades de trabalho ou apenas para trocar ideias sobre tecnologia."
                : "I'm available for freelance projects, job opportunities, or just to exchange ideas about technology."}
            </p>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <i className={`${info.icon} text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="font-medium">{language === "pt" ? info.titlePt : info.titleEn}</h4>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  {language === "pt" ? "Nome" : "Name"}
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={language === "pt" ? "Seu nome" : "Your name"}
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={language === "pt" ? "Seu email" : "Your email"}
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  {language === "pt" ? "Mensagem" : "Message"}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder={language === "pt" ? "Sua mensagem" : "Your message"}
                  className="w-full min-h-[150px]"
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/80 text-white">
                {language === "pt" ? "Enviar Mensagem" : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full"></div>
      <div className="absolute bottom-20 -left-20 w-60 h-60 bg-primary/10 rounded-full"></div>
    </section>
  )
}

export default Contact
