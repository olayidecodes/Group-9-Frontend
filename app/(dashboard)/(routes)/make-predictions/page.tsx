"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import Heading from '@/components/Heading'
import { ArrowRight, Code, Image, MessageSquare, Music, Video, ArrowUpFromLine, Brain, LineChart } from "lucide-react"

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

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const PredictionPage = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  })


  return (
    <div className="px-4 lg:px-8">
        <Heading 
        title='Make Predictions'
        description='Our most advanced knowledge based system model.'
        icon={Brain}
        iconColor='text-violet-500'
        bgColor='bg-violet-500/10'
      />
    
      <div className="flex w-full">
        
        <div className="flex-1">
        <Form {...form}>
            <h1 className="text-2xl font-bold py-4">Single Entity</h1>
          <form className="w-2/3 space-y-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fullname</FormLabel>
                  <FormControl>
                    <Input placeholder="Matthews Victoria" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input placeholder="31" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State of Origin</FormLabel>
                  <FormControl>
                    <Input placeholder="Ondo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Department</FormLabel>
                  <FormControl>
                    <Input placeholder="Computer Science" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hall of Residence</FormLabel>
                  <FormControl>
                    <Input placeholder="Idia" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="Ibadan" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>

        </div>
        
        <div className="flex-1">
        <Form {...form}>
            <h1 className="text-2xl font-bold py-4">Medical Record</h1>
            <FormLabel>Upload Record</FormLabel>
            <Input
            id="picture"
            type="file"
            className="file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          <FormDescription className="py-2">
            In formats - .csv, .pdf
          </FormDescription>

        </Form>
        </div>
      
      </div>
    </div>
  )
}

export default PredictionPage
