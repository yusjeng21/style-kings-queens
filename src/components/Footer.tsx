import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold">
              Style Kings & Queens
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Style Kings and Queens brings you trendy, quality fashion designed
              to fit your lifestyle. From everyday wear to standout pieces, we
              help you look confident and stylish at all times.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/missing_dude1?igsh=MWlvNmIyY2c4NjBqMw=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1CHKY5qtYG/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://vm.tiktok.com/ZS91vkTyUuoLo-q8Q9O/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors">
                {/* <Twitter className="h-5 w-5" /> */}
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                Home
              </Link>
              <Link
                to="/shop"
                className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                Shop
              </Link>
              <Link
                to="/about"
                className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                Contact
              </Link>
              <Link
                to="/reviews"
                className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                Reviews
              </Link>
              <Link
                to="/faq"
                className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                FAQ
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Categories</h4>
            <nav className="flex flex-col gap-3">
              <Link
                to="/shop?category=men"
                className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                Men's Wear
              </Link>
              <Link
                to="/shop?category=women"
                className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                Women's Wear
              </Link>
              <Link
                to="/shop?category=accessories"
                className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                Accessories
              </Link>
              <Link
                to="/shop?category=new-arrivals"
                className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                New Arrivals
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+2203833126"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                <Phone className="h-4 w-4" />
                <span>+220 383 3126</span>
              </a>
              <a
                href="mailto:stylekingsandqueens2@gmail.com"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                <Mail className="h-4 w-4" />
                <span>stylekingsandqueens2@gmail.com</span>
              </a>
              <a
                href="https://www.google.com/maps/place/Banjul,+The+Gambia"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                <MapPin className="h-4 w-4" />
                <span>Banjul, The Gambia</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm text-center">
              © Style Kings and Queens – All Rights Reserved <br />
              <strong>{currentYear}</strong>
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Designed and Developed by{" "}
              <strong>
                <a href="/home/yus">Yusupha Jeng</a>
              </strong>
            </p>
            <div className="flex gap-6 mt-6">
              <Link
                to="/faq"
                className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link
                to="/faq"
                className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
