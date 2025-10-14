import { motion } from "framer-motion";

const ContactInformation = ({ variants }: { variants: any }) => {
  return (
    <motion.div variants={variants} className="space-y-6 font-light">
      <div className="flex items-start gap-4">
        <span className="bg-secondary/20 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-foreground" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </span>
        <div>
          <h4 className="text-sm font-light text-muted-foreground mb-1">Email</h4>
          <a href="mailto:alisa.loosen@yale.edu" className="text-foreground hover:text-foreground/60 transition-colors">
            alisa.loosen@yale.edu
          </a>
        </div>
      </div>
      
      <div className="flex items-start gap-4">
        <span className="bg-secondary/20 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-foreground" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
        </span>
        <div>
          <h4 className="text-sm font-light text-muted-foreground mb-1">Location</h4>
          <p className="font-light text-foreground/70">
            Yale School of Medicine<br />
            Department of Psychiatry<br />
            40 Temple St<br />
            New Haven, CT 06510, USA
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInformation;
