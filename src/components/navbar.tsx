"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu } from "lucide-react"
import { useTheme } from "next-themes"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/narratives", label: "Narratives" },
    { href: "/projects", label: "Projects" },
    { href: "/kols", label: "KOLs" },
    { href: "/about", label: "About" },
    { href: "/team", label: "Team" },
    { href: "/book", label: "Schedule a Call" },
]

export function Navbar() {
    const { theme, setTheme } = useTheme()

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl">
            <div className="container flex h-16 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center font-black text-xl sm:text-2xl tracking-tight">
                    <span className="text-primary">SWITCH</span>
                    <span className="text-foreground">LABS</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-6 text-base font-medium">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="transition-colors hover:text-primary"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    {/* Theme Toggle */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        aria-label="Toggle theme"
                    >
                        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </Button>

                    {/* CTA Button - Desktop */}
                    <Link href="/apply" className="hidden md:block">
                        <Button size="lg" className="text-base bg-white text-black hover:bg-gray-100 border-0">Get in Touch</Button>
                    </Link>

                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild className="lg:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[260px] p-0">
                            <div className="flex flex-col h-full pt-12 pb-6 px-6">
                                {/* Logo in menu */}
                                <Link href="/" className="flex items-center font-black text-xl tracking-tight mb-8">
                                    <span className="text-primary">SWITCH</span>
                                    <span className="text-foreground">LABS</span>
                                </Link>

                                {/* Nav Links */}
                                <nav className="flex flex-col space-y-1">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className="py-3 px-4 text-base font-medium rounded-lg transition-colors hover:bg-secondary hover:text-primary"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
