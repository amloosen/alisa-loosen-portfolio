
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
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`${className}`}
    >
      <Avatar className={`${sizeClasses[size]} rounded-full border-4 border-sage/30`}>
        <AvatarImage src="/profile-image.jpg" alt="Alisa M. Loosen" />
        <AvatarFallback className="bg-sand/30 text-rust font-serif">
          A.L.
        </AvatarFallback>
      </Avatar>
    </motion.div>
  );
};

export default ProfileImage;
