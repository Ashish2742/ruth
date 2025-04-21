import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Upload } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { emailRegex, phoneRegex } from "@/lib/utils";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().regex(emailRegex, "Please enter a valid email address"),
  phone: z.string().regex(phoneRegex, "Please enter a valid phone number"),
  position: z.string().min(1, "Please select a position"),
  experience: z.string().min(1, "Please select your experience level"),
  education: z.string().min(1, "Please select your education level"),
  location: z.string().min(1, "Please specify your current location"),
  skills: z.string().optional(),
  relocation: z.boolean().default(false),
  terms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

export default function CareerForm() {
  const { toast } = useToast();
  
  // Initialize form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      education: "",
      location: "",
      skills: "",
      relocation: false,
      terms: false,
    },
  });
  
  // Form mutation
  const mutation = useMutation({
    mutationFn: (data) => {
      return apiRequest("POST", "/api/careers", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/careers"] });
      toast({
        title: "Application Submitted",
        description: "Thank you for your interest. We'll review your application and get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    },
  });
  
  // Handle form submission
  function onSubmit(values) {
    mutation.mutate(values);
  }
  
  return (
    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl">
      <h3 className="text-xl sm:text-2xl font-bold text-[var(--primary)] mb-4 sm:mb-6">Apply for a Position</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="mb-2 sm:mb-3">
                  <FormLabel className="text-sm sm:text-base">Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} className="h-9 sm:h-10" />
                  </FormControl>
                  <FormMessage className="text-xs sm:text-sm" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-2 sm:mb-3">
                  <FormLabel className="text-sm sm:text-base">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" {...field} className="h-9 sm:h-10" />
                  </FormControl>
                  <FormMessage className="text-xs sm:text-sm" />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="mb-2 sm:mb-3">
                  <FormLabel className="text-sm sm:text-base">Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+91 98765 43210" {...field} className="h-9 sm:h-10" />
                  </FormControl>
                  <FormMessage className="text-xs sm:text-sm" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="mb-2 sm:mb-3">
                  <FormLabel className="text-sm sm:text-base">Current Location</FormLabel>
                  <FormControl>
                    <Input placeholder="City, Country" {...field} className="h-9 sm:h-10" />
                  </FormControl>
                  <FormMessage className="text-xs sm:text-sm" />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem className="mb-2 sm:mb-3">
                  <FormLabel className="text-sm sm:text-base">Position of Interest</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-9 sm:h-10">
                        <SelectValue placeholder="Select position" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="cruise_staff">Cruise Staff</SelectItem>
                      <SelectItem value="security_officer">Security Officer</SelectItem>
                      <SelectItem value="hotel_staff">Hotel Staff</SelectItem>
                      <SelectItem value="it_professional">IT Professional</SelectItem>
                      <SelectItem value="merchant_navy">Merchant Navy</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-xs sm:text-sm" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem className="mb-2 sm:mb-3">
                  <FormLabel className="text-sm sm:text-base">Years of Experience</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-9 sm:h-10">
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 Years</SelectItem>
                      <SelectItem value="1-3">1-3 Years</SelectItem>
                      <SelectItem value="3-5">3-5 Years</SelectItem>
                      <SelectItem value="5-10">5-10 Years</SelectItem>
                      <SelectItem value="10+">10+ Years</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-xs sm:text-sm" />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="education"
            render={({ field }) => (
              <FormItem className="mb-2 sm:mb-3">
                <FormLabel className="text-sm sm:text-base">Education Level</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-9 sm:h-10">
                      <SelectValue placeholder="Select education level" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="high_school">High School</SelectItem>
                    <SelectItem value="diploma">Diploma</SelectItem>
                    <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                    <SelectItem value="masters">Master's Degree</SelectItem>
                    <SelectItem value="doctorate">Doctorate</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage className="text-xs sm:text-sm" />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="skills"
            render={({ field }) => (
              <FormItem className="mb-2 sm:mb-3">
                <FormLabel className="text-sm sm:text-base">Skills & Qualifications</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="List your key skills, qualifications, and certifications relevant to the position..."
                    className="resize-none h-16 sm:h-24 text-sm sm:text-base"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs sm:text-sm" />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="relocation"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-2 sm:space-x-3 space-y-0 rounded-md border p-3 sm:p-4 mb-2 sm:mb-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="h-3 w-3 sm:h-4 sm:w-4 mt-1"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-xs sm:text-sm">
                    I am willing to relocate internationally for the right opportunity
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
          
          <div className="border border-dashed border-gray-300 rounded-md p-3 sm:p-4 mb-3 sm:mb-4">
            <div className="flex flex-col items-center justify-center space-y-1 sm:space-y-2">
              <Upload className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400" />
              <p className="text-xs sm:text-sm text-gray-500">Upload Resume/CV (Optional)</p>
              <p className="text-[10px] sm:text-xs text-gray-400 text-center">Max file size: 5MB, PDF or DOCX format</p>
              <Button type="button" variant="outline" size="sm" className="mt-1 sm:mt-2 h-7 sm:h-8 text-xs">
                Select File
              </Button>
            </div>
          </div>
          
          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-2 sm:space-x-3 space-y-0 mb-2 sm:mb-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="h-3 w-3 sm:h-4 sm:w-4 mt-1"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-xs sm:text-sm">
                    I agree to the terms and conditions and consent to the processing of my personal data
                  </FormLabel>
                  <FormMessage className="text-xs" />
                </div>
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-[var(--primary)] hover:bg-[var(--gold)] h-9 sm:h-10 text-xs sm:text-sm mt-2 sm:mt-3"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              <>
                <Loader2 className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 animate-spin" />
                Submitting Application...
              </>
            ) : (
              "Submit Application"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}