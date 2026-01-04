"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Users, ExternalLink } from "lucide-react"

interface KOL {
    handle: string
    name: string
    followers: string
    category: string
}

export default function KolsPage() {
    const [kols, setKols] = useState<KOL[]>([])
    const [loading, setLoading] = useState(true)
    const [activeCategory, setActiveCategory] = useState("All")

    useEffect(() => {
        async function fetchKOLs() {
            try {
                const baseUrl = process.env.NEXT_PUBLIC_NEWS_API_URL?.replace('/api/news', '') || ''
                if (!baseUrl) {
                    setLoading(false)
                    return
                }
                const res = await fetch(`${baseUrl}/api/kols`)
                const data = await res.json()
                setKols(data.kols || [])
            } catch (error) {
                console.error('Failed to fetch KOLs:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchKOLs()
    }, [])

    const categories = ["All", ...Array.from(new Set(kols.map(k => k.category)))]
    const filteredKols = activeCategory === "All"
        ? kols
        : kols.filter(k => k.category === activeCategory)

    return (
        <div className="container py-10 sm:py-16 px-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="text-center space-y-4 mb-10">
                <h1>KOLs</h1>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    Top voices shaping the Web3 narrative.
                </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map((cat) => (
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

            {/* Count */}
            <div className="text-center mb-6 text-sm text-muted-foreground">
                Showing {filteredKols.length} KOLs
            </div>

            {/* Loading State */}
            {loading ? (
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="rounded-xl border border-border/30 bg-background p-4 text-center">
                            <div className="w-16 h-16 rounded-full bg-muted/30 mx-auto mb-3"></div>
                            <div className="h-4 bg-muted/30 rounded w-3/4 mx-auto mb-2"></div>
                            <div className="h-3 bg-muted/30 rounded w-1/2 mx-auto"></div>
                        </div>
                    ))}
                </div>
            ) : filteredKols.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-muted/30 flex items-center justify-center mb-4">
                        <Users className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">No KOLs Found</h3>
                    <p className="text-muted-foreground max-w-md">
                        {activeCategory === "All"
                            ? "Unable to fetch KOLs. Please try again later."
                            : `No ${activeCategory} KOLs found. Try another category.`}
                    </p>
                </div>
            ) : (
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {filteredKols.map((kol, i) => (
                        <a
                            key={i}
                            href={`https://x.com/${kol.handle}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group rounded-xl border border-border/30 bg-background p-4 text-center hover:border-primary/40 transition-all duration-300"
                        >
                            {/* Avatar */}
                            <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mx-auto mb-3 flex items-center justify-center overflow-hidden">
                                <Image
                                    src={`https://unavatar.io/twitter/${kol.handle}`}
                                    alt={kol.name}
                                    width={64}
                                    height={64}
                                    className="rounded-full"
                                    unoptimized
                                />
                            </div>

                            {/* Name */}
                            <h3 className="font-semibold text-sm mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                                {kol.name}
                            </h3>

                            {/* Handle */}
                            <div className="flex items-center justify-center gap-1 text-xs text-primary mb-2">
                                @{kol.handle}
                                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            {/* Followers */}
                            <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                                <Users className="h-3 w-3" />
                                {kol.followers}
                            </div>

                            {/* Category */}
                            <div className="mt-2">
                                <span className="px-2 py-0.5 text-xs rounded-full bg-muted/50">
                                    {kol.category}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            )}
        </div>
    )
}
