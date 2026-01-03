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

const formSchema = z.object({
    projectName: z.string().min(2, {
        message: "Project name must be at least 2 characters.",
    }),
    website: z.string().url({
        message: "Please enter a valid URL.",
    }),
    description: z.string().min(10, {
        message: "Description must be at least 10 characters.",
    }),
    goals: z.string(),
    budget: z.string(),
})

export default function ApplyPage() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            projectName: "",
            website: "",
            description: "",
            goals: "",
            budget: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        alert("Application Submitted! (This is a frontend demo)")
    }

    return (
        <div className="container py-16 max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Card>
                <CardHeader>
                    <CardTitle>Submit Your Project</CardTitle>
                    <CardDescription>Tell us about what you're building. We'll get back to you within 24h.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="projectName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Project Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g. Switch Protocol" {...field} />
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
                                        <FormLabel>Website / Link</FormLabel>
                                        <FormControl>
                                            <Input placeholder="https://..." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="What are you solving?" className="resize-none" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="budget"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Budget Range (USDT)</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g. $5k - $10k" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full">Submit Application</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}
