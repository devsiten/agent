"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

const bookingSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    topic: z.string().min(5),
})

export default function BookPage() {
    const form = useForm<z.infer<typeof bookingSchema>>({
        resolver: zodResolver(bookingSchema),
        defaultValues: {
            name: "",
            email: "",
            topic: "",
        },
    })

    function onSubmit(values: z.infer<typeof bookingSchema>) {
        console.log(values)
        alert("Consultation Requested! (Frontend Demo)")
    }

    return (
        <div className="container py-16 max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Card>
                <CardHeader>
                    <CardTitle>Book a Consultation</CardTitle>
                    <CardDescription>Get expert advice on positioning, promotion, or product strategy.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Your Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="John Doe" {...field} />
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
                                        <FormLabel>Email Address</FormLabel>
                                        <FormControl>
                                            <Input placeholder="john@project.com" {...field} />
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
                                        <FormLabel>What do you want to discuss?</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Launching a new token..." className="resize-none" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" size="lg" className="w-full">Request Booking</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}
