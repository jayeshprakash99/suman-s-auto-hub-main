import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Suman Automobiles | Motor Parts & Engine Oil Shop in Ranchi</title>
        <meta
          name="description"
          content="Suman Automobiles - Your trusted automobile spare parts shop in Ranchi. Quality motor parts, engine oils, lubricants, and vehicle accessories. ⭐ 4.7 Rating."
        />
        <meta
          name="keywords"
          content="motor parts Ranchi, automobile spares Ranchi, engine oil shop Ranchi, Suman Automobiles, car parts Ranchi, bike parts Ranchi, lubricants Ranchi"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sumanautomobiles.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Suman Automobiles | Motor Parts & Engine Oil Shop in Ranchi" />
        <meta property="og:description" content="Your one-stop solution for motor parts, spares & engine oils in Ranchi. Trusted by 1000+ customers." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoPartsStore",
            "name": "Suman Automobiles",
            "alternateName": "सुमन ऑटोमोबिल्स",
            "image": "https://sumanautomobiles.com/shop-image.jpg",
            "@id": "https://sumanautomobiles.com",
            "url": "https://sumanautomobiles.com",
            "telephone": "+91-9876543210",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Hiramani Fuels, Ranchi Ring Road, Near Dhoni's Farm House",
              "addressLocality": "Ranchi",
              "addressRegion": "Jharkhand",
              "postalCode": "835222",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 23.344547,
              "longitude": 85.295061
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "20:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Sunday",
                "opens": "10:00",
                "closes": "14:00"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "reviewCount": "7"
            },
            "priceRange": "$$"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ProductsSection />
          <GallerySection />
          <ReviewsSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
