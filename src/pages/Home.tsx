import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, Star, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CollectionCard from "@/components/CollectionCard";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import { collections, testimonials, whatsappConfig } from "@/lib/data";
import { useProducts } from "@/context/ProductContext";
import heroImage from "@/assets/hero-fashion.jpg";
import { useMemo } from "react";
import Scroller from "@/components/ui/scroll-indicator";

const Index = () => {
  const { products } = useProducts();
  const featuredProducts = products.filter((p) => p.isFeatured);

  // Randomize 4 testimonials
  const featuredTestimonials = useMemo(() => {
    return [...testimonials]
      .sort(() => 0.5 - Math.random()) // Shuffle
      .slice(0, 4); // Take only 4
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Style Kings and Queens Fashion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        {/* Content */}
        <div className="relative container-custom text-center text-primary-foreground py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-accent font-medium mb-4 tracking-wider uppercase text-sm">
              Welcome to
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-white text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              Style Kings <span className="text-accent">&</span> Queens
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white md:text-2xl font-light mb-4 text-primary-foreground/90">
              Where Style Meets Confidence.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base text-white md:text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-8">
              Style Kings and Queens brings you trendy, quality fashion designed
              to fit your lifestyle. From everyday wear to standout pieces, we
              help you look confident and stylish at all times.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 btn-gold-glow text-base px-8">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a
                href={whatsappConfig.communityLink}
                target="_blank"
                rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary hover:bg-primary/10 hover:text-gold text-base px-8">
                  Join Our Community
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <Scroller />
        </div>
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-gold-dark/30 rounded-full flex justify-center pt-2">
            <motion.div className="w-1.5 h-1.5 bg-gold-dark/50 rounded-full" />
          </motion.div>
        </motion.div> */}
      </section>


      {/* Featured Collections */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Featured Collections
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our curated collections designed to elevate your style
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((collection, index) => (
              <CollectionCard
                key={collection.id}
                collection={collection}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Why Choose Style Kings & Queens
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to delivering the best fashion experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Star,
                title: "Trendy & Modern Styles",
                description:
                  "Stay ahead of fashion trends with our carefully curated collections",
              },
              {
                icon: CreditCard,
                title: "Affordable Pricing",
                description: "Quality fashion that doesn't break the bank",
              },
              {
                icon: Shield,
                title: "Quality Fabrics",
                description:
                  "Premium materials and expert finishing on every piece",
              },
              {
                icon: Truck,
                title: "Fast Delivery",
                description: "Reliable and quick delivery to your doorstep",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-card rounded-lg shadow-custom-sm">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-4">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-semibold text-card-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Featured Products
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Handpicked pieces to help you look your best
              </p>
            </div>
            <Link to="/shop" className="mt-4 md:mt-0">
              <Button variant="outline" className="group">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Style Kings &
              Queens
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <Link to="/reviews">
            <Button
              variant="outline"
              size="lg"
              className="bg-secondary-foreground text-primary-foreground border-2">
              Read All Testimonials
            </Button>
          </Link>
        </div>
      </section>

      {/* WhatsApp Community CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Join the Style Kings & Queens Community
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Stay updated on new arrivals, special offers, and exclusive deals
              by joining our WhatsApp community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappConfig.communityLink}
                target="_blank"
                rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 btn-gold-glow">
                  Join WhatsApp Group
                </Button>
              </a>
              <a
                href={`https://wa.me/${whatsappConfig.phoneNumber.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 bg-secondary text-primary hover:bg-secondary/50">
                  Chat With Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
