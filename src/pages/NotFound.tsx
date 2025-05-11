
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4"
    >
      <h1 className="text-5xl md:text-6xl font-serif font-semibold text-rust mb-6">404</h1>
      <h2 className="text-2xl md:text-3xl font-medium mb-4">Page Not Found</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved. 
      </p>
      <Button asChild className="bg-rust hover:bg-rust/90">
        <Link to="/">Return to Home</Link>
      </Button>
    </motion.div>
  );
};

export default NotFound;
