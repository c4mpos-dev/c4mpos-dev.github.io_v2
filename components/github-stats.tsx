"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { GitBranch, GitCommit, Star, Code, Users } from "lucide-react"

interface GitHubStatsProps {
    language: "pt" | "en"
}

interface GitHubData {
    followers: number
    repos: number
    stars: number
    topLanguage: string
    loading: boolean
}

export function GitHubStats({ language }: GitHubStatsProps) {
    const [githubData, setGithubData] = useState<GitHubData>({
        followers: 0,
        repos: 0,
        stars: 0,
        topLanguage: "JavaScript",
        loading: true,
    })

    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                const username = "c4mpos-dev"

                // Buscar dados
                const userResponse = await fetch(`https://api.github.com/users/${username}`)
                const userData = await userResponse.json()

                // Buscar repositórios
                const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`)
                const reposData = await reposResponse.json()

                // Calcular total de stars
                const totalStars = reposData.reduce((sum: number, repo: any) => sum + repo.stargazers_count, 0)

                // Encontrar linguagem mais usada
                const languages: { [key: string]: number } = {}
                reposData.forEach((repo: any) => {
                    if (repo.language) {
                        languages[repo.language] = (languages[repo.language] || 0) + 1
                    }
                })

                const topLanguage = Object.keys(languages).reduce((a, b) => (languages[a] > languages[b] ? a : b)) || "JavaScript"

                setGithubData({
                    followers: userData.followers || 0,
                    repos: userData.public_repos || 0,
                    stars: totalStars,
                    topLanguage,
                    loading: false,
                })
            } catch (error) {
                console.error("Erro ao buscar dados do GitHub:", error)
                // Dados de fallback
                setGithubData({
                    followers: 12,
                    repos: 32,
                    stars: 10,
                    topLanguage: "TypeScript",
                    loading: false,
                })
            }
        }

        fetchGitHubData()
    }, [])

    const stats = [
        {
            icon: Users,
            value: githubData.followers,
            labelPt: "Seguidores",
            labelEn: "Followers",
            color: "text-green-500",
            bgColor: "bg-green-500/10",
        },
        {
            icon: GitBranch,
            value: githubData.repos,
            labelPt: "Repositórios públicos",
            labelEn: "Public repositories",
            color: "text-blue-500",
            bgColor: "bg-blue-500/10",
        },
        {
            icon: Star,
            value: githubData.stars,
            labelPt: "Stars recebidas",
            labelEn: "Stars received",
            color: "text-yellow-500",
            bgColor: "bg-yellow-500/10",
        },
        {
            icon: Code,
            value: githubData.topLanguage,
            labelPt: "Linguagem principal",
            labelEn: "Top language",
            color: "text-purple-500",
            bgColor: "bg-purple-500/10",
            isText: true,
        },
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-6 shadow-lg border border-border hover:border-primary/30 transition-all duration-300"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <i className="fa-brands fa-github text-primary text-xl"></i>
                </div>
                <div>
                    <h3 className="text-lg font-bold">{language === "pt" ? "Atividade no GitHub" : "GitHub Activity"}</h3>
                    <p className="text-sm text-muted-foreground">
                        {language === "pt" ? "Estatísticas em tempo real" : "Real-time statistics"}
                    </p>
                </div>
                {githubData.loading && (
                    <div className="ml-auto">
                        <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}
            </div>

            <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                    const IconComponent = stat.icon
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`${stat.bgColor} rounded-lg p-4 text-center relative overflow-hidden group hover:scale-105 transition-transform duration-200`}
                        >
                            {/* Background effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative z-10">
                                <IconComponent className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                                <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                                    {githubData.loading ? (
                                        <div className="w-8 h-6 bg-muted animate-pulse rounded mx-auto"></div>
                                    ) : stat.isText ? (
                                        <span className="text-sm">{stat.value}</span>
                                    ) : (
                                        stat.value
                                    )}
                                </div>
                                <p className="text-xs text-muted-foreground leading-tight">
                                    {language === "pt" ? stat.labelPt : stat.labelEn}
                                </p>
                            </div>
                        </motion.div>
                    )
                })}
            </div>

            {/* Link para o GitHub */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-6 pt-4 border-t border-border"
            >
                <a
                    href="https://github.com/c4mpos-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                    <span>{language === "pt" ? "Ver perfil completo" : "View full profile"}</span>
                    <i className="fa-solid fa-external-link text-xs group-hover:translate-x-1 transition-transform"></i>
                </a>
            </motion.div>
        </motion.div>
    )
}