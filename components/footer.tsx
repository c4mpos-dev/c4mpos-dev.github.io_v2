"use client"

interface FooterProps {
    language: "pt" | "en"
    className?: string
}

const Footer = ({ language, className }: FooterProps) => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={`bg-background py-10 relative overflow-hidden ${className}`}>
            <div className="container flex flex-col mx-auto px-4">
                <div className="flex flex-col items-center">
                    <h3 className="text-2xl font-bold mb-4">
                        <span className="text-primary">Cauã</span> Campos
                    </h3>
                    <p className="text-muted-foreground mb-4">
                        {language === "pt"
                            ? "Desenvolvedor Full Stack apaixonado por criar soluções tecnológicas."
                            : "Full Stack Developer passionate about creating technological solutions."}
                    </p>
                    <div className="flex space-x-4">
                        <a href="https://github.com/c4mpos-dev" target="_blank" className="text-foreground hover:text-primary transition-colors" aria-label="GitHub">
                            <i className="fa-brands fa-github text-xl"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/cau%C3%A3-campos/" target="_blank" className="text-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                            <i className="fa-brands fa-linkedin text-xl"></i>
                        </a>
                        <a href="http://wa.me/55241372475" target="_blank" className="text-foreground hover:text-primary transition-colors" aria-label="WhatsApp">
                            <i className="fa-brands fa-whatsapp text-xl"></i>
                        </a>
                        <a href="https://www.instagram.com/c4mp02/" target="_blank" className="text-foreground hover:text-primary transition-colors" aria-label="Instagram">
                            <i className="fa-brands fa-instagram text-xl"></i>
                        </a>
                    </div>
                </div>

                <div className={`border-t ${className ? "border-white/20" : "border-border"} mt-8 pt-6 text-center text-muted-foreground`}>
                    <p>
                        &copy; {currentYear} Cauã Campos.{" "}
                        {language === "pt" ? "Todos os direitos reservados." : "All rights reserved."}
                    </p>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        </footer>
    )
}

export default Footer