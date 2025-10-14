
import { motion } from "framer-motion";

interface ProfileImageProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const ProfileImage = ({ size = "md", className = "" }: ProfileImageProps) => {
  const sizeClasses = {
    sm: "h-24 w-24",
    md: "h-40 w-40",
    lg: "h-64 w-full aspect-square",
    xl: "h-80 w-full aspect-square",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className={`${className}`}
    >
      <div className={`${sizeClasses[size]} overflow-hidden`}>
        <img 
          src="/lovable-uploads/7bc31a5e-d1c5-4601-a6aa-fa0490edad61.png" 
          alt="Alisa M. Loosen" 
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
};

export default ProfileImage;
