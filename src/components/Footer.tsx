import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="font-heading text-2xl font-bold uppercase tracking-tight mb-4">
              BuildPro
            </div>
            <p className="font-paragraph text-sm text-primary-foreground/80 mb-6">
              Building the future with quality construction, reliability, and on-time delivery since 1995.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 hover:bg-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 hover:bg-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 hover:bg-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold uppercase mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="font-paragraph text-sm hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="font-paragraph text-sm hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="font-paragraph text-sm hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="font-paragraph text-sm hover:text-secondary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="font-paragraph text-sm hover:text-secondary transition-colors">
                  Why Choose Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-bold uppercase mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li className="font-paragraph text-sm text-primary-foreground/80">Residential Construction</li>
              <li className="font-paragraph text-sm text-primary-foreground/80">Commercial Construction</li>
              <li className="font-paragraph text-sm text-primary-foreground/80">Renovation & Remodeling</li>
              <li className="font-paragraph text-sm text-primary-foreground/80">Interior Design</li>
              <li className="font-paragraph text-sm text-primary-foreground/80">Project Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-bold uppercase mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={20} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="font-paragraph text-sm">+1 (555) 123-4567</p>
                  <p className="font-paragraph text-sm text-primary-foreground/80">Mon-Fri 8AM-6PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="mt-1 flex-shrink-0" />
                <a
                  href="mailto:info@buildpro.com"
                  className="font-paragraph text-sm hover:text-secondary transition-colors"
                >
                  info@buildpro.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <p className="font-paragraph text-sm">
                  123 Construction Ave<br />
                  Building City, BC 12345
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-sm text-primary-foreground/80">
              © {new Date().getFullYear()} BuildPro Construction. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="font-paragraph text-sm hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="font-paragraph text-sm hover:text-secondary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
