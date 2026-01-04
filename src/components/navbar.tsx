"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/30 bg-transparent backdrop-blur-xl">
            <div className="container flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 font-black text-lg sm:text-xl tracking-tight flex-shrink-0">
                    <Image
                        src="/images/logo.jpg"
                        alt="Switch Labs"
                        width={32}
                        height={32}
                        className="rounded-full"
                    />
                    <span className="text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">SWITCH</span>
                    <span className="text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">LABS</span>
                </Link>

                {/* Desktop Nav - Only show on xl screens and up */}
                <nav className="hidden xl:flex items-center gap-4 text-sm font-medium">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="transition-colors hover:text-primary whitespace-nowrap"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
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
                    <Link href="/apply" className="hidden lg:block">
                        <Button size="sm" className="text-sm bg-white text-black hover:bg-gray-100 border-0">Get in Touch</Button>
                    </Link>

                    {/* Mobile Menu - Show on screens below xl */}
                    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                        <SheetTrigger asChild className="xl:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[260px] p-0">
                            <div className="flex flex-col h-full pt-12 pb-6 px-6">
                                {/* Logo in menu */}
                                <Link
                                    href="/"
                                    className="flex items-center font-black text-xl tracking-tight mb-8"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="text-primary">SWITCH</span>
                                    <span className="text-foreground">LABS</span>
                                </Link>

                                {/* Nav Links */}
                                <nav className="flex flex-col space-y-1">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="py-3 px-4 text-base font-medium rounded-lg transition-colors hover:bg-secondary hover:text-primary"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </nav>

                                {/* CTA in mobile menu */}
                                <div className="mt-auto pt-6">
                                    <Link href="/apply" onClick={() => setMobileMenuOpen(false)}>
                                        <Button className="w-full">Get in Touch</Button>
                                    </Link>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
