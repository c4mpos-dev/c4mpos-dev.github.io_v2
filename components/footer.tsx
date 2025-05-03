"use client"
import Link from "next/link"

interface FooterProps {
  language: "pt" | "en"
}

const Footer = ({ language }: FooterProps) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-10 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">Cauã</span> Campos
            </h3>
            <p className="text-muted-foreground mb-4">
              {language === "pt"
                ? "Desenvolvedor Full Stack apaixonado por criar soluções tecnológicas inovadoras."
                : "Full Stack Developer passionate about creating innovative technological solutions."}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <i className="fa-brands fa-github text-xl"></i>
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <i className="fa-brands fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <i className="fa-brands fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">{language === "pt" ? "Links Rápidos" : "Quick Links"}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  {language === "pt" ? "Início" : "Home"}
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  {language === "pt" ? "Sobre" : "About"}
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  {language === "pt" ? "Projetos" : "Projects"}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {language === "pt" ? "Contato" : "Contact"}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">{language === "pt" ? "Contato" : "Contact"}</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-muted-foreground">
                <i className="fa-solid fa-envelope mr-2 text-primary"></i>
                caua.campos@example.com
              </li>
              <li className="flex items-center text-muted-foreground">
                <i className="fa-solid fa-phone mr-2 text-primary"></i>
                +55 (11) 98765-4321
              </li>
              <li className="flex items-center text-muted-foreground">
                <i className="fa-solid fa-location-dot mr-2 text-primary"></i>
                São Paulo, Brasil
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-10 pt-6 text-center text-muted-foreground">
          <p>
            &copy; {currentYear} Cauã Campos.{" "}
            {language === "pt" ? "Todos os direitos reservados." : "All rights reserved."}
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
    </footer>
  )
}

export default Footer
