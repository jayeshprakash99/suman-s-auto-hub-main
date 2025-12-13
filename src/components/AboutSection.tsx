import { Shield, Award, Users, Clock } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Genuine Parts",
    description: "We only stock authentic, high-quality parts from trusted manufacturers.",
  },
  {
    icon: Award,
    title: "Affordable Pricing",
    description: "Competitive prices without compromising on quality or service.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Our dedicated team ensures every customer leaves satisfied.",
  },
  {
    icon: Clock,
    title: "Years of Trust",
    description: "Serving Ranchi with excellence and building lasting relationships.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary font-display font-semibold uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Trusted Partner for Auto Parts
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Suman Automobiles is a trusted motor parts and spare parts shop located in Ranchi, 
              known for its wide range of genuine automobile spares, lubricants, and accessories.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              With years of dedicated service and a solid reputation among locals, we are committed 
              to offering quality products and reliable customer support. Whether you need parts for 
              your two-wheeler or four-wheeler, we've got you covered.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
                  1000+
                </div>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
                  5000+
                </div>
                <p className="text-sm text-muted-foreground">Products</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
                  4.7★
                </div>
                <p className="text-sm text-muted-foreground">Rating</p>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
