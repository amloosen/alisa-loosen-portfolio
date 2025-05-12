import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast"; // Ensure this path and hook are correct
import { useForm } from "react-hook-form";
import { Send, CheckCircle } from "lucide-react";
import emailjs from '@emailjs/browser';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from "@/components/ui/form"; // Ensure these shadcn/ui components are correctly set up

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// --- Recommended: Use Environment Variables ---
// Create a .env.local file in your project root:
// NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
// NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
// NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id

const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "iIV5WhE4cXMN0iYL2"; // Fallback to your test key
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_o9lvamy"; // Fallback to your test service ID
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_r2bnexn"; // Fallback to your test template ID

// Optional: Initialize EmailJS once when the app loads if you prefer
// if (typeof window !== "undefined" && EMAILJS_PUBLIC_KEY) { // Ensure it runs only on the client-side for Next.js
//   emailjs.init(EMAILJS_PUBLIC_KEY);
// }

const ContactForm = ({ variants }: { variants: any }) => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    // Consider using a resolver for schema validation (e.g., with Zod)
    // import { zodResolver } from "@hookform/resolvers/zod";
    // import * as z from "zod";
    // const formSchema = z.object({ ... });
    // resolver: zodResolver(formSchema),
  });

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);

    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
        console.error("EmailJS environment variables are not set.");
        toast({
            title: "Configuration Error",
            description: "Email sending is not configured correctly. Please contact support.",
            variant: "destructive",
        });
        setIsSubmitting(false);
        return;
    }

    try {
      // Initialize EmailJS here or once globally.
      // If initializing globally, you can remove this line.
      emailjs.init(EMAILJS_PUBLIC_KEY);

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email, // This can be used for 'reply_to' in your EmailJS template
        subject: formData.subject,
        message: formData.message,
        // **IMPORTANT**: The actual recipient email address (alisa.loosen@yale.edu)
        // is typically configured in your EmailJS template settings on the EmailJS website,
        // under the "To Email" field for the template `template_r2bnexn`.
        // It's NOT usually passed directly here unless your template is specifically designed
        // to accept a 'to_email' parameter (e.g., {{to_email}} in the template's "To Email" field).
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log("EmailJS send result:", result); // { status: 200, text: "OK" } for success

      if (result.status === 200) {
        toast({
          title: "Message Sent",
          description: "Thank you for your message. I'll respond as soon as possible.",
        });
        form.reset();
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        // This case might not be hit if emailjs.send throws an error for non-200.
        // The catch block is more likely to handle API errors.
        console.error("EmailJS returned a non-200 status:", result);
        toast({
          title: "Sending Issue",
          description: `Message could not be sent. Status: ${result.status} - ${result.text}. Please try again.`,
          variant: "destructive",
        });
      }
    } catch (error: any) {
      console.error("Error sending message via EmailJS:", error);
      toast({
        title: "Error Sending Message",
        description: `There was a problem: ${error?.text || error?.message || 'Unknown error'}. Please try again later.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div variants={variants}>
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-serif font-medium text-rust mb-6">Send a Message</h3>

          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
              <h4 className="text-xl font-medium mb-2">Message Sent!</h4>
              <p className="text-muted-foreground mb-4">
                Thank you for reaching out. I'll get back to you as soon as possible.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  rules={{ required: "Name is required" }} // react-hook-form native validation
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-muted-foreground">Name</FormLabel>
                      <FormControl>
                        <Input {...field} className="w-full" placeholder="Your Name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-muted-foreground">Email</FormLabel>
                      <FormControl>
                        <Input {...field} type="email" className="w-full" placeholder="your.email@example.com" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  rules={{ required: "Subject is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-muted-foreground">Subject</FormLabel>
                      <FormControl>
                        <Input {...field} className="w-full" placeholder="Regarding..." />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  rules={{ required: "Message is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-muted-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea {...field} className="w-full min-h-[120px]" placeholder="Your message here..." />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-rust text-white hover:bg-rust/90" // Ensure 'bg-rust' is defined in your Tailwind config
                >
                  {isSubmitting ? (
                    // You can add a spinner icon here for better UX
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactForm;