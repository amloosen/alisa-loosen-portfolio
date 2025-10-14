
import { motion } from "framer-motion";

interface ProfileImageProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const ProfileImage = ({ size = "md", className = "" }: ProfileImageProps) => {
  const sizeClasses = {
    sm: "h-32 w-32",
    md: "h-48 w-48",
    lg: "h-64 w-full md:w-64",
    xl: "h-80 w-full md:w-80",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className={`${className}`}
    >
      <div className={`${sizeClasses[size]} overflow-hidden border border-foreground/20`}>
        <img 
          src="/lovable-uploads/7bc31a5e-d1c5-4601-a6aa-fa0490edad61.png" 
          alt="Alisa M. Loosen" 
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </motion.div>
  );
};

export default ProfileImage;
