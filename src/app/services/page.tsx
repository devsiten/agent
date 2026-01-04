"use client"

import {
    TrendingUp,
    Users,
    Brush,
    Cpu,
    Megaphone,
    MessageCircle,
    UserCheck,
    Handshake,
    Palette,
    Video,
    Code,
    Shield,
    BarChart3,
    Target,
    Zap,
    Globe
} from "lucide-react"

const services = [
    {
        title: "Community Growth",
        icon: <Users className="h-6 w-6" />,
        secondaryIcon: <TrendingUp className="h-4 w-4" />,
        description: "We attract, retain, and engage Web3 community members, driving meaningful growth and lasting brand loyalty through strategic community initiatives.",
        gradient: "from-purple-500/20 to-blue-500/20"
    },
    {
        title: "Community Management",
        icon: <MessageCircle className="h-6 w-6" />,
        secondaryIcon: <Users className="h-4 w-4" />,
        description: "We expertly manage Web3 communities with effective channel moderation, interactive discussions, and engaging event hosting across Discord, Telegram, and beyond.",
        gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
        title: "Influencer Marketing",
        icon: <UserCheck className="h-6 w-6" />,
        secondaryIcon: <Megaphone className="h-4 w-4" />,
        description: "We create targeted Web3 influencer marketing campaigns that amplify visibility, credibility, and user engagement with the right KOLs for your project.",
        gradient: "from-cyan-500/20 to-teal-500/20"
    },
    {
        title: "Partnership Management",
        icon: <Handshake className="h-6 w-6" />,
        secondaryIcon: <Globe className="h-4 w-4" />,
        description: "We establish strategic blockchain partnerships aligned with your project's long-term growth objectives, connecting you with the right ecosystems and protocols.",
        gradient: "from-teal-500/20 to-green-500/20"
    },
    {
        title: "Social Media Management",
        icon: <BarChart3 className="h-6 w-6" />,
        secondaryIcon: <Target className="h-4 w-4" />,
        description: "We strategically manage your Web3 social media channels to drive engagement, awareness, and community growth with data-driven content strategies.",
        gradient: "from-green-500/20 to-yellow-500/20"
    },
    {
        title: "Branding",
        icon: <Palette className="h-6 w-6" />,
        secondaryIcon: <Brush className="h-4 w-4" />,
        description: "We develop impactful branding strategies tailored specifically for Web3, blockchain, and NFT projects, positioning you clearly in your market.",
        gradient: "from-yellow-500/20 to-orange-500/20"
    },
    {
        title: "Design",
        icon: <Brush className="h-6 w-6" />,
        secondaryIcon: <Zap className="h-4 w-4" />,
        description: "Our experienced design team delivers captivating visual identities, UI/UX, and marketing assets optimized for blockchain, NFT, and Web3 audiences.",
        gradient: "from-orange-500/20 to-red-500/20"
    },
    {
        title: "Development",
        icon: <Code className="h-6 w-6" />,
        secondaryIcon: <Cpu className="h-4 w-4" />,
        description: "We provide technical expertise to build, launch, and scale blockchain-based projects, NFT platforms, and decentralized applications with robust architecture.",
        gradient: "from-red-500/20 to-pink-500/20"
    },
    {
        title: "Strategic Advisory",
        icon: <Target className="h-6 w-6" />,
        secondaryIcon: <TrendingUp className="h-4 w-4" />,
        description: "We offer strategic advisory services to navigate the complexities of blockchain marketing, NFT growth, and Web3 strategies tailored to your goals.",
        gradient: "from-pink-500/20 to-purple-500/20"
    },
    {
        title: "Fundraising",
        icon: <TrendingUp className="h-6 w-6" />,
        secondaryIcon: <Handshake className="h-4 w-4" />,
        description: "Our expert team supports Web3 projects in fundraising, investor relations, and strategic introductions to leading venture capital firms and crypto investors.",
        gradient: "from-purple-500/20 to-indigo-500/20"
    },
    {
        title: "Public Relations",
        icon: <Megaphone className="h-6 w-6" />,
        secondaryIcon: <Globe className="h-4 w-4" />,
        description: "We manage targeted Web3 PR campaigns, securing high-impact coverage to increase your blockchain or NFT project's visibility and credibility.",
        gradient: "from-indigo-500/20 to-blue-500/20"
    },
    {
        title: "Security Audits",
        icon: <Shield className="h-6 w-6" />,
        secondaryIcon: <Code className="h-4 w-4" />,
        description: "We connect you with trusted security partners to audit your smart contracts and dApps, ensuring your project launches with confidence and trust.",
        gradient: "from-blue-500/20 to-purple-500/20"
    },
]

export default function ServicesPage() {
    return (
        <div className="container py-12 sm:py-16 md:py-20 px-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                <h1 className="mb-4">Our Web3 Marketing & Growth Services</h1>
                <p className="text-muted-foreground">
                    Comprehensive solutions designed to help your blockchain project thrive in the competitive Web3 landscape.
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {services.map((service, i) => (
                    <div
                        key={i}
                        className="group relative p-5 sm:p-6 rounded-2xl border border-border/50 bg-card/50 dark:bg-card/30 backdrop-blur-sm hover:border-primary/40 hover:bg-card/80 dark:hover:bg-card/50 transition-all duration-300"
                    >
                        {/* Icon Container */}
                        <div className={`relative w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-5 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                            <div className="text-foreground">
                                {service.icon}
                            </div>
                            <div className="absolute -bottom-1 -right-1 p-1.5 rounded-lg bg-background border border-border/50 text-primary">
                                {service.secondaryIcon}
                            </div>
                        </div>

                        {/* Content */}
                        <h3 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                            {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
