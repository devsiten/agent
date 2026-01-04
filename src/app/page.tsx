import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChevronRight, Newspaper } from "lucide-react";
import { MetasOrbit } from "@/components/metas-orbit";

const services = [
  {
    title: "Strategic Marketing",
    image: "/images/strategic-marketing.png",
    description: "We craft data-driven go-to-market strategies that position your project for success. From tokenomics advisory to market positioning and growth roadmaps.",
  },
  {
    title: "Community Building",
    image: "/images/community-building.png",
    description: "We cultivate engaged, loyal communities that become your most powerful growth engine. Our team handles moderation, events, and partnerships 24/7.",
  },
  {
    title: "Brand Development",
    image: "/images/brand-development.png",
    description: "We create memorable visual identities and high-impact content that sets you apart. From video to UI/UX, we make your brand unforgettable.",
  },
  {
    title: "Technical Support",
    image: "/images/technical-support.png",
    description: "We provide end-to-end technical guidance from smart contracts to full-stack decentralized applications. Build with confidence.",
  },
];

export default function Home() {
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
              <Button size="lg" className="h-14 px-10 text-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow w-full sm:w-auto bg-white text-primary hover:bg-gray-100">
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

      {/* Web3 Metas Orbit Section */}
      <section className="py-20 md:py-28 px-4">
        <div className="container">
          <h2 className="text-center mb-8">The Narratives We Track</h2>
          <MetasOrbit />
        </div>
      </section>

      {/* What We Do Section - Same as Services */}
      <section className="py-20 md:py-28 bg-secondary/30 backdrop-blur-sm px-4">
        <div className="container">
          <h2 className="text-center mb-12 md:mb-16">What We Do</h2>
          <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <Link href="/services" key={i}>
                <div className="group h-full rounded-2xl border border-border/50 bg-card/50 dark:bg-card/30 backdrop-blur-sm hover:border-primary/40 hover:bg-card/80 dark:hover:bg-card/50 transition-all duration-300 overflow-hidden">
                  {/* Image */}
                  <div className="relative w-full h-32 sm:h-40 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 -mt-6 relative z-10">
                    <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News/Updates Section */}
      <section className="py-20 md:py-28 px-4">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
            <h2>Latest Updates</h2>
            <Link href="#" className="text-primary hover:underline flex items-center gap-1">
              View All <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          {news.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 sm:py-16 text-center border border-dashed rounded-xl px-4 border-border/50 bg-card/30 backdrop-blur-sm">
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
