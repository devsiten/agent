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
        <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] mx-auto">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 dark:border-primary/40" />

            {/* Middle decorative ring */}
            <div className="absolute inset-4 sm:inset-6 rounded-full border border-border/40 dark:border-border/50" />

            {/* Inner glow circle */}
            <div className="absolute inset-12 sm:inset-16 md:inset-20 rounded-full bg-gradient-to-br from-primary/5 via-primary/10 to-transparent dark:from-primary/10 dark:via-primary/15 dark:to-transparent" />

            {/* Center content */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="text-center">
                    <div className="font-satoshi font-black tracking-tight leading-none">
                        <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-gradient-to-b from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
                            SWITCH
                        </span>
                        <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-gradient-to-b from-primary via-primary to-primary/60 bg-clip-text text-transparent mt-1">
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
                    const x = 50 + 44 * Math.cos(radian - Math.PI / 2)
                    const y = 50 + 44 * Math.sin(radian - Math.PI / 2)

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
                                className="animate-counter-spin px-2 py-1 sm:px-3 sm:py-1.5 rounded-full border border-border/60 dark:border-border/70 bg-background/90 dark:bg-card/90 backdrop-blur-sm text-[9px] sm:text-[11px] md:text-xs font-medium whitespace-nowrap shadow-sm hover:border-primary/50 transition-colors"
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
