import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { Award, Target, Heart, Shield } from 'lucide-react';

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
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary-foreground uppercase tracking-tight mb-4">
            About BuildPro
          </h1>
          <p className="font-paragraph text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Building excellence since 1995
          </p>
        </div>
      </section>

      {/* Company Background Section */}
      <section className="py-24 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
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
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="https://static.wixstatic.com/media/477ab0_9b1561460c7b487aa7a5adfdc811708f~mv2.png?originWidth=384&originHeight=384"
                  alt="Modern commercial building"
                  className="w-full h-64 object-cover"
                  width={400}
                />
                <Image
                  src="https://static.wixstatic.com/media/477ab0_e1a73cf6ad6946dba51b75e149b99298~mv2.png?originWidth=384&originHeight=384"
                  alt="Residential construction project"
                  className="w-full h-48 object-cover"
                  width={400}
                />
              </div>
              <div className="space-y-4 pt-8">
                <Image
                  src="https://static.wixstatic.com/media/477ab0_4f432b9e665b45e9a9c2c914bec88962~mv2.png?originWidth=384&originHeight=384"
                  alt="Interior renovation work"
                  className="w-full h-48 object-cover"
                  width={400}
                />
                <Image
                  src="https://static.wixstatic.com/media/477ab0_c84c4a03d3424556910597d64241dadc~mv2.png?originWidth=384&originHeight=384"
                  alt="Construction site overview"
                  className="w-full h-64 object-cover"
                  width={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Stats Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-heading text-6xl font-bold text-secondary mb-2">30+</div>
              <p className="font-paragraph text-lg">Years of Experience</p>
            </div>
            <div>
              <div className="font-heading text-6xl font-bold text-secondary mb-2">500+</div>
              <p className="font-paragraph text-lg">Projects Completed</p>
            </div>
            <div>
              <div className="font-heading text-6xl font-bold text-secondary mb-2">98%</div>
              <p className="font-paragraph text-lg">On-Time Delivery</p>
            </div>
            <div>
              <div className="font-heading text-6xl font-bold text-secondary mb-2">100%</div>
              <p className="font-paragraph text-lg">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary uppercase mb-8">
              Our Mission
            </h2>
            <p className="font-paragraph text-xl text-foreground/80 leading-relaxed">
              To deliver exceptional construction services that exceed client expectations through quality craftsmanship, innovative solutions, and unwavering commitment to safety and sustainability. We build not just structures, but lasting relationships and thriving communities.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-light-grey/30">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary uppercase mb-4">
              Our Core Values
            </h2>
            <p className="font-paragraph text-lg text-foreground/80 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary mb-6">
                <Award size={32} className="text-secondary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary uppercase mb-4">
                Excellence
              </h3>
              <p className="font-paragraph text-base text-foreground/80">
                We strive for the highest standards in every project, ensuring superior quality and craftsmanship in all our work.
              </p>
            </div>

            <div className="bg-background p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary mb-6">
                <Shield size={32} className="text-secondary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary uppercase mb-4">
                Integrity
              </h3>
              <p className="font-paragraph text-base text-foreground/80">
                Honesty, transparency, and ethical practices form the foundation of our business relationships and operations.
              </p>
            </div>

            <div className="bg-background p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary mb-6">
                <Target size={32} className="text-secondary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary uppercase mb-4">
                Reliability
              </h3>
              <p className="font-paragraph text-base text-foreground/80">
                We deliver on our promises, meeting deadlines and budgets while maintaining the highest quality standards.
              </p>
            </div>

            <div className="bg-background p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary mb-6">
                <Heart size={32} className="text-secondary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary uppercase mb-4">
                Client Focus
              </h3>
              <p className="font-paragraph text-base text-foreground/80">
                Your vision and satisfaction drive everything we do. We listen, collaborate, and deliver results that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary uppercase mb-4">
              Our Expert Team
            </h2>
            <p className="font-paragraph text-lg text-foreground/80 max-w-3xl mx-auto">
              Skilled professionals dedicated to bringing your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-6 overflow-hidden">
                <Image
                  src="https://static.wixstatic.com/media/477ab0_d72d1fc4fc504b0fb9a45c4825fa96c9~mv2.png?originWidth=384&originHeight=384"
                  alt="Project Manager"
                  className="w-full h-80 object-cover"
                  width={400}
                />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary uppercase mb-2">
                Licensed Contractors
              </h3>
              <p className="font-paragraph text-base text-foreground/80">
                Certified professionals with decades of combined experience in residential and commercial construction.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 overflow-hidden">
                <Image
                  src="https://static.wixstatic.com/media/477ab0_38094cdc24e94465850a9e8305908775~mv2.png?originWidth=384&originHeight=384"
                  alt="Skilled craftsmen"
                  className="w-full h-80 object-cover"
                  width={400}
                />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary uppercase mb-2">
                Skilled Craftsmen
              </h3>
              <p className="font-paragraph text-base text-foreground/80">
                Master tradespeople committed to precision, quality, and safety in every aspect of construction.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 overflow-hidden">
                <Image
                  src="https://static.wixstatic.com/media/477ab0_607f5d0e42d34348a0db4b0d081d05ae~mv2.png?originWidth=384&originHeight=384"
                  alt="Project coordinators"
                  className="w-full h-80 object-cover"
                  width={400}
                />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary uppercase mb-2">
                Project Coordinators
              </h3>
              <p className="font-paragraph text-base text-foreground/80">
                Dedicated managers ensuring seamless communication, scheduling, and execution of your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
