"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, ExternalLink, Layers } from "lucide-react"

interface Project {
    name: string
    logo: string
    url: string
    description: string
    tvl: number
    tvlFormatted: string
    category: string
    originalCategory: string
    chains: string[]
    change1d: number
    change7d: number
}

const CATEGORIES = ["All", "DeFi", "Trading", "Prediction", "Infrastructure", "L2s", "RWA", "Gaming", "NFTs", "SocialFi"]

export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState(true)
    const [activeCategory, setActiveCategory] = useState("All")

    useEffect(() => {
        async function fetchProjects() {
            try {
                const baseUrl = process.env.NEXT_PUBLIC_NEWS_API_URL?.replace('/api/news', '') || ''
                if (!baseUrl) {
                    setLoading(false)
                    return
                }
                const res = await fetch(`${baseUrl}/api/projects`)
                const data = await res.json()
                setProjects(data.projects || [])
            } catch (error) {
                console.error('Failed to fetch projects:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchProjects()
    }, [])

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory)

    return (
        <div className="container py-10 sm:py-16 px-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="text-center space-y-4 mb-10">
                <h1>Projects</h1>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    Discover trending Web3 projects.
                </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                            ? "bg-primary text-white"
                            : "bg-muted/50 hover:bg-muted text-foreground"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Projects Count */}
            <div className="text-center mb-6 text-sm text-muted-foreground">
                Showing {filteredProjects.length} projects
            </div>

            {/* Loading State */}
            {loading ? (
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="rounded-xl border border-border/30 bg-background p-4">
                            <div className="w-10 h-10 rounded-full bg-muted/30 mb-3"></div>
                            <div className="h-4 bg-muted/30 rounded w-3/4 mb-2"></div>
                            <div className="h-3 bg-muted/30 rounded w-1/2"></div>
                        </div>
                    ))}
                </div>
            ) : filteredProjects.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-muted/30 flex items-center justify-center mb-4">
                        <Layers className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">No Projects Found</h3>
                    <p className="text-muted-foreground max-w-md">
                        {activeCategory === "All"
                            ? "Unable to fetch projects. Please try again later."
                            : `No ${activeCategory} projects found. Try another category.`}
                    </p>
                </div>
            ) : (
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {filteredProjects.map((project, i) => (
                        <a
                            key={i}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group rounded-xl border border-border/30 bg-background p-4 hover:border-primary/40 transition-all duration-300"
                        >
                            {/* Logo & Category */}
                            <div className="flex items-start justify-between mb-3">
                                <div className="w-10 h-10 rounded-full bg-muted/20 flex items-center justify-center overflow-hidden">
                                    {project.logo ? (
                                        <Image
                                            src={project.logo}
                                            alt={project.name}
                                            width={40}
                                            height={40}
                                            className="rounded-full"
                                            unoptimized
                                        />
                                    ) : (
                                        <span className="text-primary font-bold text-lg">
                                            {project.name.charAt(0)}
                                        </span>
                                    )}
                                </div>
                                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            {/* Name */}
                            <h3 className="font-semibold text-sm mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                                {project.name}
                            </h3>

                            {/* TVL */}
                            <div className="text-xs text-muted-foreground mb-2">
                                TVL: <span className="text-foreground font-medium">{project.tvlFormatted}</span>
                            </div>

                            {/* Change */}
                            <div className="flex items-center gap-1 text-xs">
                                {project.change1d >= 0 ? (
                                    <TrendingUp className="h-3 w-3 text-green-500" />
                                ) : (
                                    <TrendingDown className="h-3 w-3 text-red-500" />
                                )}
                                <span className={project.change1d >= 0 ? "text-green-500" : "text-red-500"}>
                                    {project.change1d >= 0 ? "+" : ""}{project.change1d?.toFixed(1) || 0}%
                                </span>
                                <span className="text-muted-foreground">24h</span>
                            </div>

                            {/* Category Badge */}
                            <div className="mt-3">
                                <Badge variant="secondary" className="text-xs">
                                    {project.category}
                                </Badge>
                            </div>
                        </a>
                    ))}
                </div>
            )}
        </div>
    )
}
