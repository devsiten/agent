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
        <div className="flex items-center justify-center w-full">
            <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 dark:border-primary/40 shadow-[0_0_60px_rgba(124,58,237,0.15)] dark:shadow-[0_0_80px_rgba(124,58,237,0.25)]" />

                {/* Middle decorative ring */}
                <div className="absolute inset-4 sm:inset-6 rounded-full border border-border/40 dark:border-border/50" />

                {/* Inner glow */}
                <div className="absolute inset-8 sm:inset-10 rounded-full border border-primary/20 dark:border-primary/30" />

                {/* Center glow circle */}
                <div className="absolute inset-16 sm:inset-20 md:inset-24 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent dark:from-primary/15 dark:via-primary/10 dark:to-transparent" />

                {/* Center content */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <div className="text-center">
                        <div className="font-satoshi font-black tracking-tight leading-none">
                            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-gradient-to-b from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent drop-shadow-sm">
                                SWITCH
                            </span>
                            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-gradient-to-b from-primary via-primary to-primary/60 bg-clip-text text-transparent mt-1 drop-shadow-sm">
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
                                    className="animate-counter-spin px-2 py-1 sm:px-3 sm:py-1.5 rounded-full border border-border/60 dark:border-border/70 bg-background/95 dark:bg-card/95 backdrop-blur-sm text-[9px] sm:text-[11px] md:text-xs font-medium whitespace-nowrap shadow-sm hover:border-primary/50 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)] transition-all duration-300"
                                >
                                    {meta}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
