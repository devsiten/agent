"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Newspaper, ExternalLink } from "lucide-react"

interface NewsItem {
    title: string
    url: string
    source: string
    date: string
    image: string
    description: string
}

export default function NewsPage() {
    const [news, setNews] = useState<NewsItem[]>([])
    const [loading, setLoading] = useState(true)
    const [failedImages, setFailedImages] = useState<Set<number>>(new Set())

    useEffect(() => {
        async function fetchNews() {
            try {
                const workerUrl = process.env.NEXT_PUBLIC_NEWS_API_URL
                if (!workerUrl) {
                    setLoading(false)
                    return
                }
                const res = await fetch(workerUrl)
                const data = await res.json()
                setNews(data.news || [])
            } catch (error) {
                console.error('Failed to fetch news:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchNews()
    }, [])

    const handleImageError = (index: number) => {
        setFailedImages(prev => new Set(prev).add(index))
    }

    return (
        <div className="container py-12 sm:py-16 md:py-20 px-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center space-y-4 mb-12">
                <h1>News</h1>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    Latest crypto and Web3 news from around the world.
                </p>
            </div>

            {loading ? (
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                        <div key={i} className="rounded-xl border border-border/30 bg-background overflow-hidden">
                            <div className="h-40 bg-muted/20"></div>
                            <div className="p-4">
                                <div className="h-4 bg-muted/20 rounded w-3/4 mb-3"></div>
                                <div className="h-3 bg-muted/20 rounded w-1/2"></div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : news.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-center border border-dashed rounded-xl px-4 border-border/50 bg-card/30 backdrop-blur-sm">
                    <Newspaper className="h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No News Available</h3>
                    <p className="text-muted-foreground max-w-md">Unable to fetch news at this time. Please try again later.</p>
                </div>
            ) : (
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {news.map((item, i) => (
                        <a
                            key={i}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group rounded-xl border border-border/30 bg-background overflow-hidden hover:border-primary/40 transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="relative w-full h-40 bg-muted/10 overflow-hidden">
                                {item.image && !failedImages.has(i) ? (
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        onError={() => handleImageError(i)}
                                        unoptimized
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-muted/20">
                                        <Newspaper className="h-10 w-10 text-muted-foreground/50" />
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <div className="flex items-start justify-between gap-2 mb-2">
                                    <h3 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                                </div>
                                {item.description && (
                                    <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                                        {item.description}
                                    </p>
                                )}
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <span className="font-medium">{item.source}</span>
                                    <span>•</span>
                                    <span>{item.date}</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            )}
        </div>
    )
}
