import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    metadataBase: new URL("https://cauacampos.dev"),
    title: "Cauã Campos | Desenvolvedor Full Stack",
    description:
        "Portfólio profissional de Cauã Campos, desenvolvedor Full Stack especializado em aplicações modernas e escaláveis.",
    keywords: [
        "Cauã Campos",
        "Desenvolvedor Full Stack",
        "Portfólio",
        "React",
        "Next.js",
        "Node.js",
        "JavaScript",
    ],
    authors: [{ name: "Cauã Campos" }],
    openGraph: {
        title: "Cauã Campos | Desenvolvedor Full Stack",
        description:
            "Portfólio profissional de Cauã Campos, desenvolvedor Full Stack especializado em aplicações modernas e escaláveis.",
        url: "https://cauacampos.dev",
        siteName: "Cauã Campos Dev",
        images: [
        {
            url: "/og-image.png",
            width: 1200,
            height: 630,
            alt: "Preview do portfólio de Cauã Campos",
        },
        ],
        locale: "pt_BR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Cauã Campos | Desenvolvedor Full Stack",
        description:
            "Portfólio profissional de Cauã Campos, desenvolvedor Full Stack.",
        images: ["/og-image.png"],
        creator: "@c14_campos",
    },
    icons: {
        icon: "/favicon.ico",
    },
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                />
            </head>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}