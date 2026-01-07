import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { Award, Target, Heart, Shield } from 'lucide-react';

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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full max-w-[120rem] mx-auto grid place-items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://static.wixstatic.com/media/477ab0_5df79d57c71145508a955948e5f2cb17~mv2.png?originWidth=1920&originHeight=704"
            alt="Construction team working together"
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
            About BuildPro
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
            className="font-paragraph text-xl text-primary-foreground/90 max-w-3xl mx-auto"
          >
            Building excellence since 1995
          </motion.p>
        </div>
      </section>

      {/* Company Background Section */}
      <section className="py-24 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedElement direction="left">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary uppercase mb-6">
                Our Story
              </h2>
              <div className="space-y-4 font-paragraph text-base text-foreground/80">
                <p>
                  Founded in 1995, BuildPro Construction has grown from a small local contractor to one of the region's most trusted construction companies. Our journey began with a simple mission: to deliver quality construction projects on time and within budget.
                </p>
                <p>
                  Over the past three decades, we've completed hundreds of residential, commercial, and industrial projects. Our commitment to excellence, attention to detail, and unwavering focus on client satisfaction have made us the preferred choice for homeowners, businesses, and real-estate developers.
                </p>
                <p>
                  Today, BuildPro stands as a testament to what dedication, skilled craftsmanship, and strong values can achieve. We continue to push boundaries, embrace innovation, and set new standards in the construction industry.
                </p>
              </div>
            </AnimatedElement>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="overflow-hidden"
                >
                  <Image
                    src="https://static.wixstatic.com/media/477ab0_9b1561460c7b487aa7a5adfdc811708f~mv2.png?originWidth=384&originHeight=384"
                    alt="Modern commercial building"
                    className="w-full h-64 object-cover"
                    width={400}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="overflow-hidden"
                >
                  <Image
                    src="https://static.wixstatic.com/media/477ab0_e1a73cf6ad6946dba51b75e149b99298~mv2.png?originWidth=384&originHeight=384"
                    alt="Residential construction project"
                    className="w-full h-48 object-cover"
                    width={400}
                  />
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="overflow-hidden"
                >
                  <Image
                    src="https://static.wixstatic.com/media/477ab0_4f432b9e665b45e9a9c2c914bec88962~mv2.png?originWidth=384&originHeight=384"
                    alt="Interior renovation work"
                    className="w-full h-48 object-cover"
                    width={400}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="overflow-hidden"
                >
                  <Image
                    src="https://static.wixstatic.com/media/477ab0_c84c4a03d3424556910597d64241dadc~mv2.png?originWidth=384&originHeight=384"
                    alt="Construction site overview"
                    className="w-full h-64 object-cover"
                    width={400}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Stats Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '30+', label: 'Years of Experience' },
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
                  <div className="font-heading text-6xl font-bold text-secondary mb-2">{stat.value}</div>
                  <p className="font-paragraph text-lg">{stat.label}</p>
                </motion.div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedElement>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary uppercase mb-8">
                Our Mission
              </h2>
              <p className="font-paragraph text-xl text-foreground/80 leading-relaxed">
                To deliver exceptional construction services that exceed client expectations through quality craftsmanship, innovative solutions, and unwavering commitment to safety and sustainability. We build not just structures, but lasting relationships and thriving communities.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-light-grey/30">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <AnimatedElement>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary uppercase mb-4">
                Our Core Values
              </h2>
              <p className="font-paragraph text-lg text-foreground/80 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </AnimatedElement>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Excellence', description: 'We strive for the highest standards in every project, ensuring superior quality and craftsmanship in all our work.' },
              { icon: Shield, title: 'Integrity', description: 'Honesty, transparency, and ethical practices form the foundation of our business relationships and operations.' },
              { icon: Target, title: 'Reliability', description: 'We deliver on our promises, meeting deadlines and budgets while maintaining the highest quality standards.' },
              { icon: Heart, title: 'Client Focus', description: 'Your vision and satisfaction drive everything we do. We listen, collaborate, and deliver results that exceed expectations.' },
            ].map((value, index) => (
              <AnimatedElement key={value.title} delay={index * 0.1}>
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="bg-background p-8 text-center h-full flex flex-col justify-center"
                >
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-secondary mb-6 mx-auto"
                  >
                    <value.icon size={32} className="text-secondary-foreground" />
                  </motion.div>
                  <h3 className="font-heading text-2xl font-bold text-primary uppercase mb-4">
                    {value.title}
                  </h3>
                  <p className="font-paragraph text-base text-foreground/80">
                    {value.description}
                  </p>
                </motion.div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <AnimatedElement>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary uppercase mb-4">
                Our Expert Team
              </h2>
              <p className="font-paragraph text-lg text-foreground/80 max-w-3xl mx-auto">
                Skilled professionals dedicated to bringing your vision to life
              </p>
            </AnimatedElement>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { image: 'https://static.wixstatic.com/media/477ab0_d72d1fc4fc504b0fb9a45c4825fa96c9~mv2.png?originWidth=384&originHeight=384', title: 'Licensed Contractors', description: 'Certified professionals with decades of combined experience in residential and commercial construction.' },
              { image: 'https://static.wixstatic.com/media/477ab0_38094cdc24e94465850a9e8305908775~mv2.png?originWidth=384&originHeight=384', title: 'Skilled Craftsmen', description: 'Master tradespeople committed to precision, quality, and safety in every aspect of construction.' },
              { image: 'https://static.wixstatic.com/media/477ab0_607f5d0e42d34348a0db4b0d081d05ae~mv2.png?originWidth=384&originHeight=384', title: 'Project Coordinators', description: 'Dedicated managers ensuring seamless communication, scheduling, and execution of your project.' },
            ].map((member, index) => (
              <AnimatedElement key={member.title} delay={index * 0.15}>
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="text-center"
                >
                  <div className="mb-6 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5 }}
                      className="w-full"
                    >
                      <Image
                        src={member.image}
                        alt={member.title}
                        className="w-full h-80 object-cover"
                        width={400}
                      />
                    </motion.div>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary uppercase mb-2">
                    {member.title}
                  </h3>
                  <p className="font-paragraph text-base text-foreground/80">
                    {member.description}
                  </p>
                </motion.div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
