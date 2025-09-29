import { Camera, BookOpen, History, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-saffron rounded-lg flex items-center justify-center shadow-cultural">
              <span className="text-primary-foreground font-bold text-lg">मु</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-silk bg-clip-text text-transparent">
                MudraMinds
              </h1>
              <p className="text-xs text-muted-foreground">AI Mudra Recognition</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm" className="gap-2">
              <Camera className="w-4 h-4" />
              Analyze
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <BookOpen className="w-4 h-4" />
              Learn
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <History className="w-4 h-4" />
              History
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Share2 className="w-4 h-4" />
              Export
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;