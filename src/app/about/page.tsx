import { Target, Lightbulb, Shield } from "lucide-react"

export default function AboutPage() {
    return (
        <div className="container py-16 px-4 space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Vision */}
            <section className="max-w-3xl mx-auto text-center space-y-6">
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Driving Web3 Adoption</h1>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                    Switch Labs is a premium growth studio dedicated to accelerating the decentralized future.
                    We combine data-driven insights with creative execution to help projects cut through the noise
                    and build lasting communities.
                </p>
            </section>

            {/* Stats - Empty for now */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
                {[
                    { label: "Projects Accelerated", value: "--" },
                    { label: "Community Members", value: "--" },
                    { label: "Capital Raised", value: "--" },
                    { label: "Global Partners", value: "--" },
                ].map((stat, i) => (
                    <div key={i} className="text-center p-4 sm:p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                        <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">{stat.value}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                ))}
            </section>

            {/* Core Values */}
            <section className="space-y-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-center">Our Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    <div className="text-center p-6 sm:p-8 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                            <Target className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Results-Driven</h3>
                        <p className="text-sm text-muted-foreground">We measure success by outcomes, not activity. Every strategy is tied to measurable growth metrics.</p>
                    </div>
                    <div className="text-center p-6 sm:p-8 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                            <Lightbulb className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Innovation First</h3>
                        <p className="text-sm text-muted-foreground">We stay ahead of trends using our Narrative Tracker to identify where the market is going, not where it has been.</p>
                    </div>
                    <div className="text-center p-6 sm:p-8 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
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
