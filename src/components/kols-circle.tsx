"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface KOL {
    handle: string
    name: string
}

export default function KolsCircle() {
    const [kols, setKols] = useState<KOL[]>([])
    const [failedImages, setFailedImages] = useState<Set<string>>(new Set())

    useEffect(() => {
        async function fetchKOLs() {
            try {
                const baseUrl = process.env.NEXT_PUBLIC_NEWS_API_URL?.replace('/api/news', '') || ''
                if (!baseUrl) return
                const res = await fetch(`${baseUrl}/api/kols`)
                const data = await res.json()
                setKols((data.kols || []).slice(0, 48))
            } catch (error) {
                console.error('Failed to fetch KOLs:', error)
            }
        }
        fetchKOLs()
    }, [])

    const handleImageError = (handle: string) => {
        setFailedImages(prev => new Set(prev).add(handle))
    }

    const getPosition = (index: number, total: number, radius: number) => {
        const angle = (index / total) * 2 * Math.PI - Math.PI / 2
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        return { x, y }
    }

    if (kols.length === 0) {
        return null
    }

    // Split KOLs into 4 layers
    const layer1 = kols.slice(0, 16)
    const layer2 = kols.slice(16, 28)
    const layer3 = kols.slice(28, 40)
    const layer4 = kols.slice(40, 48)

    const renderAvatar = (kol: KOL, size: number) => {
        if (failedImages.has(kol.handle)) {
            return (
                <span className="font-bold text-primary" style={{ fontSize: size * 0.35 }}>
                    {kol.name.charAt(0)}
                </span>
            )
        }
        return (
            <Image
                src={`https://unavatar.io/twitter/${kol.handle}`}
                alt={kol.name}
                width={size}
                height={size}
                className="rounded-full object-cover"
                style={{ width: size * 0.7, height: size * 0.7 }}
                onError={() => handleImageError(kol.handle)}
                unoptimized
            />
        )
    }

    return (
        <section className="py-12 md:py-20 px-4 overflow-hidden">
            <div className="container">
                {/* Section Title */}
                <div className="text-center mb-6">
                    <p className="text-sm text-muted-foreground uppercase tracking-widest">
                        Influencers in the space
                    </p>
                </div>

                {/* KOLs Circle */}
                <div className="relative w-full max-w-[450px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[800px] mx-auto aspect-square">

                    {/* Layer 1 - Outermost (16 KOLs) */}
                    <div className="absolute inset-0 animate-spin-slow">
                        {layer1.map((kol, i) => {
                            const pos = getPosition(i, layer1.length, 45)
                            return (
                                <div
                                    key={`l1-${i}-${kol.handle}`}
                                    className="absolute w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-white dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-700 shadow-lg flex items-center justify-center overflow-hidden transform -translate-x-1/2 -translate-y-1/2"
                                    style={{
                                        left: `${50 + pos.x}%`,
                                        top: `${50 + pos.y}%`,
                                    }}
                                >
                                    {renderAvatar(kol, 56)}
                                </div>
                            )
                        })}
                    </div>

                    {/* Layer 2 (12 KOLs) */}
                    <div className="absolute inset-0 animate-spin-slow-reverse">
                        {layer2.map((kol, i) => {
                            const pos = getPosition(i, layer2.length, 34)
                            return (
                                <div
                                    key={`l2-${i}-${kol.handle}`}
                                    className="absolute w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-white dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-700 shadow-lg flex items-center justify-center overflow-hidden transform -translate-x-1/2 -translate-y-1/2"
                                    style={{
                                        left: `${50 + pos.x}%`,
                                        top: `${50 + pos.y}%`,
                                    }}
                                >
                                    {renderAvatar(kol, 48)}
                                </div>
                            )
                        })}
                    </div>

                    {/* Layer 3 (12 KOLs) */}
                    <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '35s' }}>
                        {layer3.map((kol, i) => {
                            const pos = getPosition(i, layer3.length, 23)
                            return (
                                <div
                                    key={`l3-${i}-${kol.handle}`}
                                    className="absolute w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full bg-white dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-700 shadow-lg flex items-center justify-center overflow-hidden transform -translate-x-1/2 -translate-y-1/2"
                                    style={{
                                        left: `${50 + pos.x}%`,
                                        top: `${50 + pos.y}%`,
                                    }}
                                >
                                    {renderAvatar(kol, 40)}
                                </div>
                            )
                        })}
                    </div>

                    {/* Layer 4 - Innermost (8 KOLs) */}
                    <div className="absolute inset-0 animate-spin-slow-reverse" style={{ animationDuration: '30s' }}>
                        {layer4.map((kol, i) => {
                            const pos = getPosition(i, layer4.length, 13)
                            return (
                                <div
                                    key={`l4-${i}-${kol.handle}`}
                                    className="absolute w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-full bg-white dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-700 shadow-lg flex items-center justify-center overflow-hidden transform -translate-x-1/2 -translate-y-1/2"
                                    style={{
                                        left: `${50 + pos.x}%`,
                                        top: `${50 + pos.y}%`,
                                    }}
                                >
                                    {renderAvatar(kol, 36)}
                                </div>
                            )
                        })}
                    </div>

                    {/* Center Text */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="text-center z-10 bg-white dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-700 shadow-xl rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center">
                            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">KOLs</h2>
                        </div>
                    </div>

                    {/* Decorative orbit lines */}
                    <div className="absolute inset-[5%] rounded-full border border-gray-300/30 dark:border-zinc-600/30"></div>
                    <div className="absolute inset-[17%] rounded-full border border-gray-300/30 dark:border-zinc-600/30"></div>
                    <div className="absolute inset-[28%] rounded-full border border-gray-300/30 dark:border-zinc-600/30"></div>
                    <div className="absolute inset-[40%] rounded-full border border-gray-300/30 dark:border-zinc-600/30"></div>
                </div>
            </div>
        </section>
    )
}
