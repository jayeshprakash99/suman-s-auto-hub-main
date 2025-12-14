import { useState, useEffect } from "react";
import { Phone, MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex flex-col">
            <span className="font-display text-xl md:text-2xl font-bold text-foreground">
              Suman <span className="text-primary">Automobiles</span>
            </span>
            <span className="text-xs text-muted-foreground hidden sm:block">
              सुमन ऑटोमोबिल्स
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors font-display uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 md:gap-3">
            <Button
              variant="accent"
              size="sm"
              className="hidden sm:flex"
              asChild
            >
              <a href="tel:+917033626560">
                <Phone className="w-4 h-4" />
                <span className="hidden md:inline">Call Now</span>
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex"
              asChild
            >
              <a
                href="https://maps.app.goo.gl/GCjNVvpZXLKvbSci8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-4 h-4" />
                Directions
              </a>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-3 text-lg font-display font-medium text-foreground hover:text-primary transition-colors border-b border-border/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 mt-4 pt-4">
              <Button variant="accent" className="flex-1" asChild>
                <a href="tel:+917033626560">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </Button>
              <Button variant="outline" className="flex-1" asChild>
                <a
                  href="https://maps.app.goo.gl/GCjNVvpZXLKvbSci8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="w-4 h-4" />
                  Directions
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
