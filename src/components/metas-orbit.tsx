"use client"

const metas = [
    "DeFi",
    "AI",
    "Gaming",
    "NFTs",
    "RWA",
    "L2s",
    "DePIN",
    "SocialFi",
    "DAOs",
    "Infra",
]

export function MetasOrbit() {
    return (
        <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] mx-auto">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/20" />

            {/* Middle ring */}
            <div className="absolute inset-6 sm:inset-8 rounded-full border border-border/30" />

            {/* Inner glow circle */}
            <div className="absolute inset-16 sm:inset-20 md:inset-24 rounded-full bg-gradient-to-br from-primary/10 to-transparent" />

            {/* Center content - fixed position */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
                        <span className="block bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                            SWITCH
                        </span>
                        <span className="block bg-gradient-to-b from-primary to-primary/70 bg-clip-text text-transparent">
                            LABS
                        </span>
                    </div>
                </div>
            </div>

            {/* Rotating orbit container */}
            <div className="absolute inset-0 animate-spin-slow">
                {metas.map((meta, i) => {
                    const angle = (360 / metas.length) * i
                    const radian = (angle * Math.PI) / 180
                    // Position on the edge of the circle (radius = 50% - padding for the pill)
                    const x = 50 + 42 * Math.cos(radian - Math.PI / 2)
                    const y = 50 + 42 * Math.sin(radian - Math.PI / 2)

                    return (
                        <div
                            key={meta}
                            className="absolute"
                            style={{
                                left: `${x}%`,
                                top: `${y}%`,
                                transform: 'translate(-50%, -50%)',
                            }}
                        >
                            <div
                                className="animate-counter-spin px-2 py-1 sm:px-3 sm:py-1.5 rounded-full border border-border/50 bg-card/90 backdrop-blur-sm text-[10px] sm:text-xs md:text-sm font-medium whitespace-nowrap shadow-sm"
                            >
                                {meta}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
