import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
// import { TbBrandThreads as ThreadsLogo } from "react-icons/tb";
// import { PiThreadsLogoFill as ThreadsLogo } from "react-icons/pi";
// import { BsThreads as ThreadsLogo } from "react-icons/bs";
import { FaThreads as ThreadsLogo } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import { whatsappConfig, getWhatsAppChatLink } from "@/lib/data";

import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import { useRef, useState } from "react";

const Contact = () => {
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   alert("Thank you for your message! We'll get back to you soon.");
  // };

  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        "template_jifoywf",
        form.current!,
        "-bI0yirXi62kTT-8k",
      )
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you as soon as possible.",
        });
        form.current?.reset();
      })
      .catch((error) => {
        toast({
          variant: "destructive",
          title: "Oops!",
          description: "Something went wrong. Please try again later.",
        });
      })
      .finally(() => setIsSending(false));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch with us today.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={sendEmail} ref={form} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      type="text"
                      name="user_name"
                      id="name"
                      placeholder="Your name"
                      required
                      className="bg-muted"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      name="user_email"
                      placeholder="your@email.com"
                      required
                      className="bg-muted"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    name="user_phone"
                    placeholder="+220 000 0000"
                    className="bg-muted"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="What is this regarding?"
                    required
                    className="bg-muted"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    name="message"
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                    required
                    className="bg-muted resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSending}
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  {isSending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Get In Touch
                </h2>
                <p className="text-muted-foreground mb-8">
                  Have questions about our products or need styling advice?
                  We're here to help! Reach out to us through any of the
                  channels below.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <a
                  href="tel:+2203833126"
                  className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-custom-sm hover:shadow-custom-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">
                      Phone
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      +220 383 3126
                    </p>
                  </div>
                </a>

                <a
                  href={getWhatsAppChatLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-custom-sm hover:shadow-custom-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                    <FaWhatsapp className="h-5 w-5 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">
                      WhatsApp
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Chat with us directly
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:stylekingsandqueens2@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-custom-sm hover:shadow-custom-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">
                      Email
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      stylekingsandqueens2@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://maps.app.goo.gl/8723456789012345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-custom-sm hover:shadow-custom-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">
                      Location
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Banjul, The Gambia
                    </p>
                  </div>
                </a>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/missing_dude1?igsh=MWlvNmIyY2c4NjBqMw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-card shadow-custom-sm flex items-center justify-center text-muted-foreground hover:text-accent hover:shadow-custom-md transition-all">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/share/1CHKY5qtYG/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-card shadow-custom-sm flex items-center justify-center text-muted-foreground hover:text-accent hover:shadow-custom-md transition-all">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.threads.com/@missing_dude1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-card shadow-custom-sm flex items-center justify-center text-muted-foreground hover:text-accent hover:shadow-custom-md transition-all">
                    <ThreadsLogo className="h-5 w-5" />
                  </a>
                  <a
                    href="https://vm.tiktok.com/ZS91vkTyUuoLo-q8Q9O/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-card shadow-custom-sm flex items-center justify-center text-muted-foreground hover:text-accent hover:shadow-custom-md transition-all">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="section-padding bg-muted">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Prefer to Chat?
            </h2>
            <p className="text-muted-foreground mb-8">
              For quick inquiries or to place an order, chat with us directly on
              WhatsApp. We typically respond within minutes!
            </p>
            <a
              href={getWhatsAppChatLink()}
              target="_blank"
              rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                <FaWhatsapp className="h-5 w-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
