import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Users } from "lucide-react"

export default function ProjectsPage() {
    // Empty state - no mock data, ready for real API
    const projects: Array<{ name: string, category: string, description: string, stars: string, followers: string }> = []

    return (
        <div className="container py-10 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">Project Directory</h1>
                <p className="text-muted-foreground">Curated Web3 projects aligned with current market narratives.</p>
            </div>

            {projects.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mb-4">
                        <Star className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">No Projects Yet</h3>
                    <p className="text-muted-foreground max-w-md">Projects will appear here once data is connected. Check back soon for curated Web3 projects.</p>
                </div>
            ) : (
                <div className="grid gap-6 md:grid-cols-3">
                    {projects.map((project, i) => (
                        <Card key={i} className="hover:border-primary/50 transition-colors">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                        {project.name.charAt(0)}
                                    </div>
                                    <Badge variant="secondary">{project.category}</Badge>
                                </div>
                                <CardTitle className="mt-4">{project.name}</CardTitle>
                                <CardDescription>{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex gap-4 text-sm text-muted-foreground">
                                    <span className="flex items-center gap-1"><Star className="h-4 w-4" /> {project.stars}</span>
                                    <span className="flex items-center gap-1"><Users className="h-4 w-4" /> {project.followers}</span>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" className="w-full">View Details</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    )
}
