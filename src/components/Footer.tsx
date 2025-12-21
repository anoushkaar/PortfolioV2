import { Github, Heart, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/anoushkaar",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/anoushkaar/",
      gradient: "from-blue-600 to-blue-800",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:anoushkaraghuveeran@gmail.com",
      gradient: "from-purple-600 to-pink-600",
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Social Links */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Let's Connect
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 min-w-[140px]"
                >
                  <div
                    className={`p-4 bg-gradient-to-br ${social.gradient} rounded-xl shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {social.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
          <span>Crafted with</span>
          <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
          <span>by Anoushka</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
