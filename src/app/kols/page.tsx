import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"

export default function KolsPage() {
    // Empty state - no mock data, ready for real API
    const kols: Array<{ name: string, handle: string, niche: string, followers: string }> = []

    return (
        <div className="container py-10 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">Verified KOLs</h1>
                <p className="text-muted-foreground">Top voices shaping the Web3 narrative.</p>
            </div>

            {kols.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mb-4">
                        <Users className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">No KOLs Listed Yet</h3>
                    <p className="text-muted-foreground max-w-md">Verified influencers will appear here once data is connected.</p>
                </div>
            ) : (
                <div className="grid gap-6 md:grid-cols-4">
                    {kols.map((kol, i) => (
                        <Card key={i} className="text-center hover:border-primary/50 transition-colors">
                            <CardHeader className="flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full bg-primary/20 mb-4 flex items-center justify-center text-primary text-2xl font-bold">
                                    {kol.name.charAt(0)}
                                </div>
                                <CardTitle>{kol.name}</CardTitle>
                                <CardDescription className="text-primary">{kol.handle}</CardDescription>
                                <CardDescription className="text-xs">{kol.niche}</CardDescription>
                                <div className="flex items-center gap-1 text-sm text-muted-foreground mt-2">
                                    <Users className="h-4 w-4" /> {kol.followers}
                                </div>
                            </CardHeader>
                            <div className="p-4 pt-0">
                                <Button size="sm" className="w-full">View Profile</Button>
                            </div>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    )
}
