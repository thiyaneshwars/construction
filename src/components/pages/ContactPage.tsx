import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

// Scroll Reveal Component
type AnimatedElementProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
};

const AnimatedElement: React.FC<AnimatedElementProps> = ({ children, className, delay = 0, direction = 'up' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const getInitial = () => {
    switch (direction) {
      case 'up': return { opacity: 0, y: 40 };
      case 'down': return { opacity: 0, y: -40 };
      case 'left': return { opacity: 0, x: 40 };
      case 'right': return { opacity: 0, x: -40 };
      default: return { opacity: 0, y: 40 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : getInitial()}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Message Sent!',
        description: 'Thank you for contacting us. We will get back to you within 24 hours.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] w-full max-w-[120rem] mx-auto grid place-items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://static.wixstatic.com/media/477ab0_c62d6b3bb5f149d58ed34444b6ffa7d6~mv2.png?originWidth=960&originHeight=512"
            alt="Contact BuildPro Construction"
            className="w-full h-full object-cover"
            width={1920}
          />
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="font-heading text-5xl md:text-7xl font-bold text-primary-foreground uppercase tracking-tight mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
            className="font-paragraph text-xl text-primary-foreground/90 max-w-3xl mx-auto"
          >
            Let's discuss your construction project
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <AnimatedElement direction="left">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary uppercase mb-8">
                Get in Touch
              </h2>
              <p className="font-paragraph text-lg text-foreground/80 mb-12">
                Ready to start your construction project? Contact us today for a free consultation and quote. Our team is here to answer your questions and help bring your vision to life.
              </p>

              <div className="space-y-8">
                {[
                  { icon: Phone, title: 'Phone', content: '+1 (555) 123-4567', subtext: 'Monday - Friday: 8:00 AM - 6:00 PM', href: 'tel:+15551234567' },
                  { icon: Mail, title: 'Email', content: 'info@buildpro.com', subtext: "We'll respond within 24 hours", href: 'mailto:info@buildpro.com' },
                  { icon: MapPin, title: 'Office Location', content: '123 Construction Avenue\nBuilding City, BC 12345\nUnited States', subtext: null, href: null },
                  { icon: Clock, title: 'Business Hours', content: 'Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM\nSunday: Closed', subtext: null, href: null },
                ].map((item, index) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-secondary flex items-center justify-center flex-shrink-0">
                      <item.icon size={24} className="text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-primary uppercase mb-2">
                        {item.title}
                      </h3>
                      {item.href ? (
                        <p className="font-paragraph text-base text-foreground/80 mb-1">
                          <a href={item.href} className="hover:text-secondary transition-colors">
                            {item.content}
                          </a>
                        </p>
                      ) : (
                        <p className="font-paragraph text-base text-foreground/80 mb-1 whitespace-pre-line">
                          {item.content}
                        </p>
                      )}
                      {item.subtext && (
                        <p className="font-paragraph text-sm text-dark-grey">
                          {item.subtext}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedElement>

            {/* Contact Form */}
            <AnimatedElement direction="right">
              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-light-grey/30 p-8 lg:p-12"
              >
                <h2 className="font-heading text-3xl font-bold text-primary uppercase mb-6">
                  Request a Quote
                </h2>
                <p className="font-paragraph text-base text-foreground/80 mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="font-paragraph font-bold text-foreground mb-2 block">
                      Full Name *
                    </Label>
                    <motion.div whileHover={{ scale: 1.02 }}>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full font-paragraph"
                        placeholder="John Doe"
                      />
                    </motion.div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="font-paragraph font-bold text-foreground mb-2 block">
                      Email Address *
                    </Label>
                    <motion.div whileHover={{ scale: 1.02 }}>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full font-paragraph"
                        placeholder="john@example.com"
                      />
                    </motion.div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="font-paragraph font-bold text-foreground mb-2 block">
                      Phone Number
                    </Label>
                    <motion.div whileHover={{ scale: 1.02 }}>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full font-paragraph"
                        placeholder="+1 (555) 123-4567"
                      />
                    </motion.div>
                  </div>

                  <div>
                    <Label htmlFor="projectType" className="font-paragraph font-bold text-foreground mb-2 block">
                      Project Type *
                    </Label>
                    <motion.select
                      whileHover={{ scale: 1.02 }}
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full font-paragraph px-3 py-2 border border-light-grey bg-background focus:outline-none focus:ring-2 focus:ring-secondary"
                    >
                      <option value="">Select a project type</option>
                      <option value="residential">Residential Construction</option>
                      <option value="commercial">Commercial Construction</option>
                      <option value="renovation">Renovation & Remodeling</option>
                      <option value="interior">Interior Design</option>
                      <option value="project-management">Project Management</option>
                      <option value="other">Other</option>
                    </motion.select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="font-paragraph font-bold text-foreground mb-2 block">
                      Project Details *
                    </Label>
                    <motion.div whileHover={{ scale: 1.02 }}>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full font-paragraph"
                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                      />
                    </motion.div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-secondary text-secondary-foreground font-paragraph font-bold px-8 py-4 hover:bg-secondary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send size={20} />
                  </motion.button>
                </form>
              </motion.div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-light-grey/30">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <AnimatedElement>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary uppercase mb-4">
                Visit Our Office
              </h2>
              <p className="font-paragraph text-lg text-foreground/80">
                Stop by for a consultation or to discuss your project in person
              </p>
            </AnimatedElement>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-light-grey h-96 flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin size={48} className="text-dark-grey mx-auto mb-4" />
              <p className="font-paragraph text-base text-dark-grey">
                123 Construction Avenue, Building City, BC 12345
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 text-center">
          <AnimatedElement>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="font-paragraph text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              For urgent construction matters or emergency support, call us directly.
            </p>
            <motion.a
              href="tel:+15551234567"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary text-secondary-foreground font-paragraph font-bold px-8 py-4 hover:bg-secondary/90 transition-colors inline-flex items-center gap-2"
            >
              <Phone size={20} />
              Call Now: +1 (555) 123-4567
            </motion.a>
          </AnimatedElement>
        </div>
      </section>

      <Footer />
    </div>
  );
}
