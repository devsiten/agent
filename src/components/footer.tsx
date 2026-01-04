"use client"

import Link from "next/link"
import { useState } from "react"
import { Twitter, MessageCircle, Send, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "What types of projects do you work with?",
        answer: "We work with Web3 projects across all verticals including DeFi, Gaming, NFTs, Infrastructure, DAOs, and AI. Whether you are pre-launch or scaling, we tailor our approach to your stage."
    },
    {
        question: "How long does a typical engagement last?",
        answer: "Engagement lengths vary based on your needs. Launch campaigns typically run 2-3 months, while ongoing growth partnerships can extend 6-12 months or longer."
    },
    {
        question: "What is your pricing model?",
        answer: "We offer flexible pricing including project-based fees, monthly retainers, and performance-based models. Contact us for a custom quote based on your goals."
    },
    {
        question: "How do I get started?",
        answer: "Simply submit your project through our application form. Our team reviews all submissions within 24 hours and will reach out to schedule an introductory call."
    },
];

export function Footer() {
    const [showFaq, setShowFaq] = useState(false)

    return (
        <footer className="w-full border-t bg-background/80 backdrop-blur-sm">
            {/* Footer Content */}
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
                                <Link href="/book" className="hover:text-primary transition-colors text-base">Book Consultation</Link>
                                <Link href="/services" className="hover:text-primary transition-colors text-base">Services</Link>
                                <Link href="/about" className="hover:text-primary transition-colors text-base">About Us</Link>
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

                    {/* FAQ Toggle Button */}
                    <div className="mt-12 pt-8 border-t">
                        <div className="flex justify-center">
                            <Button
                                variant="outline"
                                onClick={() => setShowFaq(!showFaq)}
                                className="flex items-center gap-2"
                            >
                                Frequently Asked Questions
                                {showFaq ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                            </Button>
                        </div>

                        {/* FAQ Content - Only shown when clicked */}
                        {showFaq && (
                            <div className="mt-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-top-4 duration-300">
                                <Accordion type="single" collapsible className="w-full">
                                    {faqs.map((faq, i) => (
                                        <AccordionItem key={i} value={`item-${i}`}>
                                            <AccordionTrigger className="text-base sm:text-lg text-left">{faq.question}</AccordionTrigger>
                                            <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        )}
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
