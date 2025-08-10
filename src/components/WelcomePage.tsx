import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface WelcomePageProps {
  onComplete: () => void;
}

const WelcomePage = ({ onComplete }: WelcomePageProps) => {
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [decryptedText, setDecryptedText] = useState("W3LC0M3    T0    M7    D1G1T@L    SP@C3");
  const [decryptionComplete, setDecryptionComplete] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 9000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsDecrypting(true);
    }, 200);
    
    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (isDecrypting) {
      const characters = "!ABCDEFGHIJKLMNOPQRSTUVWXYZ!123456789";

      const targetText = "WELCOME    TO    MY    DIGITAL    SPACE";
      const words = targetText.split(/(\s+)/); // Split into words and spaces
      let iterations = 0;
      
      const interval = setInterval(() => {
        setDecryptedText(prev => {
          let result = '';
          let revealedWords = 0;
          words.forEach((word) => {
            if (revealedWords < iterations) {
              result += word; // Reveal whole word if iteration reached
              revealedWords++;
            } else if (word.trim() === '') {
              result += word; // Keep spaces
            } else {
              // Scramble unrevealed words
              result += word.split('').map(() => 
                characters[Math.floor(Math.random() * characters.length)]
              ).join('');
            }
          });
          return result;
        });
        
        if (iterations >= words.filter(w => w.trim() !== '').length) {
          clearInterval(interval);
          setIsDecrypting(false);
          setDecryptionComplete(true);
        }
        
        iterations += 1; // Increment by 1 to reveal one word per step
      }, 120); // Increased delay to 100ms for a slightly slower effect
      
      return () => clearInterval(interval);
    }
  }, [isDecrypting]);

  useEffect(() => {
    if (decryptionComplete) {
      const timer = setTimeout(() => {
        setIsExiting(true);
      }, 1000); // Short delay before starting exit animation
      
      return () => clearTimeout(timer);
    }
  }, [decryptionComplete]);

  useEffect(() => {
    if (isExiting) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1000); // Duration of exit animation
      
      return () => clearTimeout(timer);
    }
  }, [isExiting, onComplete]);

  const baseTransition = { duration: 0.9, ease: "easeOut" as const };

  // Render text with orange tint on alternate words
  const renderText = (text: string) => {
    let wordIndex = 0;
    let currentWordColor = '';
    return text.split('').map((char, idx) => {
      if (char !== ' ' && currentWordColor === '') {
        currentWordColor = (wordIndex % 4 === 1) ? 'text-[#F0E68C]' : '';
        wordIndex++;
      } else if (char === ' ') {
        currentWordColor = '';
      }
      return <span key={idx} className={currentWordColor}>{char}</span>;
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#000000] via-[#1a1a1a] to-[#0d0d0d] animate-gradient-dark overflow-hidden px-4">
      <motion.div
        animate={{ 
          scale: isExiting ? 0 : 1,
          opacity: isExiting ? 0 : 1
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-center max-w-full"
      >
        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                filter: "blur(0px)"
              }}
              transition={{ ...baseTransition, delay: 0.2, type: "spring", damping: 15, stiffness: 200 }}
              className="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-black tracking-wide text-white relative text-center uppercase"
              style={{ fontFamily: "'Uncial Antiqua', cursive", letterSpacing: "0.1em" }}
            >
              {isDecrypting ? renderText(decryptedText) : renderText("WELCOME    TO    MY    DIGITAL    SPACE")}
              {isDecrypting && (
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.1, repeat: Infinity }}
                  className="ml-1 text-white"
                >
                  |
                </motion.span>
              )}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ 
            duration: 0.5, 
            delay: decryptionComplete ? 0.5 : 6,
            ease: "easeInOut" as const,
            type: "spring",
            damping: 10
          }}
          className="h-1 bg-white mx-auto mt-4 sm:mt-8 rounded-full origin-center"
          style={{ width: "min(600px, 90vw)" }}
        />
      </motion.div>

      {/* Updated Google Fonts Import + Animated dark gradient */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Uncial+Antiqua&display=swap');
        
        @keyframes gradientShiftDark {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-dark {
          background-size: 200% 200%;
          animation: gradientShiftDark 12s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default WelcomePage;
