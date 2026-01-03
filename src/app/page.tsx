import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Brush, Cpu } from "lucide-react";

export default function Home() {
  const pillars = [
    { icon: <TrendingUp className="h-6 w-6" />, title: "Strategic Marketing", desc: "Tokenomics, positioning, growth plans" },
    { icon: <Users className="h-6 w-6" />, title: "Community Building", desc: "Moderation, influencers, ambassadors" },
    { icon: <Brush className="h-6 w-6" />, title: "Brand Development", desc: "Video, UI/UX, visual identity" },
    { icon: <Cpu className="h-6 w-6" />, title: "Technical Support", desc: "dApps, smart contracts, audits" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center space-y-10 py-24 text-center md:py-32 lg:py-40 overflow-hidden relative">
        <div className="container flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-6 duration-1000">
          {/* Animated Glass Title */}
          <h1 className="text-5xl font-black tracking-tight lg:text-7xl">
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

          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 animate-in fade-in duration-1000 delay-300">
            We help blockchain projects scale with precision marketing, thriving communities, and world-class branding.
          </p>

          <div className="flex gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <Link href="/apply">
              <Button size="lg" className="h-12 px-8 text-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow">
                Work With Us
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="h-12 px-8 text-lg font-semibold backdrop-blur-sm">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 md:py-24 bg-secondary/30 backdrop-blur-sm">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 hover:bg-background/80 transition-all duration-300">
                <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                  {pillar.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Grow?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Whether you are launching a new token or scaling an established protocol, Switch Labs delivers results.
          </p>
          <Link href="/apply">
            <Button size="lg" className="h-12 px-10 text-lg font-semibold shadow-lg shadow-primary/25">
              Submit Your Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
