import { motion } from "framer-motion";
import profile from "@/assets/prof.jpg";
import { MapPin, Calendar, Link } from "lucide-react";

const ProfileCard = () => {
  return (
    <>
      {/* Font Import */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Bungee+Spice&family=Fontdiner+Swanky&family=Metamorphous&family=Oregano:ital@0;1&family=Original+Surfer&family=Outfit:wght@100..900&family=Tilt+Prism&display=swap');`}
      </style>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="max-w-lg mx-auto px-4"
      >
        <div className="glass-card rounded-3xl p-4 sm:p-6 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-foreground/5 rounded-full -translate-y-16 translate-x-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-foreground/5 rounded-full translate-y-12 -translate-x-12" />
          
          {/* Avatar - Centered */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative mx-auto mb-3 sm:mb-4 z-10"
          >
            <div className="w-20 h-20 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden border-3 border-foreground/20 shadow-lg">
              <img
                src={profile}
                alt="Alex Digital Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Status indicator */}
            <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 w-3 h-3 sm:w-4 sm:h-4 bg-orange-700 rounded-full border-2 border-background" />
          </motion.div>

          {/* Profile Info - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="relative z-10"
          >
            {/* Name with TILT PRISM font */}
            <h2 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 text-foreground">
              <span style={{ fontFamily: "'Tilt Prism', cursive" }}>
                SAMARTH <span className="text-foreground/80">MUKTAMATH</span>
              </span>
            </h2>
            
            <p className="text-muted-foreground mb-2 sm:mb-3 leading-relaxed font-medium text-sm sm:text-base">
              AI-Powered Web Developer <br /> Constantly learning, growing, and building with others.
            </p>

            {/* Profile details - Side by Side with BOLD TEXT */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground flex-wrap font-bold">
              <div className="flex items-center gap-1 sm:gap-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="font-bold">Bengaluru, India</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="font-bold">Joined December 2021</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                {/* <Link className="w-3 h-3 sm:w-4 sm:h-4" /> */}
                {/* <span className="font-bold">alexdigital.dev</span> */}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default ProfileCard;
