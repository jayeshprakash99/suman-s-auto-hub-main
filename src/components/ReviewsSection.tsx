import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Raj Prakash",
    review: "One-stop solution for all your truck motor parts and engine oil. Excellent service and genuine products!",
    rating: 5,
  },
  {
    name: "Archana Kundu",
    review: "All types of truck motor parts available, good range. The staff is very helpful and knowledgeable.",
    rating: 5,
  },
  {
    name: "Rohan Mishra",
    review: "All spares available. Quick service and reasonable prices. Highly recommended!",
    rating: 4,
  },
  {
    name: "B.K. Mahto",
    review: "Good collection of auto parts. They have everything from engine oils to batteries. Trustworthy shop.",
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 md:py-32 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-display font-semibold uppercase tracking-wider mb-4">
            Customer Reviews
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Customers Say
          </h2>
          
          {/* Overall Rating */}
          <div className="inline-flex items-center gap-4 bg-secondary/50 backdrop-blur-sm px-8 py-4 rounded-full border border-border/50">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${i < 5 ? "text-accent fill-accent" : "text-muted"}`}
                />
              ))}
            </div>
            <span className="text-2xl font-display font-bold text-foreground">4.7</span>
            <span className="text-muted-foreground">• 7 Google Reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="relative bg-card rounded-xl p-6 md:p-8 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating ? "text-accent fill-accent" : "text-muted"
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground/90 mb-6 leading-relaxed">
                "{review.review}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-display font-bold">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <span className="font-display font-semibold text-foreground">
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
