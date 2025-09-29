import { Camera, Upload, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroMudra from "@/assets/hero-mudra.jpg";

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-cultural opacity-50"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                AI-Powered Mudra Recognition
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Discover the{" "}
                <span className="bg-gradient-silk bg-clip-text text-transparent">
                  Sacred Art
                </span>{" "}
                of Mudras
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                MudraMinds uses advanced AI to identify and analyze mudras from Indian classical dance forms. 
                Upload images, capture live gestures, and explore the rich cultural heritage of Bharatanatyam 
                and other classical dance traditions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-saffron hover:bg-gradient-saffron/90 text-primary-foreground shadow-cultural gap-2">
                <Camera className="w-5 h-5" />
                Start Analysis
              </Button>
              <Button variant="outline" size="lg" className="gap-2 border-primary/20 hover:bg-primary/5">
                <Upload className="w-5 h-5" />
                Upload Image
              </Button>
            </div>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2">
              {["Real-time Recognition", "Cultural Context", "Learning Resources", "Export Reports"].map((feature) => (
                <span key={feature} className="bg-card border border-border px-3 py-1 rounded-full text-sm text-muted-foreground">
                  {feature}
                </span>
              ))}
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <Card className="p-4 shadow-temple">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={heroMudra} 
                  alt="Beautiful mudra gesture in Indian classical dance"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Floating Recognition Badge */}
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm border border-border px-3 py-2 rounded-lg shadow-elegant">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Analyzing...</span>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-saffron opacity-20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-temple opacity-20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;