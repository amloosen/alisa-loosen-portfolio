
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = ({ variants }: { variants: any }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing again
    if (sendError) setSendError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSendError(null);
    
    try {
      // Replace these with your actual Email.js service, template, and user IDs
      // You need to create an account at emailjs.com and set up a service and template
      const serviceId = 'YOUR_SERVICE_ID'; // Replace with your Service ID
      const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID
      const userId = 'YOUR_USER_ID'; // Replace with your User ID
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: 'alisa.loosen@yale.edu', // Yale email address
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, userId);
      
      toast({
        title: "Message Sent",
        description: "Thank you for your message. I'll respond as soon as possible.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setSendError("Failed to send message. Please try again later or contact directly via email.");
      toast({
        title: "Error",
        description: "There was a problem sending your message.",
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
          
          {sendError && (
            <Alert variant="destructive" className="mb-4">
              <AlertDescription>{sendError}</AlertDescription>
            </Alert>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full min-h-[120px]"
              />
            </div>
            
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-rust text-white hover:bg-rust/90"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactForm;
