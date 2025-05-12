
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import ContactInformation from "@/components/contact/ContactInformation";
import ContactForm from "@/components/contact/ContactForm";

const ContactPage = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="max-w-4xl mx-auto"
    >
      <motion.div variants={item} className="mb-8">
        <SectionTitle>Contact Me</SectionTitle>
        <p className="text-lg mb-6">
          Feel free to reach out if you have questions about my research, collaboration opportunities, or speaking engagements.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <ContactInformation variants={item} />
        <ContactForm variants={item} />
      </div>
    </motion.div>
  );
};

export default ContactPage;
