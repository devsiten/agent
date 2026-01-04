"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

const projectFields = [
    "DeFi",
    "AI",
    "RWA / Tokenization",
    "Infrastructure / L1 / L2",
    "Gaming",
    "NFTs / Collectibles",
    "DePIN",
    "SocialFi",
    "DAO / Governance",
    "Security / Audits",
    "Other",
]

const marketingServices = [
    { id: "gtm", label: "Go-To-Market Strategy" },
    { id: "social", label: "Social Media Strategy & Growth" },
    { id: "pr", label: "Public Relations & Media" },
    { id: "community", label: "Community Management" },
    { id: "influencer", label: "Influencer / KOL Marketing" },
    { id: "ecosystem", label: "Ecosystem Growth & Partnerships" },
    { id: "content", label: "Content Creation" },
    { id: "other", label: "Other" },
]

const budgetRanges = [
    "$5,000 - $15,000",
    "$15,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
]

const bookingSchema = z.object({
    name: z.string().min(2, { message: "Name is required." }),
    email: z.string().email({ message: "Please enter a valid email." }),
    company: z.string().min(1, { message: "Company/project name is required." }),
    telegram: z.string().min(1, { message: "Telegram handle is required." }),
    website: z.string().optional(),
    projectField: z.string().min(1, { message: "Please select your project field." }),
    services: z.array(z.string()).min(1, { message: "Please select at least one service." }),
    budget: z.string().min(1, { message: "Please select your budget range." }),
    additionalInfo: z.string().optional(),
})

export default function BookPage() {
    const form = useForm<z.infer<typeof bookingSchema>>({
        resolver: zodResolver(bookingSchema),
        defaultValues: {
            name: "",
            email: "",
            company: "",
            telegram: "",
            website: "",
            projectField: "",
            services: [],
            budget: "",
            additionalInfo: "",
        },
    })

    function onSubmit(values: z.infer<typeof bookingSchema>) {
        console.log(values)
        alert("Consultation request submitted! We will reach out within 24 hours.")
    }

    return (
        <div className="min-h-screen flex items-center justify-center py-16 px-4">
            <Card className="w-full max-w-3xl">
                <CardHeader className="text-center space-y-4 pb-8">
                    <div className="font-bold text-2xl">
                        <span className="text-primary">Switch</span>Labs.
                    </div>
                    <CardTitle className="text-3xl">Schedule a Call</CardTitle>
                    <CardDescription className="text-lg max-w-xl mx-auto">
                        We are excited to hear about your project, understand your marketing needs, and discuss how we can help you grow.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            {/* Contact Details */}
                            <div className="grid gap-6 md:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base">Name *</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Your name" className="h-12 text-base" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base">Email *</FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="you@project.com" className="h-12 text-base" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name="company"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base">Company / Project Name *</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Your project" className="h-12 text-base" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="telegram"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base">Telegram Handle *</FormLabel>
                                            <FormControl>
                                                <Input placeholder="@yourtelegram" className="h-12 text-base" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="website"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base">Website (Optional)</FormLabel>
                                        <FormControl>
                                            <Input placeholder="https://..." className="h-12 text-base" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Project Field */}
                            <FormField
                                control={form.control}
                                name="projectField"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base">Which field is your project in? *</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="h-12 text-base">
                                                    <SelectValue placeholder="Select your project field" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {projectFields.map((pf) => (
                                                    <SelectItem key={pf} value={pf} className="text-base">
                                                        {pf}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Marketing Services */}
                            <FormField
                                control={form.control}
                                name="services"
                                render={() => (
                                    <FormItem>
                                        <FormLabel className="text-base">Which marketing services are you looking for? *</FormLabel>
                                        <div className="grid gap-3 md:grid-cols-2 mt-3">
                                            {marketingServices.map((service) => (
                                                <FormField
                                                    key={service.id}
                                                    control={form.control}
                                                    name="services"
                                                    render={({ field }) => (
                                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                                            <FormControl>
                                                                <Checkbox
                                                                    checked={field.value?.includes(service.id)}
                                                                    onCheckedChange={(checked) => {
                                                                        return checked
                                                                            ? field.onChange([...field.value, service.id])
                                                                            : field.onChange(field.value?.filter((value) => value !== service.id))
                                                                    }}
                                                                />
                                                            </FormControl>
                                                            <FormLabel className="text-base font-normal cursor-pointer">
                                                                {service.label}
                                                            </FormLabel>
                                                        </FormItem>
                                                    )}
                                                />
                                            ))}
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Budget */}
                            <FormField
                                control={form.control}
                                name="budget"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base">What is your monthly marketing budget? *</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="h-12 text-base">
                                                    <SelectValue placeholder="Select budget range" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {budgetRanges.map((br) => (
                                                    <SelectItem key={br} value={br} className="text-base">
                                                        {br}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Additional Info */}
                            <FormField
                                control={form.control}
                                name="additionalInfo"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base">Additional Information (Optional)</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Share any additional details that will help us prepare for our meeting..."
                                                className="min-h-[120px] text-base resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" size="lg" className="w-full h-14 text-lg font-semibold">
                                Submit Request
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}
