import { Heart, Github, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-secondary/20 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-saffron rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">मु</span>
              </div>
              <span className="font-bold text-lg bg-gradient-silk bg-clip-text text-transparent">
                MudraMinds
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Preserving and celebrating the sacred art of mudras through modern AI technology.
            </p>
          </div>
          
          {/* Features */}
          <div>
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>AI Mudra Recognition</li>
              <li>Cultural Learning</li>
              <li>Progress Tracking</li>
              <li>Export Reports</li>
            </ul>
          </div>
          
          {/* Dance Forms */}
          <div>
            <h3 className="font-semibold mb-4">Dance Forms</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Bharatanatyam</li>
              <li>Kuchipudi</li>
              <li>Odissi</li>
              <li>Manipuri</li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="w-8 h-8">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="w-8 h-8">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="w-8 h-8">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            Built with <Heart className="w-4 h-4 text-red-500" /> for preserving Indian classical dance heritage
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;