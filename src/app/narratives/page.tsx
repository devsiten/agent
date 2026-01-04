"use client"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { TrendingUp, MessageCircle, Activity } from "lucide-react"

export default function NarrativesPage() {
    // Empty state - no mock data, ready for real API
    const narratives: Array<{ name: string, change: string, volume: string, description: string }> = []

    return (
        <div className="container py-10 px-4 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Narrative Tracker</h1>
                <p className="text-muted-foreground">Real-time market insights and trending topics.</p>
            </div>

            {/* Stats Row */}
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Active Narratives</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-muted-foreground">--</div>
                        <p className="text-xs text-muted-foreground">Awaiting data</p>
                    </CardContent>
                </Card>
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Total Mentions</CardTitle>
                        <MessageCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-muted-foreground">--</div>
                        <p className="text-xs text-muted-foreground">Awaiting data</p>
                    </CardContent>
                </Card>
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Sentiment</CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-muted-foreground">--</div>
                        <p className="text-xs text-muted-foreground">Awaiting data</p>
                    </CardContent>
                </Card>
            </div>

            {/* Trending Narratives */}
            <div className="space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold">Trending Narratives</h2>
                {narratives.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center rounded-xl border border-dashed border-border/50 bg-card/30 backdrop-blur-sm">
                        <TrendingUp className="h-10 w-10 text-muted-foreground mb-4" />
                        <h3 className="text-lg font-semibold mb-2">No Narratives Tracked Yet</h3>
                        <p className="text-muted-foreground max-w-md text-sm sm:text-base">Trending narratives will appear here once data is connected.</p>
                    </div>
                ) : (
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                        {narratives.map((item, i) => (
                            <Card key={i} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <CardTitle>{item.name}</CardTitle>
                                        <span className="text-green-500 font-semibold">{item.change}</span>
                                    </div>
                                    <CardDescription>{item.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-sm text-muted-foreground">Volume: {item.volume}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
