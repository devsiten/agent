import Link from "next/link"
import { Twitter, MessageCircle, Send } from "lucide-react"

export function Footer() {
    return (
        <footer className="w-full border-t bg-background/80 backdrop-blur-sm">
            <div className="py-12 px-4">
                <div className="container">
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        {/* Brand */}
                        <div className="space-y-4 text-center sm:text-left">
                            <Link href="/" className="font-bold text-2xl tracking-tight inline-block">
                                <span className="text-primary">Switch</span>Labs.
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
                            <h4 className="font-semibold text-lg">Contact</h4>
                            <div className="flex gap-4 justify-center sm:justify-start">
                                <a href="#" className="p-3 rounded-xl border border-border/50 bg-card/50 hover:border-primary/30 transition-all duration-300" aria-label="Twitter">
                                    <Twitter className="h-5 w-5" />
                                </a>
                                <a href="#" className="p-3 rounded-xl border border-border/50 bg-card/50 hover:border-primary/30 transition-all duration-300" aria-label="Discord">
                                    <MessageCircle className="h-5 w-5" />
                                </a>
                                <a href="#" className="p-3 rounded-xl border border-border/50 bg-card/50 hover:border-primary/30 transition-all duration-300" aria-label="Telegram">
                                    <Send className="h-5 w-5" />
                                </a>
                            </div>
                            <p className="text-base text-muted-foreground">
                                hello@switchlabs.io
                            </p>
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
