
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast"; 
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
} from "@/components/ui/form";

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Use hardcoded values directly - in a real app these would be environment variables
// but for this demo we'll use direct values
const EMAILJS_PUBLIC_KEY = "iIV5WhE4cXMN0iYL2"; 
const EMAILJS_SERVICE_ID = "service_o9lvamy";
const EMAILJS_TEMPLATE_ID = "template_r2bnexn";

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
  });

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with the public key
      emailjs.init(EMAILJS_PUBLIC_KEY);

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        // The recipient email is typically configured in the EmailJS template settings
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log("EmailJS send result:", result);

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

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-rust text-white hover:bg-rust/90"
                >
                  {isSubmitting ? (
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
