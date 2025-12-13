import { useState } from "react";
import { X } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import motorPartsImg from "@/assets/motor-parts.jpg";
import engineOilImg from "@/assets/engine-oil.jpg";
import sparePartsImg from "@/assets/spare-parts.jpg";
import batteriesImg from "@/assets/batteries.jpg";

const galleryImages = [
  { src: heroBg, alt: "Shop Interior - Wide Range of Auto Parts" },
  { src: motorPartsImg, alt: "Motor Parts Collection" },
  { src: engineOilImg, alt: "Engine Oils Display" },
  { src: sparePartsImg, alt: "Spare Parts & Filters" },
  { src: batteriesImg, alt: "Batteries & Accessories" },
  { src: motorPartsImg, alt: "Quality Motor Components" },
];

const GallerySection = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-display font-semibold uppercase tracking-wider mb-4">
            Gallery
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Inside Our Shop
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Take a virtual tour of our well-stocked automobile parts store in Ranchi.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
              onClick={() => setLightboxImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{ minHeight: index === 0 ? "400px" : "200px" }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-foreground font-medium text-sm">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery Preview"
            className="max-w-full max-h-[85vh] rounded-xl shadow-elevated object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
