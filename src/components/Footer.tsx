
import { NavLink } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sage/30 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Dr. Alisa M. Loosen. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="mailto:alisa.loosen@yale.edu"
              className="text-muted-foreground hover:text-rust transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/amloosen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-rust transition-colors"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/alisa-loosen-phd-4b7a4711b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-rust transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://bsky.app/profile/alisaloosen.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-rust transition-colors"
              aria-label="Bluesky"
            >
              <img 
                src="/lovable-uploads/f28fda96-5e15-407e-b119-3086e6491746.png" 
                alt="Bluesky" 
                className="w-5 h-5 filter brightness-0 opacity-60 hover:brightness-100 hover:opacity-100 transition-all" 
              />
            </a>
          </div>
        </div>
        <div className="mt-6 text-center">
          <nav className="flex justify-center space-x-4 text-sm text-muted-foreground">
            <NavLink to="/" className="hover:text-rust transition-colors">About</NavLink>
            <span>•</span>
            <NavLink to="/projects" className="hover:text-rust transition-colors">Projects</NavLink>
            <span>•</span>
            <NavLink to="/contact" className="hover:text-rust transition-colors">Contact</NavLink>
            <span>•</span>
            <NavLink to="/cv" className="hover:text-rust transition-colors">CV</NavLink>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
