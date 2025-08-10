import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LinkCardProps {
  title: string;
  description: string;
  url: string;
  icon?: React.ReactNode;
  index: number;
}

const LinkCard = ({ title, description, url, icon, index }: LinkCardProps) => {
  const handleClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 14,
        delay: 0.2 + index * 0.1,
      }}
      whileHover={{
        y: -8,
        backgroundColor: "rgba(249, 115, 22, 0.1)", // subtle orange tint
        transition: { type: "spring", stiffness: 250, damping: 16 },
      }}
      whileTap={{ scale: 0.98 }}
      className="w-full relative group"
      style={{ perspective: 1000 }}
    >
      <div className="rounded-lg bg-background" />
      <Button
        variant="clean"
        size="clean"
        onClick={handleClick}
        className="w-full justify-between rounded-lg relative z-10 bg-transparent p-3 sm:p-4"
      >
        <div className="flex items-center gap-2 sm:gap-3">
          {icon && (
            <motion.div
              whileHover={{ 
                rotate: [0, -15, 15, 0],
                // scale: 1,
                color: "rgb(249, 115, 22)", // orange-500
                transition: { duration: 0.5 }
              }}
              className="text-foreground transition-colors duration-300 w-4 h-4 sm:w-5 sm:h-5"
            >
              {icon}
            </motion.div>
          )}
          <div className="text-left flex-1 min-w-0">
            <motion.div 
              className="font-semibold text-foreground group-hover:text-orange-600 transition-colors duration-300 text-sm sm:text-base truncate"
              whileHover={{ 
                x: 4,
                transition: { type: "spring", stiffness: 200 }
              }}
            >
              {title}
            </motion.div>
            <div className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 line-clamp-2">
              {description}
            </div>
          </div>
        </div>
        <motion.div 
          whileHover={{ 
            x: 8,
            rotate: 15,
            scale: 1.3,
            transition: { type: "spring", stiffness: 200 }
          }}
        >
          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground group-hover:text-orange-500 transition-colors duration-300" />
        </motion.div>
      </Button>
    </motion.div>
  );
};

export default LinkCard;
