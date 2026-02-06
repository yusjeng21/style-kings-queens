import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import mensImage from "@/assets/mens-collection.jpg";
import womensImage from "@/assets/womens-collection.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Discover our story and what drives us to create fashion that
            empowers
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Style Kings and Queens was created with a simple goal: to make
                  stylish, quality fashion accessible to everyone. We believe
                  fashion is more than clothing — it's confidence, identity, and
                  self-expression.
                </p>
                <p>
                  What started as a passion for helping people look their best
                  has grown into a trusted fashion destination. We carefully
                  curate each piece in our collection, ensuring it meets our
                  high standards for style, quality, and affordability.
                </p>
                <p>
                  Today, we're proud to serve customers who share our belief
                  that everyone deserves to feel confident and stylish,
                  regardless of their budget.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={mensImage}
                  alt="Men's fashion"
                  className="rounded-lg shadow-custom-lg w-full aspect-[3/4] object-cover"
                />
                <img
                  src={womensImage}
                  alt="Women's fashion"
                  className="rounded-lg shadow-custom-lg w-full aspect-[3/4] object-cover mt-8"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-lg shadow-custom-md">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-6">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-card-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver trendy, affordable, and high-quality fashion that
                empowers our customers to express themselves with confidence. We
                strive to make every customer feel like royalty when they wear
                our pieces.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card p-8 rounded-lg shadow-custom-md">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-6">
                <Eye className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-card-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To become a trusted fashion brand known for style, quality, and
                excellent customer service. We envision a world where everyone
                has access to fashion that makes them feel confident and
                stylish.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "✨",
                title: "Quality",
                description:
                  "We never compromise on the quality of our fabrics and finishing",
              },
              {
                icon: "💎",
                title: "Style",
                description:
                  "Every piece is carefully curated to be trendy and fashionable",
              },
              {
                icon: "🤝",
                title: "Trust",
                description:
                  "Building lasting relationships with our customers through reliability",
              },
              {
                icon: "❤️",
                title: "Care",
                description:
                  "We genuinely care about making our customers look and feel their best",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6">
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto">
            <Heart className="h-12 w-12 mx-auto mb-6 text-accent" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Join Our Fashion Family
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Be part of a community that celebrates style, confidence, and
              self-expression. Follow us on social media and join our WhatsApp
              community for exclusive updates.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
