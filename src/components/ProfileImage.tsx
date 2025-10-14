
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

interface ProfileImageProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const ProfileImage = ({ size = "md", className = "" }: ProfileImageProps) => {
  const sizeClasses = {
    sm: "h-20 w-20",
    md: "h-32 w-32",
    lg: "h-48 w-48",
    xl: "h-64 w-64",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className={`${className}`}
    >
      <Avatar className={`${sizeClasses[size]} rounded-none`}>
        <AvatarImage src="/lovable-uploads/7bc31a5e-d1c5-4601-a6aa-fa0490edad61.png" alt="Alisa M. Loosen" />
        <AvatarFallback className="bg-secondary text-foreground rounded-none">
          A.L.
        </AvatarFallback>
      </Avatar>
    </motion.div>
  );
};

export default ProfileImage;
