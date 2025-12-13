import { Phone, MapPin, ShoppingBag, Wrench, Droplets, Car, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const highlights = [
  { icon: Wrench, label: "Motor Parts" },
  { icon: Droplets, label: "Engine Oil" },
  { icon: Car, label: "Vehicle Accessories" },
  { icon: Zap, label: "Fast Service" },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-up">
            <span className="text-accent">★</span>
            <span className="text-sm font-medium text-foreground">
              4.7 Rating • Trusted by 1000+ Customers
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-2 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Suman{" "}
            <span className="text-gradient-primary">Automobiles</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-display animate-fade-up" style={{ animationDelay: "0.15s" }}>
            सुमन ऑटोमोबिल्स
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Your one-stop solution for all motor parts, spares & engine oils.
            Quality products at competitive prices.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="flex items-center gap-2 bg-secondary/50 backdrop-blur-sm px-3 py-2 rounded-lg border border-border/50"
              >
                <item.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="lg" asChild>
              <a href="#products">
                <ShoppingBag className="w-5 h-5" />
                View Products
              </a>
            </Button>
            <Button variant="accent" size="lg" asChild>
              <a href="tel:+919876543210">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <a
                href="https://maps.google.com/?q=Hiramani+Fuels+Ranchi+Ring+Road"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
