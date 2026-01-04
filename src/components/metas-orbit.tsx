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
    "Infrastructure",
]

export function MetasOrbit() {
    return (
        <div className="relative w-full max-w-[500px] aspect-square mx-auto">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse" />

            {/* Main orbit ring */}
            <div className="absolute inset-4 rounded-full border border-border/50" />

            {/* Inner glow */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/5 to-primary/10" />

            {/* Center content */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
                        <span className="bg-gradient-to-b from-foreground via-foreground to-foreground/50 bg-clip-text text-transparent drop-shadow-lg">
                            SWITCH
                        </span>
                        <br />
                        <span className="bg-gradient-to-b from-primary via-primary to-primary/50 bg-clip-text text-transparent drop-shadow-lg">
                            LABS
                        </span>
                    </h2>
                </div>
            </div>

            {/* Rotating metas container */}
            <div className="absolute inset-0 animate-spin-slow">
                {metas.map((meta, i) => {
                    const angle = (360 / metas.length) * i
                    const radius = 45 // percentage from center
                    return (
                        <div
                            key={meta}
                            className="absolute left-1/2 top-1/2"
                            style={{
                                transform: `rotate(${angle}deg) translateY(-${radius}%) rotate(-${angle}deg) translate(-50%, -50%)`,
                            }}
                        >
                            <div
                                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-border/50 bg-card/80 backdrop-blur-sm text-xs sm:text-sm font-medium hover:border-primary/50 hover:bg-card transition-all duration-300 whitespace-nowrap"
                                style={{
                                    transform: `rotate(${-angle}deg)`,
                                }}
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
