"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface SkillsProps {
  language: "pt" | "en"
}

const Skills = ({ language }: SkillsProps) => {
	const skillCategories = [
		{
			id: "languages",
			titlePt: "Linguagens",
			titleEn: "Languages",
			skills: [
				{ name: "TypeScript", icon: "fa-brands fa-js" },
				{ name: "JavaScript", icon: "fa-brands fa-js" },
				{ name: "Python", icon: "fa-brands fa-python" },
				{ name: "Java", icon: "fa-brands fa-java" },
				{ name: "C", icon: "fa-brands fa-cuttlefish" },
				{ name: "C++", icon: "fa-brands fa-cuttlefish" },
				{ name: "C#", icon: "fa-brands fa-cuttlefish" }
			],
		},
		{
			id: "frontend",
			titlePt: "Frontend",
			titleEn: "Frontend",
			skills: [
				{ name: "React.js", icon: "fa-brands fa-react" },
				{ name: "Next.js", icon: "fa-brands fa-react" },
				{ name: "Vue.js", icon: "fa-brands fa-vuejs" },
				{ name: "Tailwind", icon: "fa-solid fa-wind" },
				{ name: "HTML5", icon: "fa-brands fa-html5" },
				{ name: "CSS3", icon: "fa-brands fa-css3-alt" }
			],
		},
		{
			id: "backend",
			titlePt: "Backend",
			titleEn: "Backend",
			skills: [
				{ name: "Node.js", icon: "fa-brands fa-node-js" },
				{ name: "Express", icon: "fa-brands fa-node-js" },
				{ name: "Django", icon: "fa-brands fa-python" },
				{ name: "Flask", icon: "fa-brands fa-python" },
				{ name: "Java", icon: "fa-brands fa-java" }
			],
		},
		{
			id: "mobile",
			titlePt: "Mobile",
			titleEn: "Mobile",
			skills: [
				{ name: "Native", icon: "fa-brands fa-react" },
				{ name: "NativeWind", icon: "fa-solid fa-wind" },
				{ name: "Expo", icon: "fa-solid fa-chevron-up" }
			],
		},
		{
			id: "database",
			titlePt: "Banco de Dados",
			titleEn: "Database",
			skills: [
				{ name: "MySQL", icon: "fa-solid fa-database" },
				{ name: "Firebase", icon: "fa-solid fa-fire" },
				{ name: "SQLite", icon: "fa-solid fa-database" }
			],
		},
		{
			id: "tools",
			titlePt: "Ferramentas",
			titleEn: "Tools",
			skills: [
				{ name: "Git", icon: "fa-brands fa-git-alt" },
				{ name: "Docker", icon: "fa-brands fa-docker" },
				{ name: "Postman", icon: "fa-solid fa-paper-plane" },
				{ name: "Figma", icon: "fa-brands fa-figma" },
				{ name: "Vercel", icon: "fa-solid fa-v" },
			],
		},
	]

	return (
		<section id="skills" className="py-20 bg-background relative overflow-hidden">
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

				<Tabs defaultValue="frontend" className="w-full max-w-4xl mx-auto">
					<TabsList className="grid w-full grid-cols-6 mb-8">
						<TabsTrigger value="languages">{language === "pt" ? "Linguagens" : "Languages"}</TabsTrigger>
						<TabsTrigger value="frontend">Frontend</TabsTrigger>
						<TabsTrigger value="backend">Backend</TabsTrigger>
						<TabsTrigger value="mobile">Mobile</TabsTrigger>
						<TabsTrigger value="database">{language === "pt" ? "Banco" : "Database"}</TabsTrigger>
						<TabsTrigger value="tools">{language === "pt" ? "Ferramentas" : "Tools"}</TabsTrigger>
					</TabsList>

					{skillCategories.map((category) => (
						<TabsContent key={category.id} value={category.id}>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3 }}
								className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4"
							>
								{category.skills.map((skill, skillIndex) => (
								<motion.div
									key={`${category.id}-${skillIndex}`}
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{
									duration: 0.3,
									delay: skillIndex * 0.05,
									}}
									className="skill-icon bg-card rounded-lg p-4 text-center shadow-md border border-border hover:border-primary/30 transition-all duration-300"
								>
									<i className={`${skill.icon} text-primary text-2xl mb-2`}></i>
									<p className="font-medium text-xs">{skill.name}</p>
								</motion.div>
								))}
							</motion.div>
						</TabsContent>
					))}
				</Tabs>
			</div>

			{/* Background decoration */}
			<div className="absolute top-10 -left-20 w-40 h-40 bg-primary/5 rounded-full"></div>
			<div className="absolute -bottom-10 right-10 w-20 h-20 bg-primary/10 rounded-full"></div>
		</section>
	)
}

export default Skills