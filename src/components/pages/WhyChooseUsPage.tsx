import { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { Award, Users, Package, Clock, Shield, CheckCircle, TrendingUp, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

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

export default function WhyChooseUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full max-w-[120rem] mx-auto grid place-items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://static.wixstatic.com/media/477ab0_d377abd6f93e4d2ba3cf602885ab3baf~mv2.png?originWidth=1920&originHeight=704"
            alt="Professional construction team"
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
            Why Choose BuildPro
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
            className="font-paragraph text-xl text-primary-foreground/90 max-w-3xl mx-auto"
          >
            Experience, expertise, and excellence in every project
          </motion.p>
        </div>
      </section>

      {/* Main Benefits Section */}
      <section className="py-24 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <AnimatedElement>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary uppercase mb-6">
                The BuildPro Advantage
              </h2>
              <p className="font-paragraph text-lg text-foreground/80 max-w-3xl mx-auto">
                When you choose BuildPro, you're choosing a partner committed to delivering exceptional results through proven expertise and unwavering dedication.
              </p>
            </AnimatedElement>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Experience */}
            <AnimatedElement delay={0} direction="left">
              <motion.div 
                whileHover={{ y: -4 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-secondary flex items-center justify-center"
                  >
                    <Award size={32} className="text-secondary-foreground" />
                  </motion.div>
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-primary uppercase mb-4">
                    30+ Years of Experience
                  </h3>
                  <p className="font-paragraph text-base text-foreground/80 mb-4">
                    Since 1995, we've been at the forefront of the construction industry, completing over 500 projects across residential, commercial, and industrial sectors.
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Proven track record of successful project delivery',
                      'Deep understanding of industry standards and regulations',
                      'Expertise across multiple construction disciplines',
                    ].map((item, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-1" />
                        <span className="font-paragraph text-base text-foreground/80">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatedElement>

            {/* Workforce */}
            <AnimatedElement delay={0.1} direction="right">
              <motion.div 
                whileHover={{ y: -4 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-secondary flex items-center justify-center"
                  >
                    <Users size={32} className="text-secondary-foreground" />
                  </motion.div>
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-primary uppercase mb-4">
                    Expert Workforce
                  </h3>
                  <p className="font-paragraph text-base text-foreground/80 mb-4">
                    Our team consists of licensed contractors, certified tradespeople, and experienced project managers who are passionate about quality construction.
                  </p>
                  <ul className="space-y-2">
                    {[
                      'All team members are fully licensed and insured',
                      'Continuous training in latest construction techniques',
                      'Commitment to safety and professional excellence',
                    ].map((item, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-1" />
                        <span className="font-paragraph text-base text-foreground/80">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatedElement>

            {/* Materials */}
            <AnimatedElement delay={0.2} direction="left">
              <motion.div 
                whileHover={{ y: -4 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-secondary flex items-center justify-center"
                  >
                    <Package size={32} className="text-secondary-foreground" />
                  </motion.div>
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-primary uppercase mb-4">
                    Premium Quality Materials
                  </h3>
                  <p className="font-paragraph text-base text-foreground/80 mb-4">
                    We source only the finest materials from trusted suppliers, ensuring durability, sustainability, and long-lasting value for your investment.
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Partnerships with leading material manufacturers',
                      'Rigorous quality control and inspection processes',
                      'Eco-friendly and sustainable material options',
                    ].map((item, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-1" />
                        <span className="font-paragraph text-base text-foreground/80">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatedElement>

            {/* On-Time Delivery */}
            <AnimatedElement delay={0.3} direction="right">
              <motion.div 
                whileHover={{ y: -4 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-secondary flex items-center justify-center"
                  >
                    <Clock size={32} className="text-secondary-foreground" />
                  </motion.div>
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-primary uppercase mb-4">
                    98% On-Time Delivery
                  </h3>
                  <p className="font-paragraph text-base text-foreground/80 mb-4">
                    We understand that time is money. Our meticulous planning and efficient execution ensure your project is completed on schedule and within budget.
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Detailed project timelines with milestone tracking',
                      'Proactive communication and progress updates',
                      'Contingency planning for unexpected challenges',
                    ].map((item, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-1" />
                        <span className="font-paragraph text-base text-foreground/80">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Additional Benefits Section */}
      <section className="py-24 bg-light-grey/30">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <AnimatedElement>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary uppercase mb-4">
                More Reasons to Choose Us
              </h2>
            </AnimatedElement>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Safety First', description: 'Comprehensive safety protocols and zero-accident commitment on every job site.' },
              { icon: TrendingUp, title: 'Transparent Pricing', description: 'Clear, detailed quotes with no hidden fees or surprise costs during construction.' },
              { icon: Heart, title: 'Client-Focused', description: 'Your vision drives our work. We listen, collaborate, and deliver beyond expectations.' },
              { icon: CheckCircle, title: 'Warranty & Support', description: 'Comprehensive warranties and ongoing support long after project completion.' },
            ].map((benefit, index) => (
              <AnimatedElement key={benefit.title} delay={index * 0.1}>
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="bg-background p-8 text-center"
                >
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-secondary mb-6"
                  >
                    <benefit.icon size={32} className="text-secondary-foreground" />
                  </motion.div>
                  <h3 className="font-heading text-xl font-bold text-primary uppercase mb-3">
                    {benefit.title}
                  </h3>
                  <p className="font-paragraph text-base text-foreground/80">
                    {benefit.description}
                  </p>
                </motion.div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Highlight Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedElement>
              <div className="mb-8">
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex justify-center gap-1 mb-6"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.span 
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="text-secondary text-3xl"
                    >
                      ★
                    </motion.span>
                  ))}
                </motion.div>
                <blockquote className="font-paragraph text-2xl text-primary-foreground/90 italic mb-8">
                  "BuildPro transformed our vision into reality. Their professionalism, attention to detail, and commitment to quality exceeded all our expectations. We couldn't be happier with our new facility."
                </blockquote>
                <div>
                  <p className="font-paragraph font-bold text-xl text-primary-foreground">
                    Sarah Johnson
                  </p>
                  <p className="font-paragraph text-base text-primary-foreground/70">
                    CEO, TechStart Industries
                  </p>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '30+', label: 'Years Experience' },
              { value: '500+', label: 'Projects Completed' },
              { value: '98%', label: 'On-Time Delivery' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <AnimatedElement key={stat.label} delay={index * 0.15}>
                <motion.div
                  whileInView={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="font-heading text-5xl md:text-6xl font-bold text-primary mb-2">{stat.value}</div>
                  <p className="font-paragraph text-base text-foreground/80">{stat.label}</p>
                </motion.div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-light-grey/30">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <AnimatedElement>
            <div className="bg-primary text-primary-foreground p-12 md:p-16 text-center">
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-6">
                Experience the BuildPro Difference
              </h2>
              <p className="font-paragraph text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who have trusted us with their construction projects.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="bg-secondary text-secondary-foreground font-paragraph font-bold px-8 py-4 hover:bg-secondary/90 transition-colors inline-block"
                >
                  Get Your Free Quote
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
