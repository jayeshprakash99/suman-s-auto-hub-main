import { Wrench, Droplets, Car, Battery, Filter, Cable } from "lucide-react";
import motorPartsImg from "@/assets/motor-parts.jpg";
import engineOilImg from "@/assets/engine-oil.jpg";
import sparePartsImg from "@/assets/spare-parts.jpg";
import batteriesImg from "@/assets/batteries.jpg";

const products = [
  {
    title: "truck motor parts",
    description: "High-quality engine components, gears, and mechanical parts for all vehicle types.",
    image: motorPartsImg,
    icon: Wrench,
  },
  {
    title: "Engine Oils & Lubricants",
    description: "Premium grade engine oils and lubricants from trusted brands.",
    image: engineOilImg,
    icon: Droplets,
  },
  {
    title: "Filters & Cables",
    description: "Oil filters, air filters, fuel filters, and all types of cables.",
    image: sparePartsImg,
    icon: Filter,
  },
  {
    title: "Batteries & Accessories",
    description: "Reliable batteries for two-wheelers and four-wheelers with accessories.",
    image: batteriesImg,
    icon: Battery,
  },
];

const features = [
  "All types of truck motor parts available",
  "Wide product range with genuine spares",
  "Reliable and trusted local automobile shop",
  "Competitive pricing guaranteed",
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 md:py-32 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-display font-semibold uppercase tracking-wider mb-4">
            Our Products
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Quality Auto Parts & Spares
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From truck motor parts to engine oils, we stock everything you need to keep your vehicle running smoothly.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="group relative bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-primary/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <product.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-secondary/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary text-sm">✓</span>
                </div>
                <p className="text-foreground font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
