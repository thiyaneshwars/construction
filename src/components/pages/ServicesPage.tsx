import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';
import { Services } from '@/entities';
import { ArrowRight } from 'lucide-react';

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

export default function ServicesPage() {
  const [services, setServices] = useState<Services[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    const fetchServices = async () => {
      const { items } = await BaseCrudService.getAll<Services>('services');
      setServices(items);
    };

    fetchServices();
  }, []);

  const categories = ['All', ...Array.from(new Set(services.map(s => s.serviceCategory).filter(Boolean)))];

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter(s => s.serviceCategory === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full max-w-[120rem] mx-auto grid place-items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://static.wixstatic.com/media/477ab0_e28109d343b44689811e9fb7a40e2f5b~mv2.png?originWidth=1920&originHeight=704"
            alt="Construction services overview"
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
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
            className="font-paragraph text-xl text-primary-foreground/90 max-w-3xl mx-auto"
          >
            Comprehensive construction solutions for every project
          </motion.p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <AnimatedElement>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary uppercase mb-6">
                What We Do
              </h2>
              <p className="font-paragraph text-lg text-foreground/80 max-w-3xl mx-auto">
                From residential homes to commercial complexes, we provide end-to-end construction services with unmatched quality and reliability.
              </p>
            </AnimatedElement>
          </div>

          {/* Category Filter */}
          {categories.length > 1 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`font-paragraph font-bold px-6 py-3 transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-secondary text-secondary-foreground shadow-lg'
                      : 'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          )}

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <AnimatedElement key={service._id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  id={service._id}
                  className="bg-background border-2 border-light-grey hover:border-secondary transition-all h-full flex flex-col"
                >
                  {service.serviceImage && (
                    <div className="overflow-hidden h-64">
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full"
                      >
                        <Image
                          src={service.serviceImage}
                          alt={service.serviceName || 'Service image'}
                          className="w-full h-full object-cover"
                          width={500}
                        />
                      </motion.div>
                    </div>
                  )}
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="font-heading text-2xl font-bold text-primary uppercase mb-4">
                      {service.serviceName}
                    </h3>
                    <p className="font-paragraph text-base text-foreground/80 mb-4">
                      {service.shortDescription}
                    </p>
                    {service.detailedDescription && (
                      <p className="font-paragraph text-sm text-foreground/70 mb-6">
                        {service.detailedDescription}
                      </p>
                    )}
                    {service.callToActionLink && service.callToActionLabel && (
                      <motion.a
                        href={service.callToActionLink}
                        whileHover={{ x: 4 }}
                        className="bg-secondary text-secondary-foreground font-paragraph font-bold px-6 py-3 hover:bg-secondary/90 transition-colors inline-flex items-center gap-2 w-fit mt-auto"
                      >
                        {service.callToActionLabel}
                        <ArrowRight size={18} />
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="py-24 bg-light-grey/30">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <AnimatedElement>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary uppercase mb-4">
                Our Process
              </h2>
              <p className="font-paragraph text-lg text-foreground/80 max-w-3xl mx-auto">
                A streamlined approach to ensure your project success
              </p>
            </AnimatedElement>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '1', title: 'Consultation', description: 'We meet to understand your vision, requirements, and budget for the project.' },
              { number: '2', title: 'Planning', description: 'Our team develops detailed plans, timelines, and cost estimates for approval.' },
              { number: '3', title: 'Execution', description: 'Skilled craftsmen bring the project to life with precision and quality.' },
              { number: '4', title: 'Delivery', description: 'Final inspection, handover, and ongoing support for your complete satisfaction.' },
            ].map((step, index) => (
              <AnimatedElement key={step.number} delay={index * 0.15} direction="up">
                <motion.div 
                  whileHover={{ y: -4 }}
                  className="bg-background p-8 text-center h-full flex flex-col justify-center"
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 bg-secondary text-secondary-foreground font-heading text-3xl font-bold mb-6 mx-auto"
                  >
                    {step.number}
                  </motion.div>
                  <h3 className="font-heading text-xl font-bold text-primary uppercase mb-3">
                    {step.title}
                  </h3>
                  <p className="font-paragraph text-base text-foreground/80">
                    {step.description}
                  </p>
                </motion.div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 text-center">
          <AnimatedElement>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-6">
              Ready to Get Started?
            </h2>
            <p className="font-paragraph text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project and receive a free, no-obligation quote.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="bg-secondary text-secondary-foreground font-paragraph font-bold px-8 py-4 hover:bg-secondary/90 transition-colors inline-flex items-center gap-2"
              >
                Request a Quote
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </AnimatedElement>
        </div>
      </section>

      <Footer />
    </div>
  );
}
