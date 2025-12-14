import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Address",
    lines: [
      "Hiramani Fuels, Ranchi Ring Road,",
      "Near Dhoni's Farm House,",
      "Ranchi, Jharkhand 835222",
    ],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Monday - Saturday: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 2:00 PM"],
  },
  {
    icon: Phone,
    title: "Contact Us",
    lines: ["Phone: +91 70336 26560", "Plus Code: XR2M+FW Ranchi"],
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-display font-semibold uppercase tracking-wider mb-4">
            Contact Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Visit Our Store
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We're conveniently located on Ranchi Ring Road. Drop by anytime or give us a call!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <div className="relative rounded-2xl overflow-hidden border border-border/50 h-[400px] lg:h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.8945!2d85.2318013!3d23.3812488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sSuman%20Automobiles!2s23.3812488,85.2343816!5e0!3m2!1sen!2sin!4v1702569600000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Suman Automobiles Location"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border/50 flex gap-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {info.title}
                  </h3>
                  {info.lines.map((line, i) => (
                    <p key={i} className="text-muted-foreground text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="hero" size="lg" className="flex-1" asChild>
                <a href="tel:+917033626560">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
              <Button variant="accent" size="lg" className="flex-1" asChild>
                <a
                  href="https://maps.app.goo.gl/GCjNVvpZXLKvbSci8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="w-5 h-5" />
                  Get Directions
                </a>
              </Button>
            </div>
            <Button variant="outline" size="lg" className="w-full" asChild>
              <a
                href="https://wa.me/917033626560?text=Hi, I'm interested in your auto parts."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Send WhatsApp Message
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
