import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertCareerSchema } from "@shared/schema";
import { phoneRegex, emailRegex } from "@/lib/utils";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CloudUpload } from "lucide-react";

const formSchema = insertCareerSchema.extend({
  email: z.string().regex(emailRegex, "Invalid email address"),
  phone: z.string().regex(phoneRegex, "Invalid phone number format"),
});

export default function CareerForm() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      position: "",
      education: "",
      experience: "",
      email: "",
      phone: "",
      resumeFilename: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      const res = await apiRequest("POST", "/api/careers", values);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Career Application Submitted",
        description: "We'll contact you soon about your application.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error Submitting Application",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Position Applying For</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select position" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="cruise-staff">Cruise Staff</SelectItem>
                  <SelectItem value="security-officer">Security Officer</SelectItem>
                  <SelectItem value="hotel-staff">Hotel Staff</SelectItem>
                  <SelectItem value="merchant-navy">Merchant Navy</SelectItem>
                  <SelectItem value="it-professional">IT Professional</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="education"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Education</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Enter your educational background" 
                  {...field} 
                  className="resize-none" 
                  rows={3}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Work Experience</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Describe your relevant work experience" 
                  {...field} 
                  className="resize-none" 
                  rows={3}
                />
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
                <Input placeholder="Enter your email address" {...field} type="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Enter your phone number" {...field} type="tel" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="resumeFilename"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Upload Resume (PDF)</FormLabel>
              <div className="flex items-center justify-center w-full">
                <Label 
                  htmlFor="resume-upload" 
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <CloudUpload className="text-gray-500 h-8 w-8 mb-2" />
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">PDF (MAX. 2MB)</p>
                  </div>
                  <Input
                    id="resume-upload"
                    type="file"
                    className="hidden"
                    accept=".pdf"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        field.onChange(e.target.files[0].name);
                      }
                    }}
                  />
                </Label>
              </div>
              {field.value && (
                <p className="mt-2 text-sm text-gray-600">Selected file: {field.value}</p>
              )}
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full bg-[#1A2348] hover:bg-[#2A3460] text-white font-semibold"
          disabled={isPending}
        >
          {isPending ? "Submitting..." : "Submit Application"}
        </Button>
      </form>
    </Form>
  );
}
