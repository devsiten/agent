import Link from "next/link"

export function Footer() {
    return (
        <footer className="w-full border-t bg-background py-10 md:py-0">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-8 md:h-24">

                <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-lg font-bold text-primary">Switch Labs.</span>
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        © 2026. Built for the decentralized future.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-muted-foreground">
                    <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                    <Link href="/narratives" className="hover:text-primary transition-colors">Narratives</Link>
                    <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
                    <Link href="/kols" className="hover:text-primary transition-colors">KOLs</Link>
                    <div className="w-px h-4 bg-border hidden md:block" />
                    <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                    <Link href="/team" className="hover:text-primary transition-colors">Team</Link>
                    <Link href="/book" className="hover:text-primary transition-colors">Book Consultation</Link>
                </div>

                <div className="flex gap-4">
                    {/* Icons would go here */}
                </div>
            </div>
        </footer>
    )
}
