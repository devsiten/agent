"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface Project {
    name: string
    logo: string
}

export default function EcosystemCircle() {
    const [projects, setProjects] = useState<Project[]>([])

    useEffect(() => {
        async function fetchProjects() {
            try {
                const baseUrl = process.env.NEXT_PUBLIC_NEWS_API_URL?.replace('/api/news', '') || ''
                if (!baseUrl) return
                const res = await fetch(`${baseUrl}/api/projects`)
                const data = await res.json()
                // Get projects with logos - no duplicates
                const projectsWithLogos = (data.projects || [])
                    .filter((p: Project) => p.logo)
                    .slice(0, 48) // 4 layers: 16 + 12 + 12 + 8 = 48 projects
                setProjects(projectsWithLogos)
            } catch (error) {
                console.error('Failed to fetch projects:', error)
            }
        }
        fetchProjects()
    }, [])

    // Calculate positions for logos in a circle
    const getPosition = (index: number, total: number, radius: number) => {
        const angle = (index / total) * 2 * Math.PI - Math.PI / 2
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        return { x, y }
    }

    if (projects.length === 0) {
        return null
    }

    // Split projects into 4 layers
    const layer1 = projects.slice(0, 16)   // Outermost - 16 projects
    const layer2 = projects.slice(16, 28)  // 12 projects
    const layer3 = projects.slice(28, 40)  // 12 projects
    const layer4 = projects.slice(40, 48)  // Innermost - 8 projects

    return (
        <section className="py-16 md:py-24 px-4 overflow-hidden">
            <div className="container">
                {/* Section Title */}
                <div className="text-center mb-8">
                    <p className="text-sm text-muted-foreground uppercase tracking-widest">
                        Projects in the space
                    </p>
                </div>

                {/* Ecosystem Circle */}
                <div className="relative w-full max-w-[700px] mx-auto aspect-square">

                    {/* Layer 1 - Outermost (16 projects, 46% radius) */}
                    <div className="absolute inset-0 animate-spin-slow">
                        {layer1.map((project, i) => {
                            const pos = getPosition(i, layer1.length, 46)
                            return (
                                <div
                                    key={`l1-${i}`}
                                    className="absolute w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-background border border-border/30 shadow-md flex items-center justify-center overflow-hidden transform -translate-x-1/2 -translate-y-1/2"
                                    style={{
                                        left: `${50 + pos.x}%`,
                                        top: `${50 + pos.y}%`,
                                    }}
                                >
                                    <Image
                                        src={project.logo}
                                        alt={project.name}
                                        width={40}
                                        height={40}
                                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full object-contain"
                                        unoptimized
                                    />
                                </div>
                            )
                        })}
                    </div>

                    {/* Layer 2 (12 projects, 35% radius) */}
                    <div className="absolute inset-0 animate-spin-slow-reverse">
                        {layer2.map((project, i) => {
                            const pos = getPosition(i, layer2.length, 35)
                            return (
                                <div
                                    key={`l2-${i}`}
                                    className="absolute w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-background border border-border/30 shadow-md flex items-center justify-center overflow-hidden transform -translate-x-1/2 -translate-y-1/2"
                                    style={{
                                        left: `${50 + pos.x}%`,
                                        top: `${50 + pos.y}%`,
                                    }}
                                >
                                    <Image
                                        src={project.logo}
                                        alt={project.name}
                                        width={36}
                                        height={36}
                                        className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full object-contain"
                                        unoptimized
                                    />
                                </div>
                            )
                        })}
                    </div>

                    {/* Layer 3 (12 projects, 24% radius) */}
                    <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '35s' }}>
                        {layer3.map((project, i) => {
                            const pos = getPosition(i, layer3.length, 24)
                            return (
                                <div
                                    key={`l3-${i}`}
                                    className="absolute w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-background border border-border/30 shadow-md flex items-center justify-center overflow-hidden transform -translate-x-1/2 -translate-y-1/2"
                                    style={{
                                        left: `${50 + pos.x}%`,
                                        top: `${50 + pos.y}%`,
                                    }}
                                >
                                    <Image
                                        src={project.logo}
                                        alt={project.name}
                                        width={32}
                                        height={32}
                                        className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full object-contain"
                                        unoptimized
                                    />
                                </div>
                            )
                        })}
                    </div>

                    {/* Layer 4 - Innermost (8 projects, 14% radius) */}
                    <div className="absolute inset-0 animate-spin-slow-reverse" style={{ animationDuration: '30s' }}>
                        {layer4.map((project, i) => {
                            const pos = getPosition(i, layer4.length, 14)
                            return (
                                <div
                                    key={`l4-${i}`}
                                    className="absolute w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-background border border-border/30 shadow-md flex items-center justify-center overflow-hidden transform -translate-x-1/2 -translate-y-1/2"
                                    style={{
                                        left: `${50 + pos.x}%`,
                                        top: `${50 + pos.y}%`,
                                    }}
                                >
                                    <Image
                                        src={project.logo}
                                        alt={project.name}
                                        width={28}
                                        height={28}
                                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full object-contain"
                                        unoptimized
                                    />
                                </div>
                            )
                        })}
                    </div>

                    {/* Center Text */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="text-center z-10">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Ecosystem</h2>
                        </div>
                    </div>

                    {/* Decorative orbit lines */}
                    <div className="absolute inset-[4%] rounded-full border border-border/10"></div>
                    <div className="absolute inset-[16%] rounded-full border border-border/10"></div>
                    <div className="absolute inset-[27%] rounded-full border border-border/10"></div>
                    <div className="absolute inset-[38%] rounded-full border border-border/10"></div>
                </div>
            </div>
        </section>
    )
}
