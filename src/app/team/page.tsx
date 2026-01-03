import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function TeamPage() {
    const team = [
        { name: "Founder Name", role: "CEO & Strategy", handle: "@founder" },
        { name: "Partner Name", role: "Head of Growth", handle: "@growth_lead" },
        { name: "Dev Lead", role: "CTO", handle: "@tech_lead" },
    ]

    return (
        <div className="container py-16 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight">The Team</h1>
                <p className="text-xl text-muted-foreground">Builders, strategists, and degens.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
                {team.map((member, i) => (
                    <Card key={i} className="text-center hover:border-primary/50 transition-colors">
                        <CardHeader>
                            <div className="w-24 h-24 mx-auto bg-secondary rounded-full mb-4" />
                            <CardTitle>{member.name}</CardTitle>
                            <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">{member.handle}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
