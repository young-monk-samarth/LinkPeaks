import { useState } from "react";
import WelcomePage from "@/components/WelcomePage";
import LinktreeApp from "@/components/LinktreeApp";

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  return (
    <>
      {showWelcome ? (
        <WelcomePage onComplete={handleWelcomeComplete} />
      ) : (
        <LinktreeApp />
      )}
    </>
  );
};

export default Index;