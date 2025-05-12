
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast"; 
import { useForm } from "react-hook-form";
import { Send, CheckCircle, AlertCircle, Mail } from "lucide-react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from "@/components/ui/form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Email to send messages to
const CONTACT_EMAIL = "alisa.loosen@yale.edu";

const ContactForm = ({ variants }: { variants: any }) => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const form = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleMailtoLink = (formData: FormData) => {
    try {
      setSendError(null);
      
      // Construct the mailto URL with form data
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      );
      
      const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      
      // Open the mailto link
      window.location.href = mailtoUrl;
      
      // Show success message
      toast({
        title: "Email Client Opened",
        description: "Your message has been prepared in your email client. Please send it from there.",
      });
      
      // Reset the form
      form.reset();
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error: any) {
      console.error("Error opening email client:", error);
      setSendError("There was a problem opening your email client. Please try emailing directly.");
      toast({
        title: "Error",
        description: "Could not open your email client. Please email me directly.",
        variant: "destructive",
      });
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
              <h4 className="text-xl font-medium mb-2">Email Prepared!</h4>
              <p className="text-muted-foreground mb-4">
                Your message was prepared in your email client. Please finish sending it from there.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
              >
                Compose Another Message
              </Button>
            </div>
          ) : (
            <Form {...form}>
              {sendError && (
                <Alert variant="destructive" className="mb-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{sendError}</AlertDescription>
                </Alert>
              )}
              <form onSubmit={form.handleSubmit(handleMailtoLink)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  rules={{ required: "Name is required" }}
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

                <div className="text-sm text-muted-foreground mb-2">
                  Clicking "Compose Email" will open your default email client with this message.
                </div>

                <Button
                  type="submit"
                  className="w-full bg-rust text-white hover:bg-rust/90"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Compose Email
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
