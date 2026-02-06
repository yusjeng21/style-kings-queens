import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Testimonial } from "@/lib/data";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

const TestimonialCard = ({ testimonial, index = 0 }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-card p-6 rounded-lg shadow-custom-md"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-accent text-accent" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-card-foreground mb-6 italic leading-relaxed">
        "{testimonial.quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
          <span className="text-accent font-semibold">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <span className="font-medium text-card-foreground">
          {testimonial.name}
        </span>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
