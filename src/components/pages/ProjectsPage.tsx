import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';
import { Projects } from '@/entities';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';

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

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Projects[]>([]);
  const [selectedType, setSelectedType] = useState<string>('All');

  useEffect(() => {
    const fetchProjects = async () => {
      const { items } = await BaseCrudService.getAll<Projects>('projects');
      setProjects(items);
    };

    fetchProjects();
  }, []);

  const clientTypes = ['All', ...Array.from(new Set(projects.map(p => p.clientType).filter(Boolean)))];

  const filteredProjects = selectedType === 'All'
    ? projects
    : projects.filter(p => p.clientType === selectedType);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full max-w-[120rem] mx-auto grid place-items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://static.wixstatic.com/media/477ab0_23122092fac04889a523fae40cedcc27~mv2.png?originWidth=1920&originHeight=704"
            alt="Construction projects portfolio"
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
            Our Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
            className="font-paragraph text-xl text-primary-foreground/90 max-w-3xl mx-auto"
          >
            Showcasing excellence in construction and design
          </motion.p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <AnimatedElement>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary uppercase mb-6">
                Featured Work
              </h2>
              <p className="font-paragraph text-lg text-foreground/80 max-w-3xl mx-auto">
                Explore our portfolio of completed projects that demonstrate our commitment to quality, innovation, and client satisfaction.
              </p>
            </AnimatedElement>
          </div>

          {/* Filter Buttons */}
          {clientTypes.length > 1 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {clientTypes.map((type) => (
                <motion.button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`font-paragraph font-bold px-6 py-3 transition-all duration-300 ${
                    selectedType === type
                      ? 'bg-secondary text-secondary-foreground shadow-lg'
                      : 'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  {type}
                </motion.button>
              ))}
            </motion.div>
          )}

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <AnimatedElement key={project._id} delay={index * 0.1}>
                <Link to={`/projects/${project._id}`} className="group">
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="bg-background border-2 border-light-grey hover:border-secondary transition-all h-full flex flex-col"
                  >
                    {project.mainImage && (
                      <div className="overflow-hidden h-64 relative">
                        <motion.div
                          whileHover={{ scale: 1.08 }}
                          transition={{ duration: 0.5 }}
                          className="w-full h-full"
                        >
                          <Image
                            src={project.mainImage}
                            alt={project.projectName || 'Project image'}
                            className="w-full h-full object-cover"
                            width={500}
                          />
                        </motion.div>
                        <motion.div 
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 bg-secondary/20"
                        />
                      </div>
                    )}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-heading text-2xl font-bold text-primary uppercase mb-3 group-hover:text-secondary transition-colors">
                        {project.projectName}
                      </h3>
                      <p className="font-paragraph text-base text-foreground/80 mb-4">
                        {project.briefDescription}
                      </p>
                      <div className="space-y-2 mt-auto">
                        {project.projectLocation && (
                          <motion.div 
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 text-dark-grey"
                          >
                            <MapPin size={16} />
                            <span className="font-paragraph text-sm">{project.projectLocation}</span>
                          </motion.div>
                        )}
                        {project.completionDate && (
                          <motion.div 
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 text-dark-grey"
                          >
                            <Calendar size={16} />
                            <span className="font-paragraph text-sm">
                              {new Date(project.completionDate).toLocaleDateString('en-US', {
                                month: 'long',
                                year: 'numeric',
                              })}
                            </span>
                          </motion.div>
                        )}
                      </div>
                      {project.clientType && (
                        <div className="mt-4">
                          <span className="inline-block bg-secondary/20 text-primary font-paragraph text-xs font-bold px-3 py-1 uppercase">
                            {project.clientType}
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </Link>
              </AnimatedElement>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="font-paragraph text-lg text-foreground/60">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: '500+', label: 'Projects Completed' },
              { value: '98%', label: 'On-Time Delivery Rate' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <AnimatedElement key={stat.label} delay={index * 0.15}>
                <motion.div
                  whileInView={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="font-heading text-6xl font-bold text-secondary mb-2">{stat.value}</div>
                  <p className="font-paragraph text-lg">{stat.label}</p>
                </motion.div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <AnimatedElement>
            <div className="bg-light-grey/50 p-12 md:p-16 text-center">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary uppercase mb-6">
                Let's Build Your Vision
              </h2>
              <p className="font-paragraph text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
                Ready to start your construction project? Contact us today for a free consultation and quote.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="bg-secondary text-secondary-foreground font-paragraph font-bold px-8 py-4 hover:bg-secondary/90 transition-colors inline-flex items-center gap-2"
                >
                  Get Started
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      <Footer />
    </div>
  );
}
