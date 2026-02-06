import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Collection } from "@/lib/data";

interface CollectionCardProps {
  collection: Collection;
  index?: number;
}

const CollectionCard = ({ collection, index = 0 }: CollectionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link
        to={`/shop?category=${collection.slug}`}
        className="group block relative aspect-[3/4] overflow-hidden rounded-lg"
      >
        {/* Image */}
        <img
          src={collection.image}
          alt={collection.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
            {collection.name}
          </h3>
          <p className="text-primary-foreground/80 text-sm mb-4 line-clamp-2">
            {collection.description}
          </p>
          <span className="inline-flex items-center text-accent font-medium text-sm group-hover:translate-x-2 transition-transform">
            Shop Now
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default CollectionCard;
