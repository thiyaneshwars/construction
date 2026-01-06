// HPI 1.6-V
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Award, Users, Clock, ArrowUpRight, Ruler, HardHat, BrickWall } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';
import { Projects, Services, Testimonials } from '@/entities';

// --- Utility Components for Motion & Layout ---

// 1. Scroll Reveal Component (Mandatory Implementation)
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

// 2. Parallax Image Component
const ParallaxImage = ({ src, alt, className, speed = 0.5 }: { src: string, alt: string, className?: string, speed?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y, height: "120%" }} className="w-full relative">
        <Image src={src} alt={alt} className="w-full h-full object-cover" width={1200} />
      </motion.div>
    </div>
  );
};

// 3. Blueprint Grid Background
const BlueprintGrid = () => (
  <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]" 
       style={{ 
         backgroundImage: 'linear-gradient(#1E3A8A 1px, transparent 1px), linear-gradient(90deg, #1E3A8A 1px, transparent 1px)', 
         backgroundSize: '40px 40px' 
       }} 
  />
);

// --- Main Component ---

export default function HomePage() {
  // --- Data Fidelity Protocol: Canonical Data Sources ---
  const [featuredProjects, setFeaturedProjects] = useState<Projects[]>([]);
  const [services, setServices] = useState<Services[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonials[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsData, servicesData, testimonialsData] = await Promise.all([
          BaseCrudService.getAll<Projects>('projects'),
          BaseCrudService.getAll<Services>('services'),
          BaseCrudService.getAll<Testimonials>('testimonials'),
        ]);

        setFeaturedProjects(projectsData.items.slice(0, 3)); // Keep top 3
        setServices(servicesData.items); // Keep all for the list
        setTestimonials(testimonialsData.items);
      } catch (error) {
        console.error("Failed to fetch data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // --- Scroll Progress for Global Elements ---
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // --- Hero Animation Variants ---
  const heroTextVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.5 + i * 0.1, duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }
    })
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-paragraph selection:bg-secondary selection:text-secondary-foreground overflow-x-clip">
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-secondary z-50 origin-left"
        style={{ scaleX }}
      />

      <Header />

      {/* --- HERO SECTION: The Foundation --- */}
      <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden">
        {/* Background Parallax */}
        <div className="absolute inset-0 z-0">
          <ParallaxImage 
            src="https://static.wixstatic.com/media/477ab0_755920e19a0d4e97bc466b1037d69c69~mv2.png?originWidth=1152&originHeight=768"
            alt="Massive steel structure under construction at sunset"
            className="w-full h-full"
            speed={0.3}
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-90" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 pt-20">
          <div className="max-w-[120rem] mx-auto grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-10 lg:col-start-2">
              {/* Decorative Label */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="flex items-center gap-4 mb-8"
              >
                <span className="h-[1px] w-12 bg-secondary"></span>
                <span className="text-secondary font-bold tracking-widest uppercase text-sm">Est. 1995</span>
              </motion.div>

              {/* Main Headline - Split for animation */}
              <h1 className="font-heading text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] font-bold text-white uppercase tracking-tighter mb-8">
                <div className="overflow-hidden">
                  <motion.div custom={0} variants={heroTextVariants} initial="hidden" animate="visible">
                    Building
                  </motion.div>
                </div>
                <div className="overflow-hidden text-transparent stroke-text-white">
                  <motion.div custom={1} variants={heroTextVariants} initial="hidden" animate="visible" className="text-stroke-white">
                    The Future
                  </motion.div>
                </div>
                <div className="overflow-hidden flex items-center gap-4 md:gap-8">
                  <motion.div custom={2} variants={heroTextVariants} initial="hidden" animate="visible" className="text-secondary">
                    Today.
                  </motion.div>
                </div>
              </h1>

              {/* Subtext & CTA */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 border-t border-white/20 pt-8">
                <AnimatedElement delay={0.8} className="max-w-md">
                  <p className="text-white/80 text-lg md:text-xl leading-relaxed">
                    Quality construction, reliability, and on-time delivery for homeowners, commercial clients, and real-estate developers.
                  </p>
                </AnimatedElement>
                
                <AnimatedElement delay={1.0} className="flex flex-col sm:flex-row gap-4 items-start md:justify-end">
                  <Link
                    to="/projects"
                    className="group relative px-8 py-4 bg-transparent border border-white/30 text-white font-bold overflow-hidden transition-all hover:border-secondary"
                  >
                    <span className="relative z-10 flex items-center gap-2 group-hover:text-secondary transition-colors">
                      View Projects <ArrowRight size={18} />
                    </span>
                  </Link>
                  <Link
                    to="/contact"
                    className="group relative px-8 py-4 bg-secondary text-secondary-foreground font-bold overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative z-10 flex items-center gap-2">
                      Get a Quote <ArrowUpRight size={18} />
                    </span>
                  </Link>
                </AnimatedElement>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
            <motion.div 
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="w-full h-1/2 bg-secondary"
            />
          </div>
        </motion.div>
      </section>

      {/* --- STATS & TRUST SECTION: The Blueprint --- */}
      <section className="py-24 bg-background relative border-b border-light-grey">
        <BlueprintGrid />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-light-grey border border-light-grey">
            {[
              { icon: Award, label: "Years Experience", value: "30+" },
              { icon: Users, label: "Expert Team Members", value: "150+" },
              { icon: BrickWall, label: "Projects Completed", value: "500+" },
              { icon: Clock, label: "On-Time Delivery", value: "98%" },
            ].map((stat, index) => (
              <AnimatedElement key={index} delay={index * 0.1} className="bg-background p-10 group hover:bg-primary hover:text-white transition-colors duration-500">
                <stat.icon size={32} className="text-secondary mb-6" />
                <h3 className="font-heading text-4xl font-bold mb-2">{stat.value}</h3>
                <p className="text-sm uppercase tracking-widest font-bold text-dark-grey group-hover:text-white/70 transition-colors">{stat.label}</p>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION: The Structure --- */}
      <section className="py-32 bg-background overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <AnimatedElement direction="right">
                <div className="relative z-10 aspect-[4/5] max-h-[800px]">
                  <Image 
                    src="https://static.wixstatic.com/media/477ab0_bf27bfb79fb34b4c8dcbd388d369578b~mv2.png?originWidth=640&originHeight=768"
                    alt="Architect reviewing blueprints on site"
                    className="w-full h-full object-cover"
                    width={800}
                  />
                  {/* Decorative Frame */}
                  <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary -z-10" />
                  <div className="absolute top-12 -left-12 bg-secondary p-8 hidden md:block shadow-xl">
                    <Ruler size={48} className="text-secondary-foreground mb-4" />
                    <p className="font-heading text-2xl font-bold text-secondary-foreground leading-tight">
                      Precision in<br/>Every Detail
                    </p>
                  </div>
                </div>
              </AnimatedElement>
            </div>

            <div className="lg:pl-12">
              <AnimatedElement>
                <h4 className="text-secondary font-bold tracking-widest uppercase mb-4">Who We Are</h4>
                <h2 className="font-heading text-5xl md:text-6xl font-bold text-primary mb-8 leading-tight">
                  Constructing Excellence Since 1995
                </h2>
                <div className="space-y-6 text-lg text-dark-grey">
                  <p>
                    We don't just build structures; we build legacies. For over three decades, our firm has stood at the forefront of the construction industry, delivering complex projects with unwavering precision.
                  </p>
                  <p>
                    From luxury residential developments to large-scale commercial infrastructure, our approach combines traditional craftsmanship with cutting-edge technology. We believe in transparency, safety, and the relentless pursuit of perfection.
                  </p>
                </div>
                
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/5 flex items-center justify-center rounded-none shrink-0">
                      <CheckCircle className="text-primary" size={24} />
                    </div>
                    <div>
                      <h5 className="font-heading text-xl font-bold text-primary mb-2">ISO Certified</h5>
                      <p className="text-dark-grey text-sm">International standards of quality management.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/5 flex items-center justify-center rounded-none shrink-0">
                      <HardHat className="text-primary" size={24} />
                    </div>
                    <div>
                      <h5 className="font-heading text-xl font-bold text-primary mb-2">Safety First</h5>
                      <p className="text-dark-grey text-sm">Zero-accident policy on all active sites.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <Link to="/about" className="text-primary font-bold border-b-2 border-secondary pb-1 hover:text-secondary transition-colors inline-flex items-center gap-2">
                    Read Our Full Story <ArrowRight size={16} />
                  </Link>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION: Sticky Stack Layout --- */}
      <section className="py-32 bg-light-grey/20 relative">
        <div className="container mx-auto px-6 mb-20">
          <AnimatedElement>
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-primary/20 pb-8">
              <div>
                <h4 className="text-secondary font-bold tracking-widest uppercase mb-4">Our Expertise</h4>
                <h2 className="font-heading text-5xl md:text-6xl font-bold text-primary">
                  Comprehensive<br/>Services
                </h2>
              </div>
              <Link to="/services" className="hidden md:flex items-center gap-2 font-bold text-primary hover:text-secondary transition-colors">
                View All Services <ArrowRight size={20} />
              </Link>
            </div>
          </AnimatedElement>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sticky Image Preview Area */}
            <div className="hidden lg:block lg:col-span-5 relative">
              <div className="sticky top-32 h-[600px] w-full">
                <div className="relative w-full h-full overflow-hidden bg-primary">
                  {/* We use CSS to show/hide images based on hover state of the list items, 
                      but for a cleaner React implementation, we'd typically use state. 
                      However, to keep it purely CSS/Layout driven as much as possible or simple state: */}
                   <Image 
                      src="https://static.wixstatic.com/media/477ab0_0669a483d93c465a95642296e2e7fca8~mv2.png?originWidth=576&originHeight=576"
                      alt="Construction services overview"
                      className="w-full h-full object-cover opacity-50 mix-blend-overlay absolute inset-0"
                      width={600}
                   />
                   <div className="absolute inset-0 flex items-center justify-center p-12">
                      <h3 className="font-heading text-4xl text-white text-center leading-tight">
                        Select a service to view details
                      </h3>
                   </div>
                </div>
              </div>
            </div>

            {/* Services List */}
            <div className="col-span-1 lg:col-span-7 flex flex-col gap-6">
              {services.map((service, index) => (
                <AnimatedElement key={service._id} delay={index * 0.1} direction="left">
                  <Link to={`/services#${service._id}`} className="group block">
                    <div className="bg-background p-8 md:p-12 border-l-4 border-transparent hover:border-secondary transition-all duration-300 shadow-sm hover:shadow-xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="font-heading text-8xl font-bold text-primary">0{index + 1}</span>
                      </div>
                      
                      <h3 className="font-heading text-3xl font-bold text-primary mb-4 group-hover:translate-x-2 transition-transform">
                        {service.serviceName}
                      </h3>
                      <p className="text-dark-grey text-lg mb-6 max-w-xl group-hover:text-foreground transition-colors">
                        {service.shortDescription}
                      </p>
                      
                      <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary group-hover:text-secondary transition-colors">
                        Explore Service <ArrowRight size={16} />
                      </div>
                    </div>
                  </Link>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURED PROJECTS: Parallax Grid --- */}
      <section className="py-32 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-6 mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <AnimatedElement>
              <h4 className="text-secondary font-bold tracking-widest uppercase mb-4">Portfolio</h4>
              <h2 className="font-heading text-5xl md:text-6xl font-bold text-white">
                Featured Projects
              </h2>
            </AnimatedElement>
            <AnimatedElement delay={0.2}>
              <Link to="/projects" className="px-8 py-4 border border-white/30 hover:bg-white hover:text-primary transition-all font-bold inline-flex items-center gap-2">
                View Full Portfolio <ArrowRight size={20} />
              </Link>
            </AnimatedElement>
          </div>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {featuredProjects.map((project, index) => (
              <div 
                key={project._id} 
                className={`${index % 2 === 1 ? 'md:mt-24' : ''}`} // Staggered grid layout
              >
                <AnimatedElement delay={index * 0.2}>
                  <Link to={`/projects/${project._id}`} className="group block">
                    <div className="relative overflow-hidden aspect-[4/3] mb-6">
                      <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/20 z-10 transition-colors duration-500" />
                      {project.mainImage ? (
                        <Image
                          src={project.mainImage}
                          alt={project.projectName || 'Project Image'}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          width={800}
                        />
                      ) : (
                        <div className="w-full h-full bg-white/10 flex items-center justify-center">
                          <span className="text-white/50">No Image Available</span>
                        </div>
                      )}
                      
                      {/* Hover Overlay Info */}
                      <div className="absolute bottom-0 left-0 w-full p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20 bg-gradient-to-t from-black/80 to-transparent">
                        <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-2">
                          {project.clientType || 'Commercial'}
                        </p>
                        <p className="text-white text-sm">
                          {project.projectLocation}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between items-start border-t border-white/20 pt-6 group-hover:border-secondary transition-colors">
                      <div>
                        <h3 className="font-heading text-3xl font-bold mb-2 group-hover:text-secondary transition-colors">
                          {project.projectName}
                        </h3>
                        <p className="text-white/60 line-clamp-2 max-w-md">
                          {project.briefDescription}
                        </p>
                      </div>
                      <ArrowUpRight className="text-white/40 group-hover:text-secondary transition-colors" size={32} />
                    </div>
                  </Link>
                </AnimatedElement>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS: Horizontal Scroll --- */}
      {testimonials.length > 0 && (
        <section className="py-32 bg-background overflow-hidden">
          <div className="container mx-auto px-6 mb-16 text-center">
            <AnimatedElement>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
                Client Trust
              </h2>
              <div className="w-24 h-1 bg-secondary mx-auto" />
            </AnimatedElement>
          </div>

          <div className="relative w-full overflow-hidden">
            <div className="flex gap-8 animate-scroll-slow hover:pause px-6">
              {/* Duplicate list for infinite scroll effect if needed, or just map once if enough items */}
              {[...testimonials, ...testimonials].map((testimonial, i) => (
                <div key={`${testimonial._id}-${i}`} className="flex-shrink-0 w-[400px] md:w-[500px]">
                  <div className="bg-light-grey/30 p-10 h-full border border-transparent hover:border-primary/20 transition-colors relative">
                    <div className="text-secondary text-6xl font-serif absolute top-6 left-6 opacity-30">"</div>
                    <div className="relative z-10">
                      <div className="flex gap-1 mb-6">
                        {Array.from({ length: testimonial.rating || 5 }).map((_, starIndex) => (
                          <span key={starIndex} className="text-secondary text-lg">★</span>
                        ))}
                      </div>
                      <p className="font-paragraph text-lg text-foreground/80 mb-8 italic leading-relaxed min-h-[100px]">
                        {testimonial.testimonialText}
                      </p>
                      <div className="flex items-center gap-4 border-t border-dark-grey/10 pt-6">
                        {testimonial.clientPhoto ? (
                          <Image
                            src={testimonial.clientPhoto}
                            alt={testimonial.clientName || 'Client'}
                            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                            width={56}
                          />
                        ) : (
                          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                            {testimonial.clientName?.charAt(0)}
                          </div>
                        )}
                        <div>
                          <h5 className="font-bold text-primary">{testimonial.clientName}</h5>
                          <p className="text-sm text-dark-grey">{testimonial.clientTitleCompany}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --- CTA SECTION: The Final Call --- */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <Image 
              src="https://static.wixstatic.com/media/477ab0_5706f869df7b40e7854c88b865630f35~mv2.png?originWidth=1920&originHeight=1024"
              alt="Blueprints background"
              className="w-full h-full object-cover"
              width={1920}
           />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedElement>
              <h2 className="font-heading text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Ready to Build <br/>
                <span className="text-secondary">Something Great?</span>
              </h2>
              <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                From concept to completion, we bring your vision to life with unmatched quality and reliability. Let's discuss your next project.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/contact"
                  className="bg-secondary text-secondary-foreground font-bold text-lg px-10 py-5 hover:bg-white hover:text-primary transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
                >
                  Start Your Project <ArrowRight size={20} />
                </Link>
                <Link
                  to="/about"
                  className="bg-transparent border-2 border-white text-white font-bold text-lg px-10 py-5 hover:bg-white hover:text-primary transition-all inline-flex items-center justify-center"
                >
                  Learn About Us
                </Link>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <Footer />

      {/* Custom Styles for Text Stroke and Animations */}
      <style>{`
        .text-stroke-white {
          -webkit-text-stroke: 2px white;
          color: transparent;
        }
        @keyframes scroll-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-slow {
          animation: scroll-slow 40s linear infinite;
          display: flex;
          width: max-content;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}