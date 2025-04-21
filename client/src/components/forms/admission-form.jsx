import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { emailRegex, phoneRegex } from "@/lib/utils";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().regex(emailRegex, "Please enter a valid email address"),
  phone: z.string().regex(phoneRegex, "Please enter a valid phone number"),
  education: z.string().min(1, "Please select your education level"),
  position: z.string().min(1, "Please select a position"),
  experience: z.string().optional(),
  message: z.string().optional(),
});

export default function AdmissionForm() {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  
  // Initialize form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      education: "",
      position: "",
      experience: "",
      message: "",
    },
  });
  
  // Form mutation
  const mutation = useMutation({
    mutationFn: (data) => {
      return apiRequest("POST", "/api/admissions", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admissions"] });
      toast({
        title: "Application Submitted",
        description: "We'll review your application and get back to you soon.",
      });
      form.reset();
      setStep(1);
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
    if (step === 1) {
      setStep(2);
    } else {
      mutation.mutate(values);
    }
  }
  
  // Go back to step 1
  function goBack() {
    setStep(1);
  }
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {step === 1 ? (
          <>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="mb-3 sm:mb-4">
                  <FormLabel className="text-sm sm:text-base">Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} className="h-9 sm:h-10" />
                  </FormControl>
                  <FormMessage className="text-xs sm:text-sm" />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mb-3 sm:mb-4">
                    <FormLabel className="text-sm sm:text-base">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" {...field} className="h-9 sm:h-10" />
                    </FormControl>
                    <FormMessage className="text-xs sm:text-sm" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="mb-3 sm:mb-4">
                    <FormLabel className="text-sm sm:text-base">Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+91 98765 43210" {...field} className="h-9 sm:h-10" />
                    </FormControl>
                    <FormMessage className="text-xs sm:text-sm" />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem className="mb-3 sm:mb-4">
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
            
            <Button 
              type="submit" 
              className="w-full bg-[var(--primary)] hover:bg-[var(--gold)] h-9 sm:h-10 mt-2 text-sm sm:text-base"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Continue"
              )}
            </Button>
          </>
        ) : (
          <>
            <FormField
              control={form.control}
              name="education"
              render={({ field }) => (
                <FormItem className="mb-3 sm:mb-4">
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
              name="experience"
              render={({ field }) => (
                <FormItem className="mb-3 sm:mb-4">
                  <FormLabel className="text-sm sm:text-base">Years of Experience</FormLabel>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormControl>
                      <div className="grid grid-cols-2 gap-1 sm:gap-2">
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <RadioGroupItem value="0-1" id="exp-0-1" className="h-3 w-3 sm:h-4 sm:w-4" />
                          <FormLabel htmlFor="exp-0-1" className="font-normal text-xs sm:text-sm">
                            0-1 Years
                          </FormLabel>
                        </div>
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <RadioGroupItem value="1-3" id="exp-1-3" className="h-3 w-3 sm:h-4 sm:w-4" />
                          <FormLabel htmlFor="exp-1-3" className="font-normal text-xs sm:text-sm">
                            1-3 Years
                          </FormLabel>
                        </div>
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <RadioGroupItem value="3-5" id="exp-3-5" className="h-3 w-3 sm:h-4 sm:w-4" />
                          <FormLabel htmlFor="exp-3-5" className="font-normal text-xs sm:text-sm">
                            3-5 Years
                          </FormLabel>
                        </div>
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <RadioGroupItem value="5+" id="exp-5-plus" className="h-3 w-3 sm:h-4 sm:w-4" />
                          <FormLabel htmlFor="exp-5-plus" className="font-normal text-xs sm:text-sm">
                            5+ Years
                          </FormLabel>
                        </div>
                      </div>
                    </FormControl>
                  </RadioGroup>
                  <FormMessage className="text-xs sm:text-sm" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="mb-3 sm:mb-4">
                  <FormLabel className="text-sm sm:text-base">Additional Information</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your career goals and any relevant qualifications..."
                      className="resize-none min-h-[80px] sm:min-h-[100px] text-sm sm:text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs sm:text-sm" />
                </FormItem>
              )}
            />
            
            <div className="flex space-x-2 sm:space-x-3 mt-4">
              <Button 
                type="button" 
                onClick={goBack} 
                variant="outline"
                className="flex-1 h-9 sm:h-10 text-xs sm:text-sm"
              >
                Back
              </Button>
              <Button 
                type="submit" 
                className="flex-1 bg-[var(--gold)] text-[var(--primary)] hover:bg-[var(--gold)]/90 h-9 sm:h-10 text-xs sm:text-sm"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </Button>
            </div>
          </>
        )}
      </form>
    </Form>
  );
}