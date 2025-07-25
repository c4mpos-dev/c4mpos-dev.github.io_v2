"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, MessageCircle, Github, Linkedin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContactProps {
    language: "pt" | "en"
}

const Contact = ({ language }: ContactProps) => {
    const contactMethods = [
        {
            icon: Mail,
            titlePt: "Email",
            titleEn: "Email",
            value: "campos.eet@gmail.com",
            link: "mailto:campos.eet@gmail.com",
            description: language === "pt" ? "Respondo em até 24h" : "I reply within 24h",
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-gray-700/10",
            borderColor: "border-gray-700/20",
            hoverColor: "hover:border-blue-700/50",
        },
        {
            icon: "fa-brands fa-whatsapp text-[32px]",
            titlePt: "WhatsApp",
            titleEn: "WhatsApp",
            value: "+55 (24) 98137-2475",
            link: "https://wa.me/5524981372475",
            description: language === "pt" ? "Resposta rápida" : "Quick response",
            color: "from-green-500 to-green-700",
            bgColor: "bg-gray-700/10",
            borderColor: "border-gray-700/20",
            hoverColor: "hover:border-green-700/50",
        },
        {
            icon: Linkedin,
            titlePt: "LinkedIn",
            titleEn: "LinkedIn",
            value: "Cauã Campos",
            link: "https://linkedin.com/in/cauã-campos",
            description: language === "pt" ? "Rede profissional" : "Professional network",
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-gray-700/10",
            borderColor: "border-gray-700/20",
            hoverColor: "hover:border-blue-700/50",
        },
        {
            icon: Github,
            titlePt: "GitHub",
            titleEn: "GitHub",
            value: "c4mpos-dev",
            link: "https://github.com/c4mpos-dev",
            description: language === "pt" ? "Veja meus projetos" : "Check my projects",
            color: "from-gray-700 to-gray-900",
            bgColor: "bg-gray-700/10",
            borderColor: "border-gray-700/20",
            hoverColor: "hover:border-gray-700/50",
        },
    ]

    const handleContactClick = (link: string) => {
        window.open(link, "_blank", "noopener,noreferrer")
    }

    return (
        <section id="contact" className="py-20 bg-muted relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {language === "pt" ? "Vamos Conversar?" : "Let's Talk?"}
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {language === "pt"
                        ? "Estou sempre aberto a novas oportunidades, projetos interessantes e conversas sobre tecnologia."
                        : "I'm always open to new opportunities, interesting projects, and conversations about technology."}
                    </p>
                </motion.div>

                {/* Contact Methods Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {contactMethods.map((method, index) => {
                        const IconComponent = method.icon
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className={`relative group cursor-pointer ${method.bgColor} ${method.borderColor} ${method.hoverColor} border-2 rounded-2xl p-6 transition-all duration-300 overflow-hidden`}
                                onClick={() => handleContactClick(method.link)}
                            >
                                {/* Gradient Background Effect */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                                />

                               

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div
                                        className={`w-16 h-16 ${method.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        {typeof method.icon === "string" ? (
                                            <i className={method.icon}></i>
                                        ) : (
                                            <IconComponent className="w-8 h-8" />
                                        )}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-bold mb-2">{language === "pt" ? method.titlePt : method.titleEn}</h3>
                                    <p className="text-sm text-muted-foreground mb-2 break-all">{method.value}</p>
                                    <p className="text-xs text-muted-foreground font-medium">{method.description}</p>

                                    {/* Hover Arrow */}
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <ExternalLink className="w-4 h-4" />
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 max-w-3xl mx-auto relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>

                        <div className="relative z-10">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                            >
                                <Mail className="w-8 h-8 text-primary" />
                            </motion.div>

                            <h3 className="text-2xl font-bold mb-4">
                                {language === "pt" ? "Pronto para começar um projeto?" : "Ready to start a project?"}
                            </h3>
                            <p className="text-muted-foreground mb-8 text-lg">
                                {language === "pt"
                                ? "Escolha a forma de contato que preferir e vamos transformar suas ideias em realidade!"
                                : "Choose your preferred contact method and let's turn your ideas into reality!"}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button
                                        size="lg"
                                        className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                                        onClick={() => handleContactClick("mailto:caua.campos@example.com")}
                                    >
                                        <Mail className="w-5 h-5 mr-2" />
                                        {language === "pt" ? "Enviar Email" : "Send Email"}
                                    </Button>
                                </motion.div>

                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 bg-transparent"
                                        onClick={() => handleContactClick("https://wa.me/5511987654321")}
                                    >
                                        <i className="fa-brands fa-whatsapp"></i>
                                        {language === "pt" ? "WhatsApp" : "WhatsApp"}
                                    </Button>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Location Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>Santa Rita do Sapucaí, MG</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                        {language === "pt"
                        ? "Disponível para projetos remotos e presenciais"
                        : "Available for remote and on-site projects"}
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact