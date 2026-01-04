import Image from "next/image"
import Link from "next/link"
import { Twitter } from "lucide-react"

const team = [
    {
        name: "NiphermeDave",
        role: "Founder & CEO",
        image: "/images/founder.jpg",
        x: "https://x.com/NiphermeDave"
    },
    {
        name: "LIMITLESSDAMI",
        role: "Partner & COO",
        image: "/images/partner.jpg",
        x: "https://x.com/LIMITLESSDAMI"
    },
]

export default function TeamPage() {
    return (
        <div className="container py-12 sm:py-16 md:py-20 px-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center space-y-4 mb-12 md:mb-16">
                <h1>The Team</h1>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    The people behind Switch Labs driving Web3 growth.
                </p>
            </div>

            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto">
                {team.map((member, i) => (
                    <div
                        key={i}
                        className="group text-center p-6 sm:p-8 rounded-2xl border border-border/50 bg-card/50 dark:bg-card/30 backdrop-blur-sm hover:border-primary/40 transition-all duration-300"
                    >
                        {/* Profile Image */}
                        <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-border/50 group-hover:border-primary/50 transition-colors">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Name & Role */}
                        <h3 className="text-lg sm:text-xl font-bold mb-1">{member.name}</h3>
                        <p className="text-primary font-medium mb-4">{member.role}</p>

                        {/* X Link */}
                        <Link
                            href={member.x}
                            target="_blank"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-background/60 dark:bg-background/40 hover:border-primary/50 hover:text-primary transition-all duration-300 text-sm"
                        >
                            <Twitter className="h-4 w-4" />
                            <span>@{member.x.split('/').pop()}</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
