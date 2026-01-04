"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Star, Code, GitBranch, ExternalLink, Activity, RefreshCw } from "lucide-react"

interface Narrative {
    name: string
    trend: string
    score: number
    change: string
}

interface Repo {
    name: string
    fullName: string
    url: string
    description: string
    stars: number
    language: string
    topics: string[]
}

export default function NarrativesPage() {
    const [narratives, setNarratives] = useState<Narrative[]>([])
    const [repos, setRepos] = useState<Repo[]>([])
    const [loading, setLoading] = useState(true)
    const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

    const fetchData = useCallback(async () => {
        try {
            const baseUrl = process.env.NEXT_PUBLIC_NEWS_API_URL?.replace('/api/news', '') || ''
            if (!baseUrl) {
                setLoading(false)
                return
            }

            // Fetch narratives and GitHub data in parallel
            const [narrativesRes, githubRes] = await Promise.all([
                fetch(`${baseUrl}/api/narratives`),
                fetch(`${baseUrl}/api/github`)
            ])

            const narrativesData = await narrativesRes.json()
            const githubData = await githubRes.json()

            setNarratives(narrativesData.narratives || [])
            setRepos((githubData.repos || []).slice(0, 20))
            setLastUpdated(new Date())
        } catch (error) {
            console.error('Failed to fetch data:', error)
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchData()

        // Auto-refresh every 30 minutes
        const interval = setInterval(fetchData, 30 * 60 * 1000)
        return () => clearInterval(interval)
    }, [fetchData])

    const formatStars = (stars: number) => {
        if (stars >= 1000) return `${(stars / 1000).toFixed(1)}k`
        return stars.toString()
    }

    // Calculate stats
    const activeNarratives = narratives.filter(n => n.trend === 'up').length
    const avgScore = narratives.length > 0
        ? Math.round(narratives.reduce((sum, n) => sum + n.score, 0) / narratives.length)
        : 0
    const totalStars = repos.reduce((sum, r) => sum + r.stars, 0)

    return (
        <div className="container py-10 px-4 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Narrative Tracker</h1>
                    <p className="text-muted-foreground">Real-time market insights and trending topics.</p>
                </div>
                {lastUpdated && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <RefreshCw className="h-3 w-3" />
                        Updated {lastUpdated.toLocaleTimeString()}
                    </div>
                )}
            </div>

            {/* Stats Row */}
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
                <Card className="bg-background border-border/30">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Active Narratives</CardTitle>
                        <TrendingUp className="h-4 w-4 text-green-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{loading ? '--' : activeNarratives}</div>
                        <p className="text-xs text-muted-foreground">Trending up</p>
                    </CardContent>
                </Card>
                <Card className="bg-background border-border/30">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Market Score</CardTitle>
                        <Activity className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{loading ? '--' : `${avgScore}/100`}</div>
                        <p className="text-xs text-muted-foreground">Average sentiment</p>
                    </CardContent>
                </Card>
                <Card className="bg-background border-border/30">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Developer Activity</CardTitle>
                        <Star className="h-4 w-4 text-yellow-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{loading ? '--' : formatStars(totalStars)}</div>
                        <p className="text-xs text-muted-foreground">Total stars tracked</p>
                    </CardContent>
                </Card>
            </div>

            {/* Trending Narratives */}
            <div className="space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold">Trending Narratives</h2>
                {loading ? (
                    <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
                        {[...Array(10)].map((_, i) => (
                            <div key={i} className="rounded-xl border border-border/30 bg-background p-4">
                                <div className="h-5 bg-muted/20 rounded w-3/4 mb-2"></div>
                                <div className="h-4 bg-muted/20 rounded w-1/2"></div>
                            </div>
                        ))}
                    </div>
                ) : narratives.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center rounded-xl border border-dashed border-border/30 bg-background">
                        <TrendingUp className="h-10 w-10 text-muted-foreground mb-4" />
                        <h3 className="text-lg font-semibold mb-2">No Narratives Tracked Yet</h3>
                        <p className="text-muted-foreground max-w-md text-sm">Data will appear here shortly.</p>
                    </div>
                ) : (
                    <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
                        {narratives.map((item, i) => (
                            <div
                                key={i}
                                className="rounded-xl border border-border/30 bg-background p-4 hover:border-primary/40 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-semibold text-sm">{item.name}</span>
                                    {item.trend === 'up' ? (
                                        <TrendingUp className="h-4 w-4 text-green-500" />
                                    ) : item.trend === 'down' ? (
                                        <TrendingDown className="h-4 w-4 text-red-500" />
                                    ) : (
                                        <Activity className="h-4 w-4 text-muted-foreground" />
                                    )}
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className={`text-sm font-medium ${item.change.startsWith('+') ? 'text-green-500' :
                                            item.change.startsWith('-') ? 'text-red-500' : 'text-muted-foreground'
                                        }`}>
                                        {item.change}
                                    </span>
                                    <span className="text-xs text-muted-foreground">{item.score}/100</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Trending Repositories */}
            <div className="space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold">Trending Repositories</h2>
                {loading ? (
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                        {[...Array(10)].map((_, i) => (
                            <div key={i} className="rounded-xl border border-border/30 bg-background p-4">
                                <div className="h-5 bg-muted/20 rounded w-1/2 mb-2"></div>
                                <div className="h-4 bg-muted/20 rounded w-3/4 mb-3"></div>
                                <div className="h-3 bg-muted/20 rounded w-1/4"></div>
                            </div>
                        ))}
                    </div>
                ) : repos.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center rounded-xl border border-dashed border-border/30 bg-background">
                        <GitBranch className="h-10 w-10 text-muted-foreground mb-4" />
                        <h3 className="text-lg font-semibold mb-2">No Repositories Found</h3>
                        <p className="text-muted-foreground max-w-md text-sm">Trending repos will appear here.</p>
                    </div>
                ) : (
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                        {repos.map((repo, i) => (
                            <a
                                key={i}
                                href={repo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group rounded-xl border border-border/30 bg-background p-4 hover:border-primary/40 transition-all"
                            >
                                <div className="flex items-start justify-between gap-2 mb-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs text-muted-foreground font-mono">#{i + 1}</span>
                                        <h3 className="font-semibold text-sm group-hover:text-primary transition-colors line-clamp-1">
                                            {repo.name}
                                        </h3>
                                    </div>
                                    <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                                </div>
                                <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                                    {repo.description || 'No description available'}
                                </p>
                                <div className="flex items-center gap-4 text-xs">
                                    <div className="flex items-center gap-1">
                                        <Star className="h-3 w-3 text-yellow-500" />
                                        <span>{formatStars(repo.stars)}</span>
                                    </div>
                                    {repo.language && (
                                        <div className="flex items-center gap-1">
                                            <Code className="h-3 w-3 text-muted-foreground" />
                                            <span>{repo.language}</span>
                                        </div>
                                    )}
                                </div>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
