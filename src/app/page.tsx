"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ChevronRight, Newspaper, ExternalLink } from "lucide-react"
import { MetasOrbit } from "@/components/metas-orbit"
import EcosystemCircle from "@/components/ecosystem-circle"
import KolsCircle from "@/components/kols-circle"

const services = [
  {
    title: "Strategic Marketing",
    image: "/images/strategic-marketing.png",
    description: "We craft data-driven go-to-market strategies that position your project for success. From tokenomics advisory to market positioning and growth roadmaps.",
  },
  {
    title: "Community Building",
    image: "/images/community-building.png",
    description: "We cultivate engaged, loyal communities that become your most powerful growth engine. Our team handles moderation, events, and partnerships 24/7.",
  },
  {
    title: "Brand Development",
    image: "/images/brand-development.png",
    description: "We create memorable visual identities and high-impact content that sets you apart. From video to UI/UX, we make your brand unforgettable.",
  },
  {
    title: "Technical Support",
    image: "/images/technical-support.png",
    description: "We provide end-to-end technical guidance from smart contracts to full-stack decentralized applications. Build with confidence.",
  },
]

interface NewsItem {
  title: string
  url: string
  source: string
  date: string
  image?: string
  description?: string
}

export default function Home() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchNews() {
      try {
        // Use environment variable for worker URL, fallback to empty state
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

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center space-y-8 py-16 text-center md:py-20 lg:py-24 overflow-hidden relative px-4">
        <div className="container flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="inline-block animate-in fade-in slide-in-from-left-4 duration-700">
              Your
            </span>{" "}
            <span className="inline-block bg-gradient-to-r from-primary via-pink-400 to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%] drop-shadow-lg">
              Web3 Growth
            </span>{" "}
            <span className="inline-block animate-in fade-in slide-in-from-right-4 duration-700 delay-200">
              Partner
            </span>
          </h1>

          <p className="max-w-[48rem] text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl animate-in fade-in duration-1000 delay-300 px-4">
            We help blockchain projects scale with precision marketing, thriving communities, and world-class branding.
          </p>
        </div>
      </section>

      {/* Ecosystem Circle */}
      <EcosystemCircle />

      {/* Web3 Metas Orbit Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="container">
          <h2 className="text-center mb-6">The Narratives We Track</h2>
          <MetasOrbit />
        </div>
      </section>

      {/* KOLs Circle */}
      <KolsCircle />

      {/* What We Do Section */}
      <section className="py-12 md:py-16 bg-secondary/30 backdrop-blur-sm px-4">
        <div className="container">
          <h2 className="text-center mb-8 md:mb-10">What We Do</h2>
          <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <Link href="/services" key={i}>
                <div className="group h-full rounded-2xl border border-border/50 bg-card/50 dark:bg-card/30 backdrop-blur-sm hover:border-primary/40 hover:bg-card/80 dark:hover:bg-card/50 transition-all duration-300 overflow-hidden">
                  {/* Image */}
                  <div className="relative w-full h-28 sm:h-32 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-4 -mt-4 relative z-10">
                    <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <h2>News</h2>
            <Link href="/news" className="text-primary hover:underline flex items-center gap-1 text-sm">
              View All <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          {loading ? (
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <div key={i} className="rounded-xl border border-border/30 bg-background overflow-hidden">
                  <div className="h-24 bg-muted/30"></div>
                  <div className="p-3">
                    <div className="h-3 bg-muted/30 rounded w-3/4 mb-2"></div>
                    <div className="h-2 bg-muted/30 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : news.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 sm:py-12 text-center border border-dashed rounded-xl px-4 border-border/50 bg-card/30 backdrop-blur-sm">
              <Newspaper className="h-8 w-8 sm:h-10 sm:w-10 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No News Available</h3>
              <p className="text-muted-foreground max-w-md text-sm">Unable to fetch news at this time.</p>
            </div>
          ) : (
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
              {news.slice(0, 10).map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-border/30 bg-background overflow-hidden hover:border-primary/40 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative w-full h-24 bg-muted/20 overflow-hidden">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        unoptimized
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-border/10">
                        <Newspaper className="h-8 w-8 text-muted-foreground/50" />
                      </div>
                    )}
                  </div>
                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-sm font-medium line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
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
      </section>
    </div>
  )
}
