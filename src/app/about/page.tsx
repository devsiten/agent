import { Target, Lightbulb, Shield } from "lucide-react"

export default function AboutPage() {
    return (
        <div className="container py-16 space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Vision */}
            <section className="max-w-3xl mx-auto text-center space-y-6">
                <h1 className="text-4xl font-extrabold tracking-tight">Driving Web3 Adoption</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    Switch Labs is a premium growth studio dedicated to accelerating the decentralized future.
                    We combine data-driven insights with creative execution to help projects cut through the noise
                    and build lasting communities.
                </p>
            </section>

            {/* Stats */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                    { label: "Projects Accelerated", value: "250+" },
                    { label: "Community Members", value: "3M+" },
                    { label: "Capital Raised", value: "$500M+" },
                    { label: "Global Partners", value: "50+" },
                ].map((stat, i) => (
                    <div key={i} className="text-center p-6 bg-secondary/20 rounded-lg border border-border/50">
                        <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                ))}
            </section>

            {/* Core Values */}
            <section className="space-y-8">
                <h2 className="text-3xl font-bold text-center">Our Core Values</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center p-6 rounded-lg border border-border/50">
                        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                            <Target className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Results-Driven</h3>
                        <p className="text-sm text-muted-foreground">We measure success by outcomes, not activity. Every strategy is tied to measurable growth metrics.</p>
                    </div>
                    <div className="text-center p-6 rounded-lg border border-border/50">
                        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                            <Lightbulb className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Innovation First</h3>
                        <p className="text-sm text-muted-foreground">We stay ahead of trends using our Narrative Tracker to identify where the market is going, not where it has been.</p>
                    </div>
                    <div className="text-center p-6 rounded-lg border border-border/50">
                        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                            <Shield className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Trust & Transparency</h3>
                        <p className="text-sm text-muted-foreground">We operate with full transparency. No hidden fees, no misleading metrics, just honest partnership.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
