"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface Project {
    name: string
    logo: string
}

export default function EcosystemCircle() {
    const [projects, setProjects] = useState<Project[]>([])
    const [failedImages, setFailedImages] = useState<Set<string>>(new Set())

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
                    .slice(0, 48)
                setProjects(projectsWithLogos)
            } catch (error) {
                console.error('Failed to fetch projects:', error)
            }
        }
        fetchProjects()
    }, [])

    const handleImageError = (logo: string) => {
        setFailedImages(prev => new Set(prev).add(logo))
    }

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
    const layer1 = projects.slice(0, 16)
    const layer2 = projects.slice(16, 28)
    const layer3 = projects.slice(28, 40)
    const layer4 = projects.slice(40, 48)

    const renderLogo = (project: Project, size: number) => {
        if (failedImages.has(project.logo)) {
            return (
                <span className="text-xs font-bold text-primary">
                    {project.name.charAt(0)}
                </span>
            )
        }
        return (
            <Image
                src={project.logo}
                alt={project.name}
                width={size}
                height={size}
                className="rounded-full object-contain"
                style={{ width: size * 0.7, height: size * 0.7 }}
                onError={() => handleImageError(project.logo)}
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
                        Projects in the space
                    </p>
                </div>

                {/* Ecosystem Circle - Made bigger */}
                <div className="relative w-full max-w-[500px] sm:max-w-[600px] md:max-w-[750px] lg:max-w-[850px] mx-auto aspect-square">

                    {/* Layer 1 - Outermost (16 projects) */}
                    <div className="absolute inset-0 animate-spin-slow">
                        {layer1.map((project, i) => {
                            const pos = getPosition(i, layer1.length, 45)
                            return (
                                <div
                                    key={`l1-${i}`}
                                    className="absolute w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-full bg-background border border-border/30 shadow-md flex items-center justify-center overflow-hidden transform -translate-x-1/2 -translate-y-1/2"
                                    style={{
                                        left: `${50 + pos.x}%`,
                                        top: `${50 + pos.y}%`,
                                    }}
                                >
                                    {renderLogo(project, 56)}
                                </div>
                            )
                        })}
                    </div>

                    {/* Layer 2 (12 projects) */}
                    <div className="absolute inset-0 animate-spin-slow-reverse">
                        {layer2.map((project, i) => {
                            const pos = getPosition(i, layer2.length, 34)
                            return (
                                <div
                                    key={`l2-${i}`}
                                    className="absolute w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-background border border-border/30 shadow-md flex items-center justify-center overflow-hidden transform -translate-x-1/2 -translate-y-1/2"
                                    style={{
                                        left: `${50 + pos.x}%`,
                                        top: `${50 + pos.y}%`,
                                    }}
                                >
                                    {renderLogo(project, 48)}
                                </div>
                            )
                        })}
                    </div>

                    {/* Layer 3 (12 projects) */}
                    <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '35s' }}>
                        {layer3.map((project, i) => {
                            const pos = getPosition(i, layer3.length, 23)
                            return (
                                <div
                                    key={`l3-${i}`}
                                    className="absolute w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-background border border-border/30 shadow-md flex items-center justify-center overflow-hidden transform -translate-x-1/2 -translate-y-1/2"
                                    style={{
                                        left: `${50 + pos.x}%`,
                                        top: `${50 + pos.y}%`,
                                    }}
                                >
                                    {renderLogo(project, 40)}
                                </div>
                            )
                        })}
                    </div>

                    {/* Layer 4 - Innermost (8 projects) */}
                    <div className="absolute inset-0 animate-spin-slow-reverse" style={{ animationDuration: '30s' }}>
                        {layer4.map((project, i) => {
                            const pos = getPosition(i, layer4.length, 13)
                            return (
                                <div
                                    key={`l4-${i}`}
                                    className="absolute w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full bg-background border border-border/30 shadow-md flex items-center justify-center overflow-hidden transform -translate-x-1/2 -translate-y-1/2"
                                    style={{
                                        left: `${50 + pos.x}%`,
                                        top: `${50 + pos.y}%`,
                                    }}
                                >
                                    {renderLogo(project, 36)}
                                </div>
                            )
                        })}
                    </div>

                    {/* Center Text */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="text-center z-10 bg-background/80 backdrop-blur-sm rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 flex items-center justify-center">
                            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">Ecosystem</h2>
                        </div>
                    </div>

                    {/* Decorative orbit lines */}
                    <div className="absolute inset-[5%] rounded-full border border-border/10"></div>
                    <div className="absolute inset-[17%] rounded-full border border-border/10"></div>
                    <div className="absolute inset-[28%] rounded-full border border-border/10"></div>
                    <div className="absolute inset-[40%] rounded-full border border-border/10"></div>
                </div>
            </div>
        </section>
    )
}
