import Link from "next/link"
import Image from "next/image"
import { MessageCircle, Send } from "lucide-react"

// X (Twitter) logo component
function XLogo({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    )
}

export function Footer() {
    return (
        <footer className="w-full border-t bg-background/80 backdrop-blur-sm">
            <div className="py-12 px-4">
                <div className="container">
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        {/* Brand */}
                        <div className="space-y-4 text-center sm:text-left">
                            <Link href="/" className="inline-flex items-center gap-2 font-bold text-2xl tracking-tight">
                                <Image
                                    src="/images/logo.jpg"
                                    alt="Switch Labs"
                                    width={32}
                                    height={32}
                                    className="rounded-full"
                                />
                                <span className="text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">Switch</span>
                                <span className="text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">Labs.</span>
                            </Link>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-4 text-center sm:text-left">
                            <h4 className="font-semibold text-lg">Quick Links</h4>
                            <nav className="flex flex-col gap-3 text-muted-foreground">
                                <Link href="/apply" className="hover:text-primary transition-colors text-base">Submit Project</Link>
                                <Link href="/book" className="hover:text-primary transition-colors text-base">Schedule a Call</Link>
                                <Link href="/services" className="hover:text-primary transition-colors text-base">Services</Link>
                                <Link href="/about" className="hover:text-primary transition-colors text-base">About Us</Link>
                                <Link href="/faq" className="hover:text-primary transition-colors text-base">FAQ</Link>
                            </nav>
                        </div>

                        {/* Contact */}
                        <div className="space-y-4 text-center sm:text-left">
                            <h4 className="font-semibold text-lg">Connect</h4>
                            <div className="flex gap-4 justify-center sm:justify-start">
                                <a
                                    href="https://x.com/TheSwitchLabs"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-xl border border-border/50 bg-card/50 hover:border-primary/30 transition-all duration-300"
                                    aria-label="X (Twitter)"
                                >
                                    <XLogo className="h-5 w-5" />
                                </a>
                                <a href="#" className="p-3 rounded-xl border border-border/50 bg-card/50 hover:border-primary/30 transition-all duration-300" aria-label="Discord">
                                    <MessageCircle className="h-5 w-5" />
                                </a>
                                <a href="#" className="p-3 rounded-xl border border-border/50 bg-card/50 hover:border-primary/30 transition-all duration-300" aria-label="Telegram">
                                    <Send className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-8 pt-8 border-t text-center text-sm sm:text-base text-muted-foreground">
                        <p>© 2026 Switch Labs. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
