import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="font-display text-2xl font-bold text-foreground">
                Suman <span className="text-primary">Automobiles</span>
              </span>
              <p className="text-sm text-muted-foreground mt-1">सुमन ऑटोमोबिल्स</p>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted partner for quality truck motor parts, engine oils, and automobile accessories in Ranchi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {["Home", "Products", "Gallery", "Reviews", "About", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Hiramani Fuels, Ranchi Ring Road, Near Dhoni's Farm House, Ranchi 835222
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+91 70336 26560</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Mon-Sat: 9AM - 8PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Suman Automobiles. All rights reserved.
            <br />
            Designed by{" "}
            <a
              href="https://webytesolutions.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              webyte solutions
            </a>
          </p>
          <p className="text-muted-foreground text-sm">
            Truck motor parts • Engine Oil • Automobile Spares
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
