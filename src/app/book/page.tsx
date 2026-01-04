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

const bookingSchema = z.object({
    name: z.string().min(2, { message: "Name is required." }),
    email: z.string().email({ message: "Please enter a valid email." }),
    company: z.string().optional(),
    topic: z.string().min(5, { message: "Please describe what you want to discuss." }),
})

export default function BookPage() {
    const form = useForm<z.infer<typeof bookingSchema>>({
        resolver: zodResolver(bookingSchema),
        defaultValues: {
            name: "",
            email: "",
            company: "",
            topic: "",
        },
    })

    function onSubmit(values: z.infer<typeof bookingSchema>) {
        console.log(values)
        alert("Consultation Requested! We will reach out to schedule a call.")
    }

    return (
        <div className="min-h-screen flex items-center justify-center py-16 px-4">
            <Card className="w-full max-w-xl">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl">Book a Consultation</CardTitle>
                    <CardDescription className="text-lg">Get expert advice on marketing, growth, or technical strategy.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base">Your Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="John Doe" className="h-12 text-base" {...field} />
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
                                        <FormLabel className="text-base">Email Address</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="john@project.com" className="h-12 text-base" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="company"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base">Company / Project Name (Optional)</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your company or project" className="h-12 text-base" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="topic"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base">What would you like to discuss?</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Tell us about your goals, challenges, or questions..."
                                                className="min-h-[120px] text-base resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" size="lg" className="w-full h-14 text-lg font-semibold">
                                Request Consultation
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}
