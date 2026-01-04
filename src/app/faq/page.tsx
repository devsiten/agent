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

export default function FaqPage() {
    return (
        <div className="min-h-screen flex items-center justify-center py-16 px-4">
            <div className="w-full max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 md:mb-12">Frequently Asked Questions</h1>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, i) => (
                        <AccordionItem key={i} value={`item-${i}`} className="border-border/50">
                            <AccordionTrigger className="text-base sm:text-lg text-left hover:text-primary">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}
