import { Camera, BookOpen, Brain, Share2, History, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Camera,
    title: "Live Capture & Upload",
    description: "Capture mudras in real-time or upload images/videos of dance performances for instant analysis.",
    gradient: "bg-gradient-saffron"
  },
  {
    icon: Brain,
    title: "AI Recognition",
    description: "Advanced CNN-based machine learning model trained on classical Indian dance mudras for accurate identification.",
    gradient: "bg-gradient-temple"
  },
  {
    icon: BookOpen,
    title: "Cultural Learning",
    description: "Explore comprehensive mudra library with meanings, significance, and cultural context in Indian classical dance.",
    gradient: "bg-gradient-silk"
  },
  {
    icon: History,
    title: "Progress Tracking",
    description: "Track your analyzed mudras, build a personal collection, and monitor your learning journey.",
    gradient: "bg-gradient-cultural"
  },
  {
    icon: Zap,
    title: "Real-time Feedback",
    description: "Get instant identification results with mudra names, descriptions, and their significance in dance forms.",
    gradient: "bg-gradient-saffron"
  },
  {
    icon: Share2,
    title: "Export & Share",
    description: "Generate detailed PDF reports with mudra analysis, cultural context, and share your discoveries.",
    gradient: "bg-gradient-temple"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-cultural">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Powerful Features for{" "}
            <span className="bg-gradient-silk bg-clip-text text-transparent">
              Cultural Discovery
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the perfect blend of ancient wisdom and modern technology. 
            MudraMinds makes learning and understanding mudras accessible to everyone.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-cultural transition-all duration-300 hover:-translate-y-1 border-border/50">
              <CardHeader>
                <div className={`w-12 h-12 ${feature.gradient} rounded-lg flex items-center justify-center mb-4 shadow-elegant group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;