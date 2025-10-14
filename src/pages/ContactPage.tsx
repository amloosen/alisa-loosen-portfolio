
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import ContactInformation from "@/components/contact/ContactInformation";

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
        <div className="w-[99%] mx-auto border-t border-foreground mb-8 mt-4"></div>
        <p className="text-lg font-serif mb-6">
          Feel free to reach out if you have questions about my research or collaboration opportunities.
        </p>
      </motion.div>

      <ContactInformation variants={item} />
    </motion.div>
  );
};

export default ContactPage;
