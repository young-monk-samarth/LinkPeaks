import ProfileCard from "./ProfileCard";
import LinkCard from "./LinkCard";
import SocialLinks from "./SocialLinks";
import { Dribbble, Code, Github, Mail, Zap, Star } from "lucide-react";

const LinktreeApp = () => {
  const links = [
    {
      title: "Portfolio Website",
      description: "Check out my latest projects and work",
      url: "https://port-folio-sam.vercel.app/",
      icon: <Dribbble className="w-5 h-5" />
    },
    {
      title: "GitHub Profile",
      description: "Explore my open source contributions",
      url: "https://github.com/young-monk-samarth",
      icon: <Github className="w-5 h-5" />
    },
    {
      title: "Contact Me",
      description: "Let's work together on your next project",
      url: "mailto:samarthmise2025@gmail.com",
      icon: <Mail className="w-5 h-5" />
    },
    {
      title: "Tech Blog",
      description: "comming soon...",
      url: "https://blog.alexcyber.dev",
      icon: <Zap className="w-5 h-5" />
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-main relative overflow-hidden">
      <div className="relative z-10">
        {/* Profile Card */}
        <div className="pt-8 sm:pt-16 pb-4 sm:pb-8">
          <ProfileCard />
        </div>

        {/* Links Section */}
        <div className="py-4 sm:py-8 max-w-lg mx-auto px-4">
          <div className="space-y-4">
            {links.map((link, index) => (
              <LinkCard
                key={index}
                title={link.title}
                description={link.description}
                url={link.url}
                icon={link.icon}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="py-4 sm:py-8">
          <SocialLinks />
        </div>

        {/* Footer */}
        <div className="py-4 sm:py-8 text-center">
          <p className="text-muted-foreground text-xs sm:text-sm">
            <span className="text-foreground text-[#f5f5dc]">Design · Develop · Deploy · Deliver</span> 
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            © 2025 Samarth Muktamath. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LinktreeApp;
