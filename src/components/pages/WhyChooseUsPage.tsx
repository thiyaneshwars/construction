import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { Award, Users, Package, Clock, Shield, CheckCircle, TrendingUp, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

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
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary-foreground uppercase tracking-tight mb-4">
            Why Choose BuildPro
          </h1>
          <p className="font-paragraph text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Experience, expertise, and excellence in every project
          </p>
        </div>
      </section>

      {/* Main Benefits Section */}
      <section className="py-24 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary uppercase mb-6">
              The BuildPro Advantage
            </h2>
            <p className="font-paragraph text-lg text-foreground/80 max-w-3xl mx-auto">
              When you choose BuildPro, you're choosing a partner committed to delivering exceptional results through proven expertise and unwavering dedication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Experience */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-secondary flex items-center justify-center">
                  <Award size={32} className="text-secondary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-primary uppercase mb-4">
                  30+ Years of Experience
                </h3>
                <p className="font-paragraph text-base text-foreground/80 mb-4">
                  Since 1995, we've been at the forefront of the construction industry, completing over 500 projects across residential, commercial, and industrial sectors.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-1" />
                    <span className="font-paragraph text-base text-foreground/80">
                      Proven track record of successful project delivery
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-1" />
                    <span className="font-paragraph text-base text-foreground/80">
                      Deep understanding of industry standards and regulations
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-1" />
                    <span className="font-paragraph text-base text-foreground/80">
                      Expertise across multiple construction disciplines
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Workforce */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-secondary flex items-center justify-center">
                  <Users size={32} className="text-secondary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-primary uppercase mb-4">
                  Expert Workforce
                </h3>
                <p className="font-paragraph text-base text-foreground/80 mb-4">
                  Our team consists of licensed contractors, certified tradespeople, and experienced project managers who are passionate about quality construction.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-1" />
                    <span className="font-paragraph text-base text-foreground/80">
                      All team members are fully licensed and insured
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-1" />
                    <span className="font-paragraph text-base text-foreground/80">
                      Continuous training in latest construction techniques
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-1" />
                    <span className="font-paragraph text-base text-foreground/80">
                      Commitment to safety and professional excellence
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Materials */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-secondary flex items-center justify-center">
                  <Package size={32} className="text-secondary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-primary uppercase mb-4">
                  Premium Quality Materials
                </h3>
                <p className="font-paragraph text-base text-foreground/80 mb-4">
                  We source only the finest materials from trusted suppliers, ensuring durability, sustainability, and long-lasting value for your investment.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-1" />
                    <span className="font-paragraph text-base text-foreground/80">
                      Partnerships with leading material manufacturers
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-1" />
                    <span className="font-paragraph text-base text-foreground/80">
                      Rigorous quality control and inspection processes
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-1" />
                    <span className="font-paragraph text-base text-foreground/80">
                      Eco-friendly and sustainable material options
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* On-Time Delivery */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-secondary flex items-center justify-center">
                  <Clock size={32} className="text-secondary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-primary uppercase mb-4">
                  98% On-Time Delivery
                </h3>
                <p className="font-paragraph text-base text-foreground/80 mb-4">
                  We understand that time is money. Our meticulous planning and efficient execution ensure your project is completed on schedule and within budget.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-1" />
                    <span className="font-paragraph text-base text-foreground/80">
                      Detailed project timelines with milestone tracking
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-1" />
                    <span className="font-paragraph text-base text-foreground/80">
                      Proactive communication and progress updates
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-1" />
                    <span className="font-paragraph text-base text-foreground/80">
                      Contingency planning for unexpected challenges
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Benefits Section */}
      <section className="py-24 bg-light-grey/30">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary uppercase mb-4">
              More Reasons to Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary mb-6">
                <Shield size={32} className="text-secondary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary uppercase mb-3">
                Safety First
              </h3>
              <p className="font-paragraph text-base text-foreground/80">
                Comprehensive safety protocols and zero-accident commitment on every job site.
              </p>
            </div>

            <div className="bg-background p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary mb-6">
                <TrendingUp size={32} className="text-secondary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary uppercase mb-3">
                Transparent Pricing
              </h3>
              <p className="font-paragraph text-base text-foreground/80">
                Clear, detailed quotes with no hidden fees or surprise costs during construction.
              </p>
            </div>

            <div className="bg-background p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary mb-6">
                <Heart size={32} className="text-secondary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary uppercase mb-3">
                Client-Focused
              </h3>
              <p className="font-paragraph text-base text-foreground/80">
                Your vision drives our work. We listen, collaborate, and deliver beyond expectations.
              </p>
            </div>

            <div className="bg-background p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary mb-6">
                <CheckCircle size={32} className="text-secondary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary uppercase mb-3">
                Warranty & Support
              </h3>
              <p className="font-paragraph text-base text-foreground/80">
                Comprehensive warranties and ongoing support long after project completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Highlight Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-secondary text-3xl">★</span>
                ))}
              </div>
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
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-heading text-5xl md:text-6xl font-bold text-primary mb-2">30+</div>
              <p className="font-paragraph text-base text-foreground/80">Years Experience</p>
            </div>
            <div>
              <div className="font-heading text-5xl md:text-6xl font-bold text-primary mb-2">500+</div>
              <p className="font-paragraph text-base text-foreground/80">Projects Completed</p>
            </div>
            <div>
              <div className="font-heading text-5xl md:text-6xl font-bold text-primary mb-2">98%</div>
              <p className="font-paragraph text-base text-foreground/80">On-Time Delivery</p>
            </div>
            <div>
              <div className="font-heading text-5xl md:text-6xl font-bold text-primary mb-2">100%</div>
              <p className="font-paragraph text-base text-foreground/80">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-light-grey/30">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="bg-primary text-primary-foreground p-12 md:p-16 text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-6">
              Experience the BuildPro Difference
            </h2>
            <p className="font-paragraph text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have trusted us with their construction projects.
            </p>
            <Link
              to="/contact"
              className="bg-secondary text-secondary-foreground font-paragraph font-bold px-8 py-4 hover:bg-secondary/90 transition-colors inline-block"
            >
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
