import Link from "next/link"
import { Twitter, MessageCircle, Send } from "lucide-react"

export function Footer() {
    return (
        <footer className="w-full border-t bg-background/80 backdrop-blur-sm py-12">
            <div className="container">
                <div className="grid gap-8 md:grid-cols-3">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="font-bold text-2xl tracking-tight">
                            <span className="text-primary">Switch</span>Labs.
                        </Link>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-lg">Quick Links</h4>
                        <nav className="flex flex-col gap-3 text-muted-foreground">
                            <Link href="/apply" className="hover:text-primary transition-colors text-base">Submit Project</Link>
                            <Link href="/book" className="hover:text-primary transition-colors text-base">Book Consultation</Link>
                            <Link href="/services" className="hover:text-primary transition-colors text-base">Services</Link>
                            <Link href="/about" className="hover:text-primary transition-colors text-base">About Us</Link>
                        </nav>
                    </div>

                    {/* Connect */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-lg">Connect</h4>
                        <div className="flex gap-4">
                            <a href="#" className="p-3 rounded-lg bg-secondary hover:bg-primary/20 transition-colors" aria-label="Twitter">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="p-3 rounded-lg bg-secondary hover:bg-primary/20 transition-colors" aria-label="Discord">
                                <MessageCircle className="h-5 w-5" />
                            </a>
                            <a href="#" className="p-3 rounded-lg bg-secondary hover:bg-primary/20 transition-colors" aria-label="Telegram">
                                <Send className="h-5 w-5" />
                            </a>
                        </div>
                        <p className="text-base text-muted-foreground">
                            hello@switchlabs.io
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t text-center text-base text-muted-foreground">
                    <p>© 2026 Switch Labs. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
