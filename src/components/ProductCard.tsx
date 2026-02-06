import { motion } from "framer-motion";
import { Product, formatPrice, getWhatsAppOrderLink } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FaWhatsapp } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const navigate = useNavigate();
  const optimizedImage = `${product.image}?w=600&q=80&auto=format`;

  // Function to handle the WhatsApp click without triggering the card navigation
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents the Link from triggering
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative bg-card rounded-lg overflow-hidden card-hover cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)} // Makes the whole card clickable
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={optimizedImage}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
          {product.isNew && (
            <Badge className="bg-accent text-accent-foreground font-medium">
              New
            </Badge>
          )}
        </div>

        {/* Quick Order Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <div className="absolute bottom-4 left-4 right-4">
            <a
              href={getWhatsAppOrderLink(product)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}>
              <Button
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 btn-gold-glow"
                size="sm">
                <FaWhatsapp className="h-4 w-4 mr-2" />
                Order via WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="font-display text-lg font-semibold text-card-foreground line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-bold text-accent">
            {formatPrice(product.price)}
          </span>
          <div className="flex gap-1">
            {(product.sizes || []).slice(0, 3).map((size) => (
              <span
                key={size}
                className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground">
                {size}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
