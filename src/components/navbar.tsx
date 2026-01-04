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
    { href: "/book", label: "Book Consultation" },
]

export function Navbar() {
    const { theme, setTheme } = useTheme()

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl">
            <div className="container flex h-16 items-center justify-between">
                {/* Animated Logo */}
                <Link href="/" className="flex items-center space-x-1 font-extrabold text-2xl tracking-tighter group">
                    <span className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                        Switch
                    </span>
                    <span className="text-foreground/90">Labs.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
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
                        <Button variant="default">Get Started</Button>
                    </Link>

                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild className="lg:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[280px]">
                            <nav className="flex flex-col gap-4 mt-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-lg font-medium transition-colors hover:text-primary"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <Link href="/apply" className="mt-4">
                                    <Button className="w-full">Get Started</Button>
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
