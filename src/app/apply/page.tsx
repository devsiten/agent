"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useState } from "react"

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

const categories = [
    "DeFi",
    "Gaming",
    "NFT",
    "Infrastructure",
    "AI",
    "DAO",
    "Social",
    "Other",
]

const formSchema = z.object({
    projectName: z.string().min(2, {
        message: "Project name must be at least 2 characters.",
    }),
    founderName: z.string().min(2, {
        message: "Founder name is required.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    category: z.string().min(1, {
        message: "Please select a category.",
    }),
    otherCategory: z.string().optional(),
    website: z.string().url({
        message: "Please enter a valid URL.",
    }).optional().or(z.literal("")),
    description: z.string().min(10, {
        message: "Description must be at least 10 characters.",
    }),
    budget: z.string(),
})

export default function ApplyPage() {
    const [showOther, setShowOther] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            projectName: "",
            founderName: "",
            email: "",
            category: "",
            otherCategory: "",
            website: "",
            description: "",
            budget: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        alert("Application Submitted! We will contact you within 24 hours.")
    }

    return (
        <div className="min-h-screen flex items-center justify-center py-16 px-4">
            <Card className="w-full max-w-2xl">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl">Submit Your Project</CardTitle>
                    <CardDescription className="text-lg">Tell us about what you are building. We will get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name="projectName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base">Project Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="e.g. Switch Protocol" className="h-12 text-base" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="founderName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base">Founder Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Your name" className="h-12 text-base" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base">Email Address</FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="you@project.com" className="h-12 text-base" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="website"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base">Website / Link (Optional)</FormLabel>
                                            <FormControl>
                                                <Input placeholder="https://..." className="h-12 text-base" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name="category"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base">Project Category</FormLabel>
                                            <Select
                                                onValueChange={(value) => {
                                                    field.onChange(value)
                                                    setShowOther(value === "Other")
                                                }}
                                                defaultValue={field.value}
                                            >
                                                <FormControl>
                                                    <SelectTrigger className="h-12 text-base">
                                                        <SelectValue placeholder="Select a category" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {categories.map((cat) => (
                                                        <SelectItem key={cat} value={cat} className="text-base">
                                                            {cat}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                {showOther && (
                                    <FormField
                                        control={form.control}
                                        name="otherCategory"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-base">Specify Category</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter your category" className="h-12 text-base" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                )}
                                {!showOther && (
                                    <FormField
                                        control={form.control}
                                        name="budget"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-base">Budget Range (USD)</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="e.g. $5k - $10k" className="h-12 text-base" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                )}
                            </div>

                            {showOther && (
                                <FormField
                                    control={form.control}
                                    name="budget"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base">Budget Range (USD)</FormLabel>
                                            <FormControl>
                                                <Input placeholder="e.g. $5k - $10k" className="h-12 text-base" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            )}

                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base">Tell us about your project</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="What problem are you solving? What stage is your project at? What do you need help with?"
                                                className="min-h-[150px] text-base resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" size="lg" className="w-full h-14 text-lg font-semibold">
                                Submit Application
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}
