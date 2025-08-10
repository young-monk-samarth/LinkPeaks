import { motion } from "framer-motion";
import { Github, Twitter, Instagram, Linkedin, Youtube, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialLinks = () => {
  const socialData = [
    // { icon: <Github className="w-5 h-5" />, url: "https://github.com", label: "GitHub" },
    { icon: <Twitter className="w-5 h-5" />, url: "https://x.com/samarth______?t=ebChVZQMRmatjFtRJFcGzQ&s=09", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, url: "https://instagram.com", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, url: "https://www.linkedin.com/in/samarthmuktamath  ", label: "LinkedIn" },
    // { icon: <Youtube className="w-5 h-5" />, url: "https://youtube.com", label: "YouTube" },
    { icon: <img src="https://img.icons8.com/badges/48/reddit.png" alt="Reddit" className="w-5 h-5" />, url: "https://www.reddit.com/u/SAMMY--5/s/CZuhVqKZvF", label: "Reddit" },
    { icon: <img src="https://img.icons8.com/ios-filled/50/threads.png" alt="Threads" className="w-5 h-5 bg-white" />, url: "https://threads.net", label: "Threads" },

    // { icon: <Globe className="w-5 h-5" />, url: "https://website.com", label: "Website" },
  ];

  return (
    <div className="max-w-md mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.2 }}
        className="text-center mb-6"
      >
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Connect with me
        </h3>
        <p className="text-sm text-muted-foreground">
          Open to new opportunities and collaborations.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-3">
        {socialData.map((social, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.4, delay: 2.5 + (index * 0.1) }}
          >
            <Button
              variant="clean"
              size="icon"
              onClick={() => window.open(social.url, '_blank')}
              className="group relative overflow-hidden"
            >
              <motion.div
                whileHover={{ 
                  color: "rgb(249, 115, 22)", // orange-500 as in previous code
                  transition: { duration: 0.5 }
                }}
                className="text-foreground transition-colors duration-300 relative z-10"
              >
                {social.icon}
              </motion.div>
              <span className="sr-only">{social.label}</span>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
