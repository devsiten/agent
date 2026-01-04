import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TrendingUp, Users, Brush, Cpu, ChevronRight, Newspaper } from "lucide-react";

export default function Home() {
  const pillars = [
    { icon: <TrendingUp className="h-7 w-7" />, title: "Strategic Marketing", desc: "Tokenomics, positioning, and go-to-market strategy" },
    { icon: <Users className="h-7 w-7" />, title: "Community Building", desc: "Moderation, influencer partnerships, ambassadors" },
    { icon: <Brush className="h-7 w-7" />, title: "Brand Development", desc: "Video production, UI/UX, visual identity" },
    { icon: <Cpu className="h-7 w-7" />, title: "Technical Support", desc: "dApp development, smart contracts, audits" },
  ];

  // Empty state for news - ready for real data
  const news: Array<{ title: string, date: string, excerpt: string }> = [];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center space-y-10 py-28 text-center md:py-36 lg:py-44 overflow-hidden relative px-4">
        <div className="container flex flex-col items-center gap-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="inline-block animate-in fade-in slide-in-from-left-4 duration-700">
              Your
            </span>{" "}
            <span className="inline-block bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%] drop-shadow-lg">
              Web3 Growth
            </span>{" "}
            <span className="inline-block animate-in fade-in slide-in-from-right-4 duration-700 delay-200">
              Partner
            </span>
          </h1>

          <p className="max-w-[48rem] text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl animate-in fade-in duration-1000 delay-300 px-4">
            We help blockchain projects scale with precision marketing, thriving communities, and world-class branding.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <Link href="/apply">
              <Button size="lg" className="h-14 px-10 text-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow w-full sm:w-auto">
                Work With Us
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="h-14 px-10 text-lg font-semibold backdrop-blur-sm w-full sm:w-auto">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 md:py-28 bg-secondary/30 backdrop-blur-sm px-4">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16">What We Do</h2>
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 sm:p-8 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 hover:bg-background/80 transition-all duration-300">
                <div className="p-4 rounded-full bg-primary/10 text-primary mb-4 sm:mb-6">
                  {pillar.icon}
                </div>
                <h3 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News/Updates Section */}
      <section className="py-20 md:py-28 px-4">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Latest Updates</h2>
            <Link href="#" className="text-primary hover:underline flex items-center gap-1">
              View All <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          {news.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 sm:py-16 text-center border border-dashed rounded-xl px-4">
              <Newspaper className="h-10 w-10 sm:h-12 sm:w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">No Updates Yet</h3>
              <p className="text-muted-foreground max-w-md text-sm sm:text-base">News and announcements will appear here. Stay tuned for updates.</p>
            </div>
          ) : (
            <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
              {news.map((item, i) => (
                <Card key={i} className="hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <CardDescription>{item.date}</CardDescription>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.excerpt}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
