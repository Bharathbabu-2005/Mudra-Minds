import { Camera, Upload, Brain, Download, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    icon: Camera,
    title: "Capture or Upload",
    description: "Take a photo or upload an image/video of mudras from classical dance performances",
    action: "Start Camera"
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description: "Our trained CNN model analyzes the gesture and identifies the specific mudra",
    action: "Processing..."
  },
  {
    icon: BookOpen,
    title: "Learn & Explore",
    description: "Discover the meaning, cultural significance, and usage of the identified mudra",
    action: "View Details"
  },
  {
    icon: Download,
    title: "Export Results",
    description: "Generate detailed reports and share your mudra analysis journey",
    action: "Download PDF"
  }
];

const QuickStart = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            How{" "}
            <span className="bg-gradient-silk bg-clip-text text-transparent">
              MudraMinds
            </span>{" "}
            Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the seamless journey from capture to cultural understanding in just four simple steps.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-temple transition-all duration-300 group">
              <CardHeader>
                <div className="relative mx-auto mb-4">
                  <div className="w-16 h-16 bg-gradient-saffron rounded-full flex items-center justify-center shadow-cultural group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                  )}
                </div>
                <CardTitle className="text-xl font-semibold">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  {step.description}
                </CardDescription>
                <Button variant="outline" size="sm" className="w-full">
                  {step.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-temple hover:bg-gradient-temple/90 text-white shadow-temple">
            Try MudraMinds Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QuickStart;