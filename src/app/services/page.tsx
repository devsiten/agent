"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Brush, Cpu, Check } from "lucide-react"

export default function ServicesPage() {
    const services = [
        {
            title: "Strategic Marketing",
            icon: <TrendingUp className="h-8 w-8 text-primary" />,
            description: "Data-driven positioning and go-to-market execution that puts your project in front of the right audience.",
            features: ["Tokenomics Advisory", "Market Positioning", "Growth Roadmaps", "Exchange Listing Strategy"]
        },
        {
            title: "Community Building",
            icon: <Users className="h-8 w-8 text-primary" />,
            description: "We cultivate loyal, engaged communities that become your most powerful growth engine.",
            features: ["24/7 Community Moderation", "Influencer Partnerships", "Ambassador Programs", "Discord & Telegram Management"]
        },
        {
            title: "Brand Development",
            icon: <Brush className="h-8 w-8 text-primary" />,
            description: "Crafting memorable visual identities and high-impact content that sets you apart.",
            features: ["Video Production", "UI/UX Design", "Pitch Decks & Presentations", "Social Media Assets"]
        },
        {
            title: "Technical Support",
            icon: <Cpu className="h-8 w-8 text-primary" />,
            description: "End-to-end technical guidance from smart contracts to full-stack decentralized applications.",
            features: ["Blockchain App Development", "Smart Contract Audits", "dApp Integration", "Technical Advisory"]
        }
    ]

    return (
        <div className="container py-16 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center max-w-2xl mx-auto space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight">What We Do</h1>
                <p className="text-xl text-muted-foreground">Full-spectrum growth solutions designed for Web3 projects at every stage.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                {services.map((service, index) => (
                    <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
                        <CardHeader>
                            <div className="mb-4">{service.icon}</div>
                            <CardTitle className="text-2xl">{service.title}</CardTitle>
                            <CardDescription className="text-lg">{service.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="grid grid-cols-2 gap-2">
                                {service.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Check className="h-4 w-4 text-primary" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
