"use client"

import Image from "next/image"
import {
    TrendingUp,
    Users,
    Brush,
    Cpu,
    Target,
    BarChart3,
    Megaphone,
    MessageCircle,
    UserCheck,
    Palette,
    Video,
    Layout,
    Code,
    Shield,
    Blocks
} from "lucide-react"

const services = [
    {
        title: "Strategic Marketing",
        image: "/images/strategic-marketing.png",
        description: "We craft data-driven go-to-market strategies that position your project for success. From tokenomics advisory to market positioning and growth roadmaps, we help you reach the right audience at the right time.",
        features: [
            { icon: <Target className="h-5 w-5" />, name: "Tokenomics Advisory" },
            { icon: <TrendingUp className="h-5 w-5" />, name: "Market Positioning" },
            { icon: <BarChart3 className="h-5 w-5" />, name: "Growth Roadmaps" },
            { icon: <Megaphone className="h-5 w-5" />, name: "Exchange Listing" },
        ],
    },
    {
        title: "Community Building",
        image: "/images/community-building.png",
        description: "We cultivate engaged, loyal communities that become your most powerful growth engine. Our team handles moderation, events, and partnerships to keep your community thriving 24/7.",
        features: [
            { icon: <MessageCircle className="h-5 w-5" />, name: "24/7 Moderation" },
            { icon: <UserCheck className="h-5 w-5" />, name: "Influencer Partnerships" },
            { icon: <Users className="h-5 w-5" />, name: "Ambassador Programs" },
            { icon: <Target className="h-5 w-5" />, name: "Discord & Telegram" },
        ],
    },
    {
        title: "Brand Development",
        image: "/images/brand-development.png",
        description: "We create memorable visual identities and high-impact content that sets you apart in the crowded Web3 space. From video to UI/UX, we make your brand unforgettable.",
        features: [
            { icon: <Video className="h-5 w-5" />, name: "Video Production" },
            { icon: <Layout className="h-5 w-5" />, name: "UI/UX Design" },
            { icon: <Palette className="h-5 w-5" />, name: "Visual Identity" },
            { icon: <Brush className="h-5 w-5" />, name: "Marketing Assets" },
        ],
    },
    {
        title: "Technical Support",
        image: "/images/technical-support.png",
        description: "We provide end-to-end technical guidance from smart contracts to full-stack decentralized applications. Build with confidence knowing your tech foundation is solid.",
        features: [
            { icon: <Code className="h-5 w-5" />, name: "dApp Development" },
            { icon: <Shield className="h-5 w-5" />, name: "Smart Contract Audits" },
            { icon: <Blocks className="h-5 w-5" />, name: "Blockchain Integration" },
            { icon: <Cpu className="h-5 w-5" />, name: "Technical Advisory" },
        ],
    },
]

export default function ServicesPage() {
    return (
        <div className="container py-12 sm:py-16 md:py-20 px-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                <h1 className="mb-4">What We Do</h1>
                <p className="text-muted-foreground">
                    Full-spectrum growth solutions designed for Web3 projects at every stage.
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2">
                {services.map((service, i) => (
                    <div
                        key={i}
                        className="group relative rounded-2xl border border-border/50 bg-card/50 dark:bg-card/30 backdrop-blur-sm hover:border-primary/40 hover:bg-card/80 dark:hover:bg-card/50 transition-all duration-300 overflow-hidden"
                    >
                        {/* Image */}
                        <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="p-6 sm:p-8 -mt-8 relative z-10">
                            <h2 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h2>
                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                                {service.description}
                            </p>

                            {/* Features Grid */}
                            <div className="grid grid-cols-2 gap-3">
                                {service.features.map((feature, fi) => (
                                    <div
                                        key={fi}
                                        className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-background/60 dark:bg-background/40 border border-border/30"
                                    >
                                        <div className="text-primary">
                                            {feature.icon}
                                        </div>
                                        <span className="text-xs sm:text-sm font-medium">{feature.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
